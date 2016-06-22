;(function( window, document, undefined ) {
    if ( window.jQuery ) {
        if ( window.jQuery.validator ) {
            window.jQuery.validator.addMethod('tcno', tcKimlikNoKontrol);
        }
    }
    function tcKimlikNoKontrol( value ) {
        value += '';
        var odd = even = total = 0;
        if ( /^[1-9][0-9]{10}$/.test(value) ) {
            var invalid = ['/11111111110/', '/22222222220/', '/33333333330/', '/44444444440/', '/55555555550/', '/66666666660/', '/7777777770/', '/88888888880/', '/99999999990/'];
            if ( new RegExp('\\b' + value + '\\b').test(invalid) ) {
                return false;
            }
            for ( var i = 0; i < 10; i++ ) {
                total += ( value[i] * 1 );
                if ( i < 9 ) {
                    if ( i % 2 ) {
                        odd += ( value[i] * 1 );
                    } else {
                        even += ( value[i] * 1 );
                    }
                }
            }
            return ( ( ( even * 7 - odd ) % 10 == value[9] ) && ( total % 10 == value[10] ) );
        }
        return false;
    }
    return window['tcKimlikNumarasiKontrol'] = tcKimlikNoKontrol;
})(window, document);
