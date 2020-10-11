#################################################
# MongoDB and Flask Application

##################################################
# Import dependencies
from flask import Flask, render_template
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
    covid_data = mongo.db.covid.find()
    return render_template("index.html", covid_data=covid_data)


##################################################
# Return the spikemap
@app.route("/spikemap")
def heatmap():
    return render_template("spikemap.html")


##################################################
# Return the linegraph
@app.route("/linegraph")
def linegraph():
    return render_template("linegraph.html")


##################################################
# Return the dataset
@app.route("/data")
def dataset():
    return render_template("table.html")


##################################################
if __name__ == "__main__":
    app.run()
