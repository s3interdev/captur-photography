const Hero = ({ heading, message }) => {
	return (
		<div className="custom-img mb-12 flex h-screen items-center justify-center bg-cover bg-fixed bg-center">
			{/* overlay start */}
			<div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/70" />
			{/* overlay end */}

			<div className="z-[2] mt-[-10rem] p-5 text-white">
				<h2 className="text-5xl font-bold">{heading}</h2>
				<p className="py-5 text-xl">{message}</p>
				<button className="border px-8 py-2">Book</button>
			</div>
		</div>
	);
};

export default Hero;
