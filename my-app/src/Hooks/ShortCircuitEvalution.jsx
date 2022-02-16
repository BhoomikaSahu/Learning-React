const ShortCircuitEvalution = () => {
    const age = 20;
    return(
        <>
            {
                "" || age
            }
            {
                "bhoomika" && age
            }
        </>
    );
}

export default ShortCircuitEvalution;