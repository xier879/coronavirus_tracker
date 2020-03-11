#Convert corona to json.

import csv
import json
csvFilePath = 'geomap_dummy01.csv'
jsonFilePath = 'json_geomap_dummy01.json'

data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        id = rows['id']
        data[id] = rows

with open(jsonFilePath, 'w') as jsonFile:
    jsonFile.write(json.dumps(data, indent = 4))

