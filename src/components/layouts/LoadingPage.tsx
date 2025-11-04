import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Coins, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

export default function LoadingPage() {
  const coinRef = useRef(null);
  const upRef = useRef(null);
  const downRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Rotate coin continuously
    gsap.to(coinRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 2,
      ease: "linear",
      transformOrigin: "center center",
    });

    // Animate arrows (transaction effect)
    gsap.to(upRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
    gsap.to(downRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 0.4,
    });

    // Pulse the loading text
    gsap.to(textRef.current, {
      opacity: 0.4,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground gap-8 overflow-hidden">
      {/* Coin + Transaction Arrows */}
      <div className="relative">
        <Coins ref={coinRef} className="w-20 h-20 text-primary drop-shadow-md" />
        <ArrowUpCircle ref={upRef} className="absolute -top-3 -right-3 w-7 h-7 text-green-500" />
        <ArrowDownCircle ref={downRef} className="absolute -bottom-3 -left-3 w-7 h-7 text-red-500" />
      </div>

      {/* Loading Text */}
      {/* <h1 ref={textRef} className="text-2xl font-semibold tracking-wide text-primary">
        Loading your wallet...
      </h1>
      <p className="text-muted-foreground text-sm">Please wait while VaultPay synchronizes your data securely.</p> */}
    </div>
  );
}
