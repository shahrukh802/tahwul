import AppHeading from "../common/AppHeading";
import { Card } from "@/components/ui/card";

const ComplianceScore = () => {
  // SVG Path math: For a radius of 40, the semi-circle arc length is ~126
  // 80% of 126 is approximately 100.
  const arcLength = 125.6;
  const progress = arcLength * (1 - 65 / 100);

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
              stroke="#DB1F26"
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
              65%
            </span>
            <span className="block text-[14px] text-secondary font-medium tracking-wider">
              Readiness Level
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ComplianceScore;
