import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user, setSearchQuery, showcarts, setShowCarts }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        const text = e.target.value;
        setSearchText(text);
        setSearchQuery(text);
    };

    const [show,setShow] = useState(false)
    const [showProfile,setShowProfile] = useState(false)
    const handleShow = () => {
        setShow(!show)
        setShowProfile(false)
    }
    
    const handleShowProfile = () => {
        setShow(false)
        setShowProfile(!showProfile)
    }

    const handleCarts = () => {
        setShowCarts(!showcarts)
    }

    const logout = () => {
        window.open('http://localhost:7777/auth/logout',"_self");
    }

    return (
        <div className='navbar-components'>
            <nav>
                <ul>
                    <div className="nav-logo">
                        <img src="./img/logo.png" alt="" />
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder='Search...'
                            className="search-input"
                            value={searchText}
                            onChange={handleSearch}
                        />
                    </div>

                    <div className="carts-shop" onClick={handleCarts}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99933 18.5493 4 18C4 17.45 4.196 16.979 4.588 16.587C4.98 16.195 5.45067 15.9993 6 16C6.55 16 7.021 16.196 7.413 16.588C7.805 16.98 8.00067 17.4507 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02 19.805 6.54933 20.0007 6 20ZM16 20C15.45 20 14.979 19.804 14.587 19.412C14.195 19.02 13.9993 18.5493 14 18C14 17.45 14.196 16.979 14.588 16.587C14.98 16.195 15.4507 15.9993 16 16C16.55 16 17.021 16.196 17.413 16.588C17.805 16.98 18.0007 17.4507 18 18C18 18.55 17.804 19.021 17.412 19.413C17.02 19.805 16.5493 20.0007 16 20ZM5.15 4L7.55 9H14.55L17.3 4H5.15ZM4.2 2H18.95C19.3333 2 19.625 2.171 19.825 2.513C20.025 2.855 20.0333 3.20067 19.85 3.55L16.3 9.95C16.1167 10.2833 15.8707 10.5417 15.562 10.725C15.2533 10.9083 14.916 11 14.55 11H7.1L6 13H18V15H6C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.3533 3.9 12.6993 4.25 12.05L5.6 9.6L2 2H0V0H3.25L4.2 2Z" fill="white"/>
                        </svg>    
                    </div>

                    <div className={`nav-compo nav-links ${show ? 'show-links' : ''}`}>
                        <li>
                            <Link className="link-item" to={'/men'}>
                                Men
                            </Link>
                        </li>
                        <li>
                            <Link className="link-item" to={'/women'}>
                                Women
                            </Link>
                        </li>
                        <li>
                            <Link className="link-item" to={'/products'}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link className="link-item" to={'/new'}>
                                New Release
                            </Link>
                        </li>
                    </div>
                    <div className="ham-button" onClick={handleShow}>
                        {
                            show ? 
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.711216 0.710972C0.798302 0.623666 0.901756 0.554398 1.01565 0.507136C1.12955 0.459874 1.25165 0.435547 1.37497 0.435547C1.49828 0.435547 1.62038 0.459874 1.73428 0.507136C1.84818 0.554398 1.95163 0.623666 2.03872 0.710972L6.99997 5.6741L11.9612 0.710972C12.0484 0.623807 12.1519 0.554664 12.2657 0.507491C12.3796 0.460318 12.5017 0.436038 12.625 0.436038C12.7482 0.436038 12.8703 0.460318 12.9842 0.507491C13.0981 0.554664 13.2016 0.623807 13.2887 0.710972C13.3759 0.798137 13.445 0.901617 13.4922 1.0155C13.5394 1.12939 13.5637 1.25145 13.5637 1.37472C13.5637 1.49799 13.5394 1.62006 13.4922 1.73394C13.445 1.84783 13.3759 1.95131 13.2887 2.03847L8.32559 6.99972L13.2887 11.961C13.3759 12.0481 13.445 12.1516 13.4922 12.2655C13.5394 12.3794 13.5637 12.5015 13.5637 12.6247C13.5637 12.748 13.5394 12.8701 13.4922 12.9839C13.445 13.0978 13.3759 13.2013 13.2887 13.2885C13.2016 13.3756 13.0981 13.4448 12.9842 13.492C12.8703 13.5391 12.7482 13.5634 12.625 13.5634C12.5017 13.5634 12.3796 13.5391 12.2657 13.492C12.1519 13.4448 12.0484 13.3756 11.9612 13.2885L6.99997 8.32535L2.03872 13.2885C1.95155 13.3756 1.84807 13.4448 1.73419 13.492C1.6203 13.5391 1.49824 13.5634 1.37497 13.5634C1.2517 13.5634 1.12963 13.5391 1.01575 13.492C0.901861 13.4448 0.798381 13.3756 0.711216 13.2885C0.624051 13.2013 0.554908 13.0978 0.507735 12.9839C0.460562 12.8701 0.436282 12.748 0.436282 12.6247C0.436282 12.5015 0.460562 12.3794 0.507735 12.2655C0.554908 12.1516 0.624051 12.0481 0.711216 11.961L5.67434 6.99972L0.711216 2.03847C0.62391 1.95139 0.554642 1.84793 0.50738 1.73404C0.460118 1.62014 0.435791 1.49804 0.435791 1.37472C0.435791 1.25141 0.460118 1.12931 0.50738 1.01541C0.554642 0.901512 0.62391 0.798058 0.711216 0.710972Z" fill="white"/>
                            </svg>
                            : 
                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55229 23.5523 10 23 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H23C23.5523 16 24 16.4477 24 17C24 17.5523 23.5523 18 23 18H1C0.447715 18 0 17.5523 0 17Z" fill="white"/>
                            </svg>
                        }

                    </div>
                    <div className="user-login" onClick={handleShowProfile}>
                        <h4>
                            {user?.displayName }
                        </h4>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8ZM13 8C13 8.53043 12.7893 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 11 10C10.4696 10 9.96086 9.78929 9.58579 9.41421C9.21071 9.03914 9 8.53043 9 8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6C11.5304 6 12.0391 6.21071 12.4142 6.58579C12.7893 6.96086 13 7.46957 13 8Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74723 15.4399 5.8299 14.5467 7.07143 13.9323C8.31297 13.3179 9.67974 12.9988 11.065 13C12.4323 12.9987 13.7819 13.3095 15.0109 13.9088C16.2399 14.508 17.316 15.3799 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11ZM11 20C8.93395 20.0031 6.93027 19.2923 5.328 17.988C5.97293 17.0647 6.83134 16.3109 7.83019 15.7907C8.82905 15.2705 9.93879 14.9992 11.065 15C12.1772 14.9991 13.2735 15.2636 14.2629 15.7714C15.2524 16.2793 16.1064 17.0159 16.754 17.92C15.1393 19.2667 13.1026 20.0029 11 20Z" fill="white"/>
                        </svg>
                        {showProfile ? 
                            <div className="show-profile">
                                <div className="prof-item">
                                    <h5> Checkout </h5>
                                </div>
                                <div className="prof-item" onClick={logout}>
                                    <h5> Logout </h5>
                                </div>  
                            </div>
                        : <></>}
                    </div>
                </ul>   
            </nav>
        </div>
    )
}

export default Navbar