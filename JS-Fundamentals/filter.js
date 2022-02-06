let obj = {
    greeting : "Good Morning ",
    name: ["Bhoomika", "Reet", "Shreya"],
    print(){
        this.name.filter(n => console.log(this.greeting + n + " Sahu"));
        // this.name.filter(function arrEle(ele){
        //     console.log(this.greeting + ele + " Sahu");
        // });
    }
}

obj.print();