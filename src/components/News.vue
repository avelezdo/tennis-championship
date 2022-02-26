<script setup></script>

<template>
	<section class="news">
		<h1 class="news__title">Noticias</h1>
		<div class="news-1 news__wrapper">
			<div class="news__header">Lorem Ipsum</div>
			<div class="news__content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae inventore excepturi in placeat aspernatur? Labore, blanditiis eius, adipisci
				similique recusandae suscipit, nostrum odio praesentium asperiores iusto modi laudantium voluptas?
			</div>
			<div class="news__date">31/03/22</div>
		</div>
		<div class="news-2 news__wrapper">
			<div class="news__header">Lorem Ipsum</div>
			<div class="news__content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae inventore excepturi in placeat aspernatur? Labore, blanditiis eius, adipisci
				similique recusandae suscipit, nostrum odio praesentium asperiores iusto modi laudantium voluptas?
			</div>
			<div class="news__date">31/03/22</div>
		</div>
		<div class="news-3 news__wrapper">
			<div class="news__header">Lorem Ipsum</div>
			<div class="news__content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae inventore excepturi in placeat aspernatur? Labore, blanditiis eius, adipisci
				similique recusandae suscipit, nostrum odio praesentium asperiores iusto modi laudantium voluptas?
			</div>
			<div class="news__date">31/03/22</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.news {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 2rem;
		grid-row-gap: 0px;
		background-color: $grey__dark;
		.news__title {
			font-family: 'LeagueGothic';
			font-size: 3rem;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.news__wrapper {
			background-color: whitesmoke;
			display: flex;
			flex-wrap: wrap;
			padding: 1rem;
			height: 300px;
		}
		.news__wrapper:hover {
			background-color: $yellow;
			cursor: pointer;
		}
		.news__header {
			font-size: 1.75rem;
		}
		.news__date {
			margin-left: auto;
			align-self: center;
		}
	}

	.news-1 {
		grid-area: 2 / 2 / 5 / 3;
	}
	.news-2 {
		grid-area: 2 / 3 / 5 / 4;
	}
	.news-3 {
		grid-area: 2 / 4 / 5 / 5;
	}
</style>
