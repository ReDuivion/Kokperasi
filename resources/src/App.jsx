import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );  //blom muncul ya
};

export default App; 
