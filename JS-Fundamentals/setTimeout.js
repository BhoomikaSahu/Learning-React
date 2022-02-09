
function print(){
    setTimeout(
        () => console.log("I'm inside of setTimeout"), 1000   
    )
    return `I'm outside of setTimeout`;
}

console.log(print());