import SidebarHeader from "@/components/layouts/SidebarHeader";
import ProfileContent from "@/components/modules/profile-content";
import ProfileHeader from "@/components/modules/profile-header";

export default function Profile() {
  return (
    <div>
      {" "}
      <SidebarHeader heading="Dashboard" subHeading="Overview" subSubHeading="Profile" />
      <div className="container mx-auto space-y-6 px-5 py-6 ">
        <ProfileHeader />
        <ProfileContent />
      </div>
    </div>
  );
}
