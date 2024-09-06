import { GrHomeRounded } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import { FaCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdPayment } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";


import "./Sidebar.css"
import sidebarLogo from "../media/WELEARN png.png"
import adminProfile from "../../assests/admin.png"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Sidebar = ({ toggleRemoveMenu, removeMenu }) => {
    // const { logoutUser } = useContext(AuthContext)

    return (
        <div className={`sidebar ${removeMenu}`} >
            <div className='sidebar__container'>
                <div className='sidebar__logo'>
                    <img src={sidebarLogo} alt="Logo" width={70} />
                    <IoCloseCircleOutline onClick={toggleRemoveMenu} />
                </div>
                <div className='sidebar__items'>
                    <div className="sidebar__links">
                        <NavLink
                            to="dashboard"
                            className={({ isActive }) =>
                                isActive ? "sidebar-link active" : "sidebar-link"
                            }
                        >
                            <GrHomeRounded />
                            <span>
                                Dashboard
                            </span>
                        </NavLink>
                        <NavLink
                            to="parents"
                            className={({ isActive }) =>
                                isActive ? "sidebar-link active" : "sidebar-link"
                            }
                        >
                            <HiOutlineUsers />
                            <span>
                                Parents
                            </span>
                        </NavLink>
                        <NavLink
                            to="tutors"
                            className={({ isActive }) =>
                                isActive ? "sidebar-link active" : "sidebar-link"
                            }
                        >
                            <FaChalkboardTeacher />
                            <span>
                                Tutors
                            </span>
                        </NavLink>
                        <NavLink
                            to="payments"
                            className={({ isActive }) =>
                                isActive ? "sidebar-link active" : "sidebar-link"
                            }
                        >
                            <MdPayment />
                            <span>
                                Payments
                            </span>
                        </NavLink>
                    </div>

                    <div className="profile">
                        <div className="profile__content">
                            <div className="profile__img">
                                <img src={adminProfile} alt="" />
                                <div>
                                    <FaCheck />
                                </div>
                            </div>
                            <div className="profile__title">
                                <p>Administrator</p>
                                <span>@admin</span>
                            </div>
                        </div>

                        <FiLogOut className="logout" onClick={{}} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar