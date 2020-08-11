import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderGame from "./headerGame.js";
import { calculateWinner } from "./winner.js";

export default function GameView(props) {
	const [turn, setTurn] = useState(true);
	const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
	const [currentPlayer, setCurrentPlayer] = useState(props.p1);

	const reloadGame = () => {
		setValue([]);
	};

	function insertIcon(e) {
		if (turn === true) {
			value.splice(e.target.id, 1, "X");
			setCurrentPlayer(props.p2);
		} else {
			value.splice(e.target.id, 1, "O");
			setCurrentPlayer(props.p1);
		}
	}

	useEffect(
		() => {
			calculateWinner(value);
		},
		[turn]
	);

	return (
		<Fragment>
			<HeaderGame />
			<h2 className="text-white text-center font-weight-bold mb-2 mt-4">
				Es el turno de {currentPlayer}!
			</h2>
			<div className="container mt-3 pt-5">
				<div className="row d-flex justify-content-center">
					<div
						id="0"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="0">{value[0]}</p>
					</div>
					<div
						id="1"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="1">{value[1]}</p>
					</div>
					<div
						id="2"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="2">{value[2]}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						id="3"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="3">{value[3]}</p>
					</div>
					<div
						id="4"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="4">{value[4]}</p>
					</div>
					<div
						id="5"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="5">{value[5]}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						id="6"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="6">{value[6]}</p>
					</div>
					<div
						id="7"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="7">{value[7]}</p>
					</div>
					<div
						id="8"
						className="squares d-flex align-items-center justify-content-center"
						onClick={e => {
							insertIcon(e);
							setTurn(!turn);
						}}>
						<p id="8">{value[8]}</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-dark m-3"
						onClick={() => reloadGame()}>
						RESTART
					</button>
				</div>
			</div>
		</Fragment>
	);
}

GameView.propTypes = {
	p1: PropTypes.string,
	p2: PropTypes.string
};
