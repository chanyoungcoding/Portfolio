import { motion } from 'framer-motion';
import styled from "styled-components";

import { FaReact, FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

import OpetTitleImg from '../../../public/imgs/ePet/opetTitle.png';
import OpetMainImg from '../../../public/imgs/ePet/opetMain.png';
import LiImg from '../../../public/imgs/ePet/liImg.png';
import SystemArchitecture from '../../../public/imgs/ePet/systemArchitecture.png';

import PhoneImg1 from '../../../public/imgs/ePet/phone1.png';
import PhoneImg2 from '../../../public/imgs/ePet/phone2.png';
import PhoneImg3 from '../../../public/imgs/ePet/phone3.png';
import PhoneImg4 from '../../../public/imgs/ePet/phone4.png';
import PhoneImg5 from '../../../public/imgs/ePet/phone5.png';

import { BiLogoTypescript } from "react-icons/bi";

const OpetMain = styled(motion.div)`
  background-color: #C4ABF2;
  padding: 30px;
  h1 {
    color: black;
  }
`

const OpetContainer = styled.div`
  background-color: white;
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 1px 1px 3px -1px gray;
`

const OpetTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 700px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const OpetMiddleBox = styled.div`
  margin-top: 30px;
  height: 700px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const OpetBottomBox = styled.div`
  position: relative;
  margin-top: 30px;
  height: 1000px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  h1 {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 30px 20px 10px;
    font-size: 24px;
    border-bottom: 3px solid #C4ABF2;
  }
  .box_1 {
    .phone1 {
      position: absolute;
      left: -150px;
    }
  }
  .box_2 {
    position: absolute;
    right: 0;
    h2 {
      position: absolute;
      right: 80px;
      font-size: 20px;
      span {
        font-weight: bold;
      }
    }
  }
  .box_3 {
    position: absolute;
    top: 250px;
    h2 {
      position: absolute;
      bottom: 100px;
      margin-left: 30px;
      font-size: 20px;
      span {
        font-weight: bold;
      }
    }
  }
  .box_4 {
    position: absolute;
    bottom: 90px;
    right: -20px;
    h2 {
      position: absolute;
      left: -230px;
      bottom: 30px;
      padding: 15px;
      background: linear-gradient(90deg, #515ada 0%, #efd5ff 100%);
      border-radius: 15px;
      font-size: 20px;
      line-height: 24px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  }
  .box_5 {
    position: absolute;
    bottom: 0;
    right: -20px;
  }
`

const OpetTopLeft = styled.div`
  position: relative;
  img {
    position: absolute;
    width: 400px;
    left: -60px;
    object-fit: cover;
  }
  div {
    position: relative;
    margin-top: 200px;
    margin-left: 40px;
    img {
      position: absolute;
      width: 600px;
      margin-left: 100px;
      top: 70px;
    }
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 26px;
    font-weight: 600;
  }
  h3 {
    margin: 5px 0px;
    color: #acacac;
  }
  
`
const OpetTopRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 700px;
  height: 100%;
  padding-right: 30px;
  background-color: #C4ABF2;
  clip-path: polygon(57% 0, 100% 0%, 100% 100%, 40% 100%);
  h1 {
    margin-top: 50px;
    font-size: 20px;
  }
  h2 {
    margin-top: 5px;
    font-size: 24px;
    font-weight: bold;
  }
  .skillbox {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    .react_icons {
      color: #2596DC;
    }
    .node_icons {
      color: #88C043;
    }
    .mongo_icons {
      color: #006548;
    }
    .ts_icons {
      color: #2F74C0;
    }
  }
`

const OpetMiddleTop = styled.div`
  display: flex;
  width: 450px;
  padding: 15px;
  border-bottom: 2px solid #C4ABF2;
  .top_left {
    margin: 10px 0px 0px 10px;
    border-right: 2px solid #C4ABF2;
    h1 {
      margin-right: 15px;
      padding: 0;
      font-size: 26px;
    }
    h2 {
      margin: 0px 10px 10px 0px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .top_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    a {
      padding: 2px;
      color: #585858;
      text-decoration: none;
    }
    p {
      margin-top: 5px;
      font-weight: bold;
    }
  }
`

const OpetMiddleMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 30px;
  .middle_left {
    p {
      margin-left: 10px;
      font-size: 20px;
      line-height: 25px;
    }
    span {
      font-weight: bold;
    }
    .systemarchitecture {
      position: absolute;
      margin-top: 50px;
      left: 10px;
      color: #5E5E5E;
      font-weight: bold;
      img {
        width: 500px;
        height: 300px;
        object-fit: cover;
        margin-top: 10px;
        border: 4px solid black;
        border-radius: 15px;
      }
    }
  }
  .middle_right {
    position: absolute;
    right: 0;
    top: -110px;
    padding: 0px 50px 30px 30px;
    border-bottom: 1px solid #C4ABF2;
    .percent {
      display: flex;
      align-items: center;
      margin: 10px;
      font-weight: bold;
      div {
        width: 150px;
        height: 10px;
        margin: 0px 15px;
        border-radius: 20px;
        background-color: #C4ABF2;
      }
    }
    h1 {
      font-size: 22px;
      margin-bottom: 10px;
    }
    ol {
      font-weight: bold;
      list-style-image: url(${LiImg});
    }
  }
`

const OpetMiddleBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 70px;
  padding: 10px;
  h2 {
    margin-top: 10px;
    font-weight: bold;
  }
  p {
    margin: 5px 0px;
  }
`

const Test = () => {
  return ( 
    <OpetMain
      className='EpetProject'
      initial={{ opacity: 0, y:1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2
      }}
    >
      <OpetContainer>
        <OpetTopBox>
          <OpetTopLeft>
            <img src={OpetTitleImg} alt="title"/>
            <div>
              <h2>강아지의 모든 것을 알고 싶습니까??</h2>
              <h3>강아지 정보 사이트</h3>
              <h1>O-Pet</h1>
              <img src={OpetMainImg} alt="#" />
            </div>
          </OpetTopLeft>
          <OpetTopRight>
            <h1>PLATFORM</h1>
            <h2>WEB</h2>
            <h1>DATE</h1>
            <h2>12.02 ~ 12.24</h2>
            <h1>My Skills</h1>
            <div className="skillbox">
              <FaReact size={40} className='react_icons'/>
              <FaNode size={40} className='node_icons' /> 
              <SiMongodb  size={40} className='mongo_icons' />
              <BiLogoTypescript  size={40} className='ts_icons' />
            </div>
          </OpetTopRight>
        </OpetTopBox>
        <OpetMiddleBox>
          <OpetMiddleTop>
            <div className='top_left'>
              <h2>프로젝트 소개</h2>
              <h1>O Pet</h1>
            </div>
            <div className='top_right'>
              <a href="javascripts:void(0)">프로젝트 구경하기&raquo;&raquo;</a>
              <a href="https://github.com/chanyoungcoding/MyPetProject">깃허브 바로가기&raquo;&raquo;</a>
              <p>강아지 정보 사이트</p>
            </div>
          </OpetMiddleTop>
          <OpetMiddleMiddle>
            <div className="middle_left">
              <p>
                다양한 <span>강아지 정보</span>를 확인하고 <span>저장</span>하는 공간<br/>
                강아지 병원이나 호텔을 볼 수 있는 지도까지!<br/>
                <span>강아지 정보 사이트</span>
              </p>
              <div className="systemarchitecture">
                <p>시스템 아키텍처</p>
                <img src={SystemArchitecture} alt="#"/>
              </div>
            </div>
            <div className="middle_right">
              <div className="percent">
                <p>기획</p>
                <div></div>
                <p>100%</p>
              </div>
              <div className="percent">
                <p>개발</p>
                <div></div>
                <p>100%</p>
              </div>
              <h1>기능 구현</h1>
              <ol>
                <li>회원가입/로그인/좋아요 기능</li>
                <li>전체적인 디자인 구현</li>
                <li>전체적인 아이디어 구현</li>
                <li>카카오 맵을 활용한 지도 표시</li>
                <li>Hooks 를 이용한 성능 최적화</li>
              </ol>
            </div>
          </OpetMiddleMiddle>
          <OpetMiddleBottom>
            <h1>개발환경</h1>
            <h2>Client</h2>
            <p>HTML&#09;/&#09;CSS&#09;/&#09;Javascript</p>
            <p>React&#09;/&#09;TypeScript&#09;</p>
            <p>React-query&#09;/&#09;react-router-dom&#09;/&#09;react-spring</p>
            <p>react-intersection-observer&#09;/&#09;scss&#09;/&#09;axios</p>
            <p>styled-components</p>
            <h2>Server</h2>
            <p>Node&#09;/&#09;MongoDB</p>
            <p>express&#09;/&#09;cors&#09;/&#09;jsonwebtoken</p>
            <p>dotenv&#09;/&#09;passport</p>
          </OpetMiddleBottom>
        </OpetMiddleBox>
        <OpetBottomBox>
          <h1>사이트의 모습</h1>
          <div className="box_1">
            <img src={PhoneImg1} alt="#" className='phone1' />
          </div>
          <div className="box_2">
            <h2><span>병원</span>과 <span>호텔</span>을 <span>한눈에!!</span></h2>
            <img src={PhoneImg2} alt="#" className='phone2' />
          </div>
          <div className="box_3">
            <h2>내 강아지와<br/> <span>함께한 시간</span>까지</h2>
            <img src={PhoneImg3} alt="#" className='phone3' />
          </div>
          <div className="box_4">
            <h2>
              그 외에도 강아지의 정보를<br/> 
              손쉽게 확인하고<br/>
              강아지의 건강 음식들도<br/> 
              저장할 수 있는 마이 페이지
            </h2>
            <img src={PhoneImg4} alt="#" className='phone4' />
          </div>
          <div className="box_5">
            <img src={PhoneImg5} alt="#" className='phone5' />
          </div>
        </OpetBottomBox>
      </OpetContainer>
    </OpetMain>
  );
}

export default Test;