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
  const form = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: userData.name || "",
      email: userData.email || "",
      phone: userData.phone || "",
      address: userData.address || "",
      role: userData.role || "",
      isActive: userData.isActive || "",
      isDeleted: userData.isDeleted || false,
      isVerified: userData.isVerified || true,
    },
  });

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
        <Form {...form}>
          <form id="update-user" className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={form.handleSubmit(onSubmit)}>
            {/* NAME */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
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
                    <Input placeholder="Enter your email" {...field} />
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
                    <Input placeholder="Enter your phone" {...field} />
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
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ADMIN ONLY FIELDS */}
            {isAdmin && (
              <>
                {/* ROLE */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
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

                {/* IS ACTIVE */}
                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Status</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value={IsActive.ACTIVE}>Active</SelectItem>
                              <SelectItem value={IsActive.INACTIVE}>Inactive</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* IS DELETED */}
                <FormField
                  control={form.control}
                  name="isDeleted"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Deleted</FormLabel>
                      <FormControl>
                        <Select onValueChange={(val) => field.onChange(val === "true")} value={String(field.value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="true">Yes</SelectItem>
                              <SelectItem value="false">No</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* IS VERIFIED */}
                <FormField
                  control={form.control}
                  name="isVerified"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Verified</FormLabel>
                      <FormControl>
                        <Select onValueChange={(val) => field.onChange(val === "true")} value={String(field.value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="true">Yes</SelectItem>
                              <SelectItem value="false">No</SelectItem>
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
            {/* <Button className=" w-full col-span-1  md:col-span-3" type="submit">
                Cash Out
              </Button> */}
            <div className="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4"></div>
          </form>
        </Form>
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
