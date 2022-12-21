import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import '../App.css';
function Commom() {
  return (
    <>
     <section id="header" className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
          <div className='row py-5'>
            <div className='col-10 mx-auto'>
              <div className="row">
                <div className='col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>Grow your business <br /> with <strong className='bg-danger text-white'>RohitTechnical</strong></h1>
                  <h5 className='my-3'>
                    We are the team of talented developer making website
                  </h5>
                  <div className='mt-3'>
                    <a href='' className='btnnn '>Get started  <FaAngleRight /></a>
                  </div>
                </div>
                <div className='col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-rmIdMi3bbXDz1jhXzYwzLrCUqHxBJxQFA&usqp=CAU' className="img-fluid animated" alt='home img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default Commom

