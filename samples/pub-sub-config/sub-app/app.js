// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const daprPort = process.env.DAPR_HTTP_PORT || "3500";

const express = require('express');

const app = express();
// Dapr publishes messages with the application/cloudevents+json content-type
app.use(express.json({ type: ['application/json', 'application/*+json'] }));

const port = 3000;

// Default product handler.
app.post('/products', (req, res) => {
  console.log("🤔 PRODUCT (default): ", req.body);
  console.log();
  res.sendStatus(200);
});

// Specific handler for widgets.
app.post('/widgets', (req, res) => {
  console.log("🪛  WIDGET: ", req.body);
  console.log();
  res.sendStatus(200);
});

// Specific handler for gadgets.
app.post('/gadgets', (req, res) => {
  console.log("📱 GADGET: ", req.body);
  console.log();
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Node App listening on port ${port}!`));
