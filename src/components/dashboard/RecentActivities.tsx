import { Card } from "@/components/ui/card";
import AppHeading from "../common/AppHeading";

const RecentActivities = () => {
  return (
    <Card className="p-5">
      <AppHeading title="Recent Activities" />
      <div className="flex flex-col items-center w-full">
        <div className="space-y-6">
          {[
            {
              text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
              time: "5 Mins Ago",
            },
            {
              text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
              time: "20 Mins Ago",
            },
            {
              text: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
              time: "1 Hour Ago",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start relative">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <p className="text-[16px] text-app-primary font-semibold leading-relaxed">
                {item.text}
              </p>
              <span className="text-[12px] text-secondary whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RecentActivities;
