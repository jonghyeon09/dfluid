interface Props {
  filter?: React.JSX.Element;
  children?: React.ReactNode;
}

function RegionSection({ children, filter }: Props) {
  return (
    <section className="px-[80px] h-[300px]">
      <header className="eco-2 h-full pt-[120px] flex flex-col justify-between">
        <p className="text-[48px]">Duis tincidunt ut ligula vitae mollis.</p>
        <div className="flex gap-5">{filter}</div>
      </header>
      <div className="pt-[68px] pb-[80px] flex gap-10 overflow-x-auto">
        {children}
      </div>
    </section>
  );
}

export default RegionSection;
