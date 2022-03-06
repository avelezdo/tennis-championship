<script setup></script>

<template>
	<section class="news">
		<h1 class="news__title">Noticias</h1>
		<div class="news__wrapper">
			<article class="news-1 one__news__wrapper">
				<div class="news__header">Lorem Ipsum</div>
				<div class="news__content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae inventore excepturi in placeat aspernatur? Labore, blanditiis eius,
					adipisci similique recusandae suscipit, nostrum odio praesentium asperiores iusto modi laudantium voluptas?
				</div>
				<div class="news__date">31/03/22</div>
			</article>
			<article class="news-2 one__news__wrapper">
				<div class="news__header">Lorem Ipsum</div>
				<div class="news__content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae inventore excepturi in placeat aspernatur? Labore, blanditiis eius,
					adipisci similique recusandae suscipit, nostrum odio praesentium asperiores iusto modi laudantium voluptas?
				</div>
				<div class="news__date">31/03/22</div>
			</article>
			<article class="news-3 one__news__wrapper">
				<div class="news__header">Lorem Ipsum</div>
				<div class="news__content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae inventore excepturi in placeat aspernatur? Labore, blanditiis eius,
					adipisci similique recusandae suscipit, nostrum odio praesentium asperiores iusto modi laudantium voluptas?
				</div>
				<div class="news__date">31/03/22</div>
			</article>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.news {
		background-color: $grey__dark;
		padding-left: 10vw;
		padding-right: 10vw;
		padding-bottom: 4rem;
		padding: 3rem 10vw 5rem 10vw;
		.news__wrapper {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			grid-column-gap: 4vw;
			grid-row-gap: 1rem;
		}
		.news__title {
			font-family: 'LeagueGothic';
			font-size: 3rem;
			color: white;
			display: flex;
			justify-content: start;
			align-items: center;
		}
		.one__news__wrapper {
			background-color: whitesmoke;
			display: flex;
			flex-wrap: wrap;
			padding: 1rem;
			height: 300px;
		}
		.one__news__wrapper:hover {
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
</style>
