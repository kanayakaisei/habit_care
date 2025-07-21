"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Decoration from "@/components/Decoration";
import SlideCheck from "@/components/SlideCheck";

type Screen = "select" | "next";

type ConditionButtonProps = {
    label: string;
    bgColor: string;
    onClick?: () => void;
};
const ConditionButton: React.FC<ConditionButtonProps> = ({ label, bgColor, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`text-[#fff] text-[24px] w-[130px] h-[70px] rounded-[10px] ${bgColor}`}
            >
            {label}
        </button>
    );
};

export default function Page() {
    const [screen, setScreen] = useState<Screen>("select");

    interface FoodProps {
        title: string,
    }
    const Food = ({ title }: FoodProps) => {
        const [selected, setSelected] = useState<string | null>(null);
        const options = ["いい感じ", "普通", "偏りあり"];

    return (
        <section className="mt-[12px] mb-[25px]">
            <h3 className="font-bold">{title}</h3>
            <div className="flex gap-[18px] text-[14px] font-bold mt-[4px] mb-[10px]">
                {options.map((option) => (
                    <button
                    key={option}
                    onClick={() => setSelected(option)}
                    className={`py-[9px] border-[2px] rounded-[5px] w-[93px]
                        ${
                        selected === option
                            ? "bg-[#48A5BC] text-white border-[#48A5BC]"
                            : "bg-white text-[#48A5BC] border-[#48A5BC]"
                        }`}
                    >
                    {option}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-[10px] text-[10px]">
                <Image src="bar_code.svg" alt="バーコード" width={22} height={22} />
                <p>バーコードを読み取ると、栄養情報を自動で取得できます</p>
            </div>
        </section>
    );
};


    return (
        <div className="relative overflow-hidden h-svh">
        <Link href="/top">
            <button className="ml-[30px] mt-[10px] p-[16px] rounded-[5px] bg-[#fff] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
            <Image src="bak_arrow.svg" alt="戻るボタン" width={20} height={0} />
            </button>
        </Link>

        {screen === "select" ? (
            <div className="relative mt-[100px] m-auto font-bold z-10 bg-[255,255,255,0.5] w-[337px] h-[530px] rounded-[30px] shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] py-[180px] flex flex-col items-center justify-between">
                <h2 className="text-[24px] mb-[40px]">今日の体調はどうですか？</h2>
                <div className="flex gap-[20px]">
                    <ConditionButton label="好調" bgColor="bg-[#F1C168]" onClick={() => setScreen("next")} />
                    <ConditionButton label="不調" bgColor="bg-[#48A5BC]" onClick={() => setScreen("next")} />
                </div>
                {/* <Decoration /> */}
            </div>
        ) : (
            <>
                <div className="flex flex-col items-center gap-[10px] translate-y-[-30px] pb-[8px] border-b-[1px] border-b-[#BEBEBE]">
                    <h2 className="text-[23px] font-bold text-[#48A5BC]">ジャンルを選択</h2>
                    <div className="flex justify-center items-center gap-[50px]">
                        <div className="flex flex-col items-center">
                            <button className="p-[20px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
                                <Image src="food_icn.svg" alt="食事アイコン" width={24} height={24} />
                            </button>
                            <p className="font-bold mt-[7px]">食事</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="p-[20px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
                                <Image src="sleep_icn.svg" alt="睡眠アイコン" width={24} height={24} />
                            </button>
                            <p className="font-bold mt-[7px]">睡眠</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="py-[18px] px-[23px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
                                <Image src="sports_icn.svg" alt="運動アイコン" width={16} height={30} />
                            </button>
                            <p className="font-bold mt-[7px]">運動</p>
                        </div>
                    </div>
                </div>
                {/* ーー 食事 ーー */}
                <div className="px-[30px]">
                    <p>1,栄養バランスを教えてください</p>
                    <div className="flex flex-col items-center">
                        <div>
                            <Food title="朝食" />
                        </div>
                        <div>
                            <Food title="昼食" />
                        </div>
                        <div>
                            <Food title="夕食" />
                        </div>
                    </div>
                    <div>
                        <p>2,満足な食事を取れたと感じますか？</p>
                        <SlideCheck />
                    </div>
                    
                    <div className="flex justify-center">
                        <Link href="/record" />
                        <button className="bg-[#F1C168] text-[#fff] text-[18px] font-bold rounded-[5px] px-[52px] py-[13px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)]">
                            記録
                        </button>
                    </div>
                </div>
            </>
        )}
        </div>
    );
}
