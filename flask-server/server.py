from flask import Flask

from flask_cors import CORS

app = Flask(__name__)
CORS(app)
import requests

import json









@app.route("/bg")
def bg():
    url="https://harrynull.tech/api/wallpapers/random_anime_wallpaper?download=true"
    r=requests.get(url)
    k=r.json()
    return k

if __name__ == "__main__":
  app.run(debug=True)



