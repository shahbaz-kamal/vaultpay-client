import { Logo } from "@/assets/icons/Logo";
import { VerifyForm } from "@/components/modules/auth/VerifyForm";

export default function Verify() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium    px-3 py-2 rounded-md">
          <div className="  flex  items-center justify-center rounded-md">
            <div className="dark:bg-white p-1 rounded-md">
              {" "}
              <Logo></Logo>
            </div>
            {/* <GalleryVerticalEnd className="size-4" ></GalleryVerticalEnd> */}
          </div>
          VaultPay
        </div>
        <VerifyForm />
      </div>
    </div>
  );
}
