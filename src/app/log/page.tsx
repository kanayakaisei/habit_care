import React from "react"
import Link from "next/link"
import Image from "next/image"
import Decoration from "@/components/Decoration"

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


export default function page() {
    return (
        <div className="relative overflow-hidden h-svh">
            <Link href="/top">
                <button className="ml-[30px] mt-[30px] p-[16px] rounded-[5px] bg-[#fff] shadow-[0_1px_5px_0_rgba(0,0,0,0.40)]">
                    <Image src="bak_arrow.svg" alt="戻るボタン" width={20} height={0} />
                </button>
            </Link>
            <div className="relative mt-[100px] m-auto font-bold z-10 bg-[255,255,255,0.5] w-[337px] h-[530px] rounded-[30px] shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] py-[180px] flex flex-col items-center justify-between">
                <h2 className="text-[24px] mb-[40px]">今日の体調はどうですか？</h2>
                <div className="flex gap-[20px]">
                    <ConditionButton label="好調" bgColor="bg-[#F1C168]" />
                    <ConditionButton label="不調" bgColor="bg-[#48A5BC]" />
                </div>            
            </div>
            <Decoration />
        </div>
    )
}
