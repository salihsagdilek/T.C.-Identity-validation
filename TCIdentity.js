;(function (window, document, undefined) {
  if (window.jQuery && window.jQuery.validator) {
    window.jQuery.validator.addMethod('TCIdentity', TCIdentity)
  }

  function TCIdentity (value) {
    value += ''
    var odd = even = total = 0
    if (/^[1-9][0-9]{10}$/.test(value)) {
      for (var i = 0; i < 10; i++) {
        total += (value[i] * 1)
        if (i < 9) {
          if (i % 2) {
            odd += (value[i] * 1)
          } else {
            even += (value[i] * 1)
          }
        }
      }
      return (((even * 7 - odd) % 10 == value[9]) && (total % 10 == value[10]))
    }
    return false
  }

  return window['TCIdentity'] = TCIdentity
})(window, document)
