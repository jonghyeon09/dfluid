interface Props {
  children?: React.ReactNode;
}

function ProfileSection({ children }: Props) {
  return (
    <section className="px-[80px]">
      <header className="w-full h-[300px] pt-[120px] pb-[36px]bg-yellow-50">
        <p className="exo-2 text-[48px] leading-[72px] whitespace-pre-wrap">
          Snap photos and share like{'\n'}never before
        </p>
      </header>
      <div className="pt-[34px] pb-[110px] flex gap-5">{children}</div>
    </section>
  );
}

export default ProfileSection;
