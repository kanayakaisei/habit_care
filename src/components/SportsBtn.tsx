"use client";
import React, { useState } from "react";

interface SportsProps {
    good: string,
    normal: string,
    bad: string
}

const SportsBtn = ({ good, normal, bad }: SportsProps) => {
    const [selected, setSelected] = useState<string>("");

    const handleClick = (label: string) => {
        setSelected(label);
    };

    const isSelected = (label: string) => selected === label;


    return (
        <>
            <div className="flex gap-[18px] text-[14px] text-[#48A5BC] font-bold mt-[4px] mb-[10px]">
                {[good, normal, bad].map((label) => (
                    <button
                        key={label}
                        onClick={() => handleClick(label)}
                        className={`py-[9px] border-[2px] rounded-[5px] w-[93px] ${isSelected(label)
                                ? "bg-[#48A5BC] text-white"
                                : "border-[#48A5BC] text-[#48A5BC]"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </>
    )
}

export default SportsBtn;