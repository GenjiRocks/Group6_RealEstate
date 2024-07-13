import React from 'react'
import Header from '../Components/Header'

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row w-100 p-4">
          <div className='col-md-9'>
            <h2>Best Properties For Sale In Kerala</h2>
            <span className='heading-divider'></span>
            <p className='mb-6 '>
              "Here is the list of properties for sale in kerala,that include apartments,flats,office spaces,and houses for sale in kerala."
            </p>
          </div>

          <div className='col-md-3'></div>

        </div>
      </div>
      <div>
        Home</div>
    </>
  )
}

export default Home