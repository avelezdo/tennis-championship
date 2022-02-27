<script setup>
	import { onMounted } from 'vue';
	onMounted(() => {
		const backToTop = document.querySelector('.back-to-top');
		window.onscroll = function () {
			setBackToTopStyle();
		};

		function setBackToTopStyle() {
			if (document.documentElement.scrollTop > 200) {
				backToTop.style.display = 'inline';
			} else {
				backToTop.style.display = 'none';
			}
		}
	});
</script>

<template>
	<span href="body" class="back-to-top page-scroll" style="display: inline">Back to Top</span>
</template>

<style lang="scss" scoped>
	span.back-to-top {
		position: fixed;
		z-index: 999;
		right: 12px;
		bottom: 12px;
		display: none;
		width: 42px;
		height: 42px;
		border-radius: 30px;
		background: $yellow url('../assets/up-arrow.png') no-repeat center 47%;
		background-size: 18px 18px;
		text-indent: -9999px;
		cursor: pointer;
	}

	span:hover.back-to-top {
		background-color: #414141;
	}
</style>
