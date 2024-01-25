import { motion } from 'framer-motion';
import styled from 'styled-components';

import introImg from '../../../public/imgs/coffee/소개페이지.jpeg';
import Img1 from '../../../public/imgs/coffee/음성페이지.jpeg';
import Img2 from '../../../public/imgs/coffee/마이페이지.jpeg';
import Img3 from '../../../public/imgs/coffee/영양소페이지.jpeg';

const CoffeeMain = styled(motion.div)`
  background-color: #6C3A31;
  padding: 30px;
  h1 {
    font-size: 30px;
    color: black;
  }
`

const CoffeeContainer = styled.div`
  background-color: white;
  width: 900px;
  margin: 0 auto;
  box-shadow: 1px 1px 3px -1px gray;
`

const OpetTop = styled.div`
  .top {
    padding: 30px;
    padding-bottom: 100px;
    background-color: #986C4A;
  }
  .bottom {
    position: relative;
    .bottom__right {
      top: 0px;
      right: 0px;
      position: absolute;
      width: 100px;
      background-color: #986C4A;
      height: 510px;
    }
  }
  h1 {
    margin-bottom: 15px;
  }
  h2 {
    display: inline-block;
    padding: 10px 20px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-size: 20px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`

const OpetMiddle = styled.div`
  border-top: 1px solid black;
  h1 {
    display: inline-block;
    padding: 20px 300px 20px 20px;
    border-bottom: 1px solid black;
  }
  .middle {
    display: flex;
    h2 {
      padding: 20px;
      line-height: 25px;
      font-size: 20px;
    }
    h3 {
      font-size: 20px;
      padding: 0px 20px;
    }
    img {
      width: 450px;
      object-fit: cover;
    }
    span {
      font-weight: bold;
    }
    .h3__last {
      padding: 20px 40px;
    }
    .introskills {
      margin-top: 50px;
      border-top: 2px solid black;
      h4 {
        margin: 10px;
        font-size: 30px;
        font-weight: bold;
      }
      h5 {
        margin: 20px;
        font-size: 24px;
        font-weight: bold;
      }
      p {
        border-left: 1px solid black;
        font-size: 20px;
        padding: 10px 20px;
      }
      .gotosite {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 50px;
        a {
          color: black;
          text-decoration: none;
          padding: 10px;
        }
      }
    }
  }
`

export default function CoffeeProject() {
  return (
    <CoffeeMain
      className='CampProject'
      initial={{ opacity: 0, y:1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2
      }}
    >
      <CoffeeContainer>
        <OpetTop>
          <div className='top'>
            <h1>
              커피의 모든 정보<br/>
              Chans Coffee
            </h1>
            <h2>
              2024.10 ~ 11
            </h2>
          </div>
          <div className='bottom'>
            <img src={introImg} alt="#" />
            <div className='bottom__right'></div>
          </div>
        </OpetTop>
        <OpetMiddle>
          <h1>Chans Coffee</h1>
          <div className='middle'>
            <div>
              <h2>
                커피의 생산과정, 다양한 커피의 <span>영양소</span>를 <br/>
                확인하고 나에게 맞는 <span>커피를 만드는 법</span>까지!!! <br/>
                심지어 주변 커피 매점 <span>확인</span>과 원하는 제품을 주문하기 까지!!
              </h2>
              <img src={Img1} alt="#" />
              <h3>
                빠르게 찾을 수 있는 <span>검색 기능</span> <br/>
                <span>음성</span>으로 찾는 커피 영양소 
              </h3>
              <img src={Img2} alt="#" />
              <h3 className='h3__last'>
                <span>저장</span>을 해서 <br/>
                편하게 볼 수도 있어요!!
              </h3>
            </div>
            <div>
              <img src={Img3} alt="#" />
              <h3>
                <span>영양소</span> 와 <span>레시피</span>를 한눈에!!
              </h3>
              <div className='introskills'>
                <h4>Skills</h4>
                <h5>Client</h5>
                <p>React, TypeScript</p>
                <p>React-query, recoil</p>
                <p>Styled-components, Scss</p>
                <p></p>
                <h5>Server</h5>
                <p>Node, Express</p>
                <p>MongoDB</p>
                <div className='gotosite'>
                  <a href="https://chanscoffee.netlify.app">구경하기✨✨</a>
                  <a href="https://github.com/chanyoungcoding/Coffee-site">깃허브✨✨</a>
                </div>
              </div>
            </div>
          </div>
        </OpetMiddle>
      </CoffeeContainer>
    </CoffeeMain>

  )
}