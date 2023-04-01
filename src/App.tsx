import { Header, Body, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
