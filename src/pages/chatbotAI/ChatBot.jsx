import React from "react";
import Navbar from "../../includes/Navbar";
// import marker from "../../assets/images/Chatbot/Marker.png";
import chat from "../../assets/images/Chatbot/Chat.png";
import subscription from "../../assets/images/Chatbot/Manage-Subscription.png";
import settings from "../../assets/images/Chatbot/Settings.png";
import newchat from "../../assets/images/Chatbot/New Chat Icon.png";
import kebab from "../../assets/images/Chatbot/Kebab menu.png";
import chatmini from "../../assets/images/Chatbot/chatmini.png";
import save from "../../assets/images/Chatbot/save.png";
import search from "../../assets/images/Chatbot/search.png";
import filter from "../../assets/images/Chatbot/Filter.png";
import pin from "../../assets/images/Chatbot/Union.png";
import user from "../../assets/images/Chatbot/User1.png";
import edit from "../../assets/images/Chatbot/Edit.png";
import bot from "../../assets/images/Chatbot/ChatGPT Ava.png";
import generate from "../../assets/images/Chatbot/generate.png";
import copy from "../../assets/images/Chatbot/copy.png";
import bookmark from "../../assets/images/Chatbot/bookmark.png";
import texticon from "../../assets/images/Chatbot/magic wand tool.png";
import send from "../../assets/images/Chatbot/Send Icon.png";
import leftstroke from  "../../assets/images/Chatbot/Line Left.png";
import rightstroke from  "../../assets/images/Chatbot/Line Right.png";

