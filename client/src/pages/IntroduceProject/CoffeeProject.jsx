import { motion } from 'framer-motion';

import './CoffeeProject.css'

import coffeeMain from '../../public/imgs/coffee/chanscoffeeMain.PNG';
import coffeeMap from '../../public/imgs/coffee/chanscoffeeMap.PNG';
import coffeeDetail from '../../public/imgs/coffee/chanscoffeeDetail.PNG';

export default function CoffeeProject() {
  return (
    <motion.div
      className='CampProject'
      initial={{ opacity: 0, y:1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2
      }}
    >
      <div className='CampProject__inner'>
        <div className="inner__container">
          <h1>Coffee-Camp</h1>
          <h2>-Chan Young-</h2>
          <img src={coffeeMain} alt="#"/>
          <p>
            찬스 커피의 메인 페이지 입니다. 사람들에게 좀더 편안하고 <br/>
            보기 쉽게 만들었으며 커피의 정보,레시피,영양소 등을 볼수 있는 사이트입니다.
          </p>
          <img src={coffeeMap} alt="#"/>
          <p>
            전국 매장의 위치 데이터를 가져와서 KakaoMap 을 활용하여 <br/>
            특정 매장을 검색했을 경우 위치를 찾아볼 수 있게 만들었습니다.
          </p>
          <img src={coffeeDetail} alt="#"/>
          <p>
            또한 커피의 영양소 정보들을 확인할 수 있게 만들었습니다.
          </p>
          <a href="https://github.com/chanyoungcoding/Coffee-site">프로젝트 보러 가기</a>

        </div>
      </div>
    </motion.div>

  )
}