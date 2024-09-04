import React from 'react'


import "../../../components/dashboard/tutor/tutor.css"
import Navbar from '../../../components/common/Navbar'
import parentImg from "../../../assests/admin.png"

const Tutor = ({ toggleShowMenu }) => {
    return (
        <div className='main__container'>
            <Navbar toggleShowMenu={toggleShowMenu} />
            <div className='main__content'>
                <div className='main__content-table-container'>
                    <div className='main__content-table-head'>
                        <h2>Tutor</h2>
                    </div>
                    <div className='tutor__head'>
                        <div className='tutor__head-left'>
                            <img src={parentImg} alt="Parent Profile" />
                            <h2>Gabriella McPherson</h2>
                            <p>ayewealth11@gmail.com</p>
                        </div>
                        <div className="tutor__head-right">
                            <button>Review</button>
                            <button className='activate'>Activate</button>
                            <button>Delete</button>
                        </div>
                    </div>
                    <div className='tutor__bio'>
                        <h2>Bio Data</h2>
                        <p>Meet Emily, Your Dedicated Tutor!
                            With a passion for igniting young minds and a knack for making learning fun, Emily brings years of experience and expertise to Welearn. Holding a Bachelor's degree in Education and specialized certifications in Mathematics and Science, she is committed to nurturing a love for learning in every student she teaches.
                            Emily believes in creating personalized learning experiences tailored to each student's unique strengths and challenges. Whether it's breaking down complex concepts, providing engaging activities, or offering encouragement every step of the way, Emily is dedicated to helping her students thrive academically.
                            Outside the classroom, Emily enjoys hiking, painting, and exploring new cuisines. She looks forward to embarking on a rewarding learning journey with you!</p>
                    </div>
                    <div className='tutor__work'>
                        <h2>Work Data</h2>
                        <p>Trained <span>20 Users</span></p>
                        <p>Experience <span>4 Years</span></p>
                        <p>Location <span>Port Harcourt</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutor