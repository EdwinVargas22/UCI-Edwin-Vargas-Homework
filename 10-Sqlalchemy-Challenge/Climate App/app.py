import numpy as np
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc

# Import Flask
from flask import Flask, jsonify

# Database Setup

engine = create_engine("sqlite:///../Resources/hawaii.sqlite")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Measurement = Base.classes.measurement
Station = Base.classes.station

#Flask Setup

# Create an app
app = Flask(__name__)

# Define static routes
@app.route("/")
def home():
    return (
        f"Welcome to the Climate Application!<br/> "
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/station<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/<start><br/>"
        f"/api/v1.0/<start>/<end>"
    )

@app.route("/api/v1.0/precipitation")
def precipitation():

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Find the most recent date
    recent_date = session.query(Measurement.date).order_by(Measurement.date.desc()).first()

    # Get the last year 
    last_year = dt.date(2017, 8, 23) - dt.timedelta(days=365)


    # Perform a query to get the date and prcp for a year
    date_prcp_data = session.query(Measurement.date, Measurement.prcp).\
            filter(Measurement.date > last_year).\
            order_by(Measurement.date).all()

    session.close()

    # Create a dictionary using date as the key and prcp as the value and append to a list
    a_year_precipitation = []
    for date, prpc in date_prcp_data:
        precipitation_dict = {}
        precipitation_dict["date"] = date
        precipitation_dict["prcp"] = prpc
        a_year_precipitation.append(precipitation_dict)

    return jsonify(a_year_precipitation)

@app.route("/api/v1.0/station")
def station():

    session = Session(engine)

    station_list = session.query(Station.station, Station.name, Station.latitude, Station.longitude, Station.elevation).all()

    session.close()

    # Create a dictionary for the station and append to a list 
    station_data = []
    for station, name, latitude, longitude, elevation in station_list:
        station_dict = {}
        station_dict["station"] = station
        station_dict["name"] = name
        station_dict["latitude"] = latitude
        station_dict["longitude"] = longitude
        station_dict["elevation"] = elevation
        station_data.append(station_dict)

    return jsonify(station_data)

@app.route("/api/v1.0/tobs")
def tobs():

    session = Session(engine)

    most_active_station = session.query(Measurement.station, func.count(Measurement.station).label("count")).\
            group_by(Measurement.station).\
            order_by(desc('count')).all()

    most_active_station_info = session.query(Measurement.station, Measurement.date, Measurement.prcp, Measurement.tobs).\
            filter(Measurement.station=='USC00519281').\
            filter(Measurement.date > last_year).\
            order_by(Measurement.date).all()

    session.close()

    most_active_station_data = []
    for station, date, prcp, tobs in most_active_station_info:
        tobs_dict = {}
        tobs_dict["station"] = station
        tobs_dict["date"] = date
        tobs_dict["prcp"] = prcp
        tobs_dict["tobs"] = tobs
        most_active_station_data.append(tobs_dict)

    return jsonify(most_active_station_data)


@app.route("/api/v1.0/<start>")
def start(start):

    start_date_data = session.query(Measurement.station, func.min(Measureme.tobs), func.max(Measurement.tobs), func.avg(Measurement.tobs)).\
        filter(Measurement.date >= start).\
        group_by(Measurement.station).\
        order_by(Meausrement.date).all()

    
    return jsonify(start_date_data)


@app.route("/api/v1.0/<start>/<end>")

if __name__ == '__main__':
    app.run(debug=True)