"use client";
import React, { useState, useEffect } from "react";
import LogBtn from "./LogBtn";
import SlideCheck from "@/components/SlideCheck";

const SleepBtn = () => {
    const label1 = {
        good: "すぐ寝れた",
        normal: "少しかかった",
        bad: "寝つき悪め",
    };

    const label2 = {
        good: "起きなかった",
        normal: "1回起きた",
        bad: "何度も目覚めた",
    };

    const [sleepEmoticon, setSleepEmoticon] = useState<number>(0);
    const sleepToday = new Date().toLocaleDateString("ja-JP");
    const savedScore = JSON.parse(localStorage.getItem(`sleep-${sleepToday}`) || "0");
    localStorage.setItem(`sleep-${sleepToday}`, JSON.stringify(savedScore + sleepEmoticon));

    const [bedTime, setBedTime] = useState<string>("");
    const [wakeTime, setWakeTime] = useState<string>("");
    const [selected1, setSelected1] = useState<string>("");
    const [selected2, setSelected2] = useState<string>("");
    const isSelected = (target: string, label: string) => target === label;

    const calculateSleepScore = () => {
        if (!bedTime || !wakeTime) return 0;

        const [bedH, bedM] = bedTime.split(":").map(Number);
        const [wakeH, wakeM] = wakeTime.split(":").map(Number);

        const bedDate = new Date();
        bedDate.setHours(bedH, bedM, 0, 0);

        const wakeDate = new Date(bedDate);
        wakeDate.setHours(wakeH, wakeM, 0, 0);
        if (wakeDate <= bedDate) {
            wakeDate.setDate(wakeDate.getDate() + 1);
        }

        const diffHours = (wakeDate.getTime() - bedDate.getTime()) / (1000 * 60 * 60);

        if (diffHours >= 6 && diffHours <= 8) return 20;
        if (diffHours >= 4 && diffHours < 6) return 10;
        if (diffHours >= 1 && diffHours < 4) return 5;
        return 0;
    };

    const getAnswerScore = (answer: string) => {
        if (answer === "good") return 20;
        if (answer === "normal") return 10;
        return 0;
    };

    // ローカルストレージに保存
    useEffect(() => {
        const timeScore = calculateSleepScore();
        const answer1 = getAnswerScore(selected1);
        const answer2 = getAnswerScore(selected2);
        const totalScore = timeScore + answer1 + answer2 + sleepEmoticon;

        const today = new Date().toLocaleDateString("ja-JP");
        localStorage.setItem(`sleep-${today}`, JSON.stringify(totalScore));
    }, [bedTime, wakeTime, selected1, selected2, sleepEmoticon]); // ←常に固定

    return (
        <div className="flex flex-col gap-[20px]">
            <div>
                <p className="mb-[24px]">1,本日の睡眠時間を教えてください</p>
                <div className="flex justify-center items-center gap-[25px] mb-[20px]">
                    <div>
                        <p>就寝時間</p>
                        <input
                            value={bedTime}
                            onChange={(e) => setBedTime(e.target.value)}
                            className="custom-time-input border-[2px] border-[#48A5BC] rounded-[5px] px-[20px] w-[100px] h-[40px] text-[20px]"
                            type="time"
                        />
                    </div>
                    <p className="text-[20px] pt-[25px]">〜</p>
                    <div>
                        <p>起床時間</p>
                        <input
                            value={wakeTime}
                            onChange={(e) => setWakeTime(e.target.value)}
                            className="custom-time-input border-[2px] border-[#48A5BC] rounded-[5px] px-[20px] w-[100px] h-[40px] text-[20px]"
                            type="time"
                        />
                    </div>
                </div>
            </div>

            <p>2,寝るまでにどれくらいかかりましたか？</p>
            <div className="flex justify-center text-[14px] gap-[20px] text-[#48A5BC] font-bold mb-[20px]">
                {(["good", "normal", "bad"] as const).map((label) => (
                    <button
                        key={label}
                        onClick={() => setSelected1(label)}
                        className={`py-[9px] border-[2px] rounded-[5px] w-[96px] ${isSelected(selected1, label)
                            ? "bg-[#48A5BC] text-white"
                            : "border-[#48A5BC] text-[#48A5BC]"
                            }`}
                    >
                        {label1[label]}
                    </button>
                ))}
            </div>

            <p>3,夜中に目が覚めましたか？</p>
            <div className="flex justify-center text-[13px] gap-[20px] text-[#48A5BC] font-bold mb-[24px]">
                {(["good", "normal", "bad"] as const).map((label) => (
                    <button
                        key={label}
                        onClick={() => setSelected2(label)}
                        className={`py-[9px] border-[2px] rounded-[5px] w-[96px] ${isSelected(selected2, label)
                            ? "bg-[#48A5BC] text-white"
                            : "border-[#48A5BC] text-[#48A5BC]"
                            }`}
                    >
                        {label2[label]}
                    </button>
                ))}
            </div>
            <section>
                <div>
                    <p>4,今日の目覚めはどうでしたか？</p>
                    <SlideCheck onValueChange={setSleepEmoticon} />
                    <div className="flex justify-between text-[12px] w-[330px] m-auto">
                        <p>スッキリ！</p>
                        <p>ふつう</p>
                        <p>だるかった</p>
                    </div>
                </div>
            </section>
            <LogBtn />
        </div>
    );
};

export default SleepBtn;
