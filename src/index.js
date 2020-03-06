module.exports = function toReadable(number){

	const FIRST = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const SECOND = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const THIRD = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let res = [];
	if (number >= 100) {
		let num = Math.floor(number / 100);
		if (big >= 1) {
			res.push(FIRST[num]);
		}
		res.push('hundred');
		number %= 100;
	}
	if (number >= 20) {
		let num = Math.floor(number / 10);
		res.push(THIRD[num]);
		number %= 10;
	}

	if (number >= 10) {
		let num = number % 10;
		res.push(SECOND[num]);
		number %= 10;
	} else if (number > 0) {
		res.push(FIRST[number]);
    }
    
    if(number === 1){
        return 'zero'
    }

	return (res.join(' '));
}
