import { useEffect, useState } from "react";
import { connect } from "react-redux";

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
        setTimeout(()=>console.log(elements),3000)
    }

    const clearNewInput = () => {
        setInput("");
        setEditing(false)
    }
 
    return (<div className="detail">
        {
            editing ? 
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type={inputType} placeholder={infoDisplay}></input>
                    <button onClick={(e)=>handleEnterNewInput(e)}>Enter</button>
                    <button onClick={clearNewInput}>Cancel</button>
                </form> 
                : <span onClick={()=>setEditing(true)}>{infoDisplay}</span>
            
        }
    </div>)
}


// Redux Actions:
  const editDetail = (selectedElement, detail, newInfo) => {
    return {
      type: 'editDetail',
      selectedElement: selectedElement,
      detail: detail,
      newInfo: newInfo
    }
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