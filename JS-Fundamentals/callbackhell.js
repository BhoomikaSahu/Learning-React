const getRollNumber = () => {
    setTimeout( () => {
        console.log(`ApI getting roll number`);
        const arr = [1, 2, 3, 4, 5];

        setTimeout( (rollno) => {
            const bioData = {
                name : "Bhoomika",
                age : 20
            }
            console.log(`Roll number : ${rollno}, name : ${bioData.name}, age : ${bioData.age}`);

            setTimeout( (name) => {
                bioData.gen = "Female";
                console.log(`Gender : ${bioData.gen}`);
            }, 3000, bioData.name)
        }, 2000, arr[2]);
    }, 2000)
}

getRollNumber();