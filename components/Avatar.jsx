import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/karan.png"
        alt="avatar"
        width={750}
        height={750}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
