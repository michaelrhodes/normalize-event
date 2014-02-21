# normalize-event
normalize-event is a function that provides basic DOM Event support in IE8 and below.

## Install
```
$ npm install normalize-event
```

### Example
``` js
var normalize = require('normalize-event')

document.body.onclick = function(e) {
  e = normalize(e)

  e.preventDefault()
  e.stopPropagation()
  alert(e.target)
}
```

### License
[MIT](http://opensource.org/licenses/MIT)
