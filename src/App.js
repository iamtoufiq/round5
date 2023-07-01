import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
const App = () => {
  // const notify = () =>
  //   toast.success(" Wow so easy!", {
  //     position: "bottom-center",
  //     autoClose: 1500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <ToastContainer />
      {/* <button onClick={notify}>Notify!</button> */}
      <Footer />
    </div>
  );
};

export default App;
