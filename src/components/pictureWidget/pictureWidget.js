import { connect } from 'react-redux';

const PictureWidget = ({elements, selectedElement, selected}) => {

    return(
        <div id="pictureWidget">
            <header className="userHeader">User Picture:</header>
        <div id="innerPicture">
            {selected ?
                  <img src={elements[selectedElement].avatar} alt={`${elements[selectedElement].first_name}`}/>
                  : null
              }
          </div>
        </div>
    )
}


  // Redux - Map to Props:
  const mapStateToProps = (state) =>{
    return {
      elements: state.elements,
      selectedElement: state.selectedElement,
      selected: state.selected
    }
  }
  
export default connect(mapStateToProps)(PictureWidget);