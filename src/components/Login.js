/* eslint-disable */

import '../App.scss';
import 네이버 from '../naver_icon/btnG_완성형.png';
import 카카오 from '../kakao_icon/kakao_login_large_narrow.png';
import 구글 from '../google_icon/btn_google_signin_dark_normal_web.png';
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from '../constants';
import { Component, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'

function Login() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (location.state && location.state.error) {
            setTimeout(() => {
                Alert.error(location.state.error, {
                    timeout: 5000
                });
                history.replace({
                    pathname: location.pathname,
                    state: {}
                });
            }, 100);
        }
    }, [])


    if (authenticated) {
        return <Redirect
            to={{
                pathname: "/",
                state: { from: location }
            }} />;
    }

    return (
        <SocialLogin />
    );
}

function SocialLogin() {

    return (
        <div className="login">
            <div className="login-frame">
                <div className="box">
                    <span className="title">다모여</span>
                    <span className="text">JOIN US!</span>
                    <div className="btns">
                        <a href={NAVER_AUTH_URL} > <div className="google"><img src={네이버} alt="" /></div></a>
                        <a href={GOOGLE_AUTH_URL} > <div className="google"><img src={구글} alt="" /></div></a>
                        {/* <a href={KAKAO_AUTH_URL} > <div className="google"><img src={카카오} alt="" /></div></a> */}
                        <div className="develope">!카카오 로그인 개발 보수중!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;