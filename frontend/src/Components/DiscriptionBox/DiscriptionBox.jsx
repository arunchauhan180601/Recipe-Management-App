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
          <p className='discriptionPara' >A website that allows people to share and discover cooking recipes, offer cooking tutorials, and sell recipe eBooks, meal prep services, and digital cookbooks over the internet rather than in a traditional cookbook store or cooking school. Through a recipe-sharing website, a cook or chef can upload recipes.By combining the convenience of online learning with a marketplace for culinary tools, it revolutionizes the way people approach cooking and meal preparation. </p>
          <p className='discriptionPara'>A platform that enables users to explore, create, and share unique cooking recipes, sell culinary courses, kitchen gadgets, and digital meal plans online rather than in a physical culinary school or kitchenware shop. Through a culinary website, food enthusiasts can publish their favorite recipes.This platform fosters a dynamic community where users can engage with one another, exchange tips, and inspire creativity in the kitchen. </p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox