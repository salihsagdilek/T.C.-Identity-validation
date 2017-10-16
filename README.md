# javascript and jQuery Validation Plugin for Turkish identity validation

### vanilla js
```javascript
tcKimlikNumarasiKontrol(12345678910)
```

### jQuery Validation

##### declaratively
```html
  <input type="text" name="tcno" value=""
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
            tcno: true
          },
      },
      messages: {
          kimlikno: {
            tcno:"gecersiz tc no"
          }
      }
  });
});
```
