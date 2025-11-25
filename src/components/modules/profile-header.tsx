/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import type { IUser } from "@/types";
import { Calendar, Camera, Mail, MapPin } from "lucide-react";
import LoadingPage from "../layouts/LoadingPage";

import mockProfilePicture from "@/assets/images/mockProfilePicture.jpg";
import { format } from "date-fns";

import { Role } from "@/types/user.type";
import UpdateProfileModal from "../UpdateProfileModal";

export default function ProfileHeader() {
  const { data: userData } = useGetMeQuery(undefined);
  if (!userData) return <LoadingPage></LoadingPage>;

  const { name, email, role, profilePicture, address, createdAt } = userData?.data as IUser;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center">
          <div className="relative">
            <Avatar className="h-24 w-24">
              {profilePicture && <AvatarImage src={profilePicture as string} alt="Profile" />}
              {!profilePicture && <AvatarImage src={mockProfilePicture} alt="Profile" />}
            </Avatar>
            <Button size="icon" variant="outline" className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full">
              <Camera />
            </Button>
          </div>
          <div className="flex-1 space-y-2 flex flex-col lg:flex-row items-center lg:block">
            <div className="flex flex-col gap-2 lg:flex-row items-center ">
              <h1 className="text-2xl font-bold text-center">{name}</h1>
              <div className="">
                <Badge variant="secondary">{role}</Badge>
              </div>
            </div>
            {/* <p className="text-muted-foreground">Senior Product Designer</p> */}
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm items-center justify-center lg:justify-start">
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
                Joined {format(new Date(createdAt as Date), "PPP")}
              </div>
            </div>
          </div>
          {/* <Button variant="default">Edit Profile</Button> */}
          <UpdateProfileModal userData={userData.data} currentUserRole={Role.ADMIN} buttonText="Update Profile"></UpdateProfileModal>
        </div>
      </CardContent>
    </Card>
  );
}
