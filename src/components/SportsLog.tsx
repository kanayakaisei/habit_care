"use client";
import React, { useState, useEffect } from "react";
import TimerLog from "./TimerLog";
import LogBtn from "./LogBtn";
import SlideCheck from "./SlideCheck";

const SportsBtn = () => {
    const label1 = {
        good: "した",
        normal: "休養",
        bad: "していない"
    };

    const label2 = {
        good: "1時間以上",
        normal: "1時間未満",
        bad: "30分未満"
    };

    const [selected1, setSelected1] = useState<string>("");
    const [selected2, setSelected2] = useState<string>("");
    const [sportsEmoticon, setSportsEmoticon] = useState<number>(0);
    const isSelected = (target: string, label: string) => target === label;

    const getAnswerScore = (q: number, answer: string) => {
        if (q === 1) {
            if (answer === "good") return 30;   // 運動した
            if (answer === "normal") return 20; // 休養
            if (answer === "bad") return 0;     // していない
        }
        if (q === 2) {
            if (answer === "good") return 30;   // 1時間以上
            if (answer === "normal") return 20; // 1時間未満
            if (answer === "bad") return 10;    // 30分未満
        }
        return 0;
    };

    // ローカルストレージに保存
    useEffect(() => {
        const score1 = getAnswerScore(1, selected1);
        const score2 = getAnswerScore(2, selected2);
        const sportToday = new Date().toLocaleDateString("ja-JP");
        const totalScore = score1 + score2 + sportsEmoticon;

        localStorage.setItem(`sports-${sportToday}`, JSON.stringify(totalScore));
    }, [selected1, selected2, sportsEmoticon]);

    return (
        <div className="flex flex-col gap-[24px]">
            <p>1,本日運動をしましたか？</p>
            <div className="flex justify-center text-[14px] gap-[18px] text-[#48A5BC] font-bold">
                {(["good", "normal", "bad"] as const).map((label) => (
                    <button
                        key={label}
                        onClick={() => setSelected1(label)}
                        className={`py-[9px] border-[2px] rounded-[5px] w-[93px] ${isSelected(selected1, label)
                            ? "bg-[#48A5BC] text-white"
                            : "border-[#48A5BC] text-[#48A5BC]"
                            }`}
                    >
                        {label1[label]}
                    </button>
                ))}
            </div>

            <p>2,運動時間を教えてください</p>
            <div className="flex justify-center text-[14px] gap-[18px] text-[#48A5BC] font-bold mb-[8px]">
                {(["good", "normal", "bad"] as const).map((label) => (
                    <button
                        key={label}
                        onClick={() => setSelected2(label)}
                        className={`py-[9px] border-[2px] rounded-[5px] w-[93px] ${isSelected(selected2, label)
                            ? "bg-[#48A5BC] text-white"
                            : "border-[#48A5BC] text-[#48A5BC]"
                            }`}
                    >
                        {label2[label]}
                    </button>
                ))}
            </div>
            <TimerLog />
            <section>
                <p>3,運動の強度を教えてください</p>
                <SlideCheck onValueChange={setSportsEmoticon} />
                <div className="flex justify-between text-[12px] w-[320px] m-auto">
                    <p>ハード</p>
                    <p>ふつう</p>
                    <p>かるめ</p>
                </div>
            </section>
            <LogBtn />
        </div>
    );
};

export default SportsBtn;
