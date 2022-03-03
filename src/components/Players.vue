<script setup></script>

<template>
	<section class="players">
		<h1 class="players__title">Jugadores</h1>
		<div class="player-1 players__wrapper">
			<picture>
				<source media="(min-width:650px)" srcset="../assets/images/players/Guillermo_Garcia-Lopez.jpg" />
				<source media="(min-width:465px)" srcset="../assets/images/players/Guillermo_Garcia-Lopez.jpg" />
				<img src="../assets/images/players/Guillermo_Garcia-Lopez.jpg" alt="Guillermo García-López" />
			</picture>
		</div>
		<div class="player-2 players__wrapper">
			<picture>
				<source media="(min-width:650px)" srcset="../assets/images/players/ruben-ramirez-hidalgo.jpg" />
				<source media="(min-width:465px)" srcset="../assets/images/players/ruben-ramirez-hidalgo.jpg" />
				<img src="../assets/images/players/ruben-ramirez-hidalgo.jpg" alt="Rubén Ramírez Hidalgo" />
			</picture>
		</div>
		<div class="player-3 players__wrapper">
			<picture>
				<source media="(min-width:650px)" srcset="../assets/images/players/Tommy-Robredo.jpg" />
				<source media="(min-width:465px)" srcset="../assets/images/players/Tommy-Robredo.jpg" />
				<img src="../assets/images/players/Tommy-Robredo.jpg" alt="Tommy Robredo" />
			</picture>
		</div>
		<div class="player-4 players__wrapper">
			<picture>
				<source media="(min-width:650px)" srcset="../assets/images/players/dani-rincon.jpg" />
				<source media="(min-width:465px)" srcset="../assets/images/players/dani-rincon.jpg" />
				<img src="../assets/images/players/dani-rincon.jpg" alt="Dani Rincón" />
			</picture>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.players {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 2rem;
		grid-row-gap: 0px;
		background-color: beige;
		.players__title {
			font-family: 'LeagueGothic';
			font-size: 3rem;
			color: $grey__dark;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.player-1 {
		grid-area: 2 / 2 / 5 / 3;
	}
	.player-2 {
		grid-area: 2 / 3 / 5 / 4;
	}
	.player-3 {
		grid-area: 2 / 4 / 5 / 5;
	}
	.player-4 {
		grid-area: 2 / 5 / 5 / 6;
	}
</style>
