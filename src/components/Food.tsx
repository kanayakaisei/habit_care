"use client";
import React, { useState } from "react";
import Image from "next/image";

interface FoodProps {
    title: string;
    }

    const Food = ({ title }: FoodProps) => {
    const [selected, setSelected] = useState<string>("");

    const handleClick = (label: string) => {
        setSelected(label);
    };

    const isSelected = (label: string) => selected === label;

    return (
        <section className="mt-[12px] mb-[25px]">
        <h3 className="font-bold">{title}</h3>
        <div className="flex gap-[18px] text-[14px] text-[#48A5BC] font-bold mt-[4px] mb-[10px]">
            {["いい感じ", "普通", "偏りあり"].map((label) => (
            <button
                key={label}
                onClick={() => handleClick(label)}
                className={`py-[9px] border-[2px] rounded-[5px] w-[93px] ${
                isSelected(label)
                    ? "bg-[#48A5BC] text-white"
                    : "border-[#48A5BC] text-[#48A5BC]"
                }`}
            >
                {label}
            </button>
            ))}
        </div>
        <div className="flex items-center gap-[10px] text-[10px]">
            <Image src="/bar_code.svg" alt="バーコード" width={22} height={22} />
            <p>バーコードを読み取ると、栄養情報を自動で取得できます</p>
        </div>
        </section>
    );
};

export default Food;
