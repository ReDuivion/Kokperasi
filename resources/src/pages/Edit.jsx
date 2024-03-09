import React from "react";
import Profil from "../../../public/images/profile.png";

export default function Edit() {
    return (
        <>
            <div className="border-b-2">
                <h1 className="text-5xl m-5 text-center font-semibold">
                    Edit Profile
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <div className="border-2 mt-5 rounded-xl mb-32 shadow-xl">
                        <div className="border-b-2 shadow-sm pb-5">
                            <div className="flex justify-center">
                                <button className="flex justify-center mt-5 rounded-full">
                                    <div className="bg-green-700 rounded-full p-6 pt-4">
                                        <h1 className="text-7xl font-semibold text-white text-center mx-3.5">
                                            E
                                        </h1>
                                    </div>
                                </button>
                            </div>
                            <div className="flex justify-center mt-4 mb-1">
                                <h1 className="text-2xl">Encep Backflip</h1>
                            </div>
                            <div className="flex justify-center mb-5">
                                <h1 className="text-xl text-slate-500">
                                    encepbackflip@gmail.com
                                </h1>
                            </div>
                            <div className="flex justify-center gap-3">
                                <button>
                                    <div className="bg-green-500 py-3 px-6 rounded-full text-white hover:text-green-500 hover:bg-white ease-out duration-300 border-2 border-green-500">
                                        <h1 className="text-xl font-semibold">
                                            Edit Photo Profile
                                        </h1>
                                    </div>
                                </button>
                                <button>
                                    <div className="bg-green-500 p-3 rounded-full text-white hover:text-green-500 hover:bg-white ease-out duration-300 border-2 border-green-500">
                                        <h1 className="text-xl font-semibold">
                                            Delete Photo Profile
                                        </h1>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="ml-5 mt-5 mb-2 text-xl font-semibold text-green-500">
                            Edit Email
                        </div>
                        <div className="mx-4 mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border-2 w-full h-12 p-2 rounded-md text-xl"
                                placeholder="Masukan Email Baru"
                            ></input>
                        </div>
                        <div className="ml-5 mt-5 mb-2 text-xl font-semibold text-green-500">
                            Edit Nama
                        </div>
                        <div className="mx-4 mb-4">
                            <input
                                type="name"
                                id="name"
                                name="name"
                                className="border-2 w-full h-12 p-2 rounded-md text-xl"
                                placeholder="Masukan Nama Baru"
                            ></input>
                        </div>
                        <div className="ml-5 mt-5 mb-2 text-xl font-semibold text-green-500">
                            Edit Password
                        </div>
                        <div className="mx-4 mb-4">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="border-2 w-full h-12 p-2 rounded-md text-xl"
                                placeholder="Masukan Password Baru"
                            ></input>
                        </div>
                        <div className="ml-5 mt-5 mb-2 text-xl font-semibold text-green-500">
                            Konfirmasi Password Baru :
                        </div>
                        <div className="mx-4 mb-4">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="border-2 w-full h-12 p-2 rounded-md text-xl"
                                placeholder="Ketik Ulang Password Baru"
                            ></input>
                        </div>
                        <div className="flex justify-center mx-5 mb-16">
                            <button className="bg-green-500 border-2 border-green-500 text-white font-bold p-3 mb-7 text-xl mt-2 rounded-lg w-full hover:text-green-500 hover:bg-white ease-out duration-300">
                                Selesai
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
