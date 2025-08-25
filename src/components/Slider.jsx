import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const slides = [
    {

        id: 1,
        lineOne: "Welcome!",
        lineTwo: "b",
        lineThree: "c",
        content: ["d"],
        button: 'e',
        link: '/f',
        background: '/g.jpg',

    },
    {

        id: 2,
        lineOne: "Who Am I?",
        lineTwo: "b",
        lineThree: "c",
        content: ["d"],
        button: 'More About Me',
        link: '/f',
        background: '/g.jpg',

    },
    {

        id: 3,
        lineOne: "How Can I Help You?",
        lineTwo: "b",
        lineThree: "c",
        content: ["d"],
        button: 'My Portfolio',
        link: '/f',
        background: '/g.jpg',

    },
    {

        id: 4,
        lineOne: "Reach Out!",
        lineTwo: "b",
        lineThree: "c",
        content: ["d"],
        button: 'Contact Me',
        link: '/f',
        background: '/g.jpg',

    }
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
        <section id="sliderSection">
            
            <div id="sliderDiv">

            {visibleSlides.map((slide, index) => (
                <div key={slide.id}
                className={`banner ${index === currentSlide ? 'active' : ''}`}
                id={`top-banner-${slide.id}`}
                >

                    <div id="sliderInside">
                        <h2>{slide.title}</h2>

                        {slide.subtitle && (
                        <h1>
                            {slide.subtitle.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br/>
                                </span>
                            ))}
                        </h1>
                        )}

                        {slide.content && (
                            Array.isArray(slide.content) ? (
                            slide.content.map((p, i) => <p key={i}>{p}</p>)) 
                            : (
                                <p>{slide.content}</p>
                            )
                        )}

                        {slide.list && (
                          <ul>
                            {slide.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                          </ul>  
                        )}
                    </div>
                </div>
                ))}

                <nav>
                    <div className="bannerControls">

                        {visibleSlides.map((slide, index) => (
                            <label key={slide.id} 
                            onClick={() => setCurrentSlide(index)}>

                                <span className="progressBar">
                                    <span
                                        className="progressBarFill"
                                        style = {{
                                            animation: index === currentSlide ?
                                            'progressBarFill 10s linear forwards'
                                            : 'none',
                                        }}>
                                    </span>
                                </span>

                                <span>{`0${index+1}`}</span>

                                {slide.lineOne}

                            </label>
                        ))}

                    </div>
                </nav>

            </div>
        </section>
    );
}