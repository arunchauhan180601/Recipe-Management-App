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
          <p className='discriptionPara' >The Recipe Management App is a dynamic and user-friendly platform designed to simplify the process of organizing and sharing recipes. Built with ReactJS, NodeJS, and MongoDB, the app allows users to easily create, edit, and manage their favorite recipes in one place. With a powerful search and filtering system, users can quickly find recipes based on ingredients, cuisine, or dietary preferences. </p>
          <p className='discriptionPara'> The app features secure user authentication with JWT, ensuring that personal recipe collections remain private. Users can also explore popular recipes shared by others and contribute their own. Its clean, intuitive interface makes meal planning and cooking an enjoyable experience. Whether you're a home cook or a culinary enthusiast, this app is a must-have tool to elevate your kitchen game. </p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox