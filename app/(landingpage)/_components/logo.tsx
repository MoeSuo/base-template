import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Logo = () => {
  return (
    <>
      {" "}
      <div className="hidden md:flex items-center gap-x-2">

      <Image
        width={20}
        height={20}
        className="dark:hidden"
        src={"/light_icon.svg"}
        alt="logo"
        />
      <Image
        width={20}
        height={20}
        className="hidden dark:block"
        src={"/dark_icon.svg"}
        alt="logo"
        />
      <p className={cn("font-semibold", font.className)}>Notely</p>
        </div>
    </>
  );
};

export default Logo;
