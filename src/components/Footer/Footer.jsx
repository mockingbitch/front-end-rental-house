import React from 'react'
import './_footer.scss';

const Footer = () => {
    return (
        <>
            <div>
                <footer>
                    <div className="bottom">
                        <p>Copyright © RentalHouse, Inc. All Rights Reserved</p>
                    </div>
                </footer>
                <div className="footerMobileBlock" />
                <div className="footerMobile">
                    <div className="container">
                    <ul>
                        <a href="route('top')">
                        <li className="">
                            <i>
                            <img src="/img/icon/home.svg" alt="" />
                            </i>
                            <p>Home</p>
                        </li>
                        </a>
                        <a href="route('request.index')">
                        <li className="active">
                            <i>
                            <img src="/img/icon/request.svg" alt="" />
                            </i>
                            <p>Request</p>
                        </li>
                        </a>
                        <a href="route('top')">
                        <li className="{ active: isRouteActive('/notification') }">
                            <i>
                            <img src="/img/icon/noti.svg" alt="" />
                            <p className="new-notification">
                                10
                            </p>
                            </i>
                            <p>Notification</p>
                        </li>
                        </a>
                        <div>
                        <a href="route('login.method')">
                            <li>
                            <i>
                                <img src="/img/icon/account.svg" alt="" />
                            </i>
                            <p>Login</p>
                            </li>
                        </a>
                        </div>
                        <div>
                        <a href="route('top')">
                            <li className="{ active: navOpen }">
                            <i>
                                <img src="/img/icon/account.svg" alt="" />
                            </i>
                            <p>Account</p>
                            </li>
                        </a>
                        <div id="sidemenu">
                            <transition name="fade" appear="">
                            <div className="modal-overlay" />
                            </transition>
                            <transition name="translateX">
                            <nav>
                                <div className="sidemenu__wrapper">
                                <ul className="sidemenu__list">
                                    <div>
                                    <li className="sidemenu__item">
                                        <a href="route('top')">teeasf</a>
                                    </li>
                                    <li className="sidemenu__item">
                                        <a href="route('top')">test</a>
                                    </li>
                                    <li className="sidemenu__item">
                                        <a href="route('top')">test</a>
                                    </li>
                                    </div>
                                    <li className="sidemenu__item">
                                    <a href="route('logout')">Logout</a>
                                    </li>
                                </ul>
                                </div>
                            </nav>
                            </transition>
                        </div>
                        </div>
                    </ul>
                    </div>
                    <div className="container">
                    <ul>
                        <a href="route('top')">
                        <li className="active">
                            <i>
                            <img src="/img/icon/TeacherDashboard/pencil.svg" alt="" />
                            </i>
                            <p className="active">Hold</p>
                        </li>
                        </a>
                        <a href="route('top')">
                        <li>
                            <i>
                            <img src="/img/icon/TeacherDashboard/seed.svg" alt="" />
                            </i>
                            <p>レッスン管理</p>
                        </li>
                        </a>
                        <a href="route('top')">
                        <li>
                            <i>
                            <img src="/img/icon/TeacherDashboard/checkbox.svg" alt="" />
                            </i>
                            <p>リクエスト</p>
                        </li>
                        </a>
                        <a>
                        <li v-if="isLogin">
                            <i>
                            <img src="/img/icon/TeacherDashboard/chatDoc.svg" alt="" />
                            </i>
                            <p>レビュー管理</p>
                        </li>
                        </a>
                        <a href="route('top')">
                        <li v-if="isLogin">
                            <i>
                            <img src="/img/icon/TeacherDashboard/chart.svg" alt="" />
                            </i>
                            <p>売上管理</p>
                        </li>
                        </a>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer