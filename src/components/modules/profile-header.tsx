import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Calendar, Mail, MapPin } from "lucide-react";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import LoadingPage from "../layouts/LoadingPage";
import type { IUser } from "@/types";

import mockProfilePicture from "@/assets/images/mockProfilePicture.jpg";
import { format } from "date-fns";

import { Role } from "@/types/user.type";
import TestModal from "../CustomModal";
import CustomModal from "../CustomModal";
import UpdateProfileModal from "../UpdateProfileModal";

export default function ProfileHeader() {
  const { data: userData } = useGetMeQuery(undefined);
  if (!userData) return <LoadingPage></LoadingPage>;

  const {
    _id,
    name,
    email,
    role,
    phone,
    profilePicture,
    address,
    isDeleted,
    isActive,
    isVerified,
    auths,
    agentRequestStatus,
    agentRequestedAt,
    agentApprovedAt,
    createdAt,
    updatedAt,
    wallet,
    password,
  } = userData?.data as IUser;

  const handleOpenModal=()=>{

  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="relative">
            <Avatar className="h-24 w-24">
              {profilePicture && <AvatarImage src={profilePicture as string} alt="Profile" />}
              {!profilePicture && <AvatarImage src={mockProfilePicture} alt="Profile" />}
            </Avatar>
            <Button size="icon" variant="outline" className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full">
              <Camera />
            </Button>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <h1 className="text-2xl font-bold">{name}</h1>
              <Badge variant="secondary">{role}</Badge>
            </div>
            {/* <p className="text-muted-foreground">Senior Product Designer</p> */}
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                {email}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="size-4" />
                {address ? address : "N/ A"}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                Joined {format(new Date(createdAt as Date),"PPP")}
              </div>
            </div>
          </div>
          {/* <Button variant="default">Edit Profile</Button> */}
          <UpdateProfileModal userData={userData} currentUserRole={Role.USER}></UpdateProfileModal>

     

     
        </div>
      </CardContent>
    </Card>
  );
}
