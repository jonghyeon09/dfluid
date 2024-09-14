import { useEffect, useState } from 'react';
import { getRandomPhoto } from './api';
import ProfileSection from './components/ProfileSection';
import NewsletterSection from './components/NewsletterSection';
import { SubmitHandler, useForm } from 'react-hook-form';
import RegionSection from './components/RegionSection';
import ProfileCard from './components/ProfileCard';
import Tabs from './components/Tabs';
import Years from './components/Years';
import profiles from './data/profiles.json';
import places from './data/places.json';
import PlaceCard from './components/PlaceCard';

const resions = ['All', 'Asia', 'Europe', 'Ameria', 'Oceania'];
const years = [1000, 1300, 1700, 2000];

type Profiles = typeof profiles;
export type Place = (typeof places)[0];
type Inputs = {
  email: string;
};

function App() {
  const [randomProfiles, setRandomProfiles] = useState<Profiles>([]);
  const [randomPhoto, setRandomPhoto] = useState('');
  const [tab, setTab] = useState('All');
  const [selectedYear, setSelectedYear] = useState(2000);
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const emailValue = watch('email');

  const handleTabChange = (tab: string) => setTab(tab);

  const handleYearClick = (year: number) => setSelectedYear(year);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await getRandomPhoto();

      setRandomPhoto(response.urls.regular);
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    setRandomProfiles(profiles.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    let filtered = places;

    if (tab !== 'All') {
      filtered = filtered.filter((place) => place.region === tab);
    }

    filtered = filtered.filter((place) => place.year <= selectedYear);

    setFilteredPlaces(filtered);
  }, [tab, selectedYear]);

  return (
    <main>
      <ProfileSection>
        {randomProfiles.map((profile) => (
          <ProfileCard
            key={profile.title}
            image={profile.image}
            title={profile.title}
            description={profile.description}
          />
        ))}
      </ProfileSection>
      <NewsletterSection photo={randomPhoto}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`w-full h-[50px] p-1 pr-[10px] bg-white/10 backdrop-blur-[10px] rounded-[7px] flex justify-between items-center gap-2 border-[1px] ${
            !emailValue
              ? 'border-white'
              : !isValid && emailValue
              ? 'border-[#ff6633]'
              : 'border-[#00c300]'
          }`}
        >
          <input
            placeholder="Endter your email"
            className="bg-transparent w-full h-full placeholder:text-white placeholder:font-normal indent-3"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          <button
            disabled={!isValid}
            className={`w-8 h-8 ${!isValid ? 'opacity-50' : ''}`}
          >
            <img src="./src/assets/send.png" alt="" />
          </button>
        </form>
        {!isValid && emailValue && (
          <p className="text-[#ff6633] leading-5 text-left pl-4 mt-[9px] absolute bottom-[-29px]">
            Please enter a valid email!
          </p>
        )}
      </NewsletterSection>
      <RegionSection
        filter={
          <>
            <Tabs
              resions={resions}
              selected={tab}
              onTabChange={handleTabChange}
            />
            <Years
              years={years}
              selcectedYear={selectedYear}
              onClick={handleYearClick}
            />
          </>
        }
      >
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
        {filteredPlaces.length === 0 && (
          <div className="h-[415px]">No places found</div>
        )}
      </RegionSection>
    </main>
  );
}

export default App;
