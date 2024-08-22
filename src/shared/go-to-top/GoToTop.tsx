import "./go-to-top.css"
import React, {useEffect, useState} from "react";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const triggerPosition = document.documentElement.scrollHeight / 4;

        if (scrollPosition >= triggerPosition) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scroll({
            behavior: 'smooth',
            top: 0
        })
    }

    return (
        <div>
            {isVisible && <div className="go-to-top" onClick={() => scrollToTop()}>
                <FontAwesomeIcon style={{fontSize: "1.6em"}} icon={faArrowUp}/>
            </div>}
        </div>
    )
}