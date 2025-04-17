import React from 'react'
import Link from 'next/link'

const ContactMe = () => {
  return (
    <main className='flex justify-center items-center h-screen' style={{backgroundColor:'#282828'}}>
      <div className='flex flex-col'>
        <div>Email : <Link href='/'>sithuhtin2022@gmail.com</Link></div>
        <div>Phone Number : +66 640 869 218</div>
        <div>Linked In : See Min Thu</div>
        <div></div>
      </div>
    </main>
  )
}


export default ContactMe