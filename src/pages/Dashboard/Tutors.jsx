import React from 'react'
import Navbar from '../../components/common/Navbar'

const Tutors = ({ toggleShowMenu }) => {
    return (
        <div className='main__container'>
            <Navbar toggleShowMenu={toggleShowMenu} />
        </div>
    )
}

export default Tutors