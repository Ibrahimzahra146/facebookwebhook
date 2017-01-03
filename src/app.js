'use strict';

const apiai = require('apiai');
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const request = require('request');
const JSONbig = require('json-bigint');
const async = require('async');
const REST_PORT = 5000;
const APIAI_LANG = 'en';
const sessionIds = new Map();

function processEvent(event) {
    console.log("hi");

}
function doSubscribeRequest() {
    console.log("hi");
}

const app = express();
app.use(bodyParser.text({ type: 'application/json' }));
app.get('/webhook/', (req, res) => {
    if ("" == "") {
        res.send("");

        setTimeout(() => {
            doSubscribeRequest();
        }, 3000);
    } else {
        res.send('Error, wrong validation token');
    }
});

app.post('/webhook/', (req, res) => {
    try {
        processEvent("ibrahim");
        return res.status(200).json({
            status: "ok"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            error: err
        });
    }

});
app.listen(REST_PORT, () => {
    console.log('Rest service ready on port ' + REST_PORT);
});

doSubscribeRequest();
