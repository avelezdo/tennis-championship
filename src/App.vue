<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import initScroll from './assets/scroll.js';
	import UpTo from './components/UpTo.vue';
	import Navbar from './components/Navbar.vue';
	import Header from './components/Header.vue';
	import News from './components/News.vue';
	import Contact from './components/Contact.vue';
	import Sponsors from './components/Sponsors.vue';
	import { ref, onMounted } from 'vue';
	import Players from './components/Players.vue';

	const el = ref();

	onMounted(() => {
		initScroll();
		el.value; // <div>
	});
</script>

<template>
	<UpTo />
	<Navbar />
	<Header />
	<News />
	<Players />
	<Contact />
	<Sponsors />
</template>

<style>
	/* #app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	} */
</style>
