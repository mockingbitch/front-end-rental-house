import React from 'react'
import './_header.scss'
import logo from "../../assets/images/logo/RentalHouse.svg"

const HeaderSignIn = () => {
    return (
        <>
            <div className="header-signin">
                <div className="container">
                    <div className="nav-pc">
                        <div className="nav-pc__left">
                            <a href="">
                                <div className="logo">
                                    <i>
                                        <img src={ logo } alt="RentalHouse" />
                                    </i>
                                </div>
                            </a>
                        </div>
                        <div className="nav-pc__search">
                            <button className="button-image left">
                                <img src="/img/icon/Search.svg" alt="" />
                            </button>
                            <div className="search__wrap">
                            <input
                                className="pc searchInput"
                                type="text"
                                placeholder="Enter something..."
                            />
                            {/* <textarea
                                className="mobile searchInput"
                                type="text"
                                placeholder="Enter something..."
                            /> */}
                            </div>
                            <button className="buttonImage right">
                            <img src="/img/icon/Category.svg" alt="" />
                            </button>
                        </div>
                        <div className="navPc__right">
                            <a href="route('login.method')" className="button-header">
                            Sign
                            </a>
                            <a href="route('register.method')" className="button-header green">
                            Join
                            </a>
                            <a href="" className="button-header">
                            Logout
                            </a>
                        </div>
                        <div className="line-full" />
                    </div>
                    {/* <div className="navMobile">
                        <div className="navMobile__wrap">
                            <i>
                            <img src="/img/icon/arrownLeft.svg" alt="back" />
                            </i>
                            <a href="route('top')">
                            <div className="logo">
                                <i>
                                <img src="/img/logo/RentalHouse.svg" alt="RentalHouse" />
                                </i>
                            </div>
                            <h1>RentalHouse</h1>
                            </a>
                        </div>
                    </div>
                    <div className="line-full" /> */}
                </div>
            </div>
        </>
    )
}

export default HeaderSignIn