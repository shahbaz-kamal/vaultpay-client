import SidebarHeader from "@/components/layouts/SidebarHeader";
import { useGetNewsLetterInfoQuery } from "@/redux/features/newsLetter/newLetter.api";
import { format } from "date-fns";

const NewsLetterInfo = () => {
  const { data: newsLetterData } = useGetNewsLetterInfoQuery(undefined);

  const subscribers = newsLetterData?.data || [];

  return (
    <div>
              <title > Newsletter Info || Vaultpay</title>
      <SidebarHeader heading="Dashboard" subHeading="User Management" subSubHeading="Newsletter Information" />

      <div className="px-8 py-6">
        {subscribers.length === 0 ? (
          <p className="text-muted-foreground text-center py-10 text-lg">No subscribers found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscribers.map((subscriber: any, index: number) => (
              <div key={index} className="p-5 border rounded-lg bg-background shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground">{subscriber.email}</h3>

                {subscriber.createdAt && (
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="font-semibold">Subscribed at:</span> {format(new Date(subscriber.createdAt), "MMM dd, yyyy, h:mm a")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLetterInfo;
