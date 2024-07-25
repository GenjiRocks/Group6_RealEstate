import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faLocationDot, faPaperPlane, faPhone} from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer';

function Pro_details() {
  // FUNCTION FOR IMAGE SLIDER
    const imgs =[
        {id:1,value:"https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"},
        {id:2,value:"data:image/jpeg;base64,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"},
        {id:3,value:"https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.webp?b=1&s=170667a&w=0&k=20&c=-PZY6ObjW0B-GN0Tgm6gaYKhwYP_KtAgSlGwsTzYUlQ="},
        {id:4,value:"https://media.istockphoto.com/id/2157389780/photo/the-room-features-roller-blinds-as-part-of-the-interior.webp?b=1&s=170667a&w=0&k=20&c=InR3g7AknfpIBZ2isYDjtXZiIk8_1MmtVqbfmF1PxOo="}
      
    ];
    const [sliderData,setSliderData]=useState(imgs[0])
    const handleClick=(index)=>{
      console.log(index);
      const slider=imgs[index];
      setSliderData(slider);
    }
  
    // collapse enquire
    const [open, setOpen] = useState(false);
  
    // Googlemap
    const data={ytube:"",
      link:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3930.0500131923554!2d76.25027807503022!3d9.929792990172071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTUnNDcuMyJOIDc2wrAxNScxMC4zIkU!5e0!3m2!1sen!2sin!4v1721821314095!5m2!1sen!2sin",
      location:"https://maps.app.goo.gl/KyiFwEGp5B3DZHZ59"};
  
  
    return (
      <>
        {/* calling header */}
          <Header />
  
        <div className="w-100 p-4 d-flex justify-content-between">
          <div className="ms-5">
            <h2> Villa for Sale at Mullakkal</h2>
            <p><FontAwesomeIcon icon={faLocationDot} className="text-danger mx-1"/><b>Mundamveli / Ernakulam (Kochi) </b><button className="btn btn-success btn-sm ms-2">forsale</button></p>
          </div>
          <div className="me-5">
            <h2 className="text-success">₹ 18,00,000</h2>
          </div>
        </div>
        
        <div className="row m-2">
          <div className="col-8 ">
            
          {/* Image slider */}
            <div className="rounded-1">
              <div className="d-flex justify-content-center">
              <img src={sliderData.value} height={'450px'} width={'700px'}/>
              </div>
              <div className="d-flex justify-content-center p-1">
                {
                  imgs.map((data,i)=>
                  <div className="p-2" key={data.id}>
                    <img className={sliderData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height={"50px"} width={"60px"}/>
                  </div>
                )
                }
              </div>
             </div>
             {/* end of Image slider */}
  
  
            <div className="border shadow mt-3">
              <div className="m-3">
              <h4>Description</h4>
              <hr />
              <h5>Land with House for Sale at Mundamveli, Ernakulam</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis harum incidunt, eius veniam dicta dolorem, provident reiciendis modi repellendus a, similique inventore placeat? Assumenda illo quisquam officiis, blanditiis libero voluptatum.
  
              </p>
              <p><span className="fs-5">: </span> <Link to={data.location} />Google Map Link<Link/></p>
              <span className="fs-5">Land Area: </span>30 cents (approximately 13068 square feet)
              </div>
  
            </div>
            <div className="border shadow mt-4">
              <div className="">
              <h4 className="m-3">Amenities</h4>
              <hr />
              <ul className="list-unstyled m-3">
                <li><FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE",}}  className='me-2' />Vehicle Parking facility</li>
                <li><FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE",}}  className='me-2' />Dining room</li>
                <li><FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE",}}  className='me-2' />Good residential area</li>
                <li><FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE",}}  className='me-2' />sitout</li>
                <li><FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE",}}  className='me-2' />hall</li>
              </ul>
              </div>
  
            </div>
            
          </div>
          <div className="col-4">
            {/* CARD FOR OWNER ,ENQUIRES WITH COLLAPSE */}
          <Card style={{ width: '18rem' }}>
          <Card.Body  className="justify-content-center">
            <div className="mr-5 ">
            <Card.Title>John</Card.Title>
          
          <Card.Text >
          <p><FontAwesomeIcon icon={faPhone} style={{color: "#B197FC",}} />780123456</p>
          <p><FontAwesomeIcon icon={faPhone} style={{color: "#B197FC",}} />987896567</p>
          </Card.Text>
          <div className="d-flex">
          <button className="btn btn-success btn-sm shadow-lg" onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}>
          Request
          </button>
        </div>
            </div>
        <Collapse in={open}>
        <div className="">
        <div className="d-flex justify-content-center align-items-center flex-column ">
  
        <p>Send an Enquiry</p>
        <hr />
              <form action="">
                <div className="mb-3">
                  <input type="text" placeholder='Name' className='form-control'/>
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Phone' className='form-control'/>
                </div>
                <div className="mb-3">
                  <input type="text" className='form-control' placeholder='E-mail' />
                </div>
  
                <div className="mb-3">
                  <textarea type="text" className='form-control' placeholder='' rows={4} />
                </div>
              </form>
              <button className="btn btn-lg"><FontAwesomeIcon icon={faPaperPlane} style={{color: "#74C0FC",}} /></button>
  
      </div>
        </div>
        </Collapse>
  
        </Card.Body>
      </Card>
      {/* END OF ENQUIRE */}
  
      {/* Map and address */}
  
            <div className="border rounded-1 shadow mt-3">
             <div className="d-flex m-3 justify-content-between">
             <h4 className="m-2">Address</h4> <button className="btn btn-success btn-sm m-2"><FontAwesomeIcon icon={faLocationDot} />open with google map</button>
             </div>
              <hr />
              <div className=" p-1">
                <iframe src={data.link} height={'400px'} width={'100%'}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
  
              </div>
            </div>
            {/* Youtube */}
            <div className="shadow mt-4" height='50vh' width='100%'>
              <h6 className="m-2 text-center">Watch video</h6>
              <div className="">
              <iframe width="560" height="315" src=""/>        
             </div>
            </div>
          </div>
        </div>
        <Footer />
  
      </>
    );
  }
  
  export default Pro_details;
  