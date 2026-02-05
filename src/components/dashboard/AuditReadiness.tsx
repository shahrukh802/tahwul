import AppHeading from "../common/AppHeading";
import { Card } from "@/components/ui/card";

const AuditReadiness = () => {
  // SVG Path math: For a radius of 40, the semi-circle arc length is ~126
  // 80% of 126 is approximately 100.
  const arcLength = 125.6;
  const progress = arcLength * (1 - 80 / 100);

  return (
    <Card className="p-5">
      <AppHeading title="Audit Readiness" />
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 100 60" className="w-75">
            {/* Background Track (Gray) */}
            <path
              d="M 10,50 A 40,40 0 0 1 90,50"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Progress Bar (Green) - 80% Fill */}
            <path
              d="M 10,50 A 40,40 0 0 1 90,50"
              fill="none"
              stroke="#00a36c"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={arcLength}
              strokeDashoffset={progress}
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Centered Text Labels */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-10%] text-center">
            <span className="block text-[44px] font-bold text-app-primary">
              80%
            </span>
            <span className="block text-[14px] text-secondary font-medium tracking-wider">
              Readiness Level
            </span>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 w-full mt-2 border-t border-[#E0E8ED] pt-4">
          <div className="text-center border-r border-slate-100">
            <p className="text-2xl font-bold text-app-primary">12</p>
            <p className="text-[14px] text-secondary">Overdue Stds</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-app-primary">5</p>
            <p className="text-[14px] text-secondary">Missing Evidence</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AuditReadiness;
