<script>
	//   import { onMount } from 'svelte';
	//   import { writable } from 'svelte/store';
	//   import loadLang from '$lib/lang';

	//   // Initialize lang as a writable store without a default value
	//   let lang = writable();

	//   onMount(() => {
	//     // Now safely access localStorage since this code runs in the client
	//     const savedLang = localStorage.getItem('lang') || 'eng';
	//     lang.set(savedLang); // Set the initial language from localStorage or default to 'eng'
	//     loadLang(savedLang); // Load the language data

	//     // Subscribe to lang changes to update localStorage
	//     lang.subscribe((value) => {
	//       if (value) {
	//         localStorage.setItem('lang', value);
	//       }
	//     });
	//   });

	//   function toggleLang() {
	//     lang.update((currentLang) => (currentLang === 'rus' ? 'eng' : 'rus'));
	//   }
</script>

<header>
	<!-- <p class='switcher unselectable' on:click={themeSwitcher}>dark</p> -->
	<nav class="desktop">
		<a href="/" class="active_nav nav_home">Home</a>
		<a href="/about" class="nav_about">About</a>
		<a href="/comic" class="nav_about">Comic</a>
		<a href="/projects" class="nav_projects">Projects</a>
		<a href="/achievements" class="nav_achievements">Achievements</a>
		<a href="pdf/cv.pdf" class="nav_cv">CV</a>
		<a href="/photos" class="nav_photos">Photos</a>
		<a href="https://t.me/igorduino_ch" class="nav_blog">Blog</a>
	</nav>
	<nav class="mobile">
		<div class="navbar">
			<div class="container nav-container">
				<input class="checkbox" type="checkbox" />
				<div class="hamburger-lines">
					<span class="line line1"></span>
					<span class="line line2"></span>
					<span class="line line3"></span>
				</div>
				<div class="menu-items">
					<ul>
						<li><a href="/" class="active_nav nav_home">Home</a></li>
						<li><a href="/about" class="nav_about">About</a></li>
						<a href="/comic" class="nav_about">Comic</a>
						<li><a href="/projects" class="nav_projects">Projects</a></li>
						<li>
							<a href="/achievements" class="nav_achievements">Achievements</a>
						</li>
						<li><a href="pdf/cv.pdf" class="nav_cv">CV</a></li>
						<li><a href="/photos" class="nav_photos">CV</a></li>
						<li>
							<a href="https://t.me/igorduino_ch" class="nav_blog">Blog</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
	}

	nav {
		width: 60%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	nav.desktop {
		width: 100%;
		justify-content: space-between;
	}
	nav.mobile {
		display: none;
	}

	nav a {
		font-weight: 500;
		color: #6b7280;
	}

	body.dark-theme nav a {
		color: #f2f2f2;
	}

	nav a {
		position: relative;
	}

	nav a:hover::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: currentColor;
		bottom: -3px;
		left: 0;
	}

	@media (max-width: 1200px) {
		header {
			margin-top: 20px;
			flex-wrap: wrap;
		}

		header nav {
			width: 80%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}

	@media (max-width: 700px) {
		header {
			margin: 0 auto;
			margin-top: 20px;
			width: 70%;
			justify-content: center;
			align-items: center;
			flex-wrap: nowrap;
		}

		nav.desktop {
			display: none;
		}

		nav.mobile {
			display: unset;
		}

		.container {
			max-width: 1050px;
			width: 90%;
			margin: auto;
		}

		.navbar {
			width: 100%;
		}

		.nav-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 62px;
		}

		.navbar .menu-items {
			display: flex;
		}

		.navbar .nav-container li {
			list-style: none;
		}

		.navbar .nav-container a {
			text-decoration: none;
			color: #0e2431;
			font-weight: 500;
			font-size: 1.2rem;
			padding: 0.7rem;
		}

		body.dark-theme .navbar .nav-container a {
			color: #f2f2f2;
		}

		.navbar .nav-container a:hover {
			font-weight: bolder;
		}

		.nav-container {
			display: block;
			position: relative;
		}

		.nav-container .checkbox {
			position: absolute;
			display: block;
			height: 32px;
			width: 32px;
			top: 20px;
			left: 48%;
			z-index: 5;
			opacity: 0;
			cursor: pointer;
		}

		.nav-container .hamburger-lines {
			display: block;
			height: 26px;
			width: 32px;
			position: absolute;
			top: 17px;
			left: 48%;
			z-index: 2;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.nav-container .hamburger-lines .line {
			display: block;
			height: 4px;
			width: 100%;
			border-radius: 10px;
			background: #0e2431;
		}

		body.dark-theme .nav-container .hamburger-lines .line {
			background: #f2f2f2;
		}

		.nav-container .hamburger-lines .line1 {
			transform-origin: 0% 0%;
			transition: transform 0.4s ease-in-out;
		}

		.nav-container .hamburger-lines .line2 {
			transition: transform 0.2s ease-in-out;
		}

		.nav-container .hamburger-lines .line3 {
			transform-origin: 0% 100%;
			transition: transform 0.4s ease-in-out;
		}

		.navbar .menu-items {
			padding-top: 120px;
			background-color: white;
			height: 100vh;
			width: 100vw;
			transform: translate(-150%);
			display: flex;
			flex-direction: column;
			margin-left: -37vw;
			padding-left: 12.5vw;
			transition: transform 0.5s ease-in-out;
			text-align: center;
		}

		body.dark-theme .navbar .menu-items {
			background-color: #333333;
		}

		.navbar .menu-items li {
			margin-bottom: 1.2rem;
			font-size: 1.5rem;
			font-weight: 500;
		}

		.nav-container input[type='checkbox']:checked ~ .menu-items {
			transform: translateX(0);
		}

		.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line1 {
			transform: rotate(45deg);
		}

		.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line2 {
			transform: scaleY(0);
		}

		.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line3 {
			transform: rotate(-45deg);
		}
	}
</style>
