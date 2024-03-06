import React from "react";

export default function Login() {
    return (
        <>
            <div className="flex justify-center mt-28">
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
                            type="email"
                            id="email"
                            name="email"
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
            </div>
        </>
    );
}
