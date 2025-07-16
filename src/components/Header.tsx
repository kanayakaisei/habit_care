import Image from "next/image";

export default function Header() {
    return (
        <div className="w-[90%] flex justify-center gap-[120px]">
            <Image src="logoTxt.svg" alt="ハビットケアロゴ" width={186} height={29}/> 
            <div className="w-[50px] h-[50px] border-[3px] border-[#D1F6FF] rounded-full flex items-center justify-center shadow-[1px_2px_4px_0_rgba(0,0,0,0.25)]">
                <Image src="/account_icn.svg" alt="アカウントイラスト" width={24} height={24} />
            </div>
        </div>
    );
}
