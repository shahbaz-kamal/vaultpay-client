import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  isProfilePicture?: boolean;
}

export default function CustomModal({ open, onClose, title, children, isProfilePicture = false }: CustomModalProps) {
  if (!open) return null;

  return (
    <div className="fixed bg-background/50 inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div className="absolute inset-0 p-6" onClick={onClose} />

      {/* MODAL CARD */}
      <div
        className={cn(
          "relative z-50 w-full  rounded-xl bg-background p-6 shadow-lg animate-in fade-in-0 zoom-in-95",
          isProfilePicture ? "max-w-[400px]" : "max-w-3xl"
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
