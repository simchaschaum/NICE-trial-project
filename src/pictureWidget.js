import { connect } from 'react-redux';

const PictureWidget = ({elements, selectedElement, selected}) => {

    
    return(
        <div id="pictureWidget">
            {selected ?
                <img src={elements[selectedElement].avatar} alt={`${elements[selectedElement].first_name}`}/>
                : null
            }
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