import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
	const campaigns = [
		{
			title: 'Fund Innovative Startups',
			description:
				'Support groundbreaking ideas and help entrepreneurs bring their visions to life.',
			image:
				'https://hatrabbits.com/wp-content/uploads/2019/12/innovatiedoel.jpg',
			cta: 'Invest Now',
		},
		{
			title: 'Emergency Relief Fund',
			description:
				'Contribute to disaster relief efforts and help communities recover from unforeseen crises.',
			image:
				'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/gallery2.jpg',
			cta: 'Donate Now',
		},
		{
			title: 'Green Energy Projects',
			description:
				'Back sustainable energy initiatives and contribute to a cleaner, greener future.',
			image:
				'https://www.zkg.de/imgs/1/9/9/4/5/3/3/2023-073D_visualisierung_GeZero_smaller__1_-f28383cc3e599989.jpeg',
			cta: 'Support Project',
		},
	];

	return (
		<section className="">
			<div className="max-w-7xl mx-auto px-4">
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					loop={true}
					className="rounded-xl shadow-2xl"
				>
					{campaigns.map((campaign, index) => (
						<SwiperSlide key={index}>
							<div className="relative h-[400px] md:h-[500px]">
								<img
									src={campaign.image}
									alt={campaign.title}
									className="w-full h-full object-cover rounded-xl"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex flex-col justify-center items-start text-left px-8 md:px-16">
									<h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
										{campaign.title}
									</h2>
									<p className="text-white text-lg md:text-xl mb-6 max-w-xl">
										{campaign.description}
									</p>
									<Link
										to="/campaigns"
										className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
									>
										Donate Now
									</Link>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Banner;
