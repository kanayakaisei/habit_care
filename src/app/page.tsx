"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [age, setAge] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAgeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(e.target.value);
  };

  const ages = Array.from({ length: 48 }, (_, i) => i + 13);

  return (
    <div className="relative overflow-hidden h-svh flex flex-col items-center justify-center">
      {!isLoaded ? (
        <>
          <h1>
            <Image src="logo.svg" alt="ハビットケアロゴ" width={245} height={245} />
          </h1>
          <Image src="logo_text.svg" alt="ハビットケア" width={240} height={30} />
          {/* 装飾 */}
          <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute bottom-[-30] left-[-30]"></div>
          <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute bottom-[150] left-[5]"></div>
          <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute top-[150] right-[5]"></div>
          <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute top-[-30] right-[-30]"></div>
        </>
      ) : (
        <>
          <h1>
            <Image src="logo.svg" alt="ハビットケアロゴ" width={130} height={130} />
          </h1>
          <Image src="logo_text.svg" alt="ハビットケア" width={135} height={17} />
          <form className="mt-[20px] text-[16px] font-bold z-99 bg-[255,255,255,0.5] w-[337px] h-[530px] rounded-[30px] shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] p-[50px] flex flex-col items-center">
            <div className="mb-[40px]">
              <Image src="account_icn.svg" alt="アカウントアイコン" width={35} height={35} />
            </div>
            <input
              type="text"
              name="name"
              placeholder="ユーザーネーム"
              className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[240px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px]"
            />
            <input
              type="text"
              name="id"
              placeholder="ユーザーID"
              className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[240px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px]"
            />
            <div className="w-[240px] mb-[23px]">
              <select
                id="age"
                value={age}
                onChange={handleAgeChange}
                className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[80px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] text-[#A0A0A0]"
              >
                <option>年齢</option>
                {ages.map((a) => (
                  <option key={a} value={a}>{a}歳</option>
                ))}
              </select>
            </div>
            <div className="flex w-[240px] gap-[40px]">
              <button className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[80px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px] text-[#A0A0A0]">男性</button>
              <button className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[80px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px] text-[#A0A0A0]">女性</button>
            </div>
            <div className="flex w-[240px] gap-[40px]">
              <button className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[80px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px] text-[#A0A0A0]">学生</button>
              <button className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[80px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px] text-[#A0A0A0]">社会人</button>
            </div>
            <Link href="/top"
              className="text-white bg-[#F1C168] w-[170px] h-[44px] flex items-center justify-center rounded-[8px] mt-[20px]">
              スタート
            </Link>
            </form>

          {/* 装飾 */}
          <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute bottom-[-30] left-[-30]"></div>
          <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute bottom-[150] left-[5]"></div>
          <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute top-[150] right-[5]"></div>
          <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute top-[-30] right-[-30]"></div>
        </>
      )}
    </div>
  );
}
