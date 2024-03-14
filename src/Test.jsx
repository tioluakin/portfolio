import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {

const [open, setOpen] = useState(false);


const variants = {
	visible: (i) => ({
		opacity: 1,
		x: 100,
		transition: { staggerChildren: 0.2 },
		transition:{ delay:i*0.3},
	}),
	hidden: { opacity: 0 },
};

const items = ["item1", "item2", "item3", "item4"];

	return (
		<div className="course">
			<motion.ul initial="hidden" animate="visible" variants={variants}>
				{items.map((item,i) => (
					<motion.li variants={variants} key={item} custom={i}>
						{item}
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};


export default Test

  // <button onClick={()=>setOpen(prev=>!prev)}>Click</button>


// const Test = () => {
// 	return (
// 		<div className="course">
// 			<motion.div
// 				className="box"
// 				initial={{ scale: 0 }}
// 				animate={{ rotate: 180, scale: 1 }}
// 				transition={{
// 					type: "spring",
// 					stiffness: 260,
// 					damping: 20,
// 				}}
// 				whileInView={{ opacity: 1, scale: 2 }}
// 				// whileTap={{ opacity: 1, scale: 2 }}
// 				// whileHover={{ opacity: 1, scale: 2 }}
// 				drag
// 			></motion.div>
// 		</div>
// 	);
// };