import { useEffect, useRef, useState } from 'react';

function Years({
  years,
  selcectedYear,
  onClick,
}: {
  years: number[];
  selcectedYear: number;
  onClick: (year: number) => void;
}) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const valueWidth = (barRef.current?.clientWidth || 0) / 3;
    const index = years.indexOf(selcectedYear);

    setWidth(valueWidth * index);
  }, [selcectedYear, years]);

  return (
    <div className="h-[50px] w-[408px] rounded-[25px] border-[1px] border-[black]/50 flex justify-between p-[5px] relative">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          className="w-10 h-10 rounded-[25px] bg-black text-white text-sm flex justify-center items-center"
          onClick={() => onClick(year)}
        >
          {year}
        </button>
      ))}
      <div
        ref={barRef}
        className="absolute w-[390px] h-[10px] bg-[#999] top-1/2 -translate-y-1/2 left-[5px] -z-20"
      ></div>
      <div
        ref={valueRef}
        style={{ width: width }}
        className="-z-10 absolute h-[10px] bg-black top-1/2 -translate-y-1/2 left-[5px]"
      ></div>
    </div>
  );
}

export default Years;
