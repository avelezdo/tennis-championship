<script setup>
	import { onMounted } from 'vue';
	onMounted(() => {
		const burger = document.getElementById('burger'),
			navContents = document.querySelector('.mobile-nav__container'),
			navItems = document.querySelectorAll('.nav__link');

		burger.addEventListener('click', function () {
			navContents.classList.toggle('toggle-nav');
		});

		navContents.addEventListener('transitionend', function () {
			if (navContents.classList.contains('toggle-nav')) {
				navItems.forEach((item, index) => {
					item.classList.add(`appear-${index + 1}`);
				});
			} else {
				navItems.forEach((item, index) => {
					item.classList.remove(`appear-${index + 1}`);
				});
			}
		});

		navItems.forEach((item) => {
			item.addEventListener('click', function () {
				navContents.classList.toggle('toggle-nav');
			});
		});
	});
</script>

<template>
	<nav class="navbar nav__top">
		<div>
			<h1 class="nav__header"></h1>
		</div>
		<div class="mobile-nav__container">
			<ul class="nav__ul">
				<li class="nav__link" data-name="news">Noticias</li>
				<li class="nav__link" data-name="players">Jugadores</li>
				<li class="nav__link" data-name="contact">Contacto</li>
				<li class="nav__link" data-name="sponsors">Patrocinadores</li>
			</ul>
		</div>
		<div id="burger">
			<div class="line line-1"></div>
			<div class="line line-2"></div>
			<div class="line line-3"></div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	nav.navbar {
		@include flex(row, space-around, center);
		font-family: 'LeagueGothic', arial, sans-serif;
		z-index: 1;
		margin-bottom: -7rem;
		background: transparent;
		color: $white;
		padding: 1rem;
		margin-top: 10px;
		position: relative;
		@include nav-collapse {
			@include flex(row, space-between, center);
			margin-top: 0px;
			padding-left: 2rem;
			padding-right: 2rem;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
		}
		.nav__header {
			font-family: 'Fira Sans', arial, sans-serif;
			font-size: 1.8rem;
			letter-spacing: 1px;
			cursor: pointer;
			@include mobile {
				font-size: 1.5rem;
			}
		}
		.mobile-nav__container {
			z-index: -1;
			@include flex(row, space-between, center);
			@include nav-collapse {
				background: #1b1b20;
				position: fixed;
				right: 0;
				top: 0;
				transform: translateY(-200%);
				width: 100%;
				transition: all 0.25s;
				z-index: -99;
			}
		}
		.nav__ul {
			gap: 1rem;
			@include flex(row, center, center);
			list-style: none;
			@include nav-collapse {
				@include flex(column, space-evenly, flex-start);
				padding: 2rem 0;
			}
			@include mobile {
				@include flex(column, space-evenly, flex-start);
			}
			.nav__link {
				font-size: 2rem;
				padding: 8px 12px;
				cursor: pointer;
				transition: all 0.25s;
				@include nav-collapse {
					transform: translateX(-500%);
					font-size: 1.4rem;
					padding-left: 2rem;
					margin-top: 1rem;
					margin-bottom: 1rem;
					margin: 5px;
					text-align: center;
				}
				&:hover {
					background: $yellow;
					color: $blue__dark;
					img {
						filter: brightness(0);
					}
				}
			}
			@for $i from 1 through 6 {
				.nav__link.appear-#{$i} {
					animation: mobile-navigation 500ms ease-out 60ms 1 forwards;
				}
			}
		}
		#burger {
			display: none;
			width: 32px;
			height: 32px;
			cursor: pointer;
			@include nav-collapse {
				display: inline-block;
			}
			.line {
				width: 100%;
				height: 2px;
				background: white;
				margin-top: 7px;
				margin-bottom: 7px;
				border-radius: 5px;
			}
		}
		.toggle-nav {
			transform: translateY(0%);
			transition: all 0.15s;
		}
	}

	@keyframes mobile-navigation {
		0% {
			transform: translateX(-500%);
			opacity: 0;
		}
		30% {
			transform: translateX(50%);
		}
		60% {
			transform: translateX(0%);
			opacity: 1;
		}
		80% {
			transform: translateX(8%);
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}

	@keyframes close-mobile-navigation {
		0% {
			transform: translateY(0%);
			opacity: 1;
		}
		100% {
			transform: translateY(100%);
			opacity: 0;
		}
	}
</style>
