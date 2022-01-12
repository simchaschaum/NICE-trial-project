import { useContext } from "react";
import { ElementsContext } from "./App";

const PictureWidget = () => {

    const {elements, selectedElement, selected} = useContext(ElementsContext);
    
    return(
        <div id="pictureWidget">
            {selected ?
                <img src={elements[selectedElement].avatar} alt={`${elements[selectedElement].first_name}`}/>
                : null
            }
        </div>
    )
}

export default PictureWidget;