export interface WeekDayBarGraphProps {
  weekday: "dom" | "seg" | "ter" | "qua" | "qui" | "sex" | "sáb";
  complete: number;
  index?: number;
}

export const WeekDayBarGraph = ({
  weekday,
  complete,
  index,
}: WeekDayBarGraphProps) => {
  const delay = 2;

  return (
    <div className="flex flex-col gap-[5px] justify-end items-center z-10">
      <div
        className="flex items-end"
        style={{
          height: complete + "%",
        }}
      >
        <div
          className={`animate-grow-full-height w-4 rounded-full bg-gradient-to-b from-[#90F7EC] to-[#32CCBC]`}
          style={{
            animationDelay: ((index ? index : 0) + delay) * 0.15 + "s",
          }}
        />
      </div>
      <span className="text-sm font-medium">{weekday}</span>
    </div>
  );
};
