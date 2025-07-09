"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Login() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  },[]);


  return (
    <div className="relative overflow-hidden h-svh flex flex-col items-center justify-center">
      {!isLoaded ? (
        <>
          <h1><Image src="logo.svg" alt="ハビットケアロゴ" width={245} height={245}/></h1>
          <Image src="logo_text.svg" alt="ハビットケア" width={240} height={30} />
          <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute bottom-[-30] left-[-30]"></div>
          <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute bottom-[150] left-[5]"></div>
          <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute top-[150] right-[5]"></div>
          <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute top-[-30] right-[-30]"></div>
        </>
      ):(
          <>
            <h1><Image src="logo.svg" alt="ハビットケアロゴ" width={130} height={130}/></h1>
            <Image src="logo_text.svg" alt="ハビットケア" width={135} height={17} />
            <form className="mt-[20px] z-99 bg-[255,255,255,0.5]  w-[337px] h-[530px] rounded-[30px] shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] p-[50px]">
              <Image src="account_icn.svg" alt="アカウントアイコン" width={35} height={35} />
              <label>
                <input type="text" name="name" placeholder="ユーザーネーム"  className="border-[#479DB3] border-[2px] rounded-[5px] p-[3px] w-[240px]"/>
              </label>
            </form>

            <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute bottom-[-30] left-[-30]"></div>
            <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute bottom-[150] left-[5]"></div>
            <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute top-[150] right-[5]"></div>
            <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute top-[-30] right-[-30]"></div>
          </>
      )}
    </div>
  );
}
