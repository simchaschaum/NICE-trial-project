import {useEffect} from 'react';
import Tree from '../tree';
import PictureWidget from '../pictureWidget/pictureWidget';
import DetailsWidget from '../detailsWidget/detailsWidget';
import { connect } from 'react-redux';

function App(props) {

  useEffect(()=>getElements());
 
  const getElements = async () => {
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
    const data = await response.json();
    props.setElements(data);  
  }
 
  return (
      <div id="app">
        <header id="topHeader"></header>
        <div id="contents-container">
          <Tree/>
          <div id="infoWidgets">
            <PictureWidget />
            <DetailsWidget />
          </div>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setElements: (elements) => dispatch(setElements(elements)),
      }
    }

export default connect(null,mapDispatchToProps)(App);
