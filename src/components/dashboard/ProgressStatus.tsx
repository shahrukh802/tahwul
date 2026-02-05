import { ProgresStatusData, ProgresStatusColors } from "@/data/dashboard";
import AppHeading from "../common/AppHeading";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const ProgressStatus = () => {
  return (
    <Card className="p-6">
      {/* Header & Legend */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <AppHeading title="Progress Status" />

        <div className="flex flex-wrap gap-4 text-sm text-[#475569] font-medium">
          <LegendItem color="bg-[#94a3b8]" label="Not Started" />
          <LegendItem color="bg-[#f59e0b]" label="In Progress" />
          <LegendItem color="bg-[#10b981]" label="Completed" />
          <LegendItem color="bg-[#1e40af]" label="Partially Uploaded" />
          <LegendItem color="bg-[#3b82f6]" label="Fully Uploaded" />
          <LegendItem color="bg-[#ef4444]" label="Delayed" />
        </div>
      </div>

      {/* Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-10 gap-2 2xl:gap-5">
        {ProgresStatusData.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            {/* Column Header */}
            <div className="bg-app-primary rounded-xl p-3 text-center min-h-25 flex flex-col justify-center items-center shadow-md">
              <h3 className="text-white text-[12px] leading-tight font-bold mb-2 tracking-wide">
                {col.title}
              </h3>
              <span className="bg-[#ffffff20] text-white text-[14px] font-bold px-3 py-1 rounded-full">
                {col.percentage}
              </span>
            </div>

            {/* Column Content */}
            <div className="flex flex-col gap-3 h-full">
              {col.cards.map((card, cIdx) => (
                <Link
                  href={"/strategic-planning"}
                  key={cIdx}
                  className={`bg-background border rounded-xl p-3 flex flex-col items-center justify-between h-full border-slate-100 hover:border-[#fbbf24]`}
                >
                  <p className="text-app-primary text-[10px] font-semibold text-center leading-tight mb-4">
                    {card.title}
                  </p>
                  <div className="flex h-full items-center justify-center pt-5">
                    <div className="flex flex-wrap justify-center gap-2">
                      {card.steps.map((step) => (
                        <div
                          key={step.id}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[16px] ${ProgresStatusColors[step.status]}`}
                        >
                          {step.id}
                        </div>
                      ))}
                    </div>
                    <div />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <span className={`w-3 h-3 rounded-full ${color}`}></span>
    <span>{label}</span>
  </div>
);

export default ProgressStatus;
