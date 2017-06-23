'use strict';
const config = require('./config.js');
const regex =  new RegExp(/^[0-9AC-FHKNPRTV-Y]{4}$/);
var error;

module.exports = function eircode(eircode) {
  if (!eircode) {
    error = new UserException('No Eircode specified');
  }

  return validateEircode(eircode);
}

function validateEircode(eircode) {
  eircode = eircode.replace(' ', '');

  if (eircode.length > 7) {
    error =  new Error("Eircode is too long");
    return error.toString();
  }
  const routingKey = eircode.substring(0, 3);
  const uniqueIdentifier = eircode.substring(3, 7);

  if (!validRoutingKey(routingKey)) {
    error = new Error("Invalid routing key")
    return error.toString();
  }

  if (!validUniqueIdentifier(uniqueIdentifier)) {
    error = new Error("Invalid unique identifier")
    return error.toString();
  }

  return true;
}

function validRoutingKey(routingKey) {
  return config.routingKeys.indexOf(routingKey) > -1 ? true : false;
}

function validUniqueIdentifier(uniqueIdentifier) {
  return regex.test(uniqueIdentifier) ? true : false;
}
