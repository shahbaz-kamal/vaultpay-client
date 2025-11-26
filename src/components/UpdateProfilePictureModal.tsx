import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useUpdateUserMutation } from "@/redux/features/user/user.api";
import { updateUserSchema } from "@/schemas/userSchema";
import type { IUser } from "@/types";
import { IsActive, Role } from "@/types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";
import CustomModal from "./CustomModal";
import { Camera, HandPlatterIcon } from "lucide-react";
import ProfilePictureUploader from "./ProfilePictureUploader";

type UpdateUserFormValues = z.infer<typeof updateUserSchema>;

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: Partial<IUser>;
}

export default function UpdateProfilePictureModal({ userData }: IProps) {
  const [open, setOpen] = useState(false);
const [profilePicture,setProfilePicture]=useState<File | null>(null)
  const [updateUser] = useUpdateUserMutation();



  const handleUpdate = async () => {
    const toastId = toast.loading("Updating Profile Picture");
    const formData = new FormData();
    formData.append("file", profilePicture as File);

    // console.log("FORM SUBMITTED:", data);
    // console.log("from formdata", formData.get("file"));

    try {
      const res = await updateUser({
        userId: userData._id as string,
        data: formData,
      }).unwrap();

      if (res.success) {
        toast.success("Profile Picture Updated Successfully", { id: toastId });
      }

      console.log("responseee", res);
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // ✅ check if admin or super admin
  console.log("Inside Update",profilePicture)
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        size="icon"
        variant="outline"
        className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full"
      >
        <Camera />
      </Button>

      <CustomModal isProfilePicture={true} open={open} onClose={() => setOpen(false)} title="Update Profile Picture">
        <div className="flex flex-col items-center justify-center gap-6 ">
        
          {/* <div className="w-[200px] h-[200px] flex items-center justify-center ">
            <img className="w-full h-full object-cover" src={userData.profilePicture as string} alt="" />
          </div> */}
          <ProfilePictureUploader initialProfilePicture={userData.profilePicture as string | null} onChange={setProfilePicture}></ProfilePictureUploader>
          <div className="grid grid-cols-2 gap-6  w-full" >
            <Button type="button" variant="destructive" className="w-full" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={()=>handleUpdate()} type="submit" className="w-full">
              Save Changes
            </Button>
          </div>
        </div>
      </CustomModal>
    </>
  );
}
