
function perfect(num) {
    // Finding the factors of num
    const factors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            if (parseInt(num / i, 10) == i)
                factors.push(i);
            else {
                factors.push(parseInt(num / i, 10));
                factors.push(i);
            }
        }
    }  
    
    factors.sort();
    factors.pop();
    
    const sum = factors.reduce(function (x, y) {
        return x + y;
    }, 0);
    
    if (sum === num)
        return "Perfect";
    else if (sum > num)
        return "Abundant";
    else if (sum < num)
        return "Deficient";
};


console.log(perfect(6));
console.log(perfect(12));
console.log(perfect(8));