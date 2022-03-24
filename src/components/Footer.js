/* eslint-disable */

import '../App.css';
import '../App.scss';


import React from 'react';

import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

function Header() {



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






  return (
    <div className="App">
    <footer>
     <div className="link">
          <a href="#"><span>이용약관</span></a>
          <a href="#"><span>개인정보처리방침</span></a>
          <a href="#"><span>사업자 정보확인</span></a>
        </div>
        <div className="sentences">
          <div className="sentence">
            (주)다모여는 통신판매중개자로서 통신판매의 당사자가 아니며 개별
            판매자가 제공하는 서비스에 대한 이행, 계약사항 등과<br />관련한 의무와
            책임은 거래당사자에게 있습니다.
          </div>
          <div className="sentence">
            상호명:(주)다모여 · 대표이사:CHEOLSOO KIM ·
            개인정보책임관리자:김영희 · 주소:서울특별시 강남구 테헤란로 123, K1
            강남빌딩 5층<br />사업자등록번호:123-12-12345 · 통신판매업신고증:제
            2022-서울강남-12345 호 · 직업정보제공사업 신고번호:서울청 제
            2022-12호<br />고객센터:1234-1234 · 이메일:damoyu@damoyu.damoyu
          </div>
        </div>
        <div className="snsBtns">
          <div className="sns">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
          </div>
          <div className="sns">
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
          <div className="sns">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <div className="sns">
            <a href="#"><i className="fa-brands fa-google-plus"></i></a>
          </div>
          <div className="sns">
            <a href="#"><i className="fa fa-envelope"></i></a>
          </div>
        </div>
        </footer>
        </div>
  );
}

export default Header;
