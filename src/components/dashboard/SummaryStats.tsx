import { StatCard } from "../common/StatCard";
import stat1 from "@/assets/stats1.svg";
import stat2 from "@/assets/stats2.svg";
import stat3 from "@/assets/stats3.svg";
import stat4 from "@/assets/stats4.svg";
import stat5 from "@/assets/stats5.svg";
import stat6 from "@/assets/stats6.svg";

export const summaryStats = [
  {
    id: "overall-progress",
    title: "Overall Progress",
    value: "78.65%",
    icon: stat1,
  },
  {
    id: "total-criteria",
    title: "Total Criteria",
    value: 95,
    icon: stat2,
  },
  {
    id: "completed-criteria",
    title: "Complated Criteria",
    value: 52,
    icon: stat3,
  },
  {
    id: "evidence-documents",
    title: "Evidence Documents",
    value: 386,
    icon: stat4,
  },
  {
    id: "completed",
    title: "Completed",
    value: 302,
    icon: stat5,
  },
  {
    id: "uploaded-dga",
    title: "Uploaded to DGA",
    value: 258,
    icon: stat6,
  },
];

export default function SummaryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2 2xl:gap-4">
      {summaryStats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
