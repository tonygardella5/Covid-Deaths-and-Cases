#################################################
# MongoDB and Flask Application

##################################################
# Import dependencies
from flask import Flask, render_template, url_for
from flask_pymongo import PyMongo


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
# Return the homepage
@app.route("/")
def index():
# Query MongoDB and pass covid data into HTML template to display the data
    #covid = mongo.db.covid_data.find_one()
    return render_template("index.html")


##################################################
# Return the spikemap
@app.route("/spikemap")
def spikemap():
    return render_template("spikemap.html")


##################################################
# Return the linegraph
@app.route("/linegraph")
def linegraph():
    return render_template("line.html")


##################################################
if __name__ == "__main__":
    app.run()