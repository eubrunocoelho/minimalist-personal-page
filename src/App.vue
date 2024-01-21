<template>
	<div id="app">
		<input type="checkbox" id="theme-swith" v-model="darkMode">
		<label for="theme-swith">
			<span v-if="darkMode === true">
				<p>Light</p>
			</span>
			<span v-else>
				<p>Dark</p>
			</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			darkMode: false
		};
	},
	mounted() {
		let bodyElement = document.body;
		bodyElement.classList.add('app-background');

		let htmlElement = document.documentElement;
		let theme = localStorage.getItem('theme');

		if (theme === 'dark') {
			htmlElement.setAttribute('theme', 'dark');

			this.darkMode = true;
		} else {
			htmlElement.setAttribute('theme', 'light');

			this.darkMode = false;
		}
	},
	watch: {
		darkMode: function () {
			let htmlElement = document.documentElement;

			if (this.darkMode) {
				localStorage.setItem('theme', 'dark');
				htmlElement.setAttribute('theme', 'dark');
			} else {
				localStorage.setItem('theme', 'light');
				htmlElement.setAttribute('theme', 'light');
			}
		}
	}
}
</script>