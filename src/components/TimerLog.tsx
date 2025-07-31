"use client";
import React, { useState, useEffect, useRef } from "react";

const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
};

const TimerLog = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div className="flex items-center justify-center gap-4 ">
            <div className="w-[127px] h-[127px] rounded-full border-[3px] border-[#48A5BC] flex items-center justify-center text-[20px] font-bold text-[#48A5BC]">
                {formatTime(seconds)}
            </div>
            <div className="flex flex-col items-center gap-4">
                <p className="text-[12px]">タイマーで運動の時間を記録できます</p>
                <div className="flex gap-4">
                    <button
                        onClick={handleStartStop}
                        className="w-[90px] h-[48px] bg-[#48A5BC] text-white font-bold rounded-lg"
                    >
                        {isRunning ? "ストップ" : "スタート"}
                    </button>
                    <button
                        onClick={handleReset}
                        className="w-[90px] h-[48px] bg-[#48A5BC] text-white font-bold rounded-lg"
                    >
                        リセット
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimerLog;
