import Image from "next/image";
import Link from "next/link";
import facebookLogo from "@/assets/images/social icons/fb.png";
import googleLogo from "@/assets/images/social icons/google.webp";
import twitterXLogo from "@/assets/images/social icons/twitter x.webp";
import instagramLogo from "@/assets/images/social icons/instagram.png";
import weChatLogo from "@/assets/images/social icons/we chat.webp";

const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-4">
      <Link href="#">
        <div>
          <Image src={facebookLogo} height={25} width={25} alt="" />
        </div>
      </Link>
      <Link href="#">
        <div>
          <Image src={googleLogo} height={25} width={25} alt="" />
        </div>
      </Link>
      <Link href="#">
        <div>
          <Image src={weChatLogo} height={25} width={25} alt="" />
        </div>
      </Link>
      <Link href="#">
        <div>
          <Image src={instagramLogo} height={25} width={25} alt="" />
        </div>
      </Link>
      <Link href="#">
        <div>
          <Image src={twitterXLogo} height={25} width={25} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default SocialLogin;
