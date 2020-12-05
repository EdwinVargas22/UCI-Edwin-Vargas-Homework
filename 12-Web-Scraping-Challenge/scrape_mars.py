# Dependencies
from splinter import Browser
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager
from pprint import pprint
import pandas as pd
import requests

def init_browser():
    executable_path = {'executable_path': ChromeDriverManager().install()}
    return Browser('chrome', **executable_path, headless=False)

def scrape():
    browser = init_browser()
    mars_dictionary = {}

    # Mars news title and paragraph to be scarped
    news_url = 'https://mars.nasa.gov/news/'

    browser.visit(news_url)

    html = browser.html
    news_soup = BeautifulSoup(html, 'html.parser')

    main_slide = news_soup.find('div', class_="slide")
    mars_dictionary["news_title"] = main_slide.find('div', class_="content_title").get_text()
    mars_dictionary["news_paragraph"] = main_slide.find('div', class_="rollover_description_inner").get_text()

    # Mars Featured Image
    featured_url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'

    browser.visit(featured_url)

    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')

    featured = soup.find('div', class_="carousel_container")

    images = featured.find_all('a', class_="button fancybox")

    picture_image = []
    for image in images:
        picture = image['data-fancybox-href']
        picture_image.append(picture)

    
    mars_dictionary["featured_image_url"] = 'https://www.jpl.nasa.gov' + picture

    # Mars Facts Table
    facts_url = 'https://space-facts.com/mars/'

    tables = pd.read_html(facts_url)

    df = tables[0]

    df.columns = ["Facts", "Value"]

    clean_table = df.set_index(["Facts"])

    facts_value_html_table = clean_table.to_html()

    facts_value_html_table = facts_value_html_table.replace('\n', '')

    mars_dictionary["mars_fact_table"] = facts_value_html_table

    # Mars Hemispheres
    url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
    browser.visit(url)

    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')

    hemispheres_titles_images = []

    webpage = browser.find_by_tag('h3')

    for i in range(len(webpage)):
        eng = {}
        browser.find_by_css('h3')[i].click()
        
        eng['title'] = browser.find_by_css('h2.title').text
        water = browser.links.find_by_text('Sample').first
        eng['image'] = water['href']
        
        hemispheres_titles_images.append(eng)
        
        browser.back()

    mars_dictionary["Mars Hemispheres"] = hemispheres_titles_images

    return mars_dictionary








