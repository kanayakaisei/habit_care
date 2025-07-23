    "use client";
    import Link from "next/link";
    import Image from "next/image";
    import { usePathname } from "next/navigation";

    const Footer = () => {
    const pathname = usePathname();

    const navItems = [
        {
        href: "/top",
        icon: {
            default: "/home_icn.svg",
            active: "/home_icn_active.svg",
        },
        alt: "ホームアイコン",
            w: 32,
            h: 28,
        },
        {
            href: "/record",
            icon: {
                default: "/log_icn.svg",
                active: "/log_icn_active.svg",
            },
        alt: "記録アイコン",
            w: 32,
            h: 28,
        },
        {
        href: "/sns",
        icon: {
            default: "/sns_icn.svg",
            active: "/sns_icn_active.svg",
        },
        alt: "SNSアイコン",
            w: 43,
            h: 44,
        },
    ];

    return (
        <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex justify-evenly items-center bg-[#48A5BC] w-[373px] h-[76px] rounded-[47px] shadow-md">
        {navItems.map((item) => {
            const isActive = pathname === item.href;
            const wrapperClass = isActive
            ? "w-[54px] h-[54px] flex items-center justify-center bg-white rounded-full shadow-[1px_3px_8px_0_rgba(0,0,0,0.4)]"
            : "w-[54px] h-[54px] flex items-center justify-center";

            const iconSrc = isActive ? item.icon.active : item.icon.default;

            return (
            <div key={item.href} className={wrapperClass}>
                <Link href={item.href}>
                <Image src={iconSrc} alt={item.alt} width={item.w} height={item.h} />
                </Link>
            </div>
            );
        })}
        </footer>
    );
    };

    export default Footer;
