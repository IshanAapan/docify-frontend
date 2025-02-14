import "../assets/styles/Table.css";

const Table = () => {
  return (
    <div className="tableContainer">
      <table>
        <tr>
          <th>S.No</th>
          <th>Doctor</th>
          <th>Patients</th>
          <th>Appointment Date</th>
          <th>Appointment Time</th>
          <th>Booking Date</th>
          <th>Booking Time</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
       
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
