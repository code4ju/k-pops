import { Hero } from "../components/Hero.tsx";
import {
	WorkSeenLogoStripe,
	WorkedWithLogoStripe,
} from "../components/LogoDiv.tsx";
import { AboutText } from "../components/AboutText.tsx";
import { Gallery } from "../components/Gallery.tsx";
import {
	Achievements1,
	Achievements2,
	Achievements3,
} from "../components/Achievements.tsx";
import { Profile } from "../components/Profile.tsx";

export const Home = () => {
	return (
		<>
			{/* <div className="flex flex-col gap-24 pt-12 pb-20 m-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"> */}
			<div className="flex flex-col gap-24 pt-20 pb-20 m-auto">
				<Hero />
				<WorkSeenLogoStripe />
				<AboutText />
				<Gallery />
				<Gallery />
				<Achievements1 />
				<Achievements2 />
				<Achievements3 />
				<Profile />
				<WorkedWithLogoStripe />
			</div>
		</>
	);
};
