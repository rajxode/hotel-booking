
import React from "react";
import FooterLinks from "@/app/_landingPage/_component/footerSection/FooterLinks";
import FooterQna from "@/app/_landingPage/_component/footerSection/FooterQna";
import FooterSocialLinks from "@/app/_landingPage/_component/footerSection/FooterSocialLinks";

const Footer = () => {
    return (
        <>
            <div className="w-full mt-3 pt-6 flex flex-col">
                <FooterLinks />
                <FooterQna />
                <FooterSocialLinks />
            </div>
        </>
    )
}

export default Footer;