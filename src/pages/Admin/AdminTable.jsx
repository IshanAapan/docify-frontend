
import PropTypes from 'prop-types';
import { deleteDoctor, deleteUser, statusUpdate } from '../../services/AdminServices';
import "../../assets/styles/RemoveButton.css"

const AdminTable = ({ tableName, data, setData }) => {




    const approvedStatusDoctor = async (id, status) => {
        try {
            const resp = await statusUpdate(id, status);
            console.log("resp", resp);
            setData((prevData) =>
                prevData.map((app) =>
                    app._id === id ? { ...app, status } : app
                )
            );
        } catch (error) {
            console.log("Status is not updated", error);
        }
    };
    const handleApproveBtn = (id) => {

        approvedStatusDoctor(id, "approved");

    }

    const handleRemoveBtn = (id) => {
        approvedStatusDoctor(id, "rejected");

    }

    const handleUserRemoveBtn = async (id) => {
        try {
            let response;
            if (tableName === "User") {
                response = await deleteUser(id);
            } else if (tableName === "Doctors") {
                console.log("doc-response", id);
                response = await deleteDoctor(id);

            }

            console.log(`API Response for deleting ${tableName}:`, response);

            setData((prevData) => prevData.filter((item) => item._id !== id)); 
            console.log(`${tableName} deleted successfully`);
        } catch (error) {
            console.error(`Error deleting ${tableName}:`, error.response ? error.response.data : error);
        }
    }


    return (
        <div>
            <div className="adminUserHeading" style={{ marginBottom: "3.5rem" }}>
                <h1>All {tableName}</h1>
            </div>
            <div className="AdminTableContainer">
                {data.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                {(tableName === "Appointments") ? <th>Doctor Name</th> : <th>Pic</th>}
                                {(tableName === "Appointments") ? <th>Patient Name</th> : <th>First Name</th>}
                                {(tableName === "Appointments") ? <th>Appointment Date</th> : <th>Last Name</th>}
                                {(tableName === "Appointments") ? <th>Appointment Time</th> : <th>Email</th>}
                                {(tableName === "Appointments") ? <th>Booking Date</th> : <th>Contact No.</th>}
                                {(tableName === "Appointments") ? <th>Booking Time</th> : <th>Age</th>}
                                {(tableName === "Appointments") ? <th>Status</th> : <th>Gender</th>}
                                {(tableName === "Doctors" || tableName === "Applications" || tableName === "Appointments") && (<th>Specilization</th>)}
                                {(tableName === "Doctors" || tableName === "Applications") && (<th>Experience</th>)}
                                {(tableName === "Doctors" || tableName === "Applications") && (<th>Fees</th>)}
                                {(tableName === "Applications") && (<th>Status</th>)}
                                {tableName !== "Appointments" && (<th>Action</th>)}
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((ele, idx) => (
                                <tr key={ele.id || idx}>
                                    <td>{idx + 1}</td>
                                    {tableName !== "Appointments" && <td>Pic</td>}
                                    <td>{tableName === "Applications" ? ele.user.firstName : tableName === "Appointments" ? ele.doctorName : ele.firstName}</td>
                                    <td>{tableName === "Applications" ? ele.user.lastName : tableName === "Appointments" ? ele.patientName : ele.lastName}</td>
                                    <td>{tableName === "Applications" ? ele.user.email : tableName === "Appointments" ? ele.appointmentDate.slice(0, 10) : ele.email}</td>
                                    <td>{tableName === "Applications" ? ele.user.mob : tableName === "Appointments" ? ele.appointmentTime : ele.mob}</td>
                                    <td>{tableName === "Applications" ? ele.user.age : tableName === "Appointments" ? ele.bookingDateTime.slice(0, 10) : ele.age}</td>
                                    <td>{tableName === "Applications" ? ele.user.gender : tableName === "Appointments" ? ele.bookingDateTime.slice(12, 19) : ele.gender}</td>
                                    <td>{tableName === "Applications" || tableName === "Doctors" ? ele.specialization : tableName === "Appointments" ? ele.status : <></>}</td>
                                    <td>{tableName === "Applications" || tableName === "Doctors" ? ele.experience : tableName === "Appointments" ? ele.specialization : <></>}</td>
                                    <td>{tableName === "Applications" || tableName === "Doctors" ? ele.fees : <></>}</td>
                                    {(tableName === "Applications") && <td>{ele.status}</td>}
                                    {tableName === "Applications" ? (<><td><button onClick={() => handleApproveBtn(ele._id)}>Approve</button></td><td><button onClick={() => handleRemoveBtn(ele._id)} className='removeBtn' >Remove</button></td></>) : tableName === "Doctors" ? <td><button className='removeBtn' onClick={() => handleUserRemoveBtn(ele.id)}>Remove</button></td> : <td><button className='removeBtn' onClick={() => handleUserRemoveBtn(ele._id)}>Remove</button></td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <tr style={{ display: "flex", justifyContent: "center" }}>
                        <td>No data available</td>
                    </tr>
                )}
            </div>
        </div>
    )
}

AdminTable.propTypes = {
    tableName: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
};

export default AdminTable;
