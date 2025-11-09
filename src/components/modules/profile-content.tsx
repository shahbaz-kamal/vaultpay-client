
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { IsActive } from "@/types/user.type";
import { format } from "date-fns";
import LoadingPage from "../layouts/LoadingPage";



export default function ProfileContent() {
  const { data: userData, isLoading } = useGetMeQuery(undefined);

  if (isLoading || !userData?.data) {
    return <LoadingPage />;
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Additional profile details.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PHONE */}
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Phone</Label>
              <p className="font-medium">{userData?.data.phone || "N/A"}</p>
            </div>

            {/* STATUS */}
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Account Status</Label>
              <Badge className={`font-medium ${IsActive.ACTIVE ? "bg-green-800" : "bg-red-400"}`}>{userData?.data.isActive}</Badge>
            </div>

            {/* VERIFIED */}
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Verification</Label>
              <Badge className={`font-medium ${userData?.data.isVerified ? "bg-green-800" : "bg-red-400"}`}>
                {userData?.data.isVerified ? "Verified" : "Not Verified"}
              </Badge>
            </div>

            {/* AGENT REQUEST STATUS */}
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Agent Request Status</Label>
              <p className="font-medium">{userData?.data.agentRequestStatus || "N/A"}</p>
            </div>

            {/* AGENT REQUESTED AT */}
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Agent Requested At</Label>
              <p className="font-medium">
                {userData?.data.agentRequestedAt ? format(new Date(userData.data.agentRequestedAt), "PPPp") : "N/A"}
              </p>
            </div>

            {/* AGENT APPROVED AT */}
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Agent Approved At</Label>
              <p className="font-medium">
                {userData?.data.agentApprovedAt ? format(new Date(userData.data.agentApprovedAt), "PPPp") : "N/A"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details and profile information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form></Form>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input id="jobTitle" defaultValue="Senior Product Designer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" defaultValue="Acme Inc." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              defaultValue="Passionate product designer with 8+ years of experience creating user-centered digital experiences. I love solving complex problems and turning ideas into beautiful, functional products."
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" defaultValue="San Francisco, CA" />
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
