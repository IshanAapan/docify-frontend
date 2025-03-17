import "../assets/styles/Table.css";
import PropTypes from 'prop-types';
import { updateStatus } from "../services/AppointmentServices";
import "../assets/styles/RemoveButton.css"
// import { useState } from "react";

const Table = ({ data }) => {


  // const [updateData, setUpDateData] = useState([]);
  const role = localStorage.getItem("role")
  console.log("role", role);


  const approveFun = async (elem, status) => {

    try {
      const resp = await updateStatus(elem, status)
      console.log("elem", elem, "status", status);
      console.log("resp", resp);
      // setUpDateData(resp);

    } catch (error) {
      console.log("error", error);

    }
  }

  const handleApprovedBtn = (elem, status) => {
    approveFun(elem, status);
  }


  return (
    <div className="tableContainer">
      {data.length > 0 ? (
        <table>
          <tr>
            <th>S.No</th>
            {role === "doctor" ? (
              <th>Patients Name</th>
            ) : <th>Doctors Name</th>}
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>Status</th>
            {role === "doctor" && (
              <th>Action</th>
            )}
          </tr>
          {data.map((elem, idx) => (
            <tr key={elem.patient.id}>
              <td>{idx + 1}</td>
              {role !== "doctor" && (
                <td>{elem.doctor.firstName + " " + elem.doctor.lastName}</td>
              )}
              {role !== "patient" && (
                <td>{elem.patient.firstName + " " + elem.patient.lastName}</td>)}
              <td>{elem.appointmentDate.slice(0, 10)}</td>
              <td>{elem.appointmentTime}</td>
              <td>{elem.bookingDateTime.slice(0, 10)}</td>
              <td>{elem.bookingDateTime.slice(12, 19)}</td>
              <td>{elem.status}</td>
              {role === "doctor" && (<>
                <td><button type="button" onClick={() => handleApprovedBtn(elem._id, "approved")}>Approve</button></td><td><button type="button" className='removeBtn' onClick={() => handleApprovedBtn(elem._id, "rejected")}>Reject</button></td>
              </>)}

            </tr>
          ))}

        </table>
      ) : (<div className="dnf">Data Not Found!</div>)}
    </div>
  );
};
Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
