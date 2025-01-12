import { Hero } from "../components/Hero.tsx";
import {
	WorkSeenLogoStripe,
	WorkedWithLogoStripe,
} from "../components/LogoDiv.tsx";
import { AboutText } from "../components/aboutText.tsx";
import { Gallery } from "../components/Gallery.tsx";
import { HumbleBrag } from "../components/HumbleBrag.tsx";

export const Home = () => {
	return (
		<>
			<div>
				<div className="flex flex-row mx-auto max-w-screen-2xl">
					<div className="flex flex-col w-full items-center gap-44">
						<Hero />
						<WorkSeenLogoStripe />
						<AboutText />
						<Gallery />
						<Gallery />
						<HumbleBrag />
						<WorkedWithLogoStripe />
					</div>
				</div>
			</div>
		</>
	);
};
