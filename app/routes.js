var async = require('async');

module.exports = (app) => {
    app.get('/calculate', (req, res) => {
        let v1 = req.body.value1;
        let v2 = req.body.value2;
        let sign = req.body.sign;
        var result;
        console.log(req.body);

        async.series([(callback) => {
            switch (sign) {
                case '+':
                    result = Number(fromRoman(v1)) + Number(fromRoman(v2));
                    break;

                case '-':
                    result = Number(fromRoman(v1)) - Number(fromRoman(v2));
                    break;

                case '/':
                    result = Number(fromRoman(v1)) / Number(fromRoman(v2));
                    break;

                case '+':
                    result = Number(fromRoman(v1)) * Number(fromRoman(v2));
                    break;
            }
            callback();
          }
        ], function(err, data) {
            if(err) {
                return res.send({'message':'failed', done: false}); 
            }

            return res.send({'message':'success', data: data, done: true});
        })

    })

    app.get('*', (req, res) => {
        res.sendFile(req.rootDir+'/public/index.html');
    })
}

function toRoman(num) {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}

function fromRoman(str) {
    var result = 0;
    // the result is now a number, not a string
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (str.indexOf(roman[i]) === 0) {
            result += decimal[i];
            str = str.replace(roman[i], '');
        }
    }
    return result;
}