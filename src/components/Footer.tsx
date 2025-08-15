"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
    const pathname = usePathname();
    const navItems = [
        { href: "/top", icon: { default: "/home_icn.svg", active: "/home_icn_active.svg" }, alt: "ホームアイコン", w: 32, h: 28 },
        { href: "/record", icon: { default: "/log_icn.svg", active: "/log_icn_active.svg" }, alt: "記録アイコン", w: 32, h: 28 },
        { href: "/sns", icon: { default: "/sns_icn.svg", active: "/sns_icn_active.svg" }, alt: "SNSアイコン", w: 43, h: 44 },
    ];

    const baseX = [0, 135, 272];
    const activeIndex = navItems.findIndex((item) => item.href === pathname);

    const [sliderX, setSliderX] = useState(0);

    // ページ遷移後に位置を同期
    useEffect(() => {
        setSliderX(baseX[activeIndex] || 0);
    }, [activeIndex]);

    // アイコンをクリックした瞬間に動かす
    const handleClick = (index: number) => {
        setSliderX(baseX[index]);
    };

    return (
        <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[373px] h-[76px] bg-[#48A5BC] rounded-[47px] shadow-md flex items-center justify-center">
            {/* 背景スライド */}
            <div
                className="absolute top-1/2 left-[24px] -translate-y-1/2 w-[54px] h-[54px] rounded-full bg-white shadow-[1px_3px_8px_0_rgba(0,0,0,0.4)] transition-transform duration-500"
                style={{ transform: `translateX(${sliderX}px)` }}
            />

            {/* アイコン */}
            <div className="flex justify-between w-[325px] z-10">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    const iconSrc = isActive ? item.icon.active : item.icon.default;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => handleClick(index)}
                            className="w-[54px] h-[54px] flex items-center justify-center"
                        >
                            <Image src={iconSrc} alt={item.alt} width={item.w} height={item.h} />
                        </Link>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
