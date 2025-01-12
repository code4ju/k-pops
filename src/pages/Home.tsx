import { Hero } from "../components/Hero.tsx";
import {
	WorkSeenLogoStripe,
	WorkedWithLogoStripe,
} from "../components/LogoDiv.tsx";
import { AboutText } from "../components/aboutText.tsx";
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
			<div className="flex flex-row mx-auto max-w-screen-2xl pb-20">
				<div className="flex flex-col w-full items-center gap-44">
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
			</div>
		</>
	);
};
