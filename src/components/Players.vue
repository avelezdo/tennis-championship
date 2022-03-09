<script setup>
	import VLazyImage from 'v-lazy-image';
</script>

<template>
	<section class="players">
		<h1 class="players__title">Jugadores</h1>
		<div class="players__grid">
			<div class="player-1 players__wrapper">
				<v-lazy-image
					alt="Guillermo García-López"
					srcset="
        /src/assets/images/players/Guillermo_Garcia-Lopez.jpg 700w,
        /src/assets/images/players/Guillermo_Garcia-Lopez_460.jpg 500w
      "
					sizes="100%, 100%, 100%"
					src="/src/assets/images/players/Guillermo_Garcia-Lopez_300.jpg"
				/>
			</div>
			<div class="player-2 players__wrapper">
				<v-lazy-image
					alt="Rubén Ramírez Hidalgo"
					srcset="
        /src/assets/images/players/ruben-ramirez-hidalgo.jpg 700w,
        /src/assets/images/players/ruben-ramirez-hidalgo_460.jpg 500w,
      "
					sizes="100%, 100%, 100%"
					src="/src/assets/images/players/ruben-ramirez-hidalgo_300.jpg"
				/>
			</div>
			<div class="player-3 players__wrapper">
				<v-lazy-image
					alt="Tommy Robredo"
					srcset="
        /src/assets/images/players/Tommy-Robredo.jpg 700w,
        /src/assets/images/players/Tommy-Robredo_460.jpg 500w,
      "
					sizes="100%, 100%, 100%"
					src="/src/assets/images/players/Tommy-Robredo_300.jpg"
				/>
			</div>
			<div class="player-4 players__wrapper">
				<v-lazy-image
					alt="Dani Rincón"
					srcset="
        /src/assets/images/players/dani-rincon.jpg 700w,
        /src/assets/images/players/dani-rincon_460.jpg 500w,
      "
					sizes="100%, 100%, 100%"
					src="/src/assets/images/players/dani-rincon_300.jpg"
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.players {
		background-color: beige;
		padding-left: 10vw;
		padding-right: 10vw;
		padding-bottom: 4rem;
		padding: 3rem 10vw 5rem 10vw;
		.players__grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			grid-column-gap: 4vw;
			grid-row-gap: 1rem;
		}
		.players__title {
			font-family: 'LeagueGothic';
			font-size: 3rem;
			color: $grey__dark;
			display: flex;
			justify-content: start;
			align-items: center;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
			@include nav-collapse {
				max-height: 300px;
			}
			@include mobile {
				max-height: 260px;
			}
		}
	}
</style>
