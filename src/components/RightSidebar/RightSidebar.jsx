import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
import { logout } from '../../config/firebase'

const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Richard Stanford <img src={assets.green_dot} alt="" /> </h3>
        <p>Hey, there  i am using this shit</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1}  alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic1} alt="" />
        </div>
      </div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default RightSidebar