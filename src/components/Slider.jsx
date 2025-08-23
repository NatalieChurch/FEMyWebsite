import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const slides = [
    {},
    {},
    {},
    {}
];


export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % visibleSlides.length);
        }, 15000);
        return () => clearInterval(timer);
    }, [visibleSlides.length]);

    useEffect(() => {
        if (currentSlide >= visibleSlides.length) {
            setCurrentSlide(0);
        }
    }, [currentSlide, visibleSlides.length]);


    return (
        <section></section>











    );
}