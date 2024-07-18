import React from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons';


function Pro_listing() {
  return (
    <>
      <Header />
    <div className='container'>
        <h1 className='mt-4'>Properties</h1>
        <div className="row" >
          <div className="col-md-8">
            <Card className='mb-3'  style={{ width: '50rem' }}>
              <div className="row">
                <div className="col-md-6">
                <Card.Img variant="top" src="https://keralarealestate.com/image/lg/property/property/2024/06/07/091122929/images/imresizer-1719380378245.jpg"/>
                </div>
                <div className="col-md-6">
                <Card.Body>
                <Card.Title>House For Sale</Card.Title>
                <Card.Text>
                  <h4>house for sale at panampilly nagar,Ernakulam</h4>
                <p>Price: ₹4,50,000</p>
                <p>Location:Ernakualam </p>
               <div className='d-flex flex-column'style={{marginRight:'90%'}}>
               <FontAwesomeIcon icon={faBed} />
               <br></br>
               <FontAwesomeIcon icon={faBath} />
               </div>
               
            
                </Card.Text>
              </Card.Body>
              <Card.Body>
        
              </Card.Body>
                </div>
              </div>
            
            </Card>
            <Card className='mb-3'  style={{ width: '50rem' }}>
              <div className="row">
                <div className="col-md-6">
                <Card.Img variant="top" src="https://imagecdn.99acres.com/media1/24357/0/487140410M-1718166905838.webp"/>
                </div>
                <div className="col-md-6">
                <Card.Body>
                <Card.Title>House For Sale</Card.Title>
                <Card.Text>
                  <h4>house for sale at panampilly nagar,Ernakulam</h4>
                <p>Price: ₹4,50,000</p>
                <p>Location:Ernakualam </p>
                <div className='d-flex flex-column'style={{marginRight:'90%'}}>
               <FontAwesomeIcon icon={faBed} /> 
               <br></br>
               <FontAwesomeIcon icon={faBath} />
               </div>
            
                </Card.Text>
              </Card.Body>
                </div>
              </div>
            
            </Card>
            <Card className='mb-3'  style={{ width: '50rem' }}>
              <div className="row">
                <div className="col-md-6">
                <Card.Img variant="top" src="https://imagecdn.99acres.com/media1/24357/0/487140410M-1718166905838.webp"/>
                </div>
                <div className="col-md-6">
                <Card.Body>
                <Card.Title>House For Sale</Card.Title>
                <Card.Text>
                  <h4>house for sale at panampilly nagar,Ernakulam</h4>
                <p>Price: ₹4,50,000</p>
                <p>Location:Ernakualam </p>
                <div className='d-flex flex-column'style={{marginRight:'90%'}}>
               <FontAwesomeIcon icon={faBed} /> 
               <br></br>
               <FontAwesomeIcon icon={faBath} />
               </div>
            
                </Card.Text>
              </Card.Body>
              <Card.Body>
        
              </Card.Body>
                </div>
              </div>
            
            </Card>
            <Card className='mb-3'  style={{ width: '50rem' }}>
              <div className="row">
                <div className="col-md-6">
                <Card.Img variant="top" src="https://imagecdn.99acres.com/media1/24357/0/487140410M-1718166905838.webp"/>
                </div>
                <div className="col-md-6">
                <Card.Body>
                <Card.Title>House For Sale</Card.Title>
                <Card.Text>
                  <h4>house for sale at panampilly nagar,Ernakulam</h4>
                <p>Price: ₹4,50,000</p>
                <p>Location:Ernakualam </p>
                <div className='d-flex flex-column'style={{marginRight:'90%'}}>
               <FontAwesomeIcon icon={faBed} /> 
               <br></br>
               <FontAwesomeIcon icon={faBath} />
               </div>
            
                </Card.Text>
              </Card.Body>
              <Card.Body>
        
              </Card.Body>
                </div>
              </div>
            
            </Card>
          </div>


          {/*  <div className="col-md-4">
            <form>
              <input type="text" />
              <input type="text" />
            </form>
          </div>  */}
        </div>
      </div>

   <Footer/>
    </>
  )
}

export default Pro_listing