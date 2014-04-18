(function (Luhnar) {

    "use strict";

    var Sweden = function (input) {
        // Remove dash and plus
        input = input.replace('-', '').replace('+', '');

        // Remove century and check number
        if (input.length === 12) {
            input = input.substr(2, 10);
        } else if (input.length === 10) {
            input = input.substr(0, 10);
        } else {
            return false;
        }

        var year = parseInt(input.substr(0, 2), 10);
        var month = parseInt(input.substr(2, 2), 10) - 1;
        var day = parseInt(input.substr(4, 2), 10);

        var date = new Date(year, month, day);

        if (date.getYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
            return false;
        }

        // Remove check number
        var check = parseInt(input.substr(9, 1), 10);
        input = input.substr(0, 9);

        var result = 0;

        // Calculate check number
        for (var i = 0, len = input.length; i < len; i++) {

            var number = parseInt(input.substr(i, 1), 10);

            // Multiply every other number with two
            if ((i % 2) === 0) {
                number = (number * 2);
            }

            // If result is greater than 10, 'sum the digits'
            // which is the same as 1 + (number mod 10)
            if (number > 9) {
                result += (1 + (number % 10));
            } else {
                result += number;
            }
        }

        return (((check + result) % 10) === 0);
    };

    Luhnar.addValidator(Sweden, 'se');

}(Luhnar));