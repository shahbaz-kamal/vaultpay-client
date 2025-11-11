import { X } from "lucide-react";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function CustomModal({ open, onClose, title, children }: CustomModalProps) {
  if (!open) return null;

  return (
    <div className="fixed bg-background/50 inset-0 z-50 flex items-center justify-center">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 "
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div className="relative z-50 w-full max-w-lg rounded-xl bg-background p-6 shadow-lg animate-in fade-in-0 zoom-in-95">
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
