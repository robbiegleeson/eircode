[Eircode NPM](https://www.npmjs.com/package/eircode)

Validates Eircodes (Irish postcodes).

## Install
- `npm install eircode`

## Import/require
```js
const eircode = require('eircode');
// OR
import eircode from 'eircode';
```

## Usage

```js
const isEircodeValid = eircode('A42F8G0'); // Returns true;

const isEircodeValid = eircode('A32F8G0'); // Returns error: Routing key is Invalid

const isEircodeValid = eircode('A32F8G08'); // Returns error: Eircode is too long

const isEircodeValid = eircode('A32F880'); // Returns error: Unique identifier is invalid

```
