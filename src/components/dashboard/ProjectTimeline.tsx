import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppHeading from "../common/AppHeading";

const ProjectTimeline = () => {
  const milestones = [
    { date: "Mar 17", title: "Kickoff Workshop", completed: true },
    { date: "March 18", title: "Data Collection", completed: true },
    { date: "May 8", title: "Initial Phase", completed: false },
    { date: "May 9–July 12", title: "Verification", completed: false },
    { date: "July 13", title: "Completion Reviews", completed: false },
    { date: "August 21", title: "Cycle Conclusion", completed: false },
  ];

  return (
    <Card>
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <AppHeading title="Project Timeline" />

        <Select defaultValue="2026">
          <SelectTrigger className="w-24 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2026">2026</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      {/* Timeline Container */}
      <CardContent className="pt-2 pb-4">
        <div className="hidden md:block relative">
          {/* Background Track */}
          <div className="absolute left-0 w-full h-3.5 bg-[#f1f5f9] rounded-full" />

          {/* Active Progress (Green part) */}
          {/* Based on image, green ends at the 2nd dot (~20% width) */}
          <div className="absolute left-0 w-[30%] h-3.5 bg-[#10b981] rounded-full" />

          {/* Milestones */}
          <div className="relative flex justify-between items-center">
            {milestones.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative w-full"
              >
                {/* The Dot */}
                <div
                  className={`w-3.5 h-3.5 rounded-full z-10 mb-6 transition-colors duration-300 ${
                    step.completed
                      ? "bg-white border-[3px] border-white ring-2 ring-transparent shadow-sm"
                      : "bg-[#ef4444]"
                  }`}
                >
                  {/* Small detail: the screenshot shows white inner dots for green areas */}
                </div>

                {/* Labels */}
                <div className="text-center">
                  <p className="text-secondary text-sm mb-1">{step.date}</p>
                  <p className="text-app-primary text-sm font-medium whitespace-nowrap">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="md:hidden relative flex flex-col gap-8 ml-4">
          {/* Vertical Track */}
          <div className="absolute left-[3px] top-0 w-2.5 h-full bg-[#f1f5f9] rounded-full" />
          {/* Vertical Active Progress (Based on 2 completed steps) */}
          <div className="absolute left-[3px] top-0 w-2.5 h-[28%] bg-[#10b981] rounded-full" />

          {milestones.map((step, index) => (
            <div key={index} className="flex items-start gap-6 relative">
              <div
                className={`shrink-0 w-4 h-4 rounded-full z-10 mt-1 ${
                  step.completed
                    ? "bg-white border-[3px] border-white ring-2 ring-[#10b981] shadow-sm"
                    : "bg-[#ef4444]"
                }`}
              />
              <div>
                <p className="text-secondary text-[10px] tracking-wider">
                  {step.date}
                </p>
                <p className="text-app-primary text-sm">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectTimeline;
