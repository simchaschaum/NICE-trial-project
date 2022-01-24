import { connect } from 'react-redux';

const Tree = (props)=> {

    const handleSelect = (num) => {
       if(!props.selected || props.selectedElement !== num){
            props.setSelected(true);
            props.setSelectedElement(num)
        } else {
            props.setSelected(false)
        }
      }    
    
    return(<div id="tree">
        <header className='userHeader'>Users:</header>
        {props.elements.map((item,index)=>(
            <div key={`key-${index}`} className={props.selectedElement===index && props.selected ? "selected" : "unselected"} onClick={()=>handleSelect(index)}>{item.first_name} {item.last_name}</div>
        ))}

        </div>)
}

// Redux actions:
const setSelectedElement = (selectedElement) => {
    return {
      type: 'selectedElement',
      selectedElement: selectedElement
    }
  }

const setSelected = (selected) => {
  return {
    type: 'setSelected',
    selected: selected
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
    setSelectedElement: (selectedElement) => dispatch(setSelectedElement(selectedElement)),
    setSelected: (selected) => dispatch(setSelected(selected))
      }
    }
      
export default connect(mapStateToProps,mapDispatchToProps)(Tree);