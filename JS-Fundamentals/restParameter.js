const add = (...rest) => {
    let sum = 0;
    for(const ele of rest)
        sum += ele;
    return sum;
}

console.log(add(2,4,6,8,10)); 