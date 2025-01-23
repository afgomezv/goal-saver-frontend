import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex">
      <Image src="/logo.svg" alt="logo" width={100} height={100} priority />

      <h2 className="text-5xl mt-8 font-bold bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent">
        Goal Saver
      </h2>
    </div>
  );
};

export default Logo;
