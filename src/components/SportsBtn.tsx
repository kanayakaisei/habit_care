"use client";
import React, { useState } from "react";
import TimerLog from "./TimerLog";

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

    const isSelected = (target: string, label: string) => target === label;

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
        </div>
    );
};

export default SportsBtn;
