(function (Luhnar) {

    "use strict";

    function finland(input) {
        var checkDigit = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,h,j,k,l,m,n,p,r,s,t,u,v,w,x,y'.split(/,/);

        // Get the check digit
        var check = input.substr(-1, 1).toLowerCase();

        // Remove dash, plus or A
        if (input.length === 11) {
            input = input.substr(0, 6) + input.substr(7, 3);
        } else {
            input = input.substr(0, 9);
        }

        if (!input.match(/^\d+$/)) {
            return false;
        }

        if (input.length !== 9) {
            return false;
        }

        input = parseInt(input, 10);

        // Do the math
        var result = input % 31;

        return checkDigit[result] === check;
    }

    Luhnar.addValidator(finland, 'fi');

}(Luhnar));