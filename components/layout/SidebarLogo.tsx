import { useRouter } from "next/router";
import {BsTwitter} from "react-icons/bs";
import { IoLogoSlack } from "react-icons/io";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push("/")} className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:opacity-70 cursor-pointer transition">
        {/* <BsTwitter size={28} color="white"/> */}
        <IoLogoSlack size={28} color="white"/>
    </div>
  );
};

export default SidebarLogo;
