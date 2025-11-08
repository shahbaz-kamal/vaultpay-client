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
    <div className="py-4">
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-6 
          place-items-center
        "
      >
        {paymentLogos.map((logo, index) => (
          <div
            key={index}
            className="p-3 rounded-lg border border-muted flex items-center justify-center w-full"
          >
            <img
              src={logo}
              alt="payment-logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
