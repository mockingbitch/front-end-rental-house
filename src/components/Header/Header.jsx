import React from 'react'

const Header = () => {
    return (
        <>
            <div className="headerTop">
                <div className="container">
                    <div className="navPc">
                        <div className="navPc__left">
                            <a href="">
                                <div className="logo">
                                    <i>
                                        <img src="/img/logo/RentalHouse.svg" alt="RentalHouses" />
                                    </i>
                                </div>
                                <h1>RentalHouses</h1>
                            </a>
                        </div>
                        <div className="navPc__search">
                            <button className="buttonImage left">
                                <img src="/img/icon/Search.svg" alt="" />
                            </button>
                            <div className="search__wrap">
                                <input className="pc searchInput" type="text" readOnly="" />
                                <textarea
                                    className="mobile searchInput"
                                    type="text"
                                    defaultValue={""}
                                />
                            </div>
                            <button className="buttonImage right">
                                <img src="/img/icon/Category.svg" alt="" />
                            </button>
                        </div>
                        <div className="navPc__right">
                            <a href="" className="buttonHeader">
                                a
                            </a>
                            <a href="" className="buttonHeader green">
                                a
                            </a>
                            <a href="route('logout')" className="buttonHeader">
                                a
                            </a>
                            {/* <button class="buttonImage">
                                    <img src="/img/icon/List.svg" alt="" />
                                </button> */}
                            {/* multi language */}
                            {/* <MultiLanguage /> */}
                            {/* <Notification
                                    v-if="page.props.auth.user"
                                    :notifications="notifications"
                                    :user="page.props.auth.user"
                                    :isDashBoardTeacher="false"
                                /> */}
                        </div>
                        <div className="lineFull"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header