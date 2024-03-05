import React from "react";
import bg1 from "../assets/images/auth/bg1.png";
import bg2 from "../assets/images/auth/bg2.png";
import fb from "../assets/images/auth/fb.png";
import google from "../assets/images/auth/google.png";
import show from "../assets/images/auth/show.png";
import hidden from "../assets/images/auth/hidden.png";
import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor="password" className="block text-gray-700 lg:text-xl">Password</label>
      <div className="flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="rounded-lg border-gray-300 w-full py-2 px-3 mt-1"
        />
        <img
          src={showPassword ? hidden : show}
          className="w-5 h-5 absolute right-2 hover:cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      </div>
    </div>
  );
};

const AuthCard = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="bg-custom-300 flex items-center justify-center h-screen">
      <img src={bg2} className="absolute top-0 left-0" />
      <img src={bg1} className="absolute bottom-0 right-0  " />
      <div id="box" className=" bg-gray-200 w-4/5 sm:w-3/5 rounded-2xl flex flex-col p-2 lg:p-1 shadow-lg z-10">
        <div id="select" className=" flex ">
          <p
            className={`cursor-pointer px-2 py-2 md:py-5 lg:px-4 text-2xl md:text-5xl font-bold ${isLoginForm ? "font-bold" : "text-slate-400"
              }`}
            onClick={toggleForm}
          >
            Masuk
          </p>

          <p
            className={`cursor-pointer px-2 py-2 md:py-5 lg:px-4 text-2xl md:text-5xl font-bold ${!isLoginForm ? "" : "text-slate-400"
              }`}
            onClick={toggleForm}
          >
            Register
          </p>
        </div>
        {isLoginForm ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className="mt-3 px-1 md:px-5 lg:px-12">
      <form className="p-1 md:p-5 lg:p-10">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 lg:text-xl">Email</label>
          <input type="email" id="email" className="rounded-lg border-gray-300 w-full py-2 px-3 mt-1" />
        </div>
        <PasswordInput />
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className="ml-4 lg:text-xl
          " htmlFor="remember">ingat saya</label>
        </div>
        <Link to='/'>
          <button className="bg-custom-200 text-white md:py-3 xl:py-4 px-4 rounded-xl mt-4 w-full hover:bg-custom-500 font-semibold lg:text-2xl">Masuk</button>
        </Link>
        <p className="text-center text-xl text-slate-600  mt-3 ">atau</p>
        <div className="flex gap-2 mt-5 justify-center ">
          <button id="facebook" className="bg-blue-500 w-1/3 sm:w-full rounded-xl flex text-white p-3 text-base
           text-start items-center justify-center gap-2">
            <img src={fb} className="w-15 sm:w-7 xl:w-10 ml-2" />
            <p className="md:block hidden">Masuk dengan facebook</p>
          </button>
          <button id="facebook" className="bg-slate-800 w-1/3 sm:w-full rounded-xl flex text-white p-3 text-base
           text-start items-center justify-center gap-2">
            <img src={google} className="w-15 sm:w-7 xl:w-10 " />
            <p className="md:block hidden">Masuk dengan google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className=" mt-3 px-1 md:px-5 lg:px-10">
      <form className="p-1 md:p-5 lg:p-10">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 lg:text-xl
          ">Nama pengguna</label>
          <input type="text" id="email" className="rounded-lg border-gray-300 w-full py-2 px-3 mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 lg:text-xl">Email</label>
          <input type="email" id="email" className="rounded-lg border-gray-300 w-full py-2 px-3 mt-1" />
        </div>
        <PasswordInput />
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className="ml-4 lg:text-xl" htmlFor="remember">ingat saya</label>
        </div>
        <Link to='/'>
          <button className="bg-custom-200 text-white md:py-3 xl:py-4px-4 rounded-xl mt-4 w-full hover:bg-custom-500 font-semibold lg:text-2xl">Daftar</button>
        </Link>
        <p className="text-center text-slate-600 text-xl mt-3 ">atau</p>
        <div className="flex gap-2 mt-5 justify-center">
          <button id="facebook" className="bg-blue-500 hover:bg-blue-400 w-1/3 sm:w-full rounded-xl flex text-white p-3 text-base text-start items-center justify-center gap-2">
            <img src={fb} className="w-15 sm:w-7 xl:w-10  sm:ml-2" />
            <p className="md:block hidden">Daftar dengan facebook</p>
          </button>
          <button id="facebook" className="bg-slate-800 hover:bg-slate-700 w-1/3 sm:w-full rounded-xl flex text-white p-3 text-base text-start items-center  justify-center gap-2 ">
            <img src={google} className="w-15 sm:w-7 xl:w-10 " />
            <p className="md:block hidden">Daftar dengan google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthCard;
