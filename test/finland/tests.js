var data = [
    {"value": "311280+999J", "expected": true, "message": "11 digit valid, 19th century"},
    {"value": "311280-999J", "expected": true, "message": "11 digit valid, 20th century"},
    {"value": "311280A999J", "expected": true, "message": "11 digit valid, 21st century"},
    {"value": "311280+999j", "expected": true, "message": "11 digit valid, 19th century, lowercase"},
    {"value": "311280-999j", "expected": true, "message": "11 digit valid, 20th century, lowercase"},
    {"value": "311280a999j", "expected": true, "message": "11 digit valid, 21st century, lowercase"},
    {"value": "311280+999F", "expected": false, "message": "11 digit invalid, 19th century"},
    {"value": "311280-999F", "expected": false, "message": "11 digit invalid, 20th century"},
    {"value": "311280A999F", "expected": false, "message": "11 digit invalid, 21st century"},
    {"value": "311280+999f", "expected": false, "message": "11 digit invalid, 19th century, lowercase"},
    {"value": "311280-999f", "expected": false, "message": "11 digit invalid, 20th century, lowercase"},
    {"value": "311280a999f", "expected": false, "message": "11 digit invalid, 21st century, lowercase"},
    {"value": "8", "expected": false, "message": "single digit"},
    {"value": "", "expected": false, "message": "empty string"},
    {"value": "999999999f", "expected": false, "message": "invalid date"}
];

module('Finland');

test('Is supported', function () {
    ok(Luhnar.supportsCountry('FI'), 'Country FI should be supported');
});

test('Validation', function () {
    data.forEach(function (item) {
        equal(Luhnar.validate(item.value, 'fi'), item.expected, item.message);
    });
});