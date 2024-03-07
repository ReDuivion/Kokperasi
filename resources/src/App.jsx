import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
// import Two from "./components/first";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import panel from "./pages/About";
const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
};

export default App;
