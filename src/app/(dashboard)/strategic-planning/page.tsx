import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import logo from "@/assets/arrow-left.svg";
import AppHeading from "@/components/common/AppHeading";
import { FileText, Clock, RefreshCcw, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import OverviewSection from "@/components/dashboard/OverviewSection";
import EvidenceSection from "@/components/dashboard/EvidenceSection";

const stats = [
  {
    label: "Total Evidence",
    value: 4,
    icon: <FileText className="text-red-500" />,
    color: "text-red-500",
  },
  {
    label: "Under Review Evidence",
    value: 3,
    icon: <RefreshCcw className="text-red-500" />,
    color: "text-red-500",
  },
  {
    label: "In Progress Evidence",
    value: 2,
    icon: <Clock className="text-red-500" />,
    color: "text-red-500",
  },
  {
    label: "Completed Evidence",
    value: 1,
    icon: <CheckCircle2 className="text-red-500" />,
    color: "text-red-500",
  },
];

export default function StrategicPlanningPage() {
  return (
    <div className="space-y-6">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={logo} alt="back" height={16} />
        <AppHeading title="Digital Transformation Strategic Planning" />
      </Link>

      {/* Header Card */}
      <Card className="border-none shadow-sm mb-6">
        <CardContent className="px-6 py-2 flex flex-wrap justify-between items-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="text-secondary text-[14px] font-light px-3 py-1 rounded-full border-slate-200"
            >
              Strategy & Planning
            </Badge>
            <AppHeading title="Digital Transformation Strategic Planning" />
            <p className="text-[14px] text-secondary">
              Develop Comprehensive Strategic Plans For Digital Transformation
              Aligned With Organizational Goals
            </p>
          </div>
          {/* 100% Circular Progress */}
          <div className="relative flex items-center justify-center w-20 h-20">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#F1F5F9"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#1EA54E"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray="226.2"
                strokeDashoffset="0"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-sm font-bold">100%</span>
          </div>
        </CardContent>
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-red-50 rounded-lg">{stat.icon}</div>
              <div>
                <p className="text-2xl font-bold text-[#1E293B] leading-none">
                  {stat.value}
                </p>
                <p className="text-[11px] text-slate-400 mt-1 uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Switcher */}
      <Tabs defaultValue="overview">
        <TabsList className=" bg-[#E0E8ED80] w-63.75">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="evidence">Evidence</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {/* Content Section */}
          <OverviewSection />
        </TabsContent>
        <TabsContent value="evidence">
          {/* Content Section */}
          <EvidenceSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
