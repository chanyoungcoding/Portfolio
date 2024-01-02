import { motion } from 'framer-motion';

import './EpetProject.css'

import EpetMain from '../../public/imgs/ePet/1.png';
import EpetMap from '../../public/imgs/ePet/2.png';
import EpetAdditional from '../../public/imgs/ePet/3.png';

const EpetProject = () => {
  
  return ( 
    <motion.div
      className='EpetProject'
      initial={{ opacity: 0, y:1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2
      }}
    >
      <div className="EpetProject__inner">
        <div className="inner__container">
          <h1>E-pet</h1>
          <h2>-Chan Young-</h2>
          <h3>
            E-pet 사이트는 PWA 를 사용하여 쉽고 빠르게 다운로드 할 수 있게 만들었고 기본적으로 디자인은 핸드폰 사용자에 맞춰서 만들었습니다.
            E-pet 사이트를 만들고 싶었던 이유는 간단하고도 손쉽게 강아지들의 세세한 정보들을 쉽고<br/> 빠르게 알고 싶었고 내 주변 강아지 호텔, 병원을
            쉽게 찾고 저장하고 싶은 취지에서 만들었습니다.
          </h3>
          <img src={EpetMain} alt="#" />
          <h3>
            회원가입 하는 부분은 아이디나 비밀번호에 꼭 필요한 패턴들을 넣게 만들었고 밑에 보이는 맵은 카카오 맵을 사용하여
            원하는 병원, 호텔들을 손쉽게 찾을 수 있게 만들었습니다.
          </h3>
          <img src={EpetMap} alt="#" />
          <h3> 그 외에 다양한 기능들을 만들어서 사용자들에게 많은 정보를 주고 있습니다.</h3>
          <img src={EpetAdditional} alt="#" />
          <a href="https://github.com/chanyoungcoding/MyPetProject">프로젝트 보러 가기</a>
        </div>
      </div>
    </motion.div>
  );
}

export default EpetProject;