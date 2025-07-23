import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";


export default function top() {
    return (
        <div className="h-svh">
            <Header />
            <main>
                <section className="flex items-center justify-center bg-[#48A5BC] h-[318px] ">
                    <div className="mr-[30px]">
                        <p className="text-[#fff]">今の生活を流づけると...</p>
                        <h2></h2>
                    </div>
                    <Image src="character.svg" alt="キャラクター" width={122} height={218} />
                </section>
                <section className="flex flex-col items-center">
                    <section className="py-[20px]">
                        <div className="flex justify-center gap-[60px] text-[#fff] font-bold pb-[19px] border-b-[#AFB2B2] border-b-[2px]">
                            <button className="bg-[#48A5BC] w-[140px] p-[10px] rounded-[40px]">今日のポイント</button>
                            <button className="bg-[#48A5BC] w-[140px] p-[10px] rounded-[40px]">今週の目標</button>
                        </div>
                        <div className="px-[35px] py-[20px]">
                            <li></li>
                        </div>
                    </section>
                    <Link href="/log">
                        <button className="text-[#fff] bg-[#F1C168] w-[140px] h-[46px] text-[18px] font-bold rounded-[8px] ">記録</button>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}
