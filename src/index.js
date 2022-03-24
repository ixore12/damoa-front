import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import { Provider } from "react-redux";
import { combineReducers, createStore } from 'redux';

let freePosts = [
  {
    no: 1,
    title: "free첫번째 글",
    content: "free첫번째 글입니다",
    id: "apple",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "a1",
        content: "free첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "a2",
        content: "free두번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 2,
    title: "free두번째 글",
    content: "free두번째 글입니다",
    id: "grape",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "b1",
        content: "free첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "b2",
        content: "free두번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "b3",
        content: "free세번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 3,
    title: "free세번째 글",
    content: "free세번째 글입니다",
    id: "pear",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "c1",
        content: "free첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "c2",
        content: "free두번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 4,
    title: "free네번째 글",
    content: "free네번째 글입니다",
    id: "cherry",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "d1",
        content: "free첫번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 5,
    title: "free다섯번째 글",
    content: "free다섯번째 글입니다",
    id: "orange",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "e1",
        content: "free첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "e2",
        content: "free두번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 6,
    title: "free여섯번째 글",
    content: "free여섯번째 글입니다",
    id: "melon",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "f1",
        content: "free첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "f2",
        content: "free두번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "f3",
        content: "free세번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "f4",
        content: "free네번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
]

let promoPosts = [
  {
    no: 1,
    title: "promo첫번째 글",
    content: "promo첫번째 글입니다",
    id: "apple",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "a1",
        content: "promo첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "a2",
        content: "promo두번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "a3",
        content: "promo세번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 2,
    title: "promo두번째 글",
    content: "promo두번째 글입니다",
    id: "grape",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "b1",
        content: "promo첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "b2",
        content: "promo두번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 3,
    title: "promo세번째 글",
    content: "promo세번째 글입니다",
    id: "pear",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "c1",
        content: "promo첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "c2",
        content: "promo두번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 4,
    title: "promo네번째 글",
    content: "promo네번째 글입니다",
    id: "cherry",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "d1",
        content: "promo첫번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 5,
    title: "promo다섯번째 글",
    content: "promo다섯번째 글입니다",
    id: "orange",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "e1",
        content: "promo첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "e2",
        content: "promo두번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
  {
    no: 6,
    title: "promo여섯번째 글",
    content: "promo여섯번째 글입니다",
    id: "melon",
    date: "2020.02.28 13:04",
    comment: [
      {
        id: "f1",
        content: "promo첫번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "f2",
        content: "promo두번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "f3",
        content: "promo세번째 댓글",
        date: "2020.02.28 13:04",
      },
      {
        id: "f4",
        content: "promo네번째 댓글",
        date: "2020.02.28 13:04",
      },
    ]
  },
]

let schedule = [
  {
    date: '2022.02.18',
    time: 'pm 7:00',
    group: '알고리즘 스터디 그룹',
    field: '기술'
  },
  {
    date: '2022.03.8',
    time: 'pm 6:00',
    group: '스윙 댄스 클래스',
    field: '예술'
  },
  {
    date: '2022.03.11',
    time: 'pm 6:20',
    group: '영어회화 스터디 그룹',
    field: '언어'
  },
]

function reducer(state = freePosts, action) {
  return state;
};
function reducer2(state = promoPosts, action) {
  return state;
};
function reducer3(state = schedule, action) {
  return state;
};

let store = createStore(combineReducers({ reducer, reducer2, reducer3 }));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
