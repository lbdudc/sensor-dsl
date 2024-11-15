# Sensor DSL

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2020.2.0-brightgreen.svg)
![npm version](https://badge.fury.io/js/@lbdudc%2Fsensor-dsl.svg)

The Sensor Specification DSL Library is a Node.js-based tool designed to assist users in defining sensor specifications using a comprehensive Domain-Specific Language (DSL). This library enables the creation of detailed sensor specifications and outputs the data in JSON format. This JSON specification can be utilized in software product lines to generate complex Geographic Information System (GIS) web-based systems based on the provided sensor specifications.

## Features

- **DSL for Sensor Specification**: Allows users to define sensor specifications using a structured and comprehensive Domain-Specific Language.
- **JSON Output**: Generates a detailed JSON specification based on the provided sensor specifications.
- **Integration with Software Product Lines**: Enables integration with software product lines to facilitate the generation of complex GIS web-based systems using the generated sensor specifications.

## Prerequisites

- [Node.js](https://nodejs.org/) (managed with `nvm`)
- [nvm](https://github.com/nvm-sh/nvm)

## Installation

1. Add the library as a dependency to your project:

   ```bash
   npm install --save @lbdudc/sensor-dsl
   ```

2. Install the dependencies:

   ```bash
   npm install --force
   ```

## Usage

```javascript
import { parse } from "@lbdudc/sensor-dsl";

const spec = parse(inputString);
```

## Examples

There are some DSL examples within the `examples` folder.

The DSL instance must start with a `CREATE PRODUCT` sentence in order to work.

```javascript
CREATE PRODUCT ProductExample USING SRID 4326;

// Create a spatial dimension to be used by the sensor
CREATE SPATIAL DIMENSION Estuary (
  geometry: Polygon
) WITH PROPERTIES (
  shortName String DISPLAY_STRING,
  name String
);

// Create the Sensor
CREATE SENSOR StationObservation (
  interval: 300,
  geometry: Point
) WITH PROPERTIES (
  name String,
  description String,
) WITH MEASUREMENT DATA (
  temperature_ITS90 Double UNITS "ºC",
  salinity Double UNITS "PSU",
  conductivity Double UNITS "S/m"
) WITH SPATIAL GROUP Estuary (
  Estuary
) WITH BBOX ([42.7, -8.1], 9);
```

The following example shows a DSL instance that creates a product called `ProductExample` with a sensor called `StationObservation` and a spatial dimension called `Estuary` with a `Polygon` geometry. The sensor has a `Point` geometry and a measurement data composed of three measurements: `temperature_ITS90`, `salinity` and `conductivity.

This will generate a JSON output with the following structure:

```json
{
   ## Base product features selected
   "features": [
      "GEMA_SPL",
      "SensorViewer",
      "SV_LayerManager",
      "SV_LM_Opacity",
      "SV_LM_Order",
      "SV_LM_Visibility",
      "SV_LM_Center",
      "SV_LM_ShowWMSStyle"
      ...
   ],
   ## Basic project data
   "data": {
    "basicData": {
      "name": "ProductExample",
      "index": {
        "component": "STATIC",
        "view": "welcome"
      },
      "languages": [
        "en",
        "es",
        "gl"
      ],
      "packageInfo": {
        "artifactId": "ProductExample",
        "groupId": "es.udc.lbd.productexample"
      },
      "SRID": "4326"
    },
    ## Entities to be created in the postgres database
    "dataModel": {
      "entities": [
        {
          "name": "Estuary",
          "properties": [
            {
              "name": "id",
              "class": "Long (autoinc)",
              "pk": true,
              "required": true,
              "unique": true
            },
            {
              "name": "geometry",
              "class": "Polygon"
            },
            {
              "name": "shortName",
              "class": "String",
              "displayString": true
            },
            {
              "name": "name",
              "class": "String"
            },
            {
              "name": "zone",
              "class": "String"
            }
          ],
          "displayString": "$id"
        },
        {
          "name": "StationObservationEntity",
          "properties": [
            {
              "name": "id",
              "class": "Long (autoinc)",
              "pk": true,
              "required": true,
              "unique": true
            },
            {
              "name": "geometry",
              "class": "Point"
            },
           ...
          ],
          "displayString": "$id"
        }
      ],
      "enums": []
    },
      ## Data related to the sensor and its dimensions
     "dataWarehouse": {
      "sensors": [
        {
          "id": "StationObservation",
          "entity": "StationObservationEntity",
          "defaultMap": "stationobservation-map",
          "defaultLayer": "stationobservation-layer",
          "time": 300,
          "geom": "Point",
          "measureData": [
            {
              "name": "temperature_ITS90",
              "type": "Double",
              "units": "ºC"
            },
            {
              "name": "salinity",
              "type": "Double",
              "units": "PSU"
            },
          ],
          "dimensions": [
            {
              "id": "Estuary",
              "type": "SPATIAL",
              "entities": [
                "Estuary"
              ]
            }
          ]
        }
      ]
    },
    "forms": [],
    "lists": [],
    "menus": [],
    ## Data related to the map viewer in the web application
    "mapViewer": {
      "maps": [
        {
          "name": "stationobservation-map",
          "label": "StationObservation Map",
          "center": {
            "lat": 42.7,
            "lng": -8.1,
            "zoom": 9
          },
          "sortable": false,
          "layers": [
            {
              "name": "base",
              "baseLayer": true,
              "selected": true,
              "order": 0
            },
            {
              "name": "stationobservation-layer",
              "baseLayer": false,
              "style": "grayPoint",
              "selected": true,
              "order": 1
            },
            {
              "name": "Estuary",
              "baseLayer": false,
              "style": "grayPolygon",
              "selected": false,
              "order": 2
            }
          ]
        }
      ],
      "layers": [
        {
          "name": "base",
          "type": "tilelayer",
          "label": "base",
          "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        },
        {
          "name": "stationobservation-layer",
          "type": "geojson",
          "label": "StationObservationEntity",
          "entityName": "StationObservationEntity-geometry",
          "editable": false,
          "defaultStyle": "grayPoint",
          "availableStyles": [
            "grayPoint",
            "temperature_ITS90",
            ...
          ]
        },
        {
          "name": "Estuary",
          "type": "geojson",
          "label": "Estuary",
          "entityName": "Estuary-geometry",
          "editable": false,
          "defaultStyle": "grayPolygon",
          "availableStyles": [
            "grayPolygon",
            "temperature_ITS90",
            ...
          ]
        }
      ],
      "styles": [
         ...
      ]
    },
    "statics": []
   }
}
```

## Author

Victor Lamas
Email: <victor.lamas@udc.es>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
