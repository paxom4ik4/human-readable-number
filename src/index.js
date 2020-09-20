module.exports = function toReadable(number) {
    let first = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let second = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number == 0) "zero";

    if (number <= 19) first[number];
    else {
        let numString = String(number);
        let result;
        switch (numString.length) {
            case 2: {
                result = second[numString[0]] + " " + first[numString[1]];
                break;
            }
            case 3: {
                result = first[numString[0]] + " hundred ";
                if (numString[1] == "1") {
                    result += first[numString.slice(1)];
                } else {
                    if (numString[1] == "0") {
                        result += first[numString[2]];
                    } else
                        result +=
                            second[numString[1]] + " " + first[numString[2]];
                }
                break;
            }
        }
        return result.trim();
    }
};

