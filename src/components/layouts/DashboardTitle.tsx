import React from "react";

interface DashboardTitleProps {
  title: string;
  icon?: React.ReactNode;
}

const DashboardTitle: React.FC<DashboardTitleProps> = ({ title, icon }) => {
  return (
    <div className="flex  items-center gap-3 mb-6">
      {/* Icon section */}
      {icon && (
        <div
          className="w-8 h-8 flex items-center justify-center rounded-sm "
          style={{
            backgroundColor: "var(--primary)", // primary color for icon background
            color: "var(--primary-foreground)", // icon color
          }}
        >
          {icon}
        </div>
      )}

      {/* Title text */}
      <h1
        className="text-2xl font-bold"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default DashboardTitle;
