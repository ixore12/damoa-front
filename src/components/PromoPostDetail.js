/* eslint-disable */

import '../App.scss';
import { Link, Route, Switch, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';

function PromoPostDetail() {

    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadCurrentlyLoggedInUser = () => {
        setLoading(true);

        getCurrentUser()
            .then(response => {
                setCurrentUser(response);
                setAuthenticated(true);
                setLoading(false);
            }).catch(error => {
                setLoading(false);
            });
    }

    useEffect(() => {
        loadCurrentlyLoggedInUser();
    }, [])


    let state = useSelector((state) => state.reducer2);
    let history = useHistory();
    let { id } = useParams();

    const [testStr, setTestStr] = useState([]);
    // 변수 초기화
    function callback(str) {
        setTestStr(str);
    }

    useEffect(
        () => {
            axios({
                url: '/oauth2/redirect/pboard/list/' + `${id}`,
                method: 'GET'
            }).then((res) => {
                callback(res.data);
            })
        }, []);



    function remove() {
        if (window.confirm('해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.')) {

            axios({
                url: '/oauth2/redirect/pboard/delete/' + `${id}`,
                method: 'DELETE'
            }).then((res) => {
                callback(res.data);

            })
        }
        return window.location.href = '/promopost/1';
    }

    function btnChange() {

        let btnArray = [];

        if (authenticated === true && currentUser.name === testStr.name) {
            btnArray.push(
                <div className="btns">
                    <div>
                        <button className="update" onClick={update}>수정</button>
                    </div>
                    <div>
                        <button className='delete' onClick={remove}>삭제</button>
                    </div>
                </div>
            )
        } else {
            btnArray.push(
                <div>
                </div>
            )
        }
        return btnArray;
    }

    function update() {
        if (currentUser.name == testStr.name) {
            return history.push("/editpromopost/" + `${id}`);
        } else {
            // 수정 불가 팝업창 띄우기
            return window.location.href = "/promopost/1";
        }
    }

    return (
        <div className="postdetail">
            <div className="postdetail-box">
                <div key={testStr.id} className="content">
                    <div className='field'><strong>홍보게시판</strong></div>
                    <div className="title">{testStr.title}</div>
                    <div className="postinfo">
                        <span className="id">{testStr.id}</span>
                        <span className="date">{testStr.modifiedDate}</span>
                    </div>
                    <hr />
                    <p>
                        {testStr.content}
                    </p>
                    {btnChange()}
                </div>

                {/* <div className="comments">
                    {
                        state[id].comment.map(function (a, i) {
                            return (
                                <div className="comment" key={i}>
                                    <span className="id">{state[id].comment[i].id}</span>
                                    <span className="date">{state[id].comment[i].date}</span>
                                    <p>{state[id].comment[i].content}</p>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div> */}

                <form action="" method="post">
                    <textarea name="" id="" cols="30" rows="3" placeholder='댓글을 작성해보세요!'></textarea>
                    <div className="btn"><button type='submit'>댓글 작성</button></div>
                </form>
            </div>
        </div>
    )
}

export default PromoPostDetail;