import { motion } from 'framer-motion';
import styled from "styled-components";

import { FaReact, FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

import OpetTitleImg from '../../public/imgs/ePet/opetTitle.png';
import OpetMainImg from '../../public/imgs/ePet/opetMain.png';
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
  .middle_left {

  }
  .middle_right {

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
              <a href="javascripts:void(0)">깃허브 바로가기&raquo;&raquo;</a>
              <p>강아지 정보 사이트</p>
            </div>
          </OpetMiddleTop>
          <OpetMiddleMiddle>
            <div className="middle_left">
              <p>
                다양한 <span>강아지 정보</span>를 확인하고 <span>저장</span>하는 공간<br/>
                내 근처의 강아지 병원이나 호텔을 볼 수 있는 지도까지!<br/>
                강아지 정보 사이트
              </p>
            </div>
            <div className="middle_right">

            </div>
          </OpetMiddleMiddle>
        </OpetMiddleBox>
        <OpetBottomBox></OpetBottomBox>
      </OpetContainer>
    </OpetMain>
  );
}

export default Test;