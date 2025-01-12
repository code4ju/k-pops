import { Hero } from "../components/Hero.tsx";
import { WorkedWithLogoStripe } from "../components/LogoDiv.tsx";

export const Home = () => {
	return (
		<>
			<div className="flex flex-col gap-y-24">
				<Hero />
				<WorkedWithLogoStripe />
			</div>
		</>
	);
};
