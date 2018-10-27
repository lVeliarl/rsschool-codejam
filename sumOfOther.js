function sumOfOther(arr) {
	const sum = [];
	for (let i = 0; i < arr.length; i++) {	
		sum.push(arr.reduce((a,b) => a + b, -arr[i]));
    }
	return sum;	
}