const styleCSS = { };

function TimeZone(){
    const currTime = new Date();
    const h = currTime.getHours();
    let greeting = "";
    if(h > 2 && h < 13){
        greeting = "Good Morning";
        styleCSS.color = '#E57373';
    }
    else if(h >= 13 && h < 18){
        greeting = "Good Afternoon";
        styleCSS.color = '#E57373';
    }
    else if(h >=18 && h < 22){
        greeting = "Good Evening";
        styleCSS.color = '#E57373';
    }
    else {
        greeting = "Good Night";   
        styleCSS.color = '#E57373';
    }

    return (
        <h1>Hello Sir, <span style={styleCSS}>{greeting}!</span> </h1>
    )
}

export default TimeZone;