import { useEffect, useState } from "react";
import DoctorCards from "../components/DoctorCards";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { getDoctors } from "../services/Doctor";

const Doctors = () => {

  const [data, setData] = useState([])

  const getDocData = async () => {
    try {
      const resp = await getDoctors()
      console.log("resp", resp.data)
      setData(resp.data)

    } catch (error) {
      console.log("error", error);

    }
  }


  useEffect(() => {
    getDocData();
  }, [])

  return (
    <>
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
            ))) : <div>Sorry!! No One Doctor is Available Right Now!!</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Doctors;
