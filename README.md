# javascript and jQuery Validation Plugin for Turkish identity validation

### vanilla js
```javascript
TCIdentity(12345678910)
```

### jQuery Validation

##### declaratively
```html
  <input type="text" name="TCIdentity" value=""
      data-rule-tcno="true"
      data-msg-tcno="gecersiz tc no"
      required />
```
##### programmatically
```javascript
  <input type="text" name="kimlikno" value=""
      required />



$(function() {
  $("#test").validate({
      rules: {
          kimlikno: {
            TCIdentity: true
          },
      },
      messages: {
          kimlikno: {
            TCIdentity:"gecersiz tc no"
          }
      }
  });
});
```
