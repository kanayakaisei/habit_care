import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="m-auto flex justify-evenly items-center bg-[#48A5BC] w-[373px] h-[76px] rounded-[47px]">
            <div className="w-[54px] h-[54px] flex items-center justify-center bg-white rounded-full shadow-[1px_3px_8px_0_rgba(0,0,0,0.4)]">
                <Link href={"/top"}>
                    <Image src="/home_icn.svg" alt="ホームアイコン" width={32} height={28} />
                </Link>
            </div>
            <div className="w-[54px] h-[54px] flex items-center justify-center">
                <Link href={"/record"}>
                    <Image src="/log_icn.svg" alt="記録アイコン" width={32} height={28} />
                </Link>
            </div>
            <div className="w-[54px] h-[54px] flex items-center justify-center">
                <Link href={"/sns"}>
                    <Image src="/sns_icn.svg" alt="SNSアイコン" width={43} height={44} />
                </Link>
            </div>
        </footer>
    );
}