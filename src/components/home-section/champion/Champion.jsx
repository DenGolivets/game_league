import { Swiper, SwiperSlide } from 'swiper/react'
import HomeSection from '../HomeSection'
import { championsData } from '../../../assets/dummy'
import './champion.scss'
import ChampionCard from './ChampionCard'
import { bg2 } from '../../../assets/images'

const Champion = props => {
  return (
    <HomeSection
      className={`champion ${props.isActive ? 'active' : ''}`}
      contentClassName='overlay'
      bgImage={bg2}
    >
      <div className="container relative">
        <div className="champion-list">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            grabCursor={true}
            nested={true}
          >
            {championsData.map((item, index) => (
              <SwiperSlide key={index}>
                <ChampionCard item={item} id={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection>
  )
}

export default Champion