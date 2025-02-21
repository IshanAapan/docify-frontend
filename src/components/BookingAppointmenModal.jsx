import { useState } from "react";
import PropTypes from "prop-types";
import "../assets/styles/BookingAppointmentModal.css";
import { IoMdClose } from "react-icons/io";
const BookingAppointmenModal = ({ setModalOpen }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { date, time } = formData;

  const handleBookAppointment = () => {
    console.log("okkkk");

    setModalOpen(false);
  };

  const handleClose = () => {
    console.log("close...");
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
            <form className="register-form">
              <input
                type="date"
                name="date"
                className="form-input"
                value={date}
                onChange={inputChange}
                required
              />
              <input
                type="time"
                name="time"
                className="form-input"
                value={time}
                onChange={inputChange}
                required
              />
              <button
                type="submit"
                className="btn form-btn"
                onClick={handleBookAppointment}
              >
                Book
              </button>
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
