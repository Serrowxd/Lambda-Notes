function expandedNums(num) {
   return num.toString().split('').reduce((currentVal, nextVal, index, array) => { // returns [5,6,2] at .split('')
        // 1st tier                        0,          5,       1,    [5,6,2]            index starts at 1
        if(array[index] === '0') {
            return currentVal + nextVal; // takes current value '0' 
        }
        return currentVal + '0'.repeat(array.length - index) + ' + ' + nextVal; // .repeat is a simple repeater that repeats as many times as you specify within ()
    }); 
}

console.log(expandedNums(562));

// Petrell Vereen's solution

