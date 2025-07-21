"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Food from "@/components/Food";
import SlideCheck from "@/components/SlideCheck";
import LogBtn from "@/components/LogBtn";

type Screen = "select" | "next";
type Genre = "meal" | "sleep" | "exercise";

type ConditionButtonProps = {
    label: string;
    bgColor: string;
    onClick?: () => void;
};

const ConditionButton: React.FC<ConditionButtonProps> = ({
    label,
    bgColor,
    onClick,
    }) => {
    return (
        <button
        onClick={onClick}
        className={`text-[#fff] text-[24px] w-[130px] h-[70px] rounded-[10px] ${bgColor}`}
        >
        {label}
        </button>
    );
};

    const RecordPage = () => {
    const [screen, setScreen] = useState<Screen>("select");
    const [genre, setGenre] = useState<Genre>("meal"); // 初期は食事

    const renderRecordContent = () => {
        switch (genre) {
        case "meal":
            return (
            <div className="px-[30px]">
                <p>1,栄養バランスを教えてください</p>
                <div className="flex flex-col items-center">
                    <Food title="朝食" />
                    <Food title="昼食" />
                    <Food title="夕食" />
                </div>
                <div>
                    <p>2,満足な食事を取れたと感じますか？</p>
                    <SlideCheck />
                </div>
                <LogBtn />
            </div>
            );
        case "sleep":
            return (
                <div className="px-[30px]">
                    <p>1,睡眠時間はどれくらいですか？</p>
                    {/* 睡眠関連のUIをここに追加 */}
                    <SlideCheck />
                    <LogBtn />
                </div>
            );
        case "exercise":
            return (
                <div className="px-[30px]">
                    <p>1,運動はどれくらい行いましたか？</p>
                    {/* 運動関連のUIをここに追加 */}
                    <SlideCheck />
                    <LogBtn />
                </div>
            );
        }
    };

    return (
        <>
        {screen === "select" ? (
            <>
                <Link href="/top">
                    <button className="ml-[30px] mt-[10px] p-[16px] rounded-[5px] bg-[#fff] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
                        <Image src="bak_arrow.svg" alt="戻るボタン" width={20} height={0} />
                    </button>
                </Link>
                <div className="relative mt-[100px] m-auto font-bold z-10 bg-[255,255,255,0.5] w-[337px] h-[530px] rounded-[30px] shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] py-[180px] flex flex-col items-center justify-between">
                    <h2 className="text-[24px] mb-[40px]">今日の体調はどうですか？</h2>
                    <div className="flex gap-[20px]">
                        <ConditionButton
                            label="好調"
                            bgColor="bg-[#F1C168]"
                            onClick={() => setScreen("next")}
                        />
                        <ConditionButton
                            label="不調"
                            bgColor="bg-[#48A5BC]"
                            onClick={() => setScreen("next")}
                        />
                    </div>
                </div>
            </>
    ) : (
        <>
            <Link href="/top">
                <button className="ml-[30px] mt-[10px] p-[16px] rounded-[5px] bg-[#fff] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
                    <Image src="bak_arrow.svg" alt="戻るボタン" width={20} height={0} />
                </button>
            </Link>
        {/* ジャンル選択UI（固定） */}
        <div className="flex flex-col items-center gap-[10px] translate-y-[-30px] pb-[8px] border-b-[1px] border-b-[#BEBEBE]">
            <h2 className="text-[23px] font-bold text-[#48A5BC]">ジャンルを選択</h2>
            <div className="flex justify-center items-center gap-[50px]">
                <div className="flex flex-col items-center">
                    <button
                        className="p-[20px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]"
                        onClick={() => setGenre("meal")}
                    >
                    <Image
                        src="food_icn.svg"
                        alt="食事アイコン"
                        width={24}
                        height={24}
                    />
                    </button>
                    <p className="font-bold mt-[7px]">食事</p>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        className="p-[20px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]"
                        onClick={() => setGenre("sleep")}
                    >
                    <Image
                        src="sleep_icn.svg"
                        alt="睡眠アイコン"
                        width={24}
                        height={24}
                    />
                    </button>
                    <p className="font-bold mt-[7px]">睡眠</p>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        className="py-[18px] px-[23px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]"
                        onClick={() => setGenre("exercise")}
                    >
                    <Image
                        src="sports_icn.svg"
                        alt="運動アイコン"
                        width={16}
                        height={30}
                    />
                    </button>
                    <p className="font-bold mt-[7px]">運動</p>
                </div>
            </div>
        </div>

        {/* 記録の中身（ジャンルによって切替） */}
        {renderRecordContent()}
        </>
    )}
    </>
);
};

export default RecordPage;
