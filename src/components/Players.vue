<script setup>
	import VLazyImage from 'v-lazy-image';
	import smallGuillermo from '../assets/images/players/Guillermo_Garcia-Lopez_300.jpg';
	import mediumGuillermo from '../assets/images/players/Guillermo_Garcia-Lopez_460.jpg';
	import bigGuillermo from '../assets/images/players/Guillermo_Garcia-Lopez.jpg';
	import smallRuben from '../assets/images/players/ruben-ramirez-hidalgo_300.jpg';
	import mediumRuben from '../assets/images/players/ruben-ramirez-hidalgo_460.jpg';
	import bigRuben from '../assets/images/players/ruben-ramirez-hidalgo.jpg';
	import smallTommy from '../assets/images/players/Tommy-Robredo_300.jpg';
	import mediumTommy from '../assets/images/players/Tommy-Robredo_460.jpg';
	import bigTommy from '../assets/images/players/Tommy-Robredo.jpg';
	import smallDani from '../assets/images/players/dani-rincon_300.jpg';
	import mediumDani from '../assets/images/players/dani-rincon_460.jpg';
	import bigDani from '../assets/images/players/dani-rincon.jpg';

	import { computed } from 'vue';
	const sizes = '(max-width: 300px) 260px, (max-width: 460px) 420px, 640px';
	const GuillermoImageSizes = computed(() => {
		return `
	    ${smallGuillermo} 300w,
	    ${mediumGuillermo} 460w,
	    ${bigGuillermo} 640w
	    `;
	});
	const RubenImageSizes = computed(() => {
		return `
	    ${smallRuben} 300w,
	    ${mediumRuben} 460w,
	    ${bigRuben} 640w
	    `;
	});
	const TommyImageSizes = computed(() => {
		return `
	    ${smallTommy} 300w,
	    ${mediumTommy} 460w,
	    ${bigTommy} 640w
	    `;
	});
	const DaniImageSizes = computed(() => {
		return `
	    ${smallDani} 300w,
	    ${mediumDani} 460w,
	    ${bigDani} 640w
	    `;
	});
</script>

<template>
	<section class="players">
		<h1 class="players__title">Jugadores</h1>
		<div class="players__grid">
			<div class="player-1 players__wrapper">
				<v-lazy-image :srcset="GuillermoImageSizes" :sizes="sizes" :src="bigGuillermo" alt="Guillermo García-López" />
			</div>
			<div class="player-2 players__wrapper">
				<v-lazy-image :srcset="RubenImageSizes" :sizes="sizes" :src="bigRuben" alt="Rubén Ramírez Hidalgo" />
			</div>
			<div class="player-3 players__wrapper">
				<v-lazy-image :srcset="TommyImageSizes" :sizes="sizes" :src="bigTommy" alt="Tommy Robredo" />
			</div>
			<div class="player-4 players__wrapper">
				<v-lazy-image :srcset="DaniImageSizes" :sizes="sizes" :src="bigDani" alt="Dani Rincón" />
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
