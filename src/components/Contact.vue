<script setup></script>

<template>
	<section class="contact">
		<!-- <h1 class="contact__title">Contacto</h1> -->
		<div class="contact__details">
			<div><img class="icon" src="../assets/images/media/location_24.png" alt="" /> C. la Solana, s/n, 41940</div>
			<div style="margin-top: -10px">Tomares, Sevilla</div>
			<div><img class="icon" src="../assets/images/media/telephone-call_24.png" alt="" /> 954159210</div>
			<div class="contact__media">
				<img src="../assets/images/media/email.png" alt="" />
				<img src="../assets/images/media/facebook.png" alt="" />
				<img src="../assets/images/media/twitter.png" alt="" />
			</div>
		</div>
		<picture>
			<source media="(min-width:650px)" srcset="../assets/images/map.jpg" />
			<source media="(min-width:465px)" srcset="../assets/images/map.jpg" />
			<img src="../assets/images/map.jpg" alt="mapa" />
		</picture>
		<!-- <div class="contact__wrapper"></div> -->
	</section>
</template>

<style lang="scss" scoped>
	.contact {
		display: flex;
		.contact__wrapper {
			// width: 100%;
		}
		.contact__details {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: center;
			align-items: center;
			width: 35%;
		}
		img {
			width: 100%;
			display: block;
		}
		.icon {
			width: 24px;
			display: inline;
		}
		.contact__media {
			display: flex;
			gap: 1rem;
		}
		.contact__media img {
			width: 32px;
		}
	}
</style>
