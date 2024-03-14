import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
	return (
		<button onClick={() => setOpen((prev) => !prev)}>
			<svg
				width="24"
				height="28"
				viewBox="0 0 48 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					id="Vector 1"
					d="M4 4C20 4 37.3333 4 44 4"
					stroke="black"
					strokeWidth="7"
					strokeLinecap="round"
					variants={{
						closed: { d: "M4 4C20 4 37.3333 4 44 4" },
						open: {
							d: "M4 29.6938C16.2626 19.4163 29.5471 8.28228 34.6566 3.99997",
						},
					}}
				/>
				<motion.path
					id="Vector 2"
					d="M4 14C19.0769 14 36.9487 14 44 14"
					stroke="black"
					strokeWidth="7"
					strokeLinecap="round"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
				/>
				<motion.path
					id="Vector 3"
					d="M4 24H44"
					stroke="black"
					strokeWidth="7"
					strokeLinecap="round"
					variants={{
						closed: { d: "M4 24H44" },
						open: {
							d: "M4 4L34.1492 30.2874",
						},
					}}
				/>
			</svg>
		</button>
	);
};

export default ToggleButton;
