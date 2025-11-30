import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import { useGetContactUsMessageQuery } from "@/redux/features/contactUs/contactUs.api";

const ClientMessages = () => {
  const { data: clientMessageData } = useGetContactUsMessageQuery(undefined);

  if (!clientMessageData?.success) return <LoadingPage></LoadingPage>;
  console.log(clientMessageData.data);
  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="User Management" subSubHeading="Client Message" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto px-8 py-6">
        {clientMessageData.data.map((message, index) => (
          <div
            key={index}
            className={`p-5 border rounded-lg bg-background shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
              message.isRead ? "opacity-70" : "opacity-100"
            }`}
          >
            <h3 className="text-lg font-semibold text-foreground">{message.name}</h3>
            {message.subject && (
              <p className="text-sm text-muted-foreground mt-1 font-bold">
                <span className="font-medium">Subject:</span> {message.subject}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2 italic font-bold">{message.email}</p>
            <p className="text-sm text-muted-foreground mt-2">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMessages;
