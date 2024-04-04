import { Container } from '@mui/material';
import React from 'react';
import EventsCarousel from './EventsCarousel';

const Events = () => {
    return (
        <div className='  relative -top-28'>
            <h1 className=' text-center mb-9 text-4xl font-bold'> Our Events</h1>
            <EventsCarousel/>
        </div>
    );
};

export default Events;