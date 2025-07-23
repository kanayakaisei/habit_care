import Link from "next/link"

export default function LogBtn(){
    return(
        <div className="flex justify-center">
            <Link href="/record">
                <button className="bg-[#F1C168] text-[#fff] text-[18px] font-bold rounded-[5px] px-[52px] py-[13px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)]">
                    記録
                </button>
            </Link>
        </div>
    )
}