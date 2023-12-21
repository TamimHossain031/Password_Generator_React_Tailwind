import { useState } from 'react'
import copy from './assets/copy.png'
import generate from './assets/generate.png'
import './App.css'

function App() {
  const [count, setCount] = useState('');
  

  const length = 12;
  const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const small = capital.toLowerCase();
  const number = '0123456789';
  const symble = '~`! @#$%^&*()-_+={}[]|\;:"<>,./?';
  const all = capital + small + number +symble;

  
  function generate_pass(){
    let password = ''
    password += capital[Math.floor(Math.random()*capital.length)];
    password += small[Math.floor(Math.random()*small.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symble[Math.floor(Math.random()*symble.length)];
    while(length > password.length){
      password += all[Math.floor(Math.random()*all.length)];
    }
    setCount(password);
  }

  function copy_(){
    const data = document.querySelector('.password');
    data.select();
    document.execCommand('copy');
  }
  return (
    <section className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-dvh flex items-center'>
      <div className='w-4/5 max-w-2xl  mx-auto space-y-5'>
        <h1 className='text-white text-4xl '>Generate a <br/> <span className='text-blue-900 bold border-b-4 border-blue-900'>Random Password</span></h1>
        <div className="display p-3 bg-white flex justify-between gap-2">
          <input type="text" className='password grow border-none outline-none text-xl' defaultValue={count} />
          <img src={copy} width={20} alt="copy" className='cursor-pointer' onClick={copy_}/>
        </div>
        <button className='bg-green-600 flex items-center gap-2 text-2xl py-3 px-4 text-white rounded-md ' onClick={generate_pass}><img src={generate} width={20} alt="generate" />Generate</button>
      </div>
      

    </section>
     
    
  )
}

export default App
