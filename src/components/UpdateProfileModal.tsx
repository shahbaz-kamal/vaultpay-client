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

type UpdateUserFormValues = z.infer<typeof updateUserSchema>;

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: Partial<IUser>;
  currentUserRole: Role;
  buttonText: string;
}

export default function UpdateProfileModal({ userData, currentUserRole, buttonText }: IProps) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);


  const [updateUser] = useUpdateUserMutation();

  const form = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      role: userData.role as Role,
      isActive: userData.isActive,
      isDeleted:userData.isDeleted 
    },
  });

  useEffect(() => {
    if (!open || !userData) return;
  

    if (currentUserRole === Role.ADMIN || currentUserRole === Role.SUPER_ADMIN) {
      form.reset({
        name: userData.name || "",
        phone: userData.phone || "",
        address: userData.address || "",
        role: userData.role ?? "",
        isActive: userData.isActive ?? "",
        isDeleted: userData.isDeleted ?? true,
      });
      // setRoleValue(userData.role ?? undefined);
      // setIsActiveValue(userData.isActive ?? undefined);
    } else {
      form.reset({
        name: userData.name || "",
        phone: userData.phone || "",
        address: userData.address || "",
      });
    }
  }, [open]);

  const onSubmit = async (data: UpdateUserFormValues) => {
    const toastId = toast.loading("Updating User");
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    console.log("FORM SUBMITTED:", data);
    console.log("from formdata", formData.get("data"));

    try {
      const res = await updateUser({
        userId: userData._id as string,
        data: formData,
      }).unwrap();
  
      if (res.success) {
        toast.success("User Updated Successfully", { id: toastId });
      }
  
      console.log("responseee", res);
      setOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast.error(error.message)
    }
    
  };

  // ✅ check if admin or super admin
  const isAdmin = currentUserRole === Role.ADMIN || currentUserRole === Role.SUPER_ADMIN;
  console.log("Inside modal", image);
  console.log(isAdmin);
  return (
    <>
      <Button onClick={() => setOpen(true)}>{buttonText}</Button>

      <CustomModal open={open} onClose={() => setOpen(false)} title="Update Profile">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={cn("grid gap-6", isAdmin ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
            {/* NAME */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PHONE */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ADDRESS */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ ROLE (Admin & Super Admin only) */}
            {isAdmin && (
              <>
                {" "}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value} // controlled by RHF
                          onValueChange={field.onChange}
                          // value={roleValue}
                          // onValueChange={(val) => {
                          //   setRoleValue(val); // update local state
                          //   field.onChange(val); // update form
                          // }}
                        >
                          <SelectTrigger className="w-full">
                            {/* <SelectValue>{(field.value ) || "Select a status"}</SelectValue> */}
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Roles</SelectLabel>
                              <SelectItem value={Role.USER}>User</SelectItem>
                              <SelectItem value={Role.AGENT}>Agent</SelectItem>
                              <SelectItem value={Role.ADMIN}>Admin</SelectItem>
                              <SelectItem value={Role.SUPER_ADMIN}>Super Admin</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Active Status</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value} // controlled by RHF
                          onValueChange={field.onChange}
                          // value={isActiveValue}
                          // onValueChange={(val) => {
                          //   setIsActiveValue(val);
                          //   field.onChange(val);
                          // }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a active status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Active Status</SelectLabel>
                              <SelectItem value={IsActive.ACTIVE}>Active</SelectItem>
                              <SelectItem value={IsActive.INACTIVE}>Inactive</SelectItem>
                              <SelectItem value={IsActive.BLOCKED}>Blocked</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isDeleted"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deletion Status</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value ? "true" : "false"}  // convert boolean to string
                          onValueChange={(val) => field.onChange(val === "true")}
                        
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a active status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Deletion Status</SelectLabel>
                              <SelectItem value="false">Not Deleted</SelectItem>
                              <SelectItem value="true">Deleted</SelectItem>
                            
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {/* <SingleImageUploader onChange={setImage}></SingleImageUploader> */}
            {/* BUTTONS */}
            <div className={cn("  flex flex-wrap gap-4", isAdmin ? "col-span-1 md:col-span-2" : "col-span-1")}>
              <Button type="button" variant="destructive" className="flex-1 md:basis-[48%]" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1 md:basis-[48%]">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CustomModal>
    </>
  );
}
