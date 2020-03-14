from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_corona

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/corona_app"
mongo = PyMongo(app)

# Or set inline
# mongo = PyMongo(app, uri="mongodb://localhost:27017/craigslist_app")

@app.route("/")
def index():
    corona_data = mongo.db.corona_data.find_one()
    return render_template("index.html", listings=corona_data)


@app.route("/scrape")
def scraper():
    corona_data = mongo.db.corona_data
    corona_results = scrape_corona.scrape()
    print(corona_results)
    corona_data.update({}, corona_results, upsert=True)
    return redirect("/", code=302)

# below runs the code if this is the file that was run rather than it was imported
if __name__ == "__main__":
    app.run(debug=True)