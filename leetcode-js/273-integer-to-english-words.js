const ONE = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const TWO = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const THREE = ['', 'Thousand', 'Million', 'Billion'];

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) {
        return 'Zero';
    }

    let res = [];
    let i3 = 0;

    while (num > 0) {
        const hundreds = num % 1000;
        num = Math.floor(num / 1000);
        if (hundreds > 0) {
            if (i3 > 0) {
                res.unshift(THREE[i3]);
            }
            res = hundredsToWords(hundreds).concat(res);
        }
        i3 += 1;
    }

    return res.join(' ');
};

function hundredsToWords(num) {
    const res = [];
    const n2 = num % 100;

    if (n2 > 0 && n2 < 20) {
        res.unshift(ONE[n2]);
    } else if (n2 >= 20) {
        const n1 = num % 10;
        if (n1 > 0) {
            res.unshift(ONE[n1]);
        }
        res.unshift(TWO[Math.floor(n2 / 10)]);
    }

    const n3 = Math.floor(num / 100);

    if (n3 > 0) {
        res.unshift('Hundred');
        res.unshift(ONE[n3])
    }

    return res;
}

console.log(JSON.stringify(numberToWords(1000000010)));
