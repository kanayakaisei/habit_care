"use client";
import React, { useState } from "react"

const SleepBtn = () => {
    const label1 = {
        good: "すぐ寝れた",
        normal: "少しかかった",
        bad: "寝つき悪め"
    }

    const label2 = {
        good: "起きなかった",
        normal: "1回起きた",
        bad: "何度も起きた"
    }
    const [selected1, setSelected1] = useState<string>("");
    const [selected2, setSelected2] = useState<string>("");
    const isSelected = (target: string, label: string) => target === label;

    return (
        <div className="flex flex-col gap-[24px]">
            <div>
                <p className="mb-[24px]">1,本日の睡眠時間を教えてください</p>
                <div className="flex justify-center items-center gap-[25px] mb-[20px]">
                    <div>
                        <p>就寝時間</p>
                        <input
                            className="custom-time-input border-[2px] border-[#48A5BC] rounded-[5px] px-[20px] w-[100px] h-[40px] text-[20px]"
                            type="time"
                        />
                    </div>
                    <p className="text-[20px] pt-[25px]">〜</p>
                    <div>
                        <p>起床時間</p>
                        <input
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
            <div className="flex justify-center text-[14px] gap-[20px] text-[#48A5BC] font-bold mb-[24px]">
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
        </div>
    )
}

export default SleepBtn