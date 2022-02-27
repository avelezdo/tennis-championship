<script setup></script>

<template>
	<section class="sponsors">
		<!-- Patrocinadores -->
		<div class="parent">
			<div class="div1">
				<picture>
					<source media="(min-width:650px)" srcset="../assets/casino-Tomares.jpg" />
					<source media="(min-width:465px)" srcset="../assets/casino-Tomares.jpg" />
					<img src="../assets/casino-Tomares.jpg" alt="Campeonato tenis" />
				</picture>
			</div>
			<div class="div2">
				<picture>
					<source media="(min-width:650px)" srcset="../assets/ayuntamiento-Tomares.png" />
					<source media="(min-width:465px)" srcset="../assets/ayuntamiento-Tomares.png" />
					<img src="../assets/ayuntamiento-Tomares.png" alt="Campeonato tenis" />
				</picture>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
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
