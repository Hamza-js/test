"use client"; // This is a client component 👈🏽
import Image from 'next/image'

const axios = require('axios');


import { useState } from 'react'
export default function Home() {
  // const [count, setCount] = useState(0)

  const setCount = () => {
    axios({
        method  : 'POST',
        // url     : `http://18.130.154.18/api/getClasses`,
        url     : `https://www.lilbookz.co.uk/api/getClasses`,
        headers: { 
            'Content-Type' : 'application/json', 
            'Authorization': 'Bearer 1ab73bf44a3067bd598a98affe0a81d6140720bf',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        } 
    })
    .then(function (response : any) {
        // response.data['license'] = post.license;
        console.log('ssssssssssssss',response.data); 
    })
    .catch(function (error : any) {
        console.log('errpr========== Kenloinsurance.js', error); 
    });
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
       
      <button onClick={() => setCount()}>Click Me</button>

 
    </main>
  )
}
