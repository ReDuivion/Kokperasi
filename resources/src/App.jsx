import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import EditProfile from "./pages/Edit"

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/edit" element={<EditProfile />}></Route>
            </Routes>
        </>
    );  
};

export default App; 
