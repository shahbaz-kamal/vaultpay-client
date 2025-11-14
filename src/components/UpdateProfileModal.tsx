import { useEffect, useState } from "react";
import CustomModal from "./CustomModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema } from "@/schemas/userSchema";
import type z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { IUser } from "@/types";
import { Role } from "@/types/user.type";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import SingleImageUploader from "./SingleImageUploader";

type UpdateUserFormValues = z.infer<typeof updateUserSchema>;

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: Partial<IUser>;
  currentUserRole: Role;
}

export default function UpdateProfileModal({ userData, currentUserRole }: IProps) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const form = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      role: "",
    },
  });

  useEffect(() => {
    if (!userData) return;

    if (userData.role === Role.ADMIN || userData.role === Role.SUPER_ADMIN) {
      form.reset({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
        role: userData.role || "",
      });
    } else {
      form.reset({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
      });
    }
  }, [userData, form, open]);
  const onSubmit = (data: UpdateUserFormValues) => {
    console.log("FORM SUBMITTED:", data);
    setOpen(false);
  };

  // ✅ check if admin or super admin
  const isAdmin = currentUserRole === Role.ADMIN || currentUserRole === Role.SUPER_ADMIN;
  console.log("Inside modal",image)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Update Profile</Button>

      <CustomModal open={open} onClose={() => setOpen(false)} title="Update Profile">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-1 md:grid-cols-1 gap-6">
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
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full">
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
                {/* EMAIL */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <SingleImageUploader onChange={setImage}></SingleImageUploader>
            {/* BUTTONS */}
            <div className="col-span-1  flex flex-wrap gap-4">
              <Button type="button" variant="destructive" className="flex-1 md:basis-[48%]" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => form.handleSubmit(onSubmit)} type="submit" className="flex-1 md:basis-[48%]">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CustomModal>
    </>
  );
}
