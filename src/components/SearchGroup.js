/* eslint-disable */

import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.scss';

function SearchGroup() {

    let state = useSelector((state) => state.reducer2);

    let dispatch = useDispatch();
    let history = useHistory();
    let { id } = useParams();

    // // 검색 기능
    const [allData, setAllData] = useState([]);// 검색한 모든 정보 보유
    const [filteredData, setFilteredData] = useState(allData);//  alldata의 사본 보유, 데이터에서 단어 검색 시 값 변경됨

    let handleSearch = (e) => {// 이벤트 컨트롤 할 수 있는 변수
        console.log(e.target.value);
        // let val = event.target.value.toLowerCase();// 값을 소문자로 설정
        let val = event.target.value;// input값을 val에 담음
        let result = [];//

        result = allData.filter((data) => {
            return data.title.search(val) != -1;// .search 메서드는 일치하는 검색이 없으면 -1을 반환
            // -> 일부 값이 발견될 때 -1과 같지 않으므로 검색 기준과 일치하는 값을 반환함
        });
        setFilteredData(result);// 필터링 된 데이터 상태를 결과 값과 동일하게 설정
    }

    const [testStr, setTestStr] = useState([]);

    // 변수 초기화
    function callback(str) {
        setTestStr(str);
    }

    // 변수 초기값
    useEffect(
        () => {
            axios({
                url: '/oauth2/redirect/groupinfo/list',
                method: 'GET'
            }).then((res) => {
                callback(res.data);
                console.log(res);
                setAllData(res.data);
                setFilteredData(res.data);
            }).catch((err) => {
                console.log('Error getting fake data' + err);
            })
        }, []);

    let filterArray = [];

    function filterVal() {
        {
            filteredData.map((val, index) => {
                return(
                    filterArray.push(
                        <div>
                            <hr />
                            <tr key={val.group_no} className="content">
                                <td className="no">{val.group_no}</td>
                                {/* 글에 해당하는 글 주소 집어넣기 */}
                                <td className="title" onClick={() => { history.push("/GroupInfCheck/" + `${val.group_no}`) }}>{val.title}</td>
                                <td className="id">{val.local}</td>
                                <td className="date">{val.type}</td>
                            </tr>
                        </div>
                    )
                )
            })
        }

        /*
<페이지 별 글 목록 생성하기>
ex.2개씩 -> 한 페이지 별 글 세개씩
*/
let pageArray = [];

        let n = (10 * id - 9) - 1;

        for (let i = 0; i < 10; i++) {
            n += 1;
            let newN = n - 1;

            pageArray.push(
                filterArray[newN]
            )
        }

        return pageArray;
    }




    /*
    <글 개수에 맞게 페이지 버튼 생성하기>
    ex.2개씩 -> 한 페이지 별 글 두개씩
    */
    function page() {
        let pageNum = [];

        for (let i = 1; i <= ((testStr.length) + 9) / 10; i++) {// 한 페이지 별 글 세개씩 -> 데이터 개수+2 / 3
            pageNum.push(<button className="page" onClick={() => { history.push("/SearchGroup/" + i) }} >{i}</button>);
            // 페이지 버튼 누르면 /freepost/1 , /freepost/2, /freepost/3 ... 이동
        }
        return pageNum;
    }

    function prev() {
        // 만약 현재 페이지가 1보다 크다면 전 페이지로 이동
        let prevNum = [];
        // let nowPage = id;// id: 1, 11, 21
        let prevPage = id - 1;
        if (id > 1) {
            prevNum.push(<button className="prev" onClick={() => { history.push("/SearchGroup/" + prevPage) }} >이전</button>)
        }
        return prevNum;
    }

    function next() {
        // 만약 현재 페이지가 마지막페이지 보다 작다면 다음 페이지로 이동
        let nextNum = [];
        // let nowPage = id;// id: 1, 11, 21
        let nowPage = parseInt(id)
        let nextPage = nowPage + 1;
        let maxPage = parseInt((testStr.length + 9) / 10);

        if (id < maxPage) {
            nextNum.push(<button className="next" onClick={() => { history.push("/SearchGroup/" + nextPage) }} >다음</button>)
        }

        return nextNum;
    }

    return (
        <div className="post">
            <div className="post-box">
                <div className="top">
                    <div className="tag">


                    </div>
                    <div className="head">
                        <div className="title">
                            <span className='first'>그룹검색</span>
                            <span className='second'></span>
                        </div>
                        <div className="search">

                            <input type="text" id='search' onChange={(e) => handleSearch(e)} />
                            <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="contents">
                    <table>
                        <tr className="head">
                            <td className="no">No</td>
                            <td className="title">그룹 이름</td>
                            <td className="id">지역</td>
                            <td className="date">모임방법</td>
                        </tr>
                        {filterVal()}
                        {/* {content()} */}
                    </table>
                </div>
                <hr />
                <div className="bottom">
                    <div className="btns">
                        {prev()}
                        {page()}
                        {next()}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchGroup;