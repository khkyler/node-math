# Simple Node Calculator

## Requirements
  Node v0.12.7 or compatible releases
  NPM - any version

## Getting started

1. Clone the Repo:
`git clone https://github.com/khkyler/node-math.git`
2. Install the dependancies:
`npm install`
3. start the service
`node app.js`


##  Running the producer
1. In a separate terminal tab/window, from root cd into the directory
`cd ~node-math/`
2. run the producer script from in the project directory
`node ./scripts/producer.js`

## Information about the producer
This file randomly generates an equation string and sends it via http request to the consumer application.  It sends a request every 650 milliseconds.  You can create more producers by opening another tab or terminal window and run the script again. `node ./scripts/producer.js` The more scripts you run the more requests per second.

## Information about the consumer
This accepts requests on port 3000 on local host.  Only requests to the '/math' in the form of 'POST' will return a number.  The service will return 404 for other requests.  If there is a malformed equation sent you will receive a 400 status code back.
