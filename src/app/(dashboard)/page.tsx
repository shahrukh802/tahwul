import ProjectTimeline from "@/components/dashboard/ProjectTimeline";
import SummaryStats from "@/components/dashboard/SummaryStats";
import PerspectiveProgress from "@/components/dashboard/PerspectiveProgress";
import RecentActivities from "@/components/dashboard/RecentActivities";
import ProgressStatus from "@/components/dashboard/ProgressStatus";
import ComplianceScore from "@/components/dashboard/ComplianceScore";
import AuditReadiness from "@/components/dashboard/AuditReadiness";
import PerformanceChart from "@/components/dashboard/PerformanceChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <ProjectTimeline />
      <SummaryStats />
      <ProgressStatus />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        <ComplianceScore />
        <PerspectiveProgress />
        <RecentActivities />
        <PerformanceChart />
        <AuditReadiness />
      </div>
    </div>
  );
}
