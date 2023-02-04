import React from "react";

const Card = (props) => {
	let price
	if (props.sliderValue === false) {
		price = props.priceAnnual
	} else if (props.sliderValue === true) {
		price = props.priceMonthly
	}

	return (
		<div className={"Card " + `Card-${props.id}`}>
			<h2 className="Card-title">{props.title}</h2>
			<p className="Card-price">{price}</p>
			<div className="Card-details-container">
				<hr/>
				<p>{props.storage} Storage</p>
				<hr/>
				<p>{props.usersAllowed} Users Allowed</p>
				<hr/>
				<p>Send up to {props.dataLimit}</p>
				<hr/>
				<h3 className={"learn-more-h3 " + `Card-${props.id}-learn-more-h3`}>LEARN MORE</h3>
			</div>
		</div>
	)
}

export default Card