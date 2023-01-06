import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data=[
  {
    avatar:AVTR1,
    name:'RAHUL SHARMA',
    review:'kfsdmvaklvmssssssdvkldamvkdfavfdiovjnjfadiovnafduivnafidvmafoidvfdvokmdfavklamvjklncvksdv'
  },
  {
    avatar:AVTR1,
    name:'RAHUL SHARMA',
    review:'kfsdmvaklvmssssssdvkldamvkdfavfdiovjnjfadiovnafduivnafidvmafoidvfdvokmdfavklamvjklncvksdv'
  },
  {
    avatar:AVTR1,
    name:'RAHUL SHARMA',
    review:'kfsdmvaklvmssssssdvkldamvkdfavfdiovjnjfadiovnafduivnafidvmafoidvfdvokmdfavklamvjklncvksdv'
  },
  {
    avatar:AVTR2,
    name:'RAHUL SHARMA',
    review:'kfsdmvaklvmssssssdvkldamvkdfavfdiovjnjfadiovnafduivnafidvmafoidvfdvokmdfavklamvjklncvksdv'
  }, {
    avatar:AVTR3,
    name:'RAHUL SHARMA',
    review:'kfsdmvaklvmssssssdvkldamvkdfavfdiovjnjfadiovnafduivnafidvmafoidvfdvokmdfavklamvjklncvksdv'
  }
]
function Testimonial() {
  return (
    <section  id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container mySwiper"  modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
      
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
export default Testimonial