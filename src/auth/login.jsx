import React from "react";
import bg1 from "../assets/images/auth/bg1.png";
import bg2 from "../assets/images/auth/bg2.png";
import fb from "../assets/images/auth/fb.png";
import google from "../assets/images/auth/google.png";
import show from "../assets/images/auth/show.png";
import hidden from "../assets/images/auth/hidden.png";
import "./login.css";
import { useState } from "react";


const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor="password" className="block text-gray-700">Password</label>
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
      <div id="box" className="bg-gray-200 w-4/5 h-4/5 rounded-2xl flex flex-col p-10 shadow-lg z-10">
        <div id="select" className=" flex px-20">
          <p
            className={`cursor-pointer px-4 py-2 text-4xl font-bold ${
              isLoginForm ? "font-bold" : "text-slate-400"
            }`}
            onClick={toggleForm}
          >
            Masuk
          </p>
          <p
            className={`cursor-pointer px-4 py-2 text-4xl font-bold ${
              !isLoginForm ? "" : "text-slate-400"
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
    <div className="mt-5 px-20">
      <form className="p-10">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="rounded-lg border-gray-300 w-full py-2 px-3 mt-1" />
        </div>
        <PasswordInput/>
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className="ml-4" htmlFor="remember">ingat saya</label>
        </div>
        <button className="bg-custom-200 text-white py-4 px-4 rounded-xl mt-10 w-full hover:bg-custom-500 font-semibold">Masuk</button>
        <p className="text-center text-xl mt-3 ">atau</p>
        <div className="flex gap-10 mt-5">
          <div id="facebook" className="bg-blue-500 w-full rounded-xl flex text-white p-5 text-xl items-center justify-center gap-10">
            <img src={fb} className="w-10" />
            <p>Masuk dengan facebook</p>
          </div>
          <div id="facebook" className="bg-slate-800 w-full rounded-xl flex text-white p-5 text-xl items-center justify-center gap-10">
            <img src={fb} className="" />
            <p>Masuk dengan google</p>
          </div>
        </div>
      </form>
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className="mt-5 px-20">
      <form className="p-8">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Nama pengguna</label>
          <input type="text" id="email" className="rounded-lg border-gray-300 w-full py-2 px-3 mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="rounded-lg border-gray-300 w-full py-2 px-3 mt-1" />
        </div>
        <PasswordInput/>
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className="ml-4" htmlFor="remember">ingat saya</label>
        </div>
        <button className="bg-custom-200 text-white py-4 px-4 rounded-xl mt-10 w-full hover:bg-custom-500 font-semibold">Masuk</button>
        <p className="text-center text-xl mt-3 ">atau</p>
        <div className="flex gap-10 mt-5">
          <div id="facebook" className="bg-blue-500 w-full rounded-xl flex text-white p-5 text-xl items-center justify-center gap-10">
            <img src={fb} className="w-10" />
            <p>Daftar dengan facebook</p>
          </div>
          <div id="facebook" className="bg-slate-800 w-full rounded-xl flex text-white p-5 text-xl items-center justify-center gap-10">
            <img src={fb} className="" />
            <p>Daftar dengan google</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthCard;
