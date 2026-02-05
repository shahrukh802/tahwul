import { Send, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import RecentActivities from "./RecentActivities";
import { Card } from "../ui/card";
import AppHeading from "../common/AppHeading";
import { EvidanceTableComments, EvidanceTableData } from "@/data/constants";

const EvidenceSection = () => {
  return (
    <div className="mt-3">
      {/* 1. Document Table Section */}
      <Card className="overflow-hidden">
        <table className="w-full border-separate border-spacing-0">
          <thead className="bg-[#F5F8FB]">
            <tr>
              {[
                "Document Number",
                "Document Name",
                "Document Lead",
                "Document Preparer",
                "Date",
                "Due Date",
                "Status",
              ].map((head, i) => (
                <th
                  key={i}
                  className={`
              px-6 py-5 text-left text-[12px] font-normal text-app-primary
              ${i === 0 ? "rounded-tl-lg" : ""}
              ${i === 6 ? "rounded-tr-lg" : ""}
            `}
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    {head}
                    <ArrowUpDown size={12} className="text-secondary" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {EvidanceTableData.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-slate-50/50 transition-colors text-[12px] font-normal text-app-primary"
              >
                <td className="px-6 py-4">{row.id}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.lead}</td>
                <td className="px-6 py-4">{row.preparer}</td>
                <td className="px-6 py-4">{row.date}</td>
                <td className="px-6 py-4">{row.dueDate}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-4 py-1 rounded-full text-[12px] font-medium ${
                      row.status === "Approved"
                        ? "bg-[#34C7591A] text-[#34C759]"
                        : "bg-[#FFCC001A] text-[#FFCC00]"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* 2. Comments Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <AppHeading title="Comments" />

            <div className="space-y-4 mb-6 pt-2">
              {EvidanceTableComments.map((comment, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E0E8ED] rounded-[10px] p-4 relative group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 bg-slate-100 border border-slate-200">
                        <AvatarFallback className="text-[10px] text-app-primary font-bold">
                          {comment.initial}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[16px] font-bold text-app-primary">
                        {comment.name}
                      </span>
                    </div>
                    <span className="text-[14px] text-secondary">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-[14px] text-app-primary pl-11 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div className="relative mt-8 group">
              <Textarea
                placeholder="Write your comment here..."
                className="min-h-35 bg-white border-slate-200 rounded-xl focus-visible:ring-1 focus-visible:ring-[#1E293B] text-[13px] text-slate-600 resize-none shadow-sm"
              />
              <div className="absolute bottom-4 left-4">
                <Button className="bg-[#1E293B] hover:bg-[#2D3A4F] text-white text-[11px] font-bold h-9 px-6 rounded-lg flex items-center gap-2">
                  <Send size={14} className="rotate-45" /> Post Comment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for Recent Activities - Kept empty as requested */}
        <div className="">
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default EvidenceSection;
