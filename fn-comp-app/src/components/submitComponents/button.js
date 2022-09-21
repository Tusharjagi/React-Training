

function Button (){

    function onClickHandler(){
        console.log("clicked")
    }
    
    return (
        <button className="submit-button" onClick={onClickHandler}>Submit</button>
    )
}
export default Button;