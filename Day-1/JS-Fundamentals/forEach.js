// let arr = [10, 20, 30, 40, 50];
// function arrEle(ele){
//     console.log(this.greeting + ele);
// }

// let print = arr.forEach(ele => console.log(ele));


let obj = {
    greeting : "Good Morning ",
    name: ["Bhoomika", "Reet", "Shreya"],
    print(){
        // this.name.forEach(n => console.log(n + " Sahu"));
        this.name.forEach(function arrEle(ele){
            console.log(this.greeting + ele + " Sahu");
        });
    }
}

obj.print();
