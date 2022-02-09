function CurrDate(){
    const date = new Date().toLocaleDateString();
    return (
        <p>Today's date is {date}</p>
    )
}

export default CurrDate;