import './App.css';
import {useEffect, useState, createContext} from 'react';
import Tree from './tree';
import PictureWidget from './pictureWidget';
import DetailsWidget from './DetailsWidget';

export const ElementsContext = createContext();

function App() {

  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(0);
  const [selected, setSelected] = useState(false);

  useEffect(()=>{
    getElements()
  },[]);
  // For development:
  useEffect(()=>{
    console.log(elements)
  },[elements]);


  const getElements = async () => {
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
    const data = await response.json();
    setElements(data);
  }

  const handleSelect = (num) => {
    if(!selected || selectedElement !== num){
      setSelected(true);
      setSelectedElement(num)
    } else {
      setSelected(false);
    }
  }
  
  return (
    <ElementsContext.Provider value={{elements,selectedElement, selected}}>
      <div id="app">
        <Tree 
          handleSelect={handleSelect}
        />
        <PictureWidget />
        <DetailsWidget />
      </div>
    </ElementsContext.Provider>
    
  );
}

export default App;
