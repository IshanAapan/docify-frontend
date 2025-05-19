import { useState } from "react";
import PropTypes from "prop-types";
import "../assets/styles/BookingAppointmentModal.css";
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import { bookAppointment } from "../services/AppointmentServices";



const BookingAppointmenModal = ({ setModalOpen, doctor }) => {


  const [formData, setFormData] = useState({
    appointmentDate: "",
    appointmentTime: "",
  });


  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  BookingAppointmenModal.propTypes = {
    setModalOpen: PropTypes.func.isRequired,
    doctor: PropTypes.object.isRequired,
  };

  const { appointmentDate, appointmentTime } = formData;

  const handleBookAppointment = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log("token", token);

    if (!token) {
      toast.error("You must login first")
      return;
    }
    else if (!appointmentDate || !appointmentTime) {
      toast.error("Unable to Book Appointment");
      setModalOpen(true);
      return;
    }
    else {
      bookingAppointment(formData, doctor);
      setFormData({ appointmentDate: "", appointmentTime: "" });
      setModalOpen(true);
    }
  };

  const bookingAppointment = async (formData, doctor) => {

    try {
      console.log("Inside the booking Appointment", formData,doctor);
      const resp = await bookAppointment(formData, doctor);
      console.log("Doctors", doctor);
      console.log("resp", resp);
      toast.success("Your Booking Successfully Completed");
    } catch (error) {
     console.log("error", error.response.status);
      if (error.response.status === 400) {
        toast.error("Time slot already booked");
      } else if (error.response.status === 500) {
        toast.error("Server Error");
      }

    }

  }

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal__content">
          <h2 className="page-heading">Book Appointment</h2>
          <IoMdClose
            onClick={() => {
              console.log("Icon clicked"); // Debug log
              handleClose();
            }}
            className="close-btn"
            style={{ cursor: "pointer" }} // Make it clear it's clickable
          />
          <div className="register-container flex-center book">
            <form className="register-form" onSubmit={handleBookAppointment}>
              <input
                type="date"
                name="appointmentDate"
                className="form-input"
                value={appointmentDate}
                onChange={inputChange}
                required
              />
              <input
                type="time"
                name="appointmentTime"
                className="form-input"
                value={appointmentTime}
                onChange={inputChange}
                required
              />
              <button
                type="submit"
                className="btn form-btn"
              >
                Book
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

BookingAppointmenModal.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default BookingAppointmenModal;
