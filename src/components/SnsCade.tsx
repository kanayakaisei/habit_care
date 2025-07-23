"use client";
import Image from "next/image";

type SnsPostProps = {
nickname: string;
genderAge: string;
lifestyle: string;
content: string;
};

const Cade: React.FC<SnsPostProps> = ({ nickname, genderAge, lifestyle, content }) => {
return (
    <section className="px-[16px] py-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-md mb-6">
    <div className="flex justify-start gap-8 py-5">
        <Image src="/sns_photo.svg" alt="プロフィール画像" width={40} height={40} />
        <div className="font-bold">
        <h3>{nickname}</h3>
        <div className="flex gap-3 text-sm font-normal">
            <p>{genderAge}</p>
            <p>{lifestyle}</p>
        </div>
        </div>
    </div>
    <div>
        <h2 className="text-[#48A5BC] font-bold text-sm">【感じた変化や気づき】</h2>
        <p className="py-2 px-4 text-sm">{content}</p>
    </div>
    <div className="flex items-end justify-between px-5 py-4">
        <div className="flex gap-6">
        <Image src="/comment.svg" alt="コメントアイコン" width={25} height={25} />
        <Image src="/heart.svg" alt="ハートアイコン" width={25} height={25} />
        </div>
        <button className="bg-[#F1C168] text-white font-bold rounded-[5px] px-[16px] py-[8px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)]">
        詳しく見る
        </button>
    </div>
    </section>
);
};

export default Cade;
