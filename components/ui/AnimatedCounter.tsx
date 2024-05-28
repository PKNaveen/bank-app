'use client'
import CountUp from "react-countup";

export default function AnimatedCounter({amount}: { amount: number }) {
    return (
        <div className="w-full">
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