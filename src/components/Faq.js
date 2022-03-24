/* eslint-disable */

import '../App.scss';
import {Accordion, Card} from 'react-bootstrap';

function Faq() {
    
    return (
        <div className="faq">
            <div className="faq-box">
                <div className="head">
                    <div className="title">
                        <div className="top">
                            <span className='first'>공지사항</span>
                        </div>  
                    </div>
                </div>
                <div className="contents">
                    <table>
                        <tr className="head">
                            <td className="title">제목</td>
                            <td className="date">날짜</td>
                        </tr>
                        
                    </table>
                </div>
                <div className="contents">
                    <table>
                    <tr className="head">
                            <td className="title">공지사항입니다</td>
                            <td className="date">03.15</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div className="title">자주 묻는 질문</div>
                    <div className="bottom">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>다모여 사이트는 어떤 사이트 인가요?</Accordion.Header>
                            <Accordion.Body>
                            사람들이 모여서 다양한 관심사로 이야기를 나눌 수 있도록 한 사이트입니다.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>그룹 생성은 어떻게 하나요?</Accordion.Header>
                            <Accordion.Body>
                            그에대한답변
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>채팅에 관한 문의</Accordion.Header>
                            <Accordion.Body>
                            그에대한답변
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>그룹원에 대한 문의</Accordion.Header>
                            <Accordion.Body>
                            그에대한답변
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>그 외 문의</Accordion.Header>
                            <Accordion.Body>
                            그에대한답변
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>그 외 문의</Accordion.Header>
                            <Accordion.Body>
                            그에대한답변
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>그 외 문의</Accordion.Header>
                            <Accordion.Body>
                            그에대한답변
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>그 외 문의</Accordion.Header>
                            <Accordion.Body>
                            그에대한답변
                            </Accordion.Body>
                        </Accordion.Item>
                        
                        </Accordion>
                        <div className='serviceCenter'>
                        <Card style={{ width: '100%'  }}>
                            <Card.Body>
                                <Card.Title>고객센터</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>
                                사이트 이용하면서 궁금하신 점이나 문의사항들을 
                                공식 이메일 damoyu@naver.com이나 고객센터:1234-1234로 문의 바랍니다.
                                </Card.Text>
                                <Card.Link href="#"></Card.Link>
                                <Card.Link href="#"></Card.Link>
                            </Card.Body>
                            </Card>
                        </div>
                    </div>
            </div>
        </div>
    )
}

    export default Faq;