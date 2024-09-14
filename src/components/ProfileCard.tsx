interface Props {
  image: string;
  title: string;
  description: string;
}

function ProfileCard({ image, title, description }: Props) {
  return (
    <div className="w-[493px]">
      <img src={image} alt="" className="w-[108px] h-[108px] object-contain" />
      <p className="mt-10 text-[24px] font-bold">{title}</p>
      <p className="mt-6 text-[18px] leading-[1.67]">{description}</p>
      <p className="exo-2 mt-6 text-[18px] leading-[1.67] text-[#18a0fb] font-bold">
        LEARN MORE
      </p>
    </div>
  );
}

export default ProfileCard;
