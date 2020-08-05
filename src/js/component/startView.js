import React, { useEffect, useState, Fragment } from "react";
import HeaderGame from "./headerGame.js";
import GameView from "./gameView.js";

//create your first component

export function StartView() {
	const [view, setView] = useState(false);
	const [finalPlayer1, setPlayer1] = useState("");
	const [finalPlayer2, setPlayer2] = useState("");

	function checkPlayers() {
		let player1 = document.querySelector("#player1").value;
		let player2 = document.querySelector("#player2").value;
		if (player1 == "" && player2 == "") {
			alert("Por favor indique el nombre del primer y segundo jugador.");
		} else if (player2 == "") {
			alert("Por favor indique el nombre del segundo jugador.");
		} else if (player1 == "") {
			alert("Por favor indique el nombre del primer jugador.");
		} else {
			// alert(finalPlayer1.concat(" vs ", finalPlayer2, "!"));
			setPlayer1(player1);
			setPlayer2(player2);
			setView(true);
		}
	}

	if (!view) {
		return (
			<Fragment>
				<HeaderGame />
				<div className="container bg-secondary">
					<h2 className="text-white text-center font-weight-bold my-5">
						Pick a weapon! 👵🏽🔪
					</h2>

					<div className="row d-flex justify-content-around">
						<input
							type="text"
							placeholder="Player 1"
							className="col-3 "
							id="player1"
						/>
						<input
							type="text"
							placeholder="Player 2"
							className="col-3"
							id="player2"
						/>
					</div>
					<div className="row d-flex justify-content-around">
						<div className="col-1 rounded bg-dark my-5 p-2 d-flex justify-content-center">
							<h1 className="text-danger text-center ">X</h1>
						</div>
						<div className="col-1 rounded bg-dark my-5 p-2 d-flex justify-content-center">
							<h1 className="text-success text-center">O</h1>
						</div>
					</div>
					<div className="row d-flex justify-content-center my-2 pb-5">
						<button
							className="col-3 btn btn-success"
							onClick={() => checkPlayers()}>
							<h1>Start!</h1>
						</button>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return <GameView p1={finalPlayer1} p2={finalPlayer2} />;
	}
}
