# Coffee varieties of the world ☕️

## Coffee varieties of the world application assignment

Create a visually attractive mini application with the following acceptance criteria:

- Create a form that displays the following drop down menus:
    - A list of regions.
    - A list of countries.
    - A list of varieties.
- On load, none of the drop down menus should have a selected option.
- If you select an option from one of the drop down menus, the other menus should update accordingly, ie. if you select a variety, it should only be possible to select the regions and/or countries where it's grown.
- At the bottom of the form the flags of the selected countries should be displayed.
- A responsive app will earn you bonus points. 👍

You are free to use any tool and/or framework you like, but:

- it must run inside a browser;
- it must be tested;
- it must be deployable;
- it is build using common (JavaScript) development principles;
- you can explain why that solution will be the most favorable.


## Data library

The data is provided by a small service that you can find in the `service` folder.

This service can be accessed by a the global variable `varieties` and provides a single method `getData()`.

```
varieties.getData(callBack);
```

The callback is called with the full data list as first parameter.

```
varieties.getData(function(err, data) {
  console.log(data);
});
```

The data library can be used as a node module.

```
var varieties = require('coffee-varieties');
varieties.getData(function(err, data) {
  console.log(data);
});
```
