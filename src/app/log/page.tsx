"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FoodBtn from "@/components/FoodBtn";
import SleepBtn from "@/components/SleepBtn";
import SportsBtn from "@/components/SportsBtn";
import LogBtn from "@/components/LogBtn";
import SlideCheck from "@/components/SlideCheck";

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


// ーーーーー 記録画面 ーーーーーー
const RecordPage = () => {
    const [screen, setScreen] = useState<Screen>("select");
    const [genre, setGenre] = useState<Genre>("meal"); // 初期は食事

    const [breakfastValue, setBreakfastValue] = useState<number>(0);
    const [lunchValue, setLunchValue] = useState<number>(0);
    const [dinnerValue, setDinnerValue] = useState<number>(0);

    const [mealEmoticon, setFoodEmoticon] = useState<number>(0);
    const [sleepEmoticon, setSleepEmoticon] = useState<number>(0);
    const [exerciseEmoticon, setExerciseEmoticon] = useState<number>(0);

    useEffect(() => {
        const today = new Date().toLocaleDateString("ja-JP");
        // 食事
        const mealAverage = Math.round((breakfastValue + lunchValue + dinnerValue) / 3);
        localStorage.setItem(`meal-${today}`, JSON.stringify(mealAverage + mealEmoticon));
        // 睡眠
        localStorage.setItem(`sleep-${today}`, JSON.stringify(sleepEmoticon));
        // 運動
        localStorage.setItem(`exercise-${today}`, JSON.stringify(exerciseEmoticon));
    }, [breakfastValue, lunchValue, dinnerValue, mealEmoticon, sleepEmoticon, exerciseEmoticon]);

    const renderRecordContent = () => {
        switch (genre) {
            case "meal":
                return (
                    <div className="px-[30px]">
                        <p>1,栄養バランスを教えてください</p>
                        <div className="flex flex-col items-center">
                            <FoodBtn title="朝食" onValueChange={setBreakfastValue} />
                            <FoodBtn title="昼食" onValueChange={setLunchValue} />
                            <FoodBtn title="夕食" onValueChange={setDinnerValue} />
                        </div>
                        <div>
                            <p>2,満足な食事を取れたと感じますか？</p>
                            <SlideCheck onValueChange={setFoodEmoticon} />
                            <div className="flex justify-between text-[12px] w-[340px] pb-[20px] m-auto">
                                <p>　 満足　　</p>
                                <p>ちょうど良い</p>
                                <p>少し足りない</p>
                            </div>
                        </div>
                        <LogBtn />
                    </div>
                );
            case "sleep":
                return (
                    <div className="px-[30px]">
                        <section>
                            <SleepBtn />
                        </section>
                        <section>
                            <div>
                                <p>4,今日の目覚めはどうでしたか？</p>
                                <SlideCheck onValueChange={setSleepEmoticon} />
                                <div className="flex justify-between text-[12px] w-[330px] pb-[20px] m-auto">
                                    <p>スッキリ！</p>
                                    <p>ふつう</p>
                                    <p>だるかった</p>
                                </div>
                            </div>
                        </section>
                        <LogBtn />
                    </div>
                );
            case "exercise":
                return (
                    <div className="px-[30px] flex flex-col gap-[30px]">
                        <div className="flex flex-col items-center">
                            <SportsBtn />
                        </div>
                        <section>
                            <p>3,運動の強度を教えてください</p>
                            <SlideCheck onValueChange={setExerciseEmoticon} />
                            <div className="flex justify-between text-[12px] w-[320px] m-auto">
                                <p>ハード</p>
                                <p>ふつう</p>
                                <p>かるめ</p>
                            </div>
                        </section>
                        <LogBtn />
                    </div>
                );
        }
    };

    // ーーーーー 初めの画面 ーーーーーー
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
                        <button className="ml-[30px] m-[10px] p-[10px] rounded-[5px] bg-[#fff] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
                            <Image src="bak_arrow.svg" alt="戻るボタン" width={20} height={0} />
                        </button>
                    </Link>
                    {/* ジャンル選択UI（固定） */}
                    <div className="flex flex-col items-center gap-[10px] translate-y-[-30px] text-[14px] pb-[8px] border-b-[1px] border-b-[#BEBEBE]">
                        <h2 className="text-[18px] font-bold text-[#48A5BC]">ジャンルを選択</h2>
                        <div className="flex justify-center items-center gap-[50px]">
                            <div className="flex flex-col items-center">
                                <button
                                    className="p-[16px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]"
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
                                    className="p-[16px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]"
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
                                    className="py-[13px] px-[20px] rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]"
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
