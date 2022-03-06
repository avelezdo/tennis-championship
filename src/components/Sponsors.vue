<script setup>
	import VLazyImage from 'v-lazy-image';
</script>

<template>
	<section class="sponsors">
		<!-- Patrocinadores -->
		<div class="parent">
			<div class="div1">
				<v-lazy-image
					class="picture-demo"
					srcset="
        /src/assets/images/sponsors/casino-Tomares-1200.jpg 2200w,
        /src/assets/images/sponsors/casino-Tomares-600.jpg 1000w,
        /src/assets/images/sponsors/casino-Tomares-400.jpg 800w
      "
					sizes="100%, 100%, 100%"
					src="/src/assets/images/sponsors/casino-Tomares-400.jpg"
				/>
			</div>
			<div class="div2">
				<v-lazy-image
					class="picture-demo"
					srcset="
        /src/assets/images/sponsors/ayuntamiento-Tomares.jpg 1200w,
        /src/assets/images/sponsors/ayuntamiento-Tomares.jpg 600w,
        /src/assets/images/sponsors/ayuntamiento-Tomares.jpg 400w
      "
					sizes="100%, 100%, 100%"
					src="/src/assets/images/sponsors/ayuntamiento-Tomares.jpg"
				/>
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
	}
	.div2 {
		grid-area: 1 / 4 / 1 / 6;
		img {
			width: 100%;
		}
	}
</style>
