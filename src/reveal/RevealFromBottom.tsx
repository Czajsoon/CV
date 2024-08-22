import React, {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

interface Props{
    children: JSX.Element | JSX.Element[];
    width?: "fit-content" | "100%"
    duration?: number
}

export default function RevealFromBottom({children, width = "fit-content", duration = 0.5}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: duration, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}