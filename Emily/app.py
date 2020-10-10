#################################################
# MongoDB and Flask Application
# Use MongoDB with Flask templating to create a new HTML page that displays
# all of the information from the datasource

##################################################
# Import dependencies
from flask import Flask, render_template, redirect, url_for
import pymongo as PyMongo
from flask_pymongo import PyMongo
# import scrape_mars

##################################################
# Flask setup
app = Flask(__name__)

##################################################
# Database setup

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/covid"
mongo = PyMongo(app)

##################################################
# Set up routes
##################################################
# Set up root route to query MongoDB and pass mars data into an HTML template to display
@app.route("/")
def index():

    # Query MongoDB and pass mars data into HTML template to display the data
    covid = mongo.db.covid_data.find_one()
    return render_template("index.html")

##################################################
# Set up scrape route to import scrape_mars script and call scrape function
#@app.route("/scrape")
#def scrape():

    # Import scrape_mars.py script and call scrape function
    #mars = mongo.db.mars
    #mars_data = scrape_mars.scrape_all()

    # Store return vale in Mongo as Python dictionary
    #mars.replace_one({}, mars_data, upsert=True)
    #return "Scraping successful!"

##################################################
if __name__ == "__main__":
    app.run()
