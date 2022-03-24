/* eslint-disable */

import "../App.scss";

function GroupMake(props) {
  return (
    <div className="group-make">
      <div className="group-make-box">
        <form
          method="post"
          action="/oauth2/redirect/groupinfo/add"
          enctype="multipart/form-data"
        >
          <table class="table">
            <tr className="hidden">
              <td>그룹아이디</td>
              <td><input type="text" name="userid" value={props.currentUser.id} /></td>
            </tr>
            <tr>
              <td className="first">그룹장</td>
              <td>
                <input
                  type="text"
                  name="memberId"
                  className="title"
                  value={props.currentUser.name}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="first">그룹 이름</td>
              <td>
                <input type="text" name="title" className="title" required />
              </td>
            </tr>
            <tr>
              <td className="first">그룹 사진</td>
              <td>
                <input type="file" name="uploadImg" />
              </td>
            </tr>
            <tr>
              <td className="first">내용</td>
              <td>
                <textarea
                  name="content"
                  placeholder="그룹에 대한 설명을 작성해보세요!"
                  className="content"
                  cols="600px"
                  rows="800px"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td className="first">모임 방식</td>
              <td className="radio">
                <input type="radio" name="type" value="온/오프라인" id="all" required />{" "}
                <label htmlFor="all">온/오프라인</label>
                <input
                  type="radio"
                  name="type"
                  value="온라인"
                  id="online"
                  required
                />{" "}
                <label htmlFor="online">온라인</label>
                <input
                  type="radio"
                  name="type"
                  value="오프라인"
                  id="offline"
                  required
                />{" "}
                <label htmlFor="offline">오프라인</label>
              </td>
            </tr>
            <tr>
              <td className="first" required>
                모임 지역
              </td>
              <td>
                <select name="local">
                  <option value="">지역선택</option>
                  <option value="서울">서울</option>
                  <option value="인천">인천</option>
                  <option value="대전">대전</option>
                  <option value="대구">대구</option>
                  <option value="부산">부산</option>
                  <option value="울산">울산</option>
                  <option value="광주">광주</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="btn">
                  <button type="submit">그룹생성</button>
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default GroupMake;