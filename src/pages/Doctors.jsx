import { useEffect, useState } from "react";
import DoctorCards from "../components/DoctorCards";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { getDoctors } from "../services/Doctor";
import { ClipLoader } from "react-spinners"; // Import Spinner

const Doctors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDocData = async () => {
    try {
      const resp = await getDoctors();
      console.log("resp", resp.data);
      setData(resp.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDocData();
  }, []);

  return (
    <>
      {loading ? (

        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          zIndex: 9999, 
        }}>
          <ClipLoader color="#36D7B7" size={60} />
        </div>
      ) : (
        <div className="doctorContainer">
          <NavBar />
          <div className="doctorHeading">
            <h1 className="page-heading" style={{ margin: "33px 0px" }}>
              Our Doctors
            </h1>
          </div>
          <div className="Dcards">
            {data.length > 0 ? (
              data.map((elem) => (
                <DoctorCards key={elem.id} elem={{ ...elem, id: elem.id }} />
              ))
            ) : (
              <div>Sorry!! No One Doctor is Available Right Now!!</div>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Doctors;
