import React from 'react'
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button} from 'react-bootstrap'
import Header from '../Components/Header'

function UserProf() {
  return (
    <>
    <Header />
    <div className='d-flex justify-content-between align-items-center p-5' style={{width:'100%', height:'100vh',background:'linear-gradient(to right, rgb(226, 226, 226), rgb(201, 214, 255))'}}>
      <div className='shadow px-4 py-4 rounded me-5'>
        <div className="d-flex justify-content-center">
              <h4> Your Listing</h4>
        </div>
        <div className="mt-4 bg-light py-2 rounded d-flex justify-content-between">
              <img className='ms-3' src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" width={'20%'} alt="" />
              
              <div className='d-flex align-items-center'>
                <h5>Beautiful Family House</h5>
                <h5 className='ms-5'>123 Main St, Springfield, IL 62704</h5>
              </div>
              <div className='d-flex align-items-center me-5'>
              <Button variant="outline-danger">
                <FontAwesomeIcon icon={faTrash} />
              </Button>{' '}
              </div>
        </div>
      </div>
      <div className='d-flex flex-column border shadow p-5 rounded-5' style={{width:'30%', background:'linear-gradient(135deg,#00feba,#5b548a)'}}>
        <FontAwesomeIcon icon={faUser} size="2xl" />
        <h1 className='text-center'>Profile</h1>
        <div className="w-100 mb-2">
          <h5>Username : <span>abc</span></h5>
          <h5>Email : <span>abc@gmail.com</span></h5>
          <div className='d-flex align-items-center justify-content-center mt-3'>
              <Button variant="outline-warning">Log Out</Button>{' '}
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default UserProf