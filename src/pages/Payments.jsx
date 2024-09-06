import React from 'react'
import Navbar from '../components/common/Navbar'
import { IoIosSearch } from 'react-icons/io'

const Payments = ({ toggleShowMenu }) => {
    return (
        <div className='main__container'>
            <Navbar toggleShowMenu={toggleShowMenu} />
            <div className="main__content">
                <div className='main__content-table-container'>
                    <div className='main__content-table-head'>
                        <h2>Payments</h2>
                        <div>
                            <input type="text" placeholder='Search' />
                            <IoIosSearch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments