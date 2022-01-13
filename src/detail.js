import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Detail = ({type, selected, elements, selectedElement  }) => {
    const [infoDisplay, setInfoDisplay] = useState([]);
    const [editing, setEditing] = useState(false);
    const [input, setInput] = useState("")

    useEffect(()=>{
        if(selected){
            let arr = [];
            switch(type){
                case 'address':
                    arr = [`${elements[selectedElement].address.street_address}, `, `${elements[selectedElement].address.city}, `, elements[selectedElement].address.state];
                    break;
                case 'date_of_birth':
                    let rawDate = elements[selectedElement].date_of_birth;
                    let date = new Date(rawDate).toDateString()
                    arr = [date];
                    break;
                case 'email':
                    arr = [elements[selectedElement].email];
                    break;
                case 'phone_number':
                    arr = [elements[selectedElement].phone_number];
                    break;
                case 'employment':
                    arr = [`${elements[selectedElement].employment.title}, `, `specializing in `, elements[selectedElement].employment.key_skill];
                    break;
                default: 
                    arr = [];
            }
            setInfoDisplay([...arr]);        
        }
    },[selectedElement, selected])

    const handleNewInput = (e) => {
        e.preventDefault();
        setInput("");
        setEditing(false)
    }
  
    return (<div className="detail">
        {
            infoDisplay.map((item, idx) => editing ? 
                <form key={`de${idx}`}>
                    <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
                    <button onClick={(e)=>handleNewInput(e)}>{input.length > 0 ? "Enter" : "Cancel"}</button>
                </form> 
                : <span onClick={()=>setEditing(editing ? false : true)} key={`de${idx}`}>{item}</span>
            )
        }
    </div>)
}


// Redux Actions:
const setElements = (elements) => {
    return {
      type: 'elements',
      elements: elements
    }
  }
  
  const setSelectedElement = (selectedElement) => {
    return {
      type: 'selectedElement',
      elements: selectedElement
    }
  }
  
  const setSelected = (selected) => {
    return {
      type: 'setSelected',
      elements: selected
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
      setElements: (elements) => dispatch(setElements(elements)),
      setSelectedElement: (selectedElement) => dispatch(setSelectedElement(selectedElement)),
      setSelected: (selected) => dispatch(setSelected(selected))
        }
      }
  

export default connect(mapStateToProps, mapDispatchToProps)(Detail);