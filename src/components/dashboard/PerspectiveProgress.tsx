import { Card } from "@/components/ui/card";
import AppHeading from "../common/AppHeading";

const PerspectiveProgress = () => {
  const leaders = [
    {
      name: "Ahmed Al-Ali",
      role: "Strategy Perspective",
      score: "96%",
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Sarah Al-Khaled",
      role: "Beneficiary Perspective",
      score: "94%",
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Mohammad Al-Mansour",
      role: "IT Perspective",
      score: "92%",
      img: "https://i.pravatar.cc/150?u=3",
    },
  ];
  return (
    <Card className="p-5">
      <AppHeading title="Top Performing Perspective Leaders" />
      <div className="flex flex-col items-center w-full">
        <div className="space-y-4 w-full">
          {leaders.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-3 pb-3 border-b border-[#E0E8ED] last:border-0"
            >
              <img
                src={l.img}
                className="w-10 h-10 rounded-full grayscale"
                alt=""
              />
              <div className="flex-1">
                <p className="text-[16px] text-app-primary">{l.name}</p>
                <p className="text-[16px] text-secondary">{l.role}</p>
              </div>
              <span className="font-bold text-[16px] text-app-primary">
                {l.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PerspectiveProgress;
