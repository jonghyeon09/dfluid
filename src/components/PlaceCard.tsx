import type { Place } from '../App';

function PlaceCard({ place }: { place: Place }) {
  return (
    <div className="w-[400px] h-[415px] bg-[#d9d9d9] rounded-[10px] px-5 pt-[15px] pb-[23px]">
      <div className="flex justify-between items-center">
        <p className="font-bold">{place.name}</p>
        <p>{place.year}</p>
      </div>
      <div className="w-[360px] h-[227px] bg-black/10 rounded-[5px] overflow-hidden mt-[9px]">
        <img
          src={place.image}
          alt=""
          className="object-fill"
          width={'100%'}
          height={'100%'}
        />
      </div>
      <p className="text-[14px] mt-5 h-[101px] line-clamp-5">{place.content}</p>
    </div>
  );
}

export default PlaceCard;
