import React, {useState}from 'react'
import { useToast } from "@chakra-ui/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function RegisterFun() {
  const toast = useToast();
  const navigate = useNavigate();
  const [data, setData]= useState({
    name:"",
    email:"",
    password:"",
    password_confirmation:"",
  })
  const handleChange =(e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(data.password!=data.password_confirmation){
      toast({
        title: "gagal membuat akun",
        description: `harap samakan password dengan password confirm`,
        duration: 5000,
        status: "error",
        isClosable: true,
    });
      console.log("password salah kocak");
      return;
    }try{
      const res= await axios.post("http://localhost:8004/api/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      },)
      toast({
        title: "Berhasil membuat akun",
        description: `Silahkan login menggunakan akun yang anda buat sebelumnya `,
        duration: 5000,
        status: "success",
        isClosable: true,
    });
    navigate("/login"); 
      console.log(res.data);
    }catch(error){
      toast({
        title: "Gagal membuat akun",
        description: `Email yang anda masukan sudah terdaftar `,
        duration: 5000,
        status: "error",
        isClosable: true,
    });
        console.error(error.message)
    }
  }
  return (
   <>    
   
   <div className="flex justify-center mt-28">
   <form onSubmit={handleSubmit}>
   <div className="border shadow-md rounded-md">
       <div className="border-b-2 shadow-sm">
           <h1 className="text-green-500 text-5xl font-bold mb-3 mt-5 mx-32 font-sans">
               Sign Up{" "}
           </h1>
           <h1 className="text-center text-xl text-green-600 mb-5">
               Sign Up Untuk Membuat Akun!
           </h1>
       </div>
       <h1 className="mx-5 text-xl mt-5 text-green-500 font-bold">
           Nama :
       </h1>
       <div className="mx-5 mb-5 mt-2">
           <input
               placeholder="name@company.com"
               type="text"
               id="name"
               name="name"
               className="border-2 w-full h-12 p-2 rounded-md text-xl"
               value={data.name}
               onChange={handleChange}
           ></input>
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
               value={data.email}
               onChange={handleChange}
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
               value={data.password}
               onChange={handleChange}
           ></input>
       </div>
       <h1 className="mx-5 text-xl mt-5 text-green-500 font-bold">
           Register Password :
       </h1>
       <div className="mx-5 mb-5 mt-2">
           <input
               type="password"
               id="password_confirmation"
               name="password_confirmation"
               className="border-2 w-full h-12 p-2 rounded-md text-xl"
               placeholder="Ketik Kembali Password Anda"
               value={data.password_confirmation}
               onChange={handleChange}
           ></input>
       </div>
       <div className="flex justify-center mx-5">
           <button type='submit' className="bg-green-500 border-2 border-green-500 text-white font-bold p-3 mb-7 text-xl mt-2 rounded-lg w-full hover:text-green-500 hover:bg-white ease-out duration-300">
               Sign Up
           </button>
       </div>
       <div className="flex justify-center">
           <a
               href="/login"
               className="underline text-green-500 text-xl mb-5 hover:text-green-700 ease-out"
           >
               Sudah memiliki akun?
           </a>
       </div>
   </div>
   </form>
</div>
   </>
  )
}
