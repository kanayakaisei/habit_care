"use client";
import LineChart from "@/components/LineChart";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

type Genre = "運動" | "食事" | "睡眠" | "平均";

// ーーー指定した基準日から7日間を作る関数ーーー
const getDays = (baseDate: Date): string[] => {
    const result: string[] = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date(baseDate);
        date.setDate(baseDate.getDate() - i);
        result.push(date.toLocaleDateString("ja-JP"));
    }
    return result;
};

export default function ChartContainer() {
    const [offset, setOffset] = useState(0);
    const [sampleData, setSampleData] = useState({
        運動: [0, 0, 0, 0, 0, 0, 0],
        食事: [0, 0, 0, 0, 0, 0, 0],
        睡眠: [0, 0, 0, 0, 0, 0, 0],
    });

    type AnalysisResult = {
        analysis: { 食事: string; 睡眠: string; 運動: string };
        advice: { 食事: string; 睡眠: string; 運動: string };
    };
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

    useEffect(() => {
        const fetchAnalysis = async () => {
            const res = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    food: sampleData["食事"],
                    sleep: sampleData["睡眠"],
                    sports: sampleData["運動"],
                }),
            });
            const data = await res.json();
            setAnalysis(data);
        };

        fetchAnalysis();
    }, [sampleData]);

    useEffect(() => {
        // 基準日を offset に応じて変更
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() + offset);

        const pastDays = getDays(baseDate);

        const foodData = pastDays.map((date) => {
            const item = localStorage.getItem(`meal-${date}`);
            return item ? Number(JSON.parse(item)) : 0;
        });
        const sleepData = pastDays.map((date) => {
            const item = localStorage.getItem(`sleep-${date}`);
            return item ? Number(JSON.parse(item)) : 0;
        });
        const sportsData = pastDays.map((date) => {
            const item = localStorage.getItem(`sports-${date}`);
            return item ? Number(JSON.parse(item)) : 0;
        });

        setSampleData({
            食事: foodData,
            睡眠: sleepData,
            運動: sportsData,
        });
    }, [offset]);
    return (
        <div className="pb-[120px]">
            <div>
                <div className="flex justify-center gap-8 py-[20px]">
                    {(["運動", "食事", "睡眠", "平均"] as Genre[]).map((g) => (
                        <button
                            key={g}
                            className="px-4 py-2 rounded bg-[#48A5BC] font-bold text-white hover:bg-[#8bcada]"
                        >
                            {g}
                        </button>
                    ))}
                </div>
                <LineChart
                    foodDate={sampleData["食事"]}
                    sportsDate={sampleData["運動"]}
                    sleepDate={sampleData["睡眠"]}
                />
            </div>

            <div className="flex justify-between px-[30px]">
                {/* <button className="bg-[#F1C168] text-[#fff] font-bold rounded-[5px] px-[10px] py-[8px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)]">
                    月別で表示
                </button> */}
                <div className="flex justify-between gap-5 w-100">
                    <button
                        className="bg-[#48A5BC] text-[#fff] text-[18px] px-[10px] py-[7px] font-bold rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]"
                        onClick={() => setOffset((prev) => prev - 7)}
                    >
                        前の週へ
                    </button>
                    <button
                        className="bg-[#48A5BC] text-[#fff] text-[18px] px-[10px] py-[7px] font-bold rounded-[5px] shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]"
                        onClick={() => setOffset((prev) => prev + 7)}
                    >
                        次の週へ
                    </button>
                </div>
            </div>
            <section className="px-[24px] pt-[12px]">
                <div className="text-left text-[14px] px-[8px] py-[25px] flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#48A5BC] font-bold text-[20px]">分析結果</h3>
                        <div className="border border-[#48A5BC] mb-2"></div>
                        {analysis ? (
                            <div className="flex flex-col gap-4">
                                <p>
                                    <span className="font-bold text-[16px] border-b-[#48A5BC] border-b-2">食事</span><br />
                                    {analysis.analysis.食事}
                                </p>
                                <p>
                                    <span className="font-bold text-[16px] border-b-[#48A5BC] border-b-2">睡眠</span><br />
                                    {analysis.analysis.睡眠}
                                </p>
                                <p>
                                    <span className="font-bold text-[16px] border-b-[#48A5BC] border-b-2">運動</span><br />
                                    {analysis.analysis.運動}
                                </p>
                            </div>
                        ) : (
                            <p>分析中...</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#48A5BC] font-bold text-[20px]">アドバイス</h3>
                        <div className="border border-[#48A5BC] mb-2"></div>
                        {analysis ? (
                            <div className="flex flex-col gap-4">
                                <p>
                                    <span className="font-bold text-[16px] border-b-[#48A5BC] border-b-2">食事</span><br />
                                    {analysis.advice.食事}
                                </p>
                                <p>
                                    <span className="font-bold text-[16px] border-b-[#48A5BC] border-b-2">睡眠</span><br />
                                    {analysis.advice.睡眠}
                                </p>
                                <p>
                                    <span className="font-bold text-[16px] border-b-[#48A5BC] border-b-2">運動</span><br />
                                    {analysis.advice.運動}
                                </p>
                            </div>
                        ) : (
                            <p>分析中...</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}
