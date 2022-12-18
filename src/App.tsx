import "antd/dist/reset.css";
import { Provider } from "react-redux";
// import {ReactRouterPo}
import { Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./App/store";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
