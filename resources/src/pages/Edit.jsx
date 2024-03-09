import React from "react";
import Profil from "../../../public/images/profile.png";

export default function Edit() {
    return (
        <>
            <div className="border-b-2 mb-3">
                <h1 className="text-5xl m-5 text-center font-semibold">
                    Edit Profile
                </h1>
            </div>
            <a href="#" className="flex ml-5 text-2xl gap-2 font-semibold text-slate-500 hover:text-slate-700 duration-200">|<h1 className="mt-1"> Kembali</h1></a>
            <div className="flex justify-center">
                <div className=" w-11/12 lg:w-1/2">
                    <div className="border-2 mt-5 rounded-xl mb-32 shadow-xl">
                        <div className="border-b-2 shadow-sm pb-5">
                            <div className="flex justify-center">
                                <button className="flex justify-center mt-5 rounded-full">
                                    <div className="bg-green-700 rounded-full p-6 pt-4">
                                        <h1 className="text-7xl font-semibold text-white text-center mx-3.5">
                                            E         {/* Ceritanya Photo Profile */}
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mx-5">
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
                        <div className="border-b-2 shadow-sm mb-5 py-5">
                            <div className="ml-5 mb-2 text-2xl sm:text-xl font-semibold text-green-500">
                                Edit Email
                            </div>
                            <div className="mx-4 mb-4 ">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border-2 w-full h-12 p-2 rounded-md text-xl"
                                    placeholder="Masukan Email Baru"
                                ></input>
                            </div>
                            <div className="ml-5 mt-5 mb-2 text-2xl sm:text-xl font-semibold text-green-500">
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
                            <div className="ml-5 mt-5 mb-2 text-2xl sm:text-xl font-semibold text-green-500">
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
                            <div className="ml-5 mt-5 mb-2 text-2xl sm:text-xl font-semibold text-green-500">
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
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mx-5 mb-10">
                        <button className="bg-green-500 border-2 border-green-500 text-white font-bold p-3 text-xl mt-2 rounded-lg w-full hover:text-green-500 hover:bg-white ease-out duration-300">
                                Selesai
                            </button>
                            <button className="bg-red-500 border-2 border-red-500 text-white font-bold p-3 text-xl mt-2 rounded-lg w-full hover:text-red-500 hover:bg-white ease-out duration-300">
                                Batalkan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
