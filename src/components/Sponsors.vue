<script setup>
	import VLazyImage from 'v-lazy-image';
	import smallCasino from '../assets/images/sponsors/casino-Tomares-400.jpg';
	import mediumCasino from '../assets/images/sponsors/casino-Tomares-600.jpg';
	import bigCasino from '../assets/images/sponsors/casino-Tomares-1200.jpg';
	import smallCouncil from '../assets/images/sponsors/ayuntamiento-Tomares.jpg';
	import { computed } from 'vue';
	const casinoImageSizes = computed(() => {
		return `${smallCasino} 400w, ${mediumCasino} 600w, ${bigCasino} 1200w`;
	});
</script>

<template>
	<section class="sponsors">
		<!-- Patrocinadores -->
		<div class="parent">
			<div class="div1">
				<v-lazy-image
					:srcset="casinoImageSizes"
					sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 1200px) 1200px"
					:src="bigCasino"
				/>
			</div>
			<div class="div2">
				<v-lazy-image :src="smallCouncil" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.v-lazy-image {
		opacity: 0;
		transform: translate3d(0, 50%, 0);
		transition: opacity 0.5s, transform 0.5s;
	}
	.v-lazy-image-loaded {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	.parent {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.div1 {
		grid-area: 1 / 1 / 1 / 4;
		img {
			width: 100%;
			display: block;
		}
		@include mobile {
			grid-area: 1 / 1 / 1 / 6;
			height: auto;
		}
	}
	.div2 {
		grid-area: 1 / 4 / 1 / 6;
		img {
			width: 100%;
		}
		@include mobile {
			grid-area: 2 / 1 / 2 / 6;
			height: auto;
		}
	}
</style>
