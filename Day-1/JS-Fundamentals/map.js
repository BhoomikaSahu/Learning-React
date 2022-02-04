let obj = {
    greeting : "Good Morning ",
    name: ["Bhoomika", "Reet", "Shreya"],
    print(){
        // this.name.map(n => console.log(this.greeting + n + " Sahu"));
        this.name.map(function arrEle(ele){
            console.log(this.greeting + ele + " Sahu");
        });
    }
}

obj.print();