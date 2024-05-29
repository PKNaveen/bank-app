'use client'
import CountUp from "react-countup";

export default function AnimatedCounter({amount}: { amount: number }) {
    return (
        <div className="w-full">
            {/*count up is react lib for slow counting effect of numbers*/}
            <CountUp
                end={amount}
                prefix="$"
                decimals={2}
                decimal=","
                duration={0.8}
            >
            </CountUp>
        </div>
    )
}