/* eslint-disable */

import '../App.scss';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from "react-router-dom";

function Main() {

    let [mouseOver11, setMouseOver11] = useState(false);
    let [mouseOver22, setMouseOver22] = useState(false);
    let [mouseOver33, setMouseOver33] = useState(false);
    let [mouseOver1, setMouseOver1] = useState(false);
    let [mouseOver2, setMouseOver2] = useState(false);
    let [mouseOver3, setMouseOver3] = useState(false);
        let [mouseOverI, setMouseOverI] = useState(false);

    function damoyu() {
        scrollTo(0, 1000);
    }

    return (
        <div className='home'>
            <header>
                <div>다모여란?</div>
                <span onClick={damoyu} onMouseOver={() => setMouseOverI(true)} onMouseLeave={() => setMouseOverI(false)} className={mouseOverI ? "colorChange" : ""}> <i class="fa-solid fa-angles-down down"></i></span>
            </header>
            <div className="back1">
                <div className="box1">
                </div>
                <div className="box1-1-frame">
                    <Link to="/GroupMake"><div className="box1-1" onMouseOver={() => setMouseOver11(true)} onMouseLeave={() => setMouseOver11(false)}>
                        <div className={mouseOver11 ? "top orange bright" : "top orange"}><span>새로운 그룹 만들기</span></div>
                        <div className="bottom orange"></div>
                    </div></Link>
                    <Link to="/mypage">
                        <div className="box1-1" onMouseOver={() => setMouseOver22(true)} onMouseLeave={() => setMouseOver22(false)}>
                            <div className={mouseOver22 ? "top purple bright" : "top purple"}><span>가입한 그룹 찾기</span></div>
                            <div className={mouseOver22 ? "bottom purple bright" : "bottom purple"}></div>
                        </div></Link>
                    <Link to="/searchGroup/1">
                        <div className="box1-1" onMouseOver={() => setMouseOver33(true)} onMouseLeave={() => setMouseOver33(false)}>
                            <div className={mouseOver33 ? "top blue bright" : "top blue"}><span>테마별 그룹 찾기</span></div>
                            <div className={mouseOver33 ? "bottom blue bright" : "bottom blue"}></div>
                        </div></Link>
                </div>

                <div className="box2">
                    <div className="box2-1-frame">
                        <div className={mouseOver1 ? "box2-1 first bright" : "box2-1 first"} onMouseOver={() => setMouseOver1(true)} onMouseLeave={() => setMouseOver1(false)}>
                            <ul>
                                <li className='title'>언어교환 및 파티</li>
                                <li className='field'>친목 활동</li>
                            </ul>
                        </div>
                        <div className={mouseOver2 ? "box2-1 second bright" : "box2-1 second"} onMouseOver={() => setMouseOver2(true)} onMouseLeave={() => setMouseOver2(false)}>
                            <ul>
                                <li className='title'>스윙 댄스 클래스</li>
                                <li className='field'>예술</li>
                            </ul>
                        </div>
                        <div className={mouseOver3 ? "box2-1 third bright" : "box2-1 third"} onMouseOver={() => setMouseOver3(true)} onMouseLeave={() => setMouseOver3(false)}>
                            <ul>
                                <li className='title'>알고리즘 스터디 그룹</li>
                                <li className='field'>기술</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back2">
                <div className="box">
                    <div className="img"></div>
                    <div className="text">
                        <p className='first'>비대면 시대에 새로운 대면 만남이 어렵나요?</p>
                        <p className='second'>새로운 대면 만남을 원한다면 <strong>다모여</strong> 사이트를 이용해보세요. <br />
                            취미별, 테마별, 정기 모임, 스팟 모임 등 <br />자유롭게 원하는 모임을 만들고, 사람들과 만남을 정해보세요.</p>
                        <p className='third'>친구들아! 다모여!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;