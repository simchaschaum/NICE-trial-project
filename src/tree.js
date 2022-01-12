import { useContext } from "react";
import { ElementsContext } from "./App";

const Tree = (props)=> {
    const {elements, selectedElement, selected} = useContext(ElementsContext);

    return(<div id="tree">
        {elements.map((item,index)=>(
            <div key={`key-${index}`} className={selectedElement===index && selected ? "selected" : "unselected"} onClick={()=>props.handleSelect(index)}>{item.first_name} {item.last_name}</div>
        ))}

        </div>)
}

export default Tree;