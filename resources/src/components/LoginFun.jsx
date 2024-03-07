import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { error } from "laravel-mix/src/Log";
export default function LoginFun() {
    const toast = useToast();
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const { username: email, password } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8004/api/login", {
                email,
                password,
            });
            toast({
                title: "Selamat Datang Kembali",
                description: `Semoga harimu menyenangkan `,
                duration: 5000,
                status: "success",
                isClosable: true,
            });
            navigate("/");
        } catch (error) {
            toast({
                title: "Gagal login",
                description: `Password atau email yang anda masukan salah `,
                duration: 5000,
                status: "error",
                isClosable: true,
            });
            // console.error("Login failed:");
            console.error("Login failed:");
        }
    };
    return (
        <div className="flex justify-center mt-28">
            <form onSubmit={handleSubmit}>
                <div className="border shadow-md rounded-md">
                    <div className="border-b-2 shadow-sm">
                        <h1 className="text-green-500 text-5xl font-bold mb-3 mt-5 mx-36 font-sans">
                            Log In{" "}
                        </h1>
                        <h1 className="text-center text-xl text-green-600 mb-5">
                            Log In Untuk Mengakses Web-apps!
                        </h1>
                    </div>
                    <h1 className="mx-5 text-xl mt-5 text-green-500 font-bold">
                        Email :
                    </h1>
                    <div className="mx-5 mb-5 mt-2">
                        <input
                            placeholder="name@company.com"
                            type="text"
                            name="username"
                            value={email}
                            onChange={handleChange}
                            className="border-2 w-full h-12 p-2 rounded-md text-xl"
                        ></input>
                    </div>
                    <h1 className="mx-5 text-xl mt-5 text-green-500 font-bold">
                        Password :
                    </h1>
                    <div className="mx-5 mb-5 mt-2">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="border-2 w-full h-12 p-2 rounded-md text-xl"
                            placeholder="Password"
                        ></input>
                    </div>
                    <div className="flex justify-center mx-5">
                        <button className="bg-green-500 border-2 border-green-500 text-white font-bold p-3 mb-7 text-xl mt-2 rounded-lg w-full hover:text-green-500 hover:bg-white ease-out duration-300">
                            Log In
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <a
                            href="/register"
                            className="underline text-green-500 text-xl mb-5 hover:text-green-700 ease-out"
                        >
                            Belum Memiliki Akun?
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
}
