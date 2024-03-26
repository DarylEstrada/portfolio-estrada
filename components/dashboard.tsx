import BarGraph from "@/components/bar-graph";
import { RotateCcw } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DashboardProps {
  onClick: (isClicked: boolean) => void;
}

const Dashboard = ({ onClick }: DashboardProps) => {
  const [animate, setAnimate] = useState(false);
  const widgets = [
    {
      icon: "/icons/applicants-icon.svg",
      label: "Applicants",
      count: "1,221",
      description: "These are registered applicants in Jairojobs",
    },
    {
      icon: "/icons/competitor-icon.svg",
      label: "Competitors",
      count: "22",
      description:
        "These are the number of Companies that is in the same Industry as you",
    },
    {
      icon: "/icons/hired-applicants-icon.svg",
      label: "My Hired Applicants",
      count: "12",
      description: "These are the number of the Applicants you hired",
    },
  ];

  const mostAppliedJobs = [
    {
      data: 40,
      label: "Front End Developer",
    },
    {
      data: 50,
      label: "Back End Developer",
    },
    {
      data: 100,
      label: "UI/UX Designer",
    },
    {
      data: 50,
      label: "Project Manager",
    },
    {
      data: 20,
      label: "Full Stack Developer",
    },
  ];

  const leastAppliedJobs = [
    {
      data: 20,
      label: "Product Owner",
    },
    {
      data: 40,
      label: "Q/A",
    },
    {
      data: 10,
      label: "Dev Ops Engineer",
    },
  ];

  const mostViewedJobs = [
    {
      data: 40,
      label: "Front End Developer",
    },
    {
      data: 50,
      label: "Back End Developer",
    },
    {
      data: 20,
      label: "UI/UX Designer",
    },
    {
      data: 50,
      label: "Project Manager",
    },
    {
      data: 20,
      label: "Full Stack Developer",
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="h-full w-full ">
      <div className="w-full flex justify-between items-center mb-10 lg:mb-[15px]">
        <p className="text-2xl font-bold ">Dashboard</p>
        <p
          onClick={() => setAnimate(!animate)}
          className="glass-no-radius rounded-full p-[10px] glow cursor-pointer"
        >
          <RotateCcw width={20} height={20} />
        </p>
      </div>
      <div className="grid grid-rows-3 gap-y-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-6">
        {widgets.map((widget) => (
          <div
            key={widget.label}
            className="min-h-[153px] gap-y-10 glass glow rounded-[20px] p-[30px] "
          >
            <div className="flex items-start gap-x-[10px]">
              <Image width={32} height={32} src={widget.icon} alt={""} />
              <div className="">
                <p className=" text-xl font-normal">{widget.label}</p>
                <p className=" text-4xl font-semibold">{widget.count}</p>
                <p className=" text-xs italic font-normal">
                  {widget.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-rows-3 my-10 gap-y-10 lg:gap-x-6 lg:my-6 lg:grid-cols-3 lg:grid-rows-1">
        <BarGraph
          isAnimate={animate}
          barData={mostAppliedJobs}
          barColor="#DBD4F0"
          barGraphtitle="Most Applied Jobs"
        />
        <BarGraph
          isAnimate={animate}
          barData={leastAppliedJobs}
          barColor="#FFB7B7"
          barGraphtitle="Least Applied Jobs"
        />
        <BarGraph
          isAnimate={animate}
          barData={mostViewedJobs}
          barColor="#F8D57E"
          barGraphtitle="Most Viewed Jobs"
        />
      </div>
    </div>
  );
};

export default Dashboard;
