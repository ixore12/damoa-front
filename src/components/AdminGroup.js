/* eslint-disable */

import '../App.scss';
import { Link, Route, Switch } from "react-router-dom";


function AdminGroup() {

    return (
        <div className="post">
            <div className="post-box">
                <div className="top">
                    <div className="tag">
                        <Link to="/AdminUser"><button className="free">사용자 관리</button></Link>
                        <Link to="/AdminGroup"><button className="promo">그룹 관리</button></Link>
                        <Link to="/AdminChat"><button className="promo">채팅 관리</button></Link>
                        <Link to="/AdminPost"><button className="promo">게시글 관리</button></Link>
                    </div>
                    <div className="head">
                        <div className="title">
                            <span className='first'>관리자</span>
                            <span className='second'>게시글관리</span>
                        </div>
                        <div className="search">
                            <input type="text" id='search' />
                            <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <div class="row">
                    <div class="col-md-1">No</div>
                    <div class="col-md-5">게시글 이름</div>
                    <div class="col-md-3">작성자</div>
                    <div class="col-md-1">태그</div>
                    <div class="col-md-1">신고</div>
                    <div class="col-md-1">삭제</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminGroup;