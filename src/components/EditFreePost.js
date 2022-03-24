/* eslint-disable */

import '../App.scss';
import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import { useCallback, useEffect, useState} from 'react';
import axios from 'axios';

function EditFreePost(props) {

    const [currentUser, setCurrentUser] = useState(props);
    const [value, setValue] = useState('');

    let { id } = useParams();

    const [testStr, setTestStr] = useState([]);
    // 변수 초기화
    function callback(str) {
        setTestStr(str);
    }

    useEffect(
        () => {
            axios({
                url: '/oauth2/redirect/fboard/edit/' + `${id}`,
                method: 'GET'
            }).then((res) => {
                callback(res.data);
            })
        }, []);



    const onChange = useCallback(e=>{
        setTestStr(e.target.value);
    },[]);

    return (
        <div className="writepost">
            <div className="writepost-box">
                <form action="/oauth2/redirect/fboard/" method="post" >
                    <div className="input-box">
                        <input type="text" name='id' value={testStr.id} className='hidden'></input>
                        {/* <input type="text" className="title" placeholder='제목' value={post._id}/> */}
                        <input type="text" className="title" placeholder='제목' name='title' value={testStr.title} onChange={onChange}/>
                        <input type="hidden" className='name' name='name' value={props.currentUser.name} />
                        <hr />
                        <textarea name="content" id="" cols="30" rows="20" className="content" placeholder='자유롭게 글을 작성해보세요!' value={testStr.content} onChange={onChange} ></textarea>
                    </div>
                    <div className="btn">
                        <button type='submit' >수정완료</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditFreePost;