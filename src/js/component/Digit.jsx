import React from "react";
import PropTypes from "prop-types";

const Digit = ({ num }) => {
	return (
		<div
			className="border shadow-sm border-white  mx-2 rounded-3 d-flex justify-content-center align-items-center"
			style={{ width: "50px", height: "70px " }}>
			<h1>{num}</h1>
		</div>
	);
};

export default Digit;

Digit.propTypes = {
	num: PropTypes.number
};
