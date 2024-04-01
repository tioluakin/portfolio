import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: -1000,
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,
			staggerChildren: 0.1,
		},
	},
};

const About = () => {
	return (
		<div className="about">
			<div className="wrapper">
				<div className="imageContainer">
					<img src="/aboutme2.png" alt="" />
				</div>

				<motion.div
					className="textcontainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}> About Me </motion.h2>
					<motion.h1 variants={textVariants}>
						{" "}
						Actively involved in the process of creating and
						enhancing websites with React.
					</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						<motion.button variants={textVariants}>HTML</motion.button>
						<motion.button variants={textVariants}> CSS</motion.button>
						<motion.button variants={textVariants}> JavaScript</motion.button>
						<motion.button variants={textVariants}> React</motion.button>
						<motion.button variants={textVariants}> Node.js</motion.button>
            <motion.button variants={textVariants}> Vite</motion.button>
            <motion.button variants={textVariants}> Python</motion.button>
            <motion.button variants={textVariants}> MySQL</motion.button>
						<motion.button variants={textVariants}> Flutter</motion.button>
						<motion.button variants={textVariants}> Wordpress</motion.button>
            <motion.button variants={textVariants}> Bootstrap</motion.button>
						<motion.button variants={textVariants}> Figma</motion.button>
					</motion.div>
				</motion.div>
			</div>
			{/* <motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate"
			>
				project Manager
			</motion.div> */}
		</div>
	);
};

export default About;
