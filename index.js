module.exports = function (e) {
  e = e || event
  e.target = e.target || e.srcElement
  e.preventDefault = e.preventDefault || function() {
    e.returnValue = false
  }
  e.stopPropagation = e.stopPropagation || function() {
    e.cancelBubble = true
  }
  return e
}
