/* eslint-disable */

import { useState, useEffect } from 'react';
import '../App.scss';
import 고양이 from '../img/cat-g2bcab3e69_1920.jpg'
import { Link, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';

function Mypage(props) {
    let state = useSelector((state) => state.reducer3);


    const [user, setUser] = useState("");
    const [currentUser, setCurrentUser] = useState(props);

    useEffect(() => {
        axios.post("api/users").then((response) => {
            if (response.data) {
                console.log(response.data);
                setUser(response.data);
            } else {
                alert("failed to");
            }
        });
    }, []);

    // ** 그룹데이터 불러오기
    const [groupData, setGroupData] = useState([]);

    // 변수 초기화
    function callback(str) {
        setGroupDat(str);
    }

    // 변수 초기값
    useEffect(
        () => {
            axios({
                url: '/fboard/',// **고치기
                method: 'GET'
            }).then((res) => {
                callback(res.data);
            }).catch((err) => {
                console.log('Error getting fake data' + err);
            })
        }, []);

    return (
        <div className="mypage">
            <div className="frame">
                <div className="info">
                    <div className="profile">
                        <img src={props.currentUser.profile} alt="" className="photo" />
                    </div>
                    <div className="myinfo">
                        <div className="text">
                            <table>

                                <tr>
                                    <td className="title">이메일</td>
                                    <td className="info">{props.currentUser.email}</td>
                                </tr>
                                <tr className="nickname">
                                    <td className="title">닉네임</td>
                                    <td className="info">{props.currentUser.name}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="schedule">
                        <div className="title">다모여 일정</div>
                        <div className="box">
                            <div className="m-frame">
                                {
                                    state.map((a, i) => {
                                        return (
                                            <div className="group-frame" key={i}>
                                                <span className="date">{state[i].date} <br />{state[i].time}</span>
                                                <div className="group">
                                                    <div className="name">{state[i].group}</div>
                                                    <div className="field">{state[i].field}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="join">
                        <div className="title">가입한 그룹</div>
                        <div className="box">
                            <Link to="/chatroom">
                                <div className="group">
                                    <div className="name">스윙 댄스 클래스</div>
                                    <div className="field">예술</div>
                                </div>
                            </Link>
                            <div className="group">
                                <div className="name">스윙 댄스 클래스</div>
                                <div className="field">예술</div>
                            </div>
                        </div>
                    </div>
                    <div className="bookmark">
                        <div className="title">즐겨찾기 그룹</div>
                        <div className="box">
                            <div className="group">
                                <div className="name">스윙 댄스 클래스</div>
                                <div className="field">예술</div>
                            </div>
                            <div className="group">
                                <div className="name">스윙 댄스 클래스</div>
                                <div className="field">예술</div>
                            </div>
                            <div className="group">
                                <div className="name">스윙 댄스 클래스</div>
                                <div className="field">예술</div>
                            </div>
                            <div className="group">
                                <div className="name">스윙 댄스 클래스</div>
                                <div className="field">예술</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommend">
                    <div className="title">그룹 추천</div>
                    <div className="box">
                        <div className="group">
                            <div className="name">스윙 댄스 클래스</div>
                            <div className="field">예술</div>
                        </div>
                        <div className="group">
                            <div className="name">스윙 댄스 클래스</div>
                            <div className="field">예술</div>
                        </div>
                        <div className="group">
                            <div className="name">스윙 댄스 클래스</div>
                            <div className="field">예술</div>
                        </div>
                        <div className="group">
                            <div className="name">스윙 댄스 클래스</div>
                            <div className="field">예술</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Mypage;