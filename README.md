# JSON Reformat
A single function module which allows you to reformat a flat data object into any format

### Installation
#### NPM
`npm i jsonreformat`
### Git / Manual (don't do this)
```
git clone https://github.com/SollyBunny/jsonreformat
mkdir node_modules
mv jsonreformat node_modules
```

### Importing
#### NodeJS Require
```js
const reformat = require("jsonreformat");
```
#### ES6 Importing
```js
import { reformat } from "jsonreformat";
```

### Usage
```js
const reformat = require("jsonreformat");
const data = {
	"id": "23",
	"car_trim": "Hybrid EX CVT",
	"car_model": "Accord",
	"starting_price": 25965,
	"msrp_price": 31515,
	"car_year": "2021",
	"car_make": "Honda",
	"body_type": "sedan",
	"starting_price_body_type": 25965,
	"abd_price": 29427
}
const newformat = {
	"<id>": {
		"attrs": {
			"car_year": "<car_year>",
			"car_make": "<car_make>",
			"car_model": "<car_model>",
			"car_trim": "<car_trim>",
			"body_type": "<body_type>",
		},
		"prices": {
			"starting_price": "<starting_price>",
			"starting_price_body_type": "<starting_price_body_type>",
			"msrp_price": "<msrp_price>",
			"abd_price": "<abd_price>"
		}
	}
};
const newdata = reformat(newformat, data);
console.log(newdata);
```

### Small Doc
#### `reformat(format: object, data: object)`
Transform the flat object `data` into the format of `format`.  
Values/Keys in `format` with `<` and `>` sorrounding them will be swapped with corrosponding values in `data`  .
By adding `:` you can coerse the values into specific types EG: `<value:Number>` (value will be coersed into `Number` type)
### `reformat.unsafe(format: object, data: object)`
This is the same as `reformat` except it doesn't check if `format` and `data` are actually objects

### Why
This was made because I found a very interesting <a href="https://stackoverflow.com/questions/74008267/with-a-flat-json-is-there-a-way-to-convert-it-according-to-the-format-of-a-data">question</a> on stack overflow  
The use cases are numerous, but I coudn't personally think of anything
