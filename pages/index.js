import Meta from '../lib/meta';
import Hero from '../components/hero';
import Slider from '../components/slider';
import { SliderData } from '../components/slider-data';

const Home = () => {
	return (
		<>
			{/** title bar start */}
			<Meta title="Captur Photography | Superior Software Solutions" />
			{/** title bar end */}

			{/** hero section start */}
			<Hero heading="Captur Photography" message="I capture moments in nature and keep them alive" />
			{/** hero section end */}

			{/** slider section start */}
			<Slider slides={SliderData} />
			{/** slider section end */}
		</>
	);
};

export default Home;
