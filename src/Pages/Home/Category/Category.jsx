import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div className='w-11/12 mx-auto mb-20'>

            <SectionTitle
                subHeading="From 11:00am to 10:00pm"
                heading="ORDER ONLINE"
            />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='relative' src={img1} alt="" />
                    <h4 className='absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-yellow-500 px-10 py-2 text-lg font-semibold text-white rounded-sm'>SALADS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={img2} alt="" />
                    <h4 className='absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-yellow-500 px-10 py-2 text-lg font-semibold text-white rounded-sm'>SOUPS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={img3} alt="" />
                    <h4 className='absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-yellow-500 px-10 py-2 text-lg font-semibold text-white rounded-sm'>PIZZAS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={img4} alt="" />
                    <h4 className='absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-yellow-500 px-10 py-2 text-lg font-semibold text-white rounded-sm'>DESSERTS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={img5} alt="" />
                    <h4 className='absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-yellow-500 px-10 py-2 text-lg font-semibold text-white rounded-sm'>DRINKS</h4>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Category;