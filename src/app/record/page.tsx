"use client";
import LineChart from "@/components/LineChart";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

type Genre = "運動" | "食事" | "睡眠" | "平均";

const getPast7Days = (): string[] => {
    const result: string[] = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        result.push(date.toLocaleDateString("ja-JP"));
    }
    return result;
};

export default function ChartContainer() {
    const [selectedGenre, setSelectedGenre] = useState<Genre>("食事");

    const [sampleData, setSampleData] = useState({
        運動: [0, 0, 0, 0, 0, 0, 0],
        食事: [0, 0, 0, 0, 0, 0, 0],
        睡眠: [0, 0, 0, 0, 0, 0, 0],
        平均: [48, 30, 50, 64, 39, 51, 66],
    });

    useEffect(() => {
        const past7Days = getPast7Days();
        const mealData = past7Days.map((date) => {
            const item = localStorage.getItem(`meal-${date}`);
            return item ? Number(JSON.parse(item)) : 0;
        });

        setSampleData((prev) => ({
            ...prev,
            食事: mealData,
        }));
    }, []);

    return (
        <>
            <div>
                <div className="flex justify-center gap-8 py-[20px]">
                    {(["運動", "食事", "睡眠", "平均"] as Genre[]).map((g) => (
                        <button
                            key={g}
                            className="px-4 py-2 rounded bg-[#48A5BC] font-bold text-white hover:bg-[#8bcada]"
                            onClick={() => setSelectedGenre(g)}
                        >
                            {g}
                        </button>
                    ))}
                </div>
                <LineChart foodData={sampleData[selectedGenre]} />
            </div>
            <div className="flex justify-between px-[30px]">
                <button className="bg-[#F1C168] text-[#fff] font-bold rounded-[5px] px-[10px] py-[8px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)]">
                    月別で表示
                </button>
                <div className="flex gap-5">
                    <button className="bg-[#48A5BC] text-[#fff] text-[18px] px-[10px] py-[7px] font-bold rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]">
                        前の週へ
                    </button>
                    <button className="bg-[#48A5BC] text-[#fff] text-[18px] px-[10px] py-[7px] font-bold rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]">
                        次の週へ
                    </button>
                </div>
            </div>
            <section className="px-[46px] pt-[12px]">
                <h2 className="text-[#48A5BC] font-bold text-[24px] flex justify-center py-[15px] border-b-[#666] border-b-[2px]">
                    記録内容
                </h2>
                <div className="text-left px-[10px] py-[25px] flex flex-col gap-8">
                    <div>
                        <h3 className="text-[#48A5BC] font-bold text-[18px]">分析結果</h3>
                        <li>昨日と比べて全体的に向上しております</li>
                        <li>運動、食事が良好ですばらしいです！</li>
                    </div>
                    <div>
                        <h3 className="text-[#48A5BC] font-bold text-[18px]">アドバイス</h3>
                        <li>就寝1時間前はスマホを見ない！</li>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}
