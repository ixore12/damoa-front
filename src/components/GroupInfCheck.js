/* eslint-disable */

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import "../App.scss";
import 고양이 from "../img/cat-g2bcab3e69_1920.jpg";
import 기본이미지 from "../img/default_image.png";
import { getCurrentUser } from "../util/APIUtils";

function GroupInfCheck(props) {
  const [testStr, setTestStr] = useState([]);
  const [joinUsers, setJoinUsers] = useState([]);
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  // 변수 초기화
  function callback(str) {
    setJoinUsers(str);
  }

  useEffect(() => {
    axios
      .all([
        axios.get("/oauth2/redirect/groupinfo/read/" + `${id}`),
        axios.get("/oauth2/redirect/groupinfo/join/user/" + `${id}`),
        axios.get("/oauth2/redirect/groupinfo/" + `${id}` + "/comments/list"),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setTestStr(res1.data);
          callback(res2.data);
          setComments(res3.data);
        })
      )
      .catch((err) => {
        console.log("Error getting fake data" + err);
      });
  }, []);

  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCurrentlyLoggedInUser = () => {
    setLoading(true);

    getCurrentUser()
      .then((response) => {
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  // 그룹 가입 버튼
  function joinGroup() {
    const url = "/oauth2/redirect/groupinfo/join/" + `${id}`;
    if (authenticated === false) {
      // 비로그인시 로그인 화면으로 이동
      return (window.location.href = "/login");
    } else {
      axios
        .post(
          url,
          {},
          {
            params: {
              userid: `${currentUser.id}`,
            },
          }
        )
        .then((response) => {
          return success(response);
        })
        .catch((error) => {
          return fail(error);
        });

      return (window.location.href = "/GroupInfCheck/" + `${id}`);
    }



  }

  // 그룹 탈퇴 버튼
  function leaveGroup() {
    const url = "/oauth2/redirect/groupinfo/leave/" + `${id}`;
    if (authenticated === false) {
      return (window.location.href = "/login")
    } else {
      axios
        .post(
          url,
          {},
          {
            params: {
              userid: `${currentUser.id}`,
            },
          }
        )
        .then((response) => {
          return success(response);
        })
        .catch((error) => {
          return fail(error);
        });

      return (window.location.href = "/GroupInfCheck/" + `${id}`);
    }
  }

  // 그룹에 가입한 회원 목록
  function joinUser() {
    let userArray = [];

    joinUsers.map((val, index) => {
      userArray.push(
        <div className="group">
          <div key={joinUsers.id} className="name">
            {val.name}
          </div>
          <div className="field"></div>
        </div>
      );
    });


    return userArray;
  }

  // 그룹 이미지 변경 모달
  let [modal, setModal] = useState(false);

  function Modal() {
    return (
      <div className="attend-modal">
        <div className="frame">
          <button className="x" onClick={() => setModal(false)}>X</button>
          <div className="attend">이미지를 선택해주세요</div>
          <div className="btns">
            <form
              action="/oauth2/redirect/groupinfo/imgupdate"
              method="post"
              enctype="multipart/form-data"
            >
              <input type="text" name="id" className="hidden" value={testStr.id} />
              <input type="file" name="uploadImg" id="all" />
              <label className="upload-btn" htmlFor="all">사진 변경</label>
              <input type="submit" id="changeImg" value="확인" />
              <button className="cancel" htmlFor="changeImg" onClick={() => setModal(false)}>확인</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  function btnChange() {

    let userArray = [];
    joinUsers.map((val, index) => {
      userArray.push(val.name);
    });

    let btnArray = [];

    if (authenticated === true && currentUser.name === testStr.memberId) {
      btnArray.push(
        <div>
          <button onClick={() => setModal(true)} value="false">
            그룹 사진 변경
          </button>
        </div>
      )
    } else if (authenticated === true && currentUser.name != testStr.memberId) {
      if (userArray.includes(currentUser.name)) {
        btnArray.push(
          <div>
            <button onClick={leaveGroup}>그룹 탈퇴</button>
          </div>
        )
      } else {
        btnArray.push(
          <div>
            <button onClick={joinGroup}>그룹 가입</button>
          </div>
        )
      }
    } else {
      btnArray.push(
        <div>
          <button onClick={() => { window.location.href = "/login" }}>그룹 가입</button>
        </div>
      )
    }

    return btnArray;
  }

  let filterArray = [];
  function chatList() {
    comments.map((val, index) => {
      return (
        filterArray.push(
          <div className="comment" key={val.id}>
            <span className="id">{val.name}</span>
            <span className="date">{val.modified_date}</span>
            <p>{val.comment}</p>
            <hr />
          </div>
        )
      )
    })

    return filterArray;
  }

  return (
    <div className="GroupInfCheck">
      <div className="frame">

        <div className="info">
          <div className="profile">
            {/* <img src="file:///C:/groupimg/test.png" alt="" className="photo" width={50} height={150} /> */}
            <img
              src={"../groupImg/" + testStr.groupImg}
              alt={testStr.groupImg}
              className="photo"
            />

            <div className="btns">
              {btnChange()}
            </div>
          </div>
          <div className="myinfo">
            <div className="text">
              <table>
                <tr>
                  <td className="title">그룹 이름</td>
                  <td className="info">{testStr.title}</td>
                </tr>
                <tr>
                  <td className="title">모임방식</td>
                  <td className="info">{testStr.type}</td>
                </tr>
                <tr className="nickname">
                  <td className="title">지역</td>
                  <td className="info">{testStr.local}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="group">

          {/* 그룹멤버 */}
          <div className="member">
            <div className="title">그룹 멤버</div>
            <div className="box">
              <div className="m-frame">
                <div className="ym">회원 정보</div>
                <div className="group-frame">
                  <span className="date">그룹장</span>
                  <div className="group">
                    <div className="name">{testStr.memberId}</div>
                    <div className="field"></div>
                  </div>
                </div>
                <div className="group-frame">
                  <span className="date">회원</span>
                  {joinUser()}
                </div>
              </div>
            </div>
          </div>

          <div className="group-info">
            <div className="title">모임 안내</div>
            <div className="box">
              <div className="content">{testStr.content}</div>
            </div>
          </div>

          <div className="chat">
            <div className="title">채팅</div>
            <div className="box">
              <div className="commentbox">
                {chatList()}
              </div>
              <div className="chat">
                <form action='/oauth2/redirect/groupinfo/comments' method='post'>
                  <input type="hidden" name="groupInfo" value={testStr.id} />
                  <input type="hidden" name="user" value={currentUser.name} />
                  <textarea name="comment" id="" cols="30" rows="3" placeholder='글을 입력하세요!'></textarea>
                  <div className="btn"><button type='submit'>글 작성</button></div>
                </form>
              </div>
            </div>
          </div>



        </div>

      </div>

      {modal === true ? <Modal /> : null}

    </div>
  );
}

export default GroupInfCheck;