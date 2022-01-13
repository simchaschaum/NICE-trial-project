import './App.css';
import {useEffect, useState, createContext} from 'react';
import Tree from './tree';
import PictureWidget from './pictureWidget';
import DetailsWidget from './DetailsWidget';
import { connect } from 'react-redux';

export const ElementsContext = createContext();

function App(props) {

  const [selectedElement, setSelectedElement] = useState(0);
  const [selected, setSelected] = useState(false);

  useEffect(()=>{
    getElements();
  },[]);
  // For development:
  // useEffect(()=>{
  //   console.log(props.elements)
  // },[props.elements]);


  const getElements = async () => {
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
    const data = await response.json();
    props.setElements(data);  // Redux
  }
 
  return (
      <div id="app">
        <Tree/>
        <PictureWidget />
        <DetailsWidget />
      </div>
    
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
