import React, { useState, useEffect } from "react";
import Digit from "./Digit.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		let interval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="container d-flex justify-content-center  ">
			<div className="text-center mt-5 bg-dark  text-white  d-flex p-3 rounded-2  ">
				<div
					className="border shadow-sm border-white  mx-2 rounded-3 d-flex justify-content-center align-items-center"
					style={{ width: "50px", height: "70px " }}>
					<i
						className="far fa-clock"
						style={{ fontSize: "45px" }}></i>
				</div>
				<Digit num={parseInt(seconds / 100000) % 10} />
				<Digit num={parseInt(seconds / 10000) % 10} />
				<Digit num={parseInt(seconds / 1000) % 10} />
				<Digit num={parseInt(seconds / 100) % 10} />
				<Digit num={parseInt(seconds / 10) % 10} />
				<Digit num={seconds % 10} />
			</div>
		</div>
	);
};

export default Home;
