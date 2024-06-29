import React from 'react'
import './AppDonwload.css'
import { assets } from '../../assets/assets'
const AppDonwload = () => {
  return (
    <div className="app-donwload" id='app-donwload'>
        <p>For Better Experience Donwload <br /> Tomato App</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDonwload