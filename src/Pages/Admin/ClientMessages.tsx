import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import { useGetContactUsMessageQuery, useUpdateContactUsMessageMutation } from "@/redux/features/contactUs/contactUs.api";
import { FaCheckDouble } from "react-icons/fa6";
import { toast } from "sonner";
import { format } from "date-fns";

const ClientMessages = () => {
  const { data: clientMessageData } = useGetContactUsMessageQuery(undefined);
  const [updateContactUsMessage] = useUpdateContactUsMessageMutation();

  if (!clientMessageData?.success) return <LoadingPage />;
  console.log(clientMessageData);
  const handleMarkAsRead = async (messageId: string) => {
    const toastId = toast.loading("Marking as read...");
    try {
      // Update on backend if needed
      const result = await updateContactUsMessage({ id: messageId }).unwrap();

      if (result.success) {
        toast.success("Marked as read", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to mark as read", { id: toastId });
      console.log("Failed to mark as read", error);
    }
  };

  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="User Management" subSubHeading="Client Message" />

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 mx-auto px-8 py-6">
        {clientMessageData.data.map((message, index) => {
          const isRead = message.isRead;
          return (
            <div
              key={index}
              className="p-5 border rounded-lg bg-background shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer relative flex flex-col justify-between h-full"
            >
              {/* Tick Icon */}
              <div className="absolute top-3 right-3 text-xl">
                <FaCheckDouble className={isRead ? "text-green-500" : "text-gray-400"} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{message.name}</h3>
                {/* Created At */}
                {message.createdAt && (
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-semibold">Sent At:</span>{" "}
                    <span className="font-bold">{format(new Date(message.createdAt), "MMM dd, yyyy, h:mm a")}</span>
                  </p>
                )}
                {/* Updated At */}
                {message.updatedAt && message.createdAt !== message.updatedAt && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Marked As Read at:</span>{" "}
                    <span className="font-bold">{format(new Date(message.updatedAt), "MMM dd, yyyy, h:mm a")}</span>
                  </p>
                )}
                {message.subject && (
                  <p className="text-sm text-muted-foreground font-bold">
                    <span className="font-medium">Subject:</span> {message.subject}
                  </p>
                )}

                <p className="text-xs text-muted-foreground italic font-bold">{message.email}</p>
                <p className="text-sm text-muted-foreground">{message.message}</p>
              </div>

              {/* Mark as Read Button */}
              {!isRead && (
                <button
                  onClick={() => handleMarkAsRead(message._id)}
                  className="mt-4 w-full bg-primary text-primary-foreground px-3 py-2 rounded hover:bg-primary/80 transition"
                >
                  Mark as Read
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientMessages;
