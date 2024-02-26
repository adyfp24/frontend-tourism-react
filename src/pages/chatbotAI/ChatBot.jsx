import React from 'react'
import Navbar from '../../includes/Navbar'
// import marker from '../../assets/images/Chatbot/Marker.png'
import chat from "../../assets/images/Chatbot/Chat.png"
import subscription from '../../assets/images/Chatbot/Manage-Subscription.png'
import settings from "../../assets/images/Chatbot/Settings.png"
import newchat from "../../assets/images/Chatbot/New Chat Icon.png"
import kebab from "../../assets/images/Chatbot/Kebab menu.png"
import chatmini from "../../assets/images/Chatbot/chatmini.png"
import save from "../../assets/images/Chatbot/save.png"

function ChatBot() {
  return (
    <div className='bg-custom-100 h-screen flex'>
      <Navbar />
      <aside className='bg-white h-[800px] w-20 mt-20 rounded-tr-3xl rounded-br-3xl'>
        <div className='flex'>
         <img src='' alt="" className='mt-10'/>
          <img src={chat} alt="" className='w-12 h-12 mt-10 ml-2 '/>
        </div>
        <div>
          <img src={subscription} alt="" className='w-12 h-12 ml-4 mt-6' />
        </div>
        <div>
          <img src={settings} alt="" className='w-12 h-12 ml-4 mt-6' />
        </div>
      </aside>
      <div className='ml-4 h-[800px] grid grid-cols-[400px,1370px] gap-4 mt-24 w-full'>
        <div className='Chatbox'>
          <div className='flex  justify-between'>
            <p className='text-2xl font-medium '>Chat</p>
            <div className=' flex justify-between'>
            <img src={newchat} alt="" className='w-10 h-10 mr-4' />
            <img src={kebab} alt="" className='w-10 h-10' />
            </div>
          </div>
          <div className='bg-slate-100 flex justify-around mt-4  rounded-xl'>
            <div className='m-4 bg-white w-full rounded-xl flex items-center justify-center'>
              <img src={chatmini} alt="" className='w-5 h-5 ' />
              <p className='text-center p-4 font-bold text-custom-200'>CHAT</p>
              <div className='bg-green-100 rounded-sm'>     
              <p className='text-custom-200 font-bold mx-2'>24</p>
              </div>
            </div>
            <div className='m-4 w-full flex justify-around '>
              <div className='m-4  w-full rounded-xl flex items-center justify-center'>

              <img src={save} alt="" />
              <p className='flex justify-center p-4 font-bold'>SIMPAN</p>
              <div className='bg-slate-200 rounded-sm'>     
              <p className=' font-bold mx-2'>24</p>
              </div>
              </div>
            </div>
          </div>
        </div> 
        <div className='bg-white rounded-xl'></div>
      </div>
    </div>
  )
}

export default ChatBot