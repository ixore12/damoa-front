/* eslint-disable */

import './App.css';
import './App.scss';
import Main from './components/Main.js';
import Login from './components/Login.js';
import Mypage from './components/Mypage.js';
import PromoPost from './components/PromoPost.js';
import FreePost from './components/FreePost.js';
import WriteFreePost from './components/WriteFreePost.js';
import WritePromoPost from './components/WritePromoPost.js';
import FreePostDetail from './components/FreePostDetail.js';
import PromoPostDetail from './components/PromoPostDetail.js';
import ChatRoom from './components/ChatRoom.js';
import EditFreePost from './components/EditFreePost.js';
import EditPromoPost from './components/EditPromoPost.js';
import AdminChat from './components/AdminChat.js';
import AdminGroup from './components/AdminGroup.js';
import AdminPost from './components/AdminPost.js';
import AdminUser from './components/AdminUser.js';
import Faq from './components/Faq.js';
import GroupInfCheck from './components/GroupInfCheck.js';
import GroupMake from './components/GroupMake.js';
import SearchGroup from './components/SearchGroup.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import PrivateRoute from './components/PrivateRoute';

import OAuth2RedirectHandler from './OAuth2RedirectHandler'
import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

function App(props) {



  const [authenticated, setAuthenticated] = useState(true);
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
        setAuthenticated(false);
      });
  }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setCurrentUser(null);
    setAuthenticated(false);
    alert("로그아웃 되었습니다!!");
  }

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, [])

  return (

    <div className="App">

      <Header authenticated={authenticated} onLogout={handleLogout.bind(this)}/>

      <switch>
        <Route exact path="/" ><Main /></Route>
        <Route path="/login" render={(props) => <Login authenticated={authenticated} {...props} />}></Route>
        <PrivateRoute exact path="/mypage" authenticated={authenticated} currentUser={currentUser} component={Mypage}></PrivateRoute>
        <Route exact path="/promopost/:id" ><PromoPost /></Route>
        <Route exact path="/freepost/:id" authenticated={authenticated} currentUser={currentUser} component={FreePost}></Route>
        <PrivateRoute exact path="/writefreepost" authenticated={authenticated} currentUser={currentUser} component={WriteFreePost}></PrivateRoute>
        <PrivateRoute exact path="/writepromopost" authenticated={authenticated} currentUser={currentUser} component={WritePromoPost}></PrivateRoute>
        <PrivateRoute exact path="/editfreepost/:id" authenticated={authenticated} currentUser={currentUser} component={EditFreePost}></PrivateRoute>
        {/* <Route exact path="/editpromopost/:id" ><EditPromoPost /></Route> */}
        <PrivateRoute exact path="/editpromopost/:id" authenticated={authenticated} currentUser={currentUser} component={EditPromoPost}></PrivateRoute>
        <Route exact path="/freepostdetail/:id" ><FreePostDetail /></Route>
        {/* <Route exact path="/promopostdetail/:id" ><PromoPostDetail/></Route> */}
        <Route exact path="/promopostdetail/:id" authenticated={authenticated} currentUser={currentUser} component={PromoPostDetail}></Route>
        <Route exact path="/chatroom" ><ChatRoom /></Route>
        <Route exact path="/GroupInfCheck/:id" ><GroupInfCheck/></Route>
        {/* <PrivateRoute exact path="/GroupInfCheck/:id" authenticated={authenticated} currentUser={currentUser} component={GroupInfCheck}></PrivateRoute> */}
        <Route exact path="/faq" ><Faq /></Route>
        <Route exact path="/adminUser" ><AdminUser /></Route>
        <Route exact path="/adminPost" ><AdminPost /></Route>
        <Route exact path="/adminGroup" ><AdminGroup /></Route>
        <Route exact path="/adminChat" ><AdminChat /></Route>
        <Route exact path="/SearchGroup/:id" ><SearchGroup /></Route>
        <PrivateRoute exact path="/groupMake" authenticated={authenticated} currentUser={currentUser} component={GroupMake}></PrivateRoute>
        {/* <PrivateRoute exact path="/groupMake" authenticated={authenticated} currentUser={currentUser} component={GroupMake}></PrivateRoute> */}
        {/* <Route exact path="/groupMake" ><GroupMake /></Route> */}
        <Route path="/oauth2/redirect"><OAuth2RedirectHandler /></Route>
      </switch>



      {/* Footer 부분 */}
      <Footer />


    </div>
  );
}

export default App;