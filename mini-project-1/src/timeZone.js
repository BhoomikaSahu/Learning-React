const styleCSS = { };

function TimeZone(){
    const currTime = new Date();
    const h = currTime.getHours();
    let greeting = "";
    if(h > 2 && h < 13){
        greeting = "Good Morning";
        styleCSS.color = '#40BABF';
    }
    else if(h >= 13 && h < 18){
        greeting = "Good Afternoon";
        styleCSS.color = '#FFC107';
    }
    else if(h >=18 && h < 20){
        greeting = "Good Evening";
        styleCSS.color = '#40BFB3';
    }
    else {
        greeting = "Good Night";   
        styleCSS.color = '#194D48';
    }

    return (
        <h1>Hello Friends, <span style={styleCSS}>{greeting}!</span> </h1>
    )
}

export default TimeZone;