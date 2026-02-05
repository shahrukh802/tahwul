import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: StaticImageData;
};

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="h-20">
        <div className="flex items-center justify-between mb-2">
          <p className="text-2xl font-semibold mt-1">{value}</p>
          <Image src={icon} alt={title} height={40} />
        </div>
        <p className="text-sm text-secondary">{title}</p>
      </CardContent>
    </Card>
  );
}
