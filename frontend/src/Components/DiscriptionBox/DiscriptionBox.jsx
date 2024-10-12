import React from 'react'
import "./DiscriptionBox.css"

const DiscriptionBox = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-2 col-sm-4 col-4  border border-2 pt-3 pb-2 text-center">
          <h6>Description</h6>
        </div>
        <div className="col-md-3 col-lg-2 col-sm-4 col-4 border border-2 pt-3 pb-2 text-center">
          <h6>Reviews(122)</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 border p-4">
          <p className='discriptionPara' >Welcome to Cignex, your ultimate platform for connecting with skilled freelancers and finding the perfect talent for your projects. Whether you're a business owner looking to hire experts or a freelancer seeking new opportunities, we’ve created a seamless environment to facilitate collaboration. Our diverse pool of professionals spans various fields, including graphic design, web development, writing, marketing, and more. Each freelancer is carefully vetted to ensure quality and reliability, making it easy for you to find the right fit for your needs.</p>
          <p className='discriptionPara'>With our user-friendly interface, you can browse through profiles, view portfolios, and read reviews to make informed decisions. We also offer secure payment options and a straightforward project management system to keep everything on track.

            Join our community today and unlock the potential of freelance talent at your fingertips. Let’s bring your projects to life together! </p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox