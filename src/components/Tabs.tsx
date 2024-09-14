function Tabs({
  resions,
  selected = 'All',
  onTabChange,
}: {
  resions: string[];
  selected: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="h-[50px] rounded-[25px] border-[1px] border-[black]/50 flex gap-[5px] p-[5px]">
      {resions.map((resion) => (
        <button
          key={resion}
          type="button"
          className={`h-[40px] rounded-[25px] flex justify-center items-center px-5 ${
            selected === resion ? 'bg-black text-white' : ''
          }`}
          onClick={() => onTabChange(resion)}
        >
          {resion}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
