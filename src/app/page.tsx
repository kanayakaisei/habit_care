"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Decoration from "@/components/Decoration";

export default function Login() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    gender: "male",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("登録完了！");
      setForm({ username: "", email: "", password: "", gender: "male" });
    } else {
      const data = await res.json();
      alert(data.error || "エラーが発生しました");
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-svh flex flex-col items-center justify-center">
      {!isLoaded ? (
        <>
          <h1>
            <Image src="logo.svg" alt="ハビットケアロゴ" width={245} height={245} />
          </h1>
          <Image src="logo_text.svg" alt="ハビットケア" width={240} height={30} />
          <Decoration />
        </>
      ) : (
        <>
          <h1>
            <Image src="logo.svg" alt="ハビットケアロゴ" width={130} height={130} />
          </h1>
          <Image src="logo_text.svg" alt="ハビットケア" width={135} height={17} />
          <form onSubmit={handleSubmit} className="mt-[20px] text-[16px] font-bold z-99 bg-[255,255,255,0.5] w-[337px] h-[530px] rounded-[30px] shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] p-[50px] flex flex-col items-center">
            <div className="mb-[40px]">
              <Image src="account_icn.svg" alt="アカウントアイコン" width={35} height={35} />
            </div>
            <input
              placeholder="ユーザー名"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[240px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px]"
            />
            <input
              placeholder="メールアドレス"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[240px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px]"
            />

            <input
              placeholder="パスワード"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border-[#479DB3] border-[2px] rounded-[5px] p-[4px] w-[240px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px]"
            />
            <div className="flex w-[240px] gap-[40px]">
              <button
                type="button"
                onClick={() => setForm({ ...form, gender: "male" })}
                className={`border-[2px] rounded-[5px] p-[4px] w-[80px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px] ${form.gender === "male"
                    ? "border-[#479DB3] bg-[#479DB3] text-white"
                    : "border-[#479DB3] text-[#A0A0A0]"
                  }`}
              >
                男性
              </button>

              <button
                type="button"
                onClick={() => setForm({ ...form, gender: "female" })}
                className={`border-[2px] rounded-[5px] p-[4px] w-[80px] shadow-[1px_1px_3px_0_rgba(0,0,0,0.25)] mb-[23px] ${form.gender === "female"
                    ? "border-[#479DB3] bg-[#479DB3] text-white"
                    : "border-[#479DB3] text-[#A0A0A0]"
                  }`}
              >
                女性
              </button>
            </div>
            <Link href="/top">
              <button type="submit" className="text-white bg-[#F1C168] w-[170px] h-[44px] flex items-center justify-center rounded-[8px] mt-[20px]">
                登録
              </button>
            </Link>
          </form>

          <Decoration />
        </>
      )}
    </div>
  );
}
