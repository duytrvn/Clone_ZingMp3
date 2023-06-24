import React from 'react'
import './LayoutUser.css'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

const UserLayout: React.FC = () => {
  return (
    <div className='container'>
        <div className="header">
            <Header/>
        </div>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="main">

        </div>
        <div className="footer">
          <Footer/>
        </div>
    </div>
  )
}

export default UserLayout