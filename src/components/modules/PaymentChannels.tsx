import Marquee from "react-fast-marquee";

import mastercard from "@/assets/images/mastercard.svg";
import amex from "@/assets/images/amex.svg";
import unionpay from "@/assets/images/unionpay.svg";
import nexus from "@/assets/images/nexus.svg";
import dinersclub from "@/assets/images/dinersclub.svg";
import qcash from "@/assets/images/qcash.svg";
import bkash from "@/assets/images/bkash.svg";
import nagad from "@/assets/images/nagad.svg";
import rocket from "@/assets/images/rocket.svg";
import upay from "@/assets/images/upay.svg";
import surecash from "@/assets/images/surecash.svg";
import mcash from "@/assets/images/mcash.svg";
import ipay from "@/assets/images/ipay.svg";
import islamicwallet from "@/assets/images/islamicwallet.svg";
import okwallet from "@/assets/images/okwallet.svg";
import dmoney from "@/assets/images/dmoney.svg";

export default function PaymentChannels() {
  const paymentLogos = [
    bkash,
    nagad,
    rocket,
    upay,
    surecash,
    mcash,
    ipay,
    islamicwallet,
    okwallet,
    dmoney,
    mastercard,
    amex,
    unionpay,
    nexus,
    dinersclub,
    qcash,
  ];

  return (
    <div className="space-y-4 py-4">
      {/* Row 1 */}
      <Marquee pauseOnHover speed={40} gradient={false}>
        <div className="flex items-center gap-10">
          {paymentLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-10 md:h-20 w-auto object-contain"
              alt="payment-logo"
            />
          ))}
        </div>
      </Marquee>

      {/* Row 2 (Reverse direction) */}
      <Marquee pauseOnHover speed={35} gradient={false} direction="right">
        <div className="flex items-center gap-10">
          {paymentLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-10 md:h-20 w-auto object-contain"
              alt="payment-logo"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
