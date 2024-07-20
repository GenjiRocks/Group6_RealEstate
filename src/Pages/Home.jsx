import React from 'react'
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Components/Footer';
import Carousal from '../Components/Carousal';
import { Button } from 'react-bootstrap';


function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid mb-4">
        <div className="row w-100 p-5 ">
          <div className='col-md-10'>
            <h2 style={{ textDecoration: 'none' }}>Best Properties For Sale In Kerala</h2>
            <span className='heading-divider'></span>
            <p className='mb-6 mt-3' style={{ textDecoration: 'none' }}>
              "Here you can find properties for sale in kerala,that include apartments,flats,office spaces and houses."
            </p>
          </div>

          <div className='col-md-2'>
            <button className='btn btn-success p-2 mt-5'>
              See all properties <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-2"></div>

          <div className="col-md-8 p-2 shadow rounded mb-4">
            <div className="card" >
              <div className="row">
                <div className="col-md-4">
                  <img src='https://www.assethomes.in/wp-content/uploads/2024/05/Elevation-Day-Out-scaled.jpg.webp' className="img-fluid rounded-start" alt="Apartment" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Our latest project</h5>
                    <p className="card-text">Skyline Odyssey Premium 3 BHK & 4 BHK Apartment in Calicut</p>
                    <p className="card-text">Kozhikode, Calicut City, MIMS Hospital</p>
                    <p className="card-text text-primary fs-5"> &#x20B9; 1.38 Cr</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Button variant="success">Details</Button>
                        <Button className='ms-2' variant="info">Share <FontAwesomeIcon icon={faShare} style={{ color: 'white' }} /></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <Carousal />
      </div>
      <Footer />
    </>
  )
}

export default Home