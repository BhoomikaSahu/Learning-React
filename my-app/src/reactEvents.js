function Football(){

    const goal = () => alert("Nice Goal!");

    const shoot = (str) => {
        alert(str);
    }

    const obj = (b) => {
        alert(b.type);
    }
    return (
        <>
            <button onClick={goal}>Click me</button>

            {/* pass by argument  */}
            <button onClick={() => shoot("Goal!")}>Click me</button>

            {/* React Event Object */}
            <button onClick={(event) => obj(event)}>Click me</button>
        </>
    )
}

export {Football};  