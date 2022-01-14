import { connect } from "react-redux";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./detail";


const DetailsWidget = ({elements, selectedElement, selected}) => {

    const info = elements[selectedElement];
  
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
                    <td>City:</td>
                    <td>{selected ? <Detail type={"city"}/> : null}</td>
                </tr>
                <tr>
                    <td>State:</td>
                    <td>{selected ? <Detail type={"state"}/> : null}</td>
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



// Map to Props:
const mapStateToProps = (state) =>{
    return {
      elements: state.elements,
      selectedElement: state.selectedElement,
      selected: state.selected
    }
  }
  
      
export default connect(mapStateToProps)(DetailsWidget);