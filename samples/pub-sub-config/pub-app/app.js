// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const appPort = process.env.APP_PORT || "3000";
const daprPort = process.env.DAPR_HTTP_PORT || "3500";
const componentName = process.env.DAPR_COMPONENT_NAME || "pubsub";
const topicName = process.env.DAPR_TOPIC_NAME || "inventory";

// The Dapr endpoint for the state store component to store the tweets.
const pubsubEndpoint = `http://localhost:${daprPort}/v1.0/publish/${componentName}/${topicName}`;

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json({ type: ['application/json', 'application/*+json'] }));

app.post('/publish', async (req, res) => {
  console.log("publishing", req.body);
  console.log();
  axios.post(pubsubEndpoint, req.body, {
    headers: {
      'content-type': 'application/cloudevents+json'
    }
  })
    .then(() => { res.sendStatus(200); })
    .catch(error => {
      res.sendStatus(500);
      console.error('There was an error!', error);
    });
});

app.listen(appPort, () => console.log(`Node App listening on port ${appPort}!`));
