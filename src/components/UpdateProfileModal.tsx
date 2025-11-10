import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { updateUserSchema } from "@/schemas/userSchema";
import type { IUser } from "@/types";
import z from "zod";

import { Role, IsActive } from "@/types/user.type"; // import your enums

interface IProps {
  userData: IUser;
  currentUserRole: Role; // pass the logged-in user's role
}

type UpdateUserFormValues = z.infer<typeof updateUserSchema>;

export function UpdateProfileModal({ userData, currentUserRole }: IProps) {
  // const form = useForm<UpdateUserFormValues>({
  //   resolver: zodResolver(updateUserSchema),
  //   defaultValues: {
  //     name: userData.name || "",
  //     email: userData.email || "",
  //     phone: userData.phone || "",
  //     address: userData.address || "",
  //     role: userData.role || "",
  //     isActive: userData.isActive || "",
  //     isDeleted: userData.isDeleted || false,
  //     isVerified: userData.isVerified || true,
  //   },
  // });

  const onSubmit = async (data: UpdateUserFormValues) => {
    const toastId = toast.loading("Profile update in progress...");
    try {
      // call your update API here
      console.log(data);
      toast.success("Profile updated successfully", { id: toastId });
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", { id: toastId });
    }
  };

  const isAdmin = currentUserRole === Role.ADMIN || currentUserRole === Role.SUPER_ADMIN;

 const handleSubmit=async(e)=>{
e.preventDefault();
const name=e.target.value.name;
console.log("From handle Submit",name)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Update Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when done.</DialogDescription>
        </DialogHeader>


     
          <form id="update-user" className="grid grid-cols-1 md:grid-cols-2 gap-6" >
            {/* NAME */}
            <div>   
            <Input name="name" placeholder="Enter your name"  onSubmit={handleSubmit} />
            </div>

            {/* EMAIL */}
           
            {/* <Button className=" w-full col-span-1  md:col-span-3" type="submit">
                Cash Out
              </Button> */}
            <div className="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4"></div>
          </form>
    
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button form="update-user" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
