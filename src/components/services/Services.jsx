import "./services.scss";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = useRef();

	const isInView = useInView(ref, { margin: "-100px" });

	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			// animate="animate"
			// whileInView="animate"
			ref={ref}
			animate={"animate"}
		>
			<motion.div className="textcontainer" variants={variants}>
				<p>
					I focus on helping yor brand grow <br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className="titlecontainer" variants={variants}>
				<div className="title">
					<img src="/people.webp" alt="" />
					<h1>
						<motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
						Business
					</h1>
					<button>WHAT WE DO?</button>
				</div>
			</motion.div>
			<motion.div className="listcontainer" variants={variants}>
				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>Frontend Development</h2>
					<p>
						Experienced frontend developer specializing in HTML, CSS,
						JavaScript, and React, alongside other modern web technologies.
						Dedicated to creating visually stunning and interactive user
						interfaces to deliver exceptional user experiences.
					</p>
					<button>Go</button>
				</motion.div>

				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>Backend Development</h2>
					<p>
						Experienced in backend development with proficiency in SQL,
						JavaScript, Python, Ruby, Java, PHP, and C#. Specializing in
						crafting robust solutions for seamless user experiences.
					</p>
					<button>Go</button>
				</motion.div>

				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>UI/UX Design</h2>
					<p>
						Experienced UX/UI designer dedicated to creating intuitive and
						visually compelling digital experiences. From research to
						wireframing and prototyping, I focus on user-centric design to meet
						both user needs and business goals. Let's collaborate to bring
						engaging and impactful designs to life.
					</p>
					<button>Go</button>
				</motion.div>

				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>Project Managment</h2>
					<p>
						As the go-to project manager, I excel in orchestrating teams and
						navigating complex projects with finesse and efficiency. My
						proactive problem-solving, effective communication, and strategic
						mindset consistently deliver exceptional results, earning trust as a
						reliable leader in any endeavor.
					</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
