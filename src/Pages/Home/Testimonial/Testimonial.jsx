import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="w-11/12 mx-auto mb-20">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>

                        <div className="mx-20 flex flex-col items-center text-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="pt-3">{review.details}</p>
                            <h3 className="text-xl font-semibold text-yellow-500 pt-2">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;