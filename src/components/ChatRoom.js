/* eslint-disable */

import { useState, useRef, useCallback, useEffect } from "react";
import '../App.scss';
import 고양이 from '../img/cat-g2bcab3e69_1920.jpg'
import { Link, Route, Switch } from "react-router-dom";




function ChatRoom() {
 

    return (
       
             <div className="chatroom">
            <div className="frame">
                <div className="info">
                    <div className="profile">
                        <img src={고양이} alt="" className="photo" />
                        <span>캣잎주셈</span>
                    </div>
                    <div className="group-list">
                        <span className='title'>가입한 그룹 목록</span>
                        <Link to="/chatroom">
                            <div className="group">
                                <div className="name">스윙 댄스 클래스</div>
                                <div className="field">예술</div>
                                <span>20 +</span>
                            </div>
                        </Link>
                        <div className="group">
                            <div className="name">스윙 댄스 클래스</div>
                            <div className="field">예술</div>
                        </div>
                    </div>
                </div>
                <div className="chat-frame">
                    <div className="top">
                        <div className="chatbox">
                            <div className="chat">
                                <div className="title">알고리즘 스터디 그룹</div>
                                <div className="one my">
                                    <div className="text">안녕하세요!</div>
                                    <img src={고양이} alt="" className="photo" />
                                </div>
                                <div className="one your">
                                    <img src={고양이} alt="" className="photo" />
                                    <div className="text">안녕하세요!</div>
                                </div>
                            </div>
                        </div>
                        <div className="btns">
                            <button>참여자 리스트</button>
                            <button>채팅방 신고</button>
                            <button>그룹 나가기</button>
                        </div>
                    </div>
                    <div className="bottom">
                        <form action="" method="post">
                            <input type="text" />
                            <button type='submit'>전 송</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        
    );
}

export default ChatRoom;