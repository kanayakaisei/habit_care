import Image from "next/image";


export default function login() {
  return (
    <div className="relative overflow-hidden">
      <div className=" h-svh flex flex-col items-center justify-center">
        <h1><Image src="logo.svg" alt="ハビットケアロゴ" width={245} height={245}/></h1>
        <Image src="logo_text.svg" alt="ハビットケア" width={240} height={30} />
      </div>
      <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute bottom-[-30] left-[-30]"></div>
      <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute bottom-[150] left-[5]"></div>
      <div className="bg-[#44B7D9] w-13 h-13 rounded-full absolute top-[150] right-[5]"></div>
      <div className="bg-gradient-to-tr from-[#44B7D9] to-[#C0E06B] w-40 h-40 rounded-full absolute top-[-30] right-[-30]"></div>
    </div>
  );
}
