import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editDetail } from "../../actions/editDetail";

const Detail = ({type, selected, elements, selectedElement, editDetail }) => {
    const [infoDisplay, setInfoDisplay] = useState("");
    const [editing, setEditing] = useState(false);
    const [input, setInput] = useState("");
    const [inputType, setInputType] = useState('text');

    useEffect(()=>{
        if(selected){
            switch(type){
                case 'address':
                    setInfoDisplay(elements[selectedElement].address.street_address);
                    break;
                case 'city':
                    setInfoDisplay(elements[selectedElement].address.city);
                    break;
                case 'state':   
                    setInfoDisplay(elements[selectedElement].address.state);
                    break;
                case 'date_of_birth':
                    let rawDate = elements[selectedElement].date_of_birth;
                    let date = new Date(rawDate).toDateString();
                    setInputType('date');
                    setInfoDisplay(date);
                    break;
                case 'phone_number':
                    setInfoDisplay(elements[selectedElement].phone_number);
                    break;
                case 'employment':
                    setInfoDisplay(elements[selectedElement].employment.title);
                    break;
                case 'email':
                    setInputType('email');
                    setInfoDisplay(elements[selectedElement][type]);
                    break;
                default: 
                    setInfoDisplay(elements[selectedElement][type]);
                    break;
                    
            }
        }
    },[elements,selectedElement,selected,type])

    const handleEnterNewInput = (e) => {
        e.preventDefault();
        editDetail(selectedElement,type,input)
        clearNewInput();
    }

    const clearNewInput = () => {
        setInput("");
        setEditing(false)
    }
 
    return (<div className="detail">
        {
            editing ? 
                <form onSubmit={handleEnterNewInput}>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type={inputType} placeholder={infoDisplay}></input>
                    <button className="formBtn" type="submit" >Enter</button>
                    <button className="formBtn" type="button" onClick={clearNewInput}>Cancel</button>
                </form> 
                : <span onClick={()=>setEditing(true)}>{infoDisplay}</span>
            
        }
    </div>)
}


  // Map to Props:
  const mapStateToProps = (state) =>{
    return {
      elements: state.elements,
      selectedElement: state.selectedElement,
      selected: state.selected
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        editDetail: (selectedElement, detail, newInfo) => dispatch(editDetail(selectedElement,detail,newInfo))
        }
      }
  

export default connect(mapStateToProps, mapDispatchToProps)(Detail);