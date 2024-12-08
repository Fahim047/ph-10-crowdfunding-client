import { Fade, Slide } from 'react-awesome-reveal';

const OurMission = () => {
	return (
		<section className="min-h-[600px] bg-gradient-to-br from-blue-50 via-purple-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<Fade>
						<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
							<img
								src="https://realhelpinghands.com/wp-content/uploads/2024/03/Real-Helping-Hands-390500-827x853.png"
								alt="Children smiling"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gray-900/40"></div>
						</div>
					</Fade>

					<Slide direction="right">
						<div className="space-y-6 md:space-y-8">
							<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
								Our Mission
							</h2>

							<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
								We are committed to empowering communities by facilitating
								transparent and meaningful crowdfunding for causes that make a
								real difference. Whether it's personal issue, startup,
								supporting orphanages, charity or environmental campaign, we
								strive to inspire positive change through collective generosity.
							</p>

							<button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-200 shadow-lg hover:shadow-xl">
								Learn More
							</button>
						</div>
					</Slide>
				</div>
			</div>
		</section>
	);
};

export default OurMission;
