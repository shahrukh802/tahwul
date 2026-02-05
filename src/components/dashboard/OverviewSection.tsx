import React from "react";
import { Card } from "@/components/ui/card";
import AppHeading from "../common/AppHeading";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface RowProps {
  label: string;
  content: string | React.ReactNode;
  isLast?: boolean;
  isActive?: boolean;
}

const data = [
  {
    label: "Objective",
    content:
      "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
  },
  {
    label: "Implementation Requirements",
    content: (
      <div className="space-y-2">
        <p>
          Prepare A Digital Transformation Strategy For The Transition To
          Electronic Government Transactions, Including The Following:
        </p>
        <ul className="space-y-1">
          <li>
            A. The Organization's Vision, Mission, Strategic Pillars, And
            Strategic Objectives, And Their Alignment With The Organization's
            Overall Strategy.
          </li>
          <li>
            B. Strategic Initiatives, Programs, And Performance Indicators.
          </li>
          <li>
            C. A Clear Methodology For Integration And Coordination With
            Relevant External Entities To Achieve The Strategy's Objectives.
          </li>
          <li>
            D. Required Competencies, Capabilities, And Skills Necessary To
            Achieve The Strategy's Objectives.
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Evidence Documents",
    content:
      "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.",
  },
  {
    label: "Related Regulations",
    content:
      "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
  },
  {
    label: "Scope",
    content: "All Government Entities.",
  },
];

const AlignedRow = ({ label, content, isActive }: RowProps) => (
  <div className="flex flex-row group">
    {/* Left Section: Tab */}
    <div className="w-35 flex flex-col">
      <div
        className={`
        flex-1 flex p-4 m-1 rounded-xl text-[16px] sm:text-xs leading-tight transition-colors bg-[#F5F8FA] text-app-primary`}
      >
        {label}
      </div>
    </div>

    {/* The Vertical Divider Line */}
    <div className="w-px bg-slate-100 self-stretch my-2 mx-1" />

    {/* Right Section: Content Box */}
    <div className="flex-1 flex flex-col">
      <div
        className={`
        flex-1 p-4 m-1 rounded-xl text-[13px] text-slate-600 leading-relaxed bg-[#F5F8FA] border-2 border-transparent transition-all`}
      >
        {content}
      </div>
    </div>
  </div>
);

export default function OverviewSection() {
  return (
    <div className="mt-3">
      <div className="w-full mx-auto bg-white rounded-2xl shadow-sm p-4 overflow-hidden">
        <div className="flex flex-col">
          {data.map((item, index) => (
            <AlignedRow
              key={index}
              label={item.label}
              content={item.content}
              isActive={index === 0} // Matches "Objective" being active in the shot
            />
          ))}
        </div>
      </div>

      {/* Leaders Section */}
      <Card className="p-5 mt-5">
        <AppHeading title="Leaders" />
        <div className="flex gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#F5F8FA] p-3 rounded-xl min-w-56.25"
            >
              <Avatar className="h-10 w-10 grayscale">
                <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[16px] font-bold text-app-primary">
                  Ahmed Al-Ali
                </p>
                <p className="text-[16px] text-secondary">
                  Strategy Perspective
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
