import "./portfolio.scss";
import { useRef } from "react";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: "Plugscenes Academy",
		img: "https://plugscenesacademy.org/wp-content/uploads/2024/01/discount-1.png",
		desc: "At Plugscenes Academy, my work has been consistently featured for its innovation and impact. Noteworthy accomplishments include architecting design and management platforms, implementing secure payment gateways, and optimizing user interfaces for seamless client interactions. Leveraging my expertise, I've contributed to the development of high-quality solutions that exceed expectations in functionality and user experience.",
	},

	{
		id: 2,
		title: "Cool Financial Services Limited",
		img: "https://coolfinancials.org/assets/images/CFS%20Logo.png",
		desc: "I've spearheaded transformative web application development projects that have significantly elevated the company's digital footprint. My commitment to delivering innovative solutions that streamline processes and enhance user experiences. Moving forward, I'm poised to continue driving technological advancements and delivering tangible value to Cool Financial Services Limited.",
	},

	{
		id: 3,
		title: "R-Pro Travels and Tours Limited",
		img: "https://flight.rprotravels.com/assets/img1/logo2.jpg",
		desc: "Successfully overhauling R-PRO's online presence, the website development project delivers a user-friendly platform, streamlining travel booking and enhancing customer engagement. With intuitive design, comprehensive features, and mobile responsiveness, the website cements R-PRO's status as a trusted travel partner, propelling business growth in the competitive travel industry.",
	},

	// <img src="/CFS Logo (1)" alt="" />;

	{
		id: 4,
		title: "Hiskind Foundation",
		img: "https://hiskindfoundation.org/assets/img/causes/cause-two3.jpg",
		desc: "The website development project I managed for HisKind Foundation delivered a powerful online platform supporting their mission effectively. With advanced technologies and user-centric design, the website serves as a valuable tool for community outreach, fundraising, and advocacy, enabling HisKind Foundation to make a significant impact on marginalized communities.",
	},
];

const Single = ({ item }) => {
	const ref = useRef();
 
	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"]
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imagecontainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textcontainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						{item.id === 1 && (
							<a
								href="https://plugscenesacademy.org/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>Visit Site</button>
							</a>
						)}
						{item.id === 2 && (
							<a
								href="https://link-to-demo-2.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>Visit Site</button>
							</a>
						)}
						{item.id === 3 && (
							<a
								href="https://flight.rprotravels.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>Visit Site</button>
							</a>
						)}
						{item.id === 4 && (
							<a
								href="https://link-to-demo-4.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>Visit Site</button>
							</a>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 100,
	});

	return (
		<div className="portfolio">
			<div className="progress">
				<h1>Featured Works</h1>
				<motion.div style={{ scaleX }} className="progressBar"></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
