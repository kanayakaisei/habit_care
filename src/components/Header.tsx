import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className=" m-[auto] w-[90%] flex justify-between">
            <Image src="logo_txt.svg" alt="ハビットケアロゴ" width={186} height={29}/> 
            <div className="w-[50px] h-[50px] border-[3px] border-[#D1F6FF] rounded-full flex items-center justify-center shadow-[1px_2px_4px_0_rgba(0,0,0,0.25)]">
                <Link href="/account">
                    <Image src="/account_icn.svg" alt="アカウントイラスト" width={24} height={24} />
                </Link>
            </div>
        </div>
    );
}
