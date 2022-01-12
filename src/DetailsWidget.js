import { useContext, useEffect, useState } from "react";
import { ElementsContext } from "./App";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./detail";


const DetailsWidget = () => {

    const {elements, selectedElement, selected} = useContext(ElementsContext);
    const [info,setInfo] = useState(elements[selectedElement]);

    useEffect(()=>{
        setInfo(elements[selectedElement])
    },[elements, selectedElement]);
    
    return(<div id="details">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>{selected ? `Name: ${info.first_name} ${info.last_name}` : null}  </th>
               </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Address:</td>
                    <td>{selected ? <Detail type={"address"}/> : null}</td>
                </tr>
                <tr>
                    <td>Date of Birth:</td>
                    <td>{selected ? <Detail type={"date_of_birth"}/> : null}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{selected ? <Detail type={"email"}/> : null}</td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td>{selected ? <Detail type={"phone_number"}/> : null}</td>
                </tr>
                <tr>
                    <td>Employment:</td>
                    <td>{selected ? <Detail type={"employment"}/> : null}</td>
                </tr>
            </tbody>
        </Table>
    </div>)
}

export default DetailsWidget;