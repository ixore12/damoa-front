/* eslint-disable */

import '../App.css';
import '../App.scss';


import React from 'react';

import { Link, Route, Switch, NavLink, Redirect } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import { getCurrentUser } from '../util/APIUtils.js';
import { ACCESS_TOKEN } from '../constants/index.js'

function Header(props) {
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

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setCurrentUser(null);
    setAuthenticated(false);
    alert("로그아웃 되었습니다!!");
    console.log("로그아웃 성공!!");
    window.location.href="/";

  }

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, [])

  let [scrollY, setScrollY] = useState(0);// window의 pageYOffset 값을 저장
  let [scrollActive, setScrollAcitve] = useState(false);

  function handleScroll() {
    if (scrollY > 50) {
      setScrollY(window.pageYOffset);
      setScrollAcitve(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollAcitve(false);
    }
  }

  useEffect(() => {// useEffect로 실시간 감시
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);// addEventListener: scroll 행위 여부 판단
    }// window에서 스크롤 감시 시작
    scrollListener();// window에서 스크롤 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };// window에서 스크롤 감시 종료 -> 이벤트리스너를 삭제해줘야 스크롤할 때 2-3번씩 렌더 되지 않음
  });
  // ********신청하기 모달창 데이터
  let [modal, setModal] = useState(false);
  let [modal2, setModal2] = useState(false);

  function attend() {
    setModal(false);
    setModal2(true);
  }

  function Modal() {
    return (
      <div className="attend-modal">
        <div className="frame">
          <button className="x" onClick={() => setModal(false)}>X</button>
          <div className="attend">그룹에 참여하시겠습니까?</div>
          <div className="btns">
            <button className="cancel" onClick={() => setModal(false)}>취소</button>
            <button className="attend" onClick={attend}>신청하기</button>
          </div>
        </div>
      </div>
    )
  }

  function Modal2() {
    return (
      <div className="attend-modal2">
        <div className="frame">
          <button className="x" onClick={() => setModal2(false)}>X</button>
          <div className="attend">그룹 참여신청이 완료되었습니다!<br />🎈🎉🎈🎉🎈</div>
          <div className="btns">
            <button className="attend" onClick={() => setModal2(false)}>확인</button>
          </div>
        </div>
      </div>
    )
  }

  // ********신청수락하기 모달창 데이터
  let [acceptModal, setAcceptModal] = useState(false);
  let [refuse, setRefuse] = useState(false);
  let [accept, setAccept] = useState(false);

  function Refuse() {
    setAcceptModal(false)
    setRefuse(false)
  }
  function Accept() {
    setAcceptModal(false)
    setAccept(false)
  }

  function AcceptModal() {
    return (
      <div className="accept-modal">
        <div className="frame">
          <button className="x" onClick={() => setAcceptModal(false)}>X</button>
          <div className="group-name">영어회화 소모임</div>
          <div className="member">
            <div className="list">
              <ul>
                <li className='nick'>누구세요</li>
                <li>22세</li>
                <li>남성</li>
              </ul>
            </div>
            <div className="btns">
              <button className="delete" onClick={() => setRefuse(true)}>거절</button>
              <button className="accept" onClick={() => setAccept(true)}>수락</button>
            </div>
          </div>
          <div className="member">
            <div className="list">
              <ul>
                <li className='nick'>누구세요</li>
                <li>22세</li>
                <li>남성</li>
              </ul>
            </div>
            <div className="btns">
              <button className="delete" onClick={() => setRefuse(true)}>거절</button>
              <button className="accept" onClick={() => setAccept(true)}>수락</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  function AcceptModal2() {
    return (
      <div className="accept-modal2">
        <div className="frame">
          <button className="x" onClick={() => setRefuse(false)}>X</button>
          <p>'누구세요'님의 그룹 신청을 거절하시겠습니까?</p>
          <button className="btn" onClick={Refuse}>거절</button>
          <button className="btn ok" onClick={() => setRefuse(false)}>취소</button>
        </div>
      </div>
    )
  }
  function AcceptModal3() {
    return (
      <div className="accept-modal2">
        <div className="frame">
          <button className="x" onClick={Accept}>X</button>
          <p>'누구세요'님의 그룹 신청을 수락했습니다!<br />🎈🎉🎈🎉🎈</p>
          <button className="btn ok" onClick={Accept}>확인</button>
        </div>
      </div>
    )
  }


  function navChange() {

    let navArray = [];

    if (authenticated === true) {
      navArray.push(
        <ul>
          <li><Link to="/SearchGroup/1">검색</Link></li>
          {/* <li onClick={() => setAcceptModal(true)}>!신청수락해줘!</li>
          <li onClick={() => setModal(true)}>!신청!</li>*/}
          <li><Link to="/freepost/1">게시판</Link></li> 
          <li><NavLink to="/mypage">마이페이지</NavLink></li>
          <li><a onClick={handleLogout}>로그아웃</a></li>
        </ul>
      )
    } else {
      navArray.push(
        <ul>
          <li><Link to="/SearchGroup/1">검색</Link></li>
          {/* <li onClick={() => setAcceptModal(true)}>!신청수락해줘!</li>
          <li onClick={() => setModal(true)}>!신청!</li> */}
          <li><Link to="/freepost/1">게시판</Link></li>
          <li><Link to="/login">로그인</Link></li>
        </ul>
      )
    }
    return navArray[0];
  }

  return (
    <div className="App">

      {/* navbar */}
      <div className={scrollActive ? "nav navBack" : "nav"}>
        <div className="nav-list1 title">
          <Link to="/">다모여</Link>
        </div>
        <div className="nav-list1 right">
          
          {navChange()}
        </div>
      </div>



      {
        modal === true
          ? <Modal />
          : null
      }
      {
        modal2 === true
          ? <Modal2 />
          : null
      }
      {
        acceptModal === true
          ? <AcceptModal />
          : null
      }
      {
        refuse === true
          ? <AcceptModal2 />
          : null
      }
      {
        accept === true
          ? <AcceptModal3 />
          : null
      }
    </div>
  );
}

export default Header;