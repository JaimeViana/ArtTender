import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const isTablet = () => {
    const ua = navigator.userAgent;
    return /Tablet|iPad/i.test(ua);
}

const isTabletIPad = () => {
    if (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) return true;
}




const Cursor = ({ state }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(true);

    const isMobil = typeof navigator !== "undefined" && isMobile();
    const isTab = typeof navigator !== "undefined" && isTablet();
    const isIPad = typeof navigator !== "undefined" && isTabletIPad();

    const location = useLocation();

    useEffect(() => {
        if (!isMobil && !isTab && !isIPad) {
            addEventListeners();
            handleParagraphHoverEvents();
            handleLinkHoverEvents();
            handleButtonHoverEvents();
            handlePointerHoverEvents();
            return () => removeEventListeners();
        }
    }, [location]);

    if (isMobil || isTab) return null;

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setHidden(false);
    };

    const onMouseDown = () => {
        setClicked(true);
        setHidden(false);
    };

    const onMouseUp = () => {
        setClicked(false);
        setLinkHovered(false);
        setHidden(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleParagraphHoverEvents = () => {
        document.querySelectorAll("p").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll(".hoverable").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const handleButtonHoverEvents = () => {
        document.querySelectorAll("button").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const handlePointerHoverEvents = () => {
        Array.from(document.getElementsByClassName("pointer")).forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const cursorClasses = () => {
        return `cursor${clicked ? " cursor--clicked" : ""}${hidden ? " cursor--hidden" : ""
            }${linkHovered ? " cursor--link-hovered" : ""}`;
    };

    return (
        <div
            className={cursorClasses()}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default Cursor;