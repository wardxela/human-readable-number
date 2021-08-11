const reservedNumbers = new Map([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
    [60, "sixty"],
    [70, "seventy"],
    [80, "eighty"],
    [90, "ninety"],
]);

module.exports = function toReadable(number) {
    if (number < 20) {
        return reservedNumbers.get(number);
    } else if (number < 100) {
        let remainder = number % 10;
        if (!remainder) {
            return reservedNumbers.get(number);
        }
        return `${toReadable(number - remainder)} ${toReadable(remainder)}`;
    } else if (number < 1000) {
        let hundred = Math.floor(number / 100);
        let remainder = number % 100;
        let additional = remainder ? ` ${toReadable(remainder)}` : "";
        return `${reservedNumbers.get(hundred)} hundred${additional}`;
    }
};
