import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import "./Testimonials.scss";
import dummyTestimonials from '../home/testimonial';

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTestimonials(dummyTestimonials);
    }, []);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    if (testimonials.length === 0) {
        return null;
    }

    const test = testimonials[currentIndex];

    return (
        <div className='small__section section__padding'>
            <div className='container' id='testimonials'>
                <div className='testimonials__head'>
                    <h2>Testimonials</h2>
                    <p>Don’t just take our words for it- here’s what members love about Welearn</p>
                </div>
                <div className='testimonial'>
                    <motion.div
                        className='testimonial__item'
                        key={test.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='testimonial__content'>
                            <p>{test.feedback}</p>
                            <div>
                                <h4>{test.name}</h4>
                                <h5>{test.company}</h5>
                            </div>
                        </div>
                    </motion.div>

                    <div className='testimonial__btns app__flex'>
                        <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>
                        <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
