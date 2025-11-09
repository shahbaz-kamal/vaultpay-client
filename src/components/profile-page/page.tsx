import ProfileHeader from "../modules/profile-header";
import ProfileContent from "../modules/profile-content";

export default function Page() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-10">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}
