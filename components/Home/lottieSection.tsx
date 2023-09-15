"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web"

import animation from "../../public/lottie/Schema.json";
import animationResponsive from "../../public/lottie/SchemaTel.json";

const LottieSection = () => {

    const lottieRef = useRef<HTMLDivElement>(null)
    const lottieRefResponsive = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: lottieRef.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animation
        })

        const animRes = lottie.loadAnimation({
            container: lottieRefResponsive.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationResponsive
        })

        return () => {
            anim.destroy()
            animRes.destroy()
        }
    }, [])

    return (
        <>
            <div className="hidden md:block" ref={lottieRef} />
            <div className="md:hidden" ref={lottieRefResponsive} />
        </>
    )
}

export default LottieSection