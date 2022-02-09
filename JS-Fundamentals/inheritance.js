class Student{
    constructor(name, age, clss){
        this.name = name;
        this.age = age;
        this.clss = clss;
    }

    show(){
        return`Hello! I am ${this.name}, ${this.age} years old and currently I am in ${this.clss}.`;
    }
}

class Player extends Student{
    constructor(name, age, clss, game){
        super(name, age, clss);
        this.game = game;
    }
    display(){
        return `${super.show()} My favorite game is ${this.game}.`;
    }
}

let s1 = new Player("Bhoomika Sahu", 17, '12th', 'Hockey');
console.log(s1.display());