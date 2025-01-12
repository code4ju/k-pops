import { Hero } from "../components/Hero.tsx";
import {
	WorkSeenLogoStripe,
	WorkedWithLogoStripe,
} from "../components/LogoDiv.tsx";
import { AboutText } from "../components/aboutText.tsx";

export const Home = () => {
	return (
		<>
			<div>
				<div className="flex flex-row mx-auto max-w-screen-2xl">
					<div className="flex flex-col w-full gap-28">
						<Hero />
						<WorkSeenLogoStripe />
						<AboutText />
						<WorkedWithLogoStripe />
					</div>
				</div>
			</div>
		</>
	);
};
