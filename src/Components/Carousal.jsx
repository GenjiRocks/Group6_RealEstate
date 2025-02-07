import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TextMoves from './TextMoves';

function Carousal() {
  return (
    <>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 p-2"style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}>
            <Carousel showArrows={true} infiniteLoop={true}>
              <div>
                <img
                  src="https://shasonline.com/blog_images/ebece16ddc4cfec9ddd941b7c4fa7c57.jpg"alt="Property 1"style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '10px' }}
                />
                <p className="legend bg-success" style={{ width: '200px', marginTop: '5px', fontSize: '14px' }}>Flat/Apartment</p>
              </div>
              <div>
                <img
                  src="https://pbs.twimg.com/media/ExdzLZeVIAQrGSa?format=jpg&name=900x900" alt="Property 2"style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '10px' }} />
                <p className="legend bg-success" style={{ width: '200px', marginTop: '5px', fontSize: '14px' }}>Independent house/Villa</p>
              </div>
              <div>
                <img
                  src="https://www.keralarealestate.com/image/lg/property/property/2019/02/04/104136690/images/untitled-13.jpg" alt="Property 3" style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '10px' }} />
                <p className="legend bg-success" style={{ width: '200px', marginTop: '5px', fontSize: '14px' }}>Flat/Apartment</p>
              </div>
              <div>
                <img
                  src="https://www.skylinebuilders.com/uploads/media/Ranch-Web-Banner-016397f941a9ca163be709d7b681.webp"alt="Property 4"style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '10px' }}/>
                <p className="legend bg-success" style={{ width: '200px', marginTop: '5px', fontSize: '14px' }}>Independent house/Villa</p>
              </div>
            </Carousel>
          </div>
          <div className="col-md-6 p-2 mt-2">

            <h3>Why We're the Best Choice</h3>
            <p>We are dedicated to offering the finest properties across the picturesque state of Kerala. Whether you are seeking a tranquil beachfront villa, a modern apartment in the bustling city, or a serene countryside home, our curated selection ensures that you find the perfect property to suit your needs. Our extensive network and deep understanding of the local market enable us to provide exclusive listings and the best deals, ensuring a seamless and satisfying property search experience. Discover your dream home in Kerala with us, where quality and customer satisfaction are our top priorities.</p>
            <hr className="dark-line" />
           <TextMoves/>
          </div>
        </div>
      </div>
      <hr className="dark-line" />
    </>
  )
}

export default Carousal