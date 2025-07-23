import LineChart from "@/components/LineChart";
import Footer from "@/components/Footer";

interface BtnProps {
    genre:string
}

const Btn = ({genre}:BtnProps) =>{
    return(
        <>
            <button className="text-[#48A5BC] text-[18px] w-[66px] h-[38px] border-[#48A5BC] border-[2px] font-bold rounded-[3px] shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]">
                {genre}
            </button>
        </>
    )
}

export default function () {
    return (
        <>
            <div className="flex justify-center gap-8 py-[20px]">
                <Btn genre="運動" />
                <Btn genre="食事" />
                <Btn genre="睡眠" />
                <Btn genre="平均" />
            </div>
            <LineChart  />
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
