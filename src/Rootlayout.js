import React from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar'
import First from './First'
function Rootlayout() {
  return (
    <div>
      <div>
      {/* <Navbar />
      <div style={{ minHeight: "75vh"}}>
        <Outlet /> */}
      {/* </div> */}
      <First />
    </div>
    </div>
  )
}

export default Rootlayout
