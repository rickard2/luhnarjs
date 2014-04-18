(function (exports) {
    "use strict";

    exports.Luhnar = {
        _validators: {},
        addValidator: function (fn, country) {
            country = country.toLocaleLowerCase();

            this._validators[country] = fn;
        },
        validate: function (input, country) {
            country = country.toLocaleLowerCase();

            if (!this.supportsCountry(country)) {
                throw 'Unsupported country ' + country;
            }

            var validator = this._validators[country];

            return validator(input);
        },
        supportsCountry: function (country) {
            country = country.toLocaleLowerCase();

            return typeof this._validators[country] === 'function';
        }
    };
}(window));