import AddIcon from '../assets/addicon.svg'

function Form(){
    
   

    return(
        <>
    <form>
        <input className="field" type="text"/>
        <img className="add-icon" src={AddIcon} />
    </form>
    </>
    )

}

export default Form;