function ChatBot() {
  return (
    <div className="bg-custom-100 h-screen flex font-sans">
      <Navbar />
      <aside className="bg-white h-[800px] w-20 mt-20 rounded-tr-3xl rounded-br-3xl">
        <div className="flex">
          <img src='' alt="" className="mt-10" />
          <img src={chat} alt="" className="w-12 h-12 mt-10 ml-2 " />
        </div>
        <div>
          <img src={subscription} alt="" className="w-12 h-12 ml-4 mt-6" />
        </div>
        <div>
          <img src={settings} alt="" className="w-12 h-12 ml-4 mt-6" />
        </div>
      </aside>
      <div className="ml-4 h-[780px] grid grid-cols-[400px,1370px] gap-4 mt-24 w-full">
        <div className="Chatbox">
          <div className="flex  justify-between">
            <p className="text-2xl font-medium font-sans">Chat</p>
            <div className=" flex justify-between">
              <img src={newchat} alt="" className="w-10 h-10 mr-4" />
              <img src={kebab} alt="" className="w-10 h-10" />
            </div>
          </div>
          <div className="bg-slate-100 flex justify-around mt-4 h-24 rounded-xl">
            <div className="m-4 bg-white w-full rounded-xl flex items-center justify-center">
              <img src={chatmini} alt="" className="w-5 h-5 " />
              <p className="text-center p-2 font-bold text-custom-200">CHAT</p>
              <div className="bg-green-100 rounded-sm">
                <p className="text-custom-200 font-bold mx-2">24</p>
              </div>
            </div>
            <div className="m-4 w-full flex justify-around ">
              <div className="m-4  w-full rounded-xl flex items-center justify-center">
                <img src={save} alt="" />
                <p className="flex justify-center p-4 font-bold">SIMPAN</p>
                <div className="bg-slate-200 rounded-sm">
                  <p className=" font-bold mx-2">24</p>
                </div>
              </div>
            </div>
          </div>
          <div id="searchbar" className="  mt-4">
            <div className="flex justify-between">
              <div className="flex items-center bg-slate-100 w-full  rounded-lg">
                <img src={search} alt="search" className="p-2 w-10 h-10 ml-2" />
                <p className="text-slate-500">Cari</p>
              </div>
              <div className="pl-4">
                <img src={filter} alt="filter" className="w-10 h-10" />
              </div>
            </div>
          </div>
          <div id="chat" className="mt-6">
            <div>
              <div className="judul flex">
                <div>
                  <img src={pin} alt="" className="w-4 h-4" />
                </div>
                <div className="ml-2 flex justify-between w-full">
                  <p className="font-medium">Healing Malang</p>
                  <p className="font-medium text-slate-400">09.34</p>
                </div>
              </div>
              <div className="isi chat mt-2 ml-6">
                <p className="text-xl text-slate-600">
                  Pastinya ke Malang ga afdol kalau ga ke kebun apel karena apel
                  adalah salah satu..
                </p>
              </div>
            </div>
            <div className="mt-4 bg-custom-600 rounded-lg p-2">
              <div className="judul flex ml-4">
                <div className="ml-2 flex justify-between w-full">
                  <p className="font-medium">Muncak Gunung Semeru</p>
                  <p className="font-medium text-slate-400">Sekarang</p>
                </div>
              </div>
              <div className="isi chat mt-2 ml-6">
                <p className="text-xl text-slate-600">
                  Ketersediaan jaket tergantung pada masing-masing kebutuhan
                  orang. Tapi ..
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-lg p-2">
              <div className="judul flex ml-4">
                <div className="ml-2 flex justify-between w-full">
                  <p className="font-medium">Muncak Gunung Semeru</p>
                  <p className="font-medium text-slate-400">Sekarang</p>
                </div>
              </div>
              <div className="isi chat mt-2 ml-6">
                <p className="text-xl text-slate-600">
                  Ketersediaan jaket tergantung pada masing-masing kebutuhan
                  orang. Tapi ..
                </p>
              </div>
            </div>
            <div className="mt-4  rounded-lg p-2">
              <div className="judul flex ml-4">
                <div className="ml-2 flex justify-between w-full">
                  <p className="font-medium">Muncak Gunung Semeru</p>
                  <p className="font-medium text-slate-400">Sekarang</p>
                </div>
              </div>
              <div className="isi chat mt-2 ml-6">
                <p className="text-xl text-slate-600">
                  Ketersediaan jaket tergantung pada masing-masing kebutuhan
                  orang. Tapi ..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl flex justify-center">
          <div
            id="isi-chat"
            className="w-3/4  flex flex-col items-center  h-full p-5"
          >
            <div className="grid grid-rows-2 grid-flow-col w-full">
              <div className="flex justify-start ">
                <img src={user} alt="avatar1" className="w-12 h-12" />
                <p className="font-medium ml-3">You</p>
                <p className="ml-8 mt-1 text-xs ">24 Sep ▪ 11:30 PM</p>
              </div>
              <div className="flex items-start ml-14">
                <p>Sekarang boleh mendaki ke Gunung Semeru ?</p>
                <img src={edit} alt="edit" className="w-3 h-3 mt-2 ml-3" />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start ml-6">
                <h1 className="font-semibold">Jaka </h1>
                <h6 className="ml-2">24 Sep ▪ 11:30 PM</h6>
              </div>
              <div className="relative">
                <img
                  src={bot}
                  alt="bot ava"
                  className="absolute z-1 w-10 h-10"
                />
              </div>
              <div className="bg-custom-600 z-0 ml-4 p-8 rounded-2xl mb-4">
                <h1>
                  Tentu saja! pendakian Gunung Semeru sudah dibuka pada 19
                  September kemarin. Meskipun telah terjadi insiden kebakaran
                  pada bulan lalu, namun pihak pemerhati lingkungan terus
                  berupaya memadamkan api dan memastikan kawasan pendakian aman{" "}
                </h1>
                <div className="flex justify-end items-center gap-4">
                  <div className="flex bg-custom-200 p-2 rounded-lg gap-2">
                    <img src={generate} alt="" className="h-6 w-6" />
                    <p>Generate Respon</p>
                  </div>
                  <div className="flex bg-custom-200 p-2 rounded-lg gap-2">
                    <img src={copy} alt="" className="w-5" />
                    <p>Salin</p>
                  </div>
                  <div className="bg-custom-200 p-2 rounded-lg">
                    <img src={bookmark} alt="" className="h-5 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center mb-2 flex justify-center items-center gap-4">
              <img src={leftstroke} className="w-1/3 h-1" />
              <p>Hari ini</p>
              <img src={rightstroke} className="w-1/3 h-1" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col w-full">
              <div className="flex justify-start ">
                <img src={user} alt="avatar1" className="w-12 h-12" />
                <p className="font-medium ml-3">You</p>
                <p className="ml-8 mt-1 text-xs ">1 min lalu</p>
              </div>
              <div className="flex items-start ml-14">
                <p>Ke Gunung Semeru butuh jaket berapa ? </p>
                <img src={edit} alt="edit" className="w-3 h-3 mt-2 ml-3" />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start ml-6">
                <h1 className="font-semibold">Jaka </h1>
                <h6 className="ml-2">24 Sep ▪ 11:30 PM</h6>
              </div>
              <div className="relative">
                <img
                  src={bot}
                  alt="bot ava"
                  className="absolute z-1 w-10 h-10"
                />
              </div>
              <div className="bg-custom-600 z-0 ml-4 p-8 rounded-2xl mb-4">
                <h1>
                  Ketersediaan jaket tergantung pada masing-masing kebutuhan
                  orang. Tapi untuk keamanan dan kenyamanan pastikan membawa
                  minimal 2 jaket dengan salah satu menjadi cadangan dan
                  pastikan tubuhmu dapat beradaptasi dengan cepat terhadap suhu
                  dingin
                </h1>
                <div className="flex justify-end items-center gap-4">
                  <div className="flex bg-custom-200 p-2 rounded-lg gap-2">
                    <img src={generate} alt="" className="h-6 w-6" />
                    <p>Generate Respon</p>
                  </div>
                  <div className="flex bg-custom-200 p-2 rounded-lg gap-2">
                    <img src={copy} alt="" className="w-5" />
                    <p>Salin</p>
                  </div>
                  <div className="bg-custom-200 p-2 rounded-lg">
                    <img src={bookmark} alt="" className="h-5 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 bg-slate-100 rounded-2xl items-center">
              <div id="input-chat" className="justify-self-end">
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="flex items-center">
                    <img src={texticon} alt="icontext" className="h-8 w-8" />
                    <p className="ml-5">
                      pengen liburan ke Malang tapi yang murah..
                    </p>
                  </div>
                  <img src={send} alt="send" className="w-8 h-8 self-end" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
