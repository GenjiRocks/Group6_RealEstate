import React, { useState } from 'react'
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import Footer from '../Components/Footer';
import Carousal from '../Components/Carousal';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../Components/Testimonials';


function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  function handlePropertyClick() {
    navigate('/propertylisting')
  }
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
            <button onClick={handlePropertyClick} className='btn btn-success p-2 mt-5'>
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
                        <Button variant="success" onClick={handleShow}>Click here for Details</Button>
                        <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title> 
                              <div className='d-flex'>
                                <img className='mb-5' src='http://www.csu-mumbai.edu.in/images/new.gif' alt="imgNew" width={'20%'} />
                                <h3 className='text-info ms-1 mt-2'>Our latest project </h3>
                              </div>
                            
                            </Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body className='text-success text-justify'>
                          <p style={{ textAlign: 'justify' }}><span className='fs-4'>The Skyline Odyssey Premium</span> offers an exquisite living experience with its elegantly designed 3 BHK and 4 BHK apartments in the heart of Calicut. Each apartment is meticulously crafted to blend modern luxury with comfort, featuring spacious layouts and high-end finishes. The 3 BHK apartments provide an ideal balance of privacy and openness, while the 4 BHK units offer expansive living spaces perfect for larger families. Residents can enjoy a host of premium amenities, including state-of-the-art fitness centers, serene landscaped gardens, and a refreshing swimming pool. The development is strategically located to provide easy access to key areas of the city, ensuring convenience and connectivity. With its contemporary architecture and thoughtful design, Skyline Odyssey Premium sets a new standard for upscale living in Calicut.</p>
                          <img src='https://www.assethomes.in/wp-content/uploads/2024/05/Elevation-Day-Out-scaled.jpg.webp' className="img-fluid rounded-start" alt="Apartment" />
                          </Offcanvas.Body>
                        </Offcanvas>
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
        <Testimonials />
      </div>
      <Footer />
    </>
  )
}

export default Home