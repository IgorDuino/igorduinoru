<script>
	import Fa from 'svelte-fa';

	import { faGithub, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faAt } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="social">
	<a href="mailto:igor.kuzmenkov.05@mail.ru">
		<div class="social_item mail"></div>
		<Fa icon={faAt} class="iconca" />
	</a>
	<a href="https://github.com/IgorDuino">
		<div class="social_item github"></div>
		<Fa icon={faGithub} class="iconca" />
	</a>
	<a href="https://t.me/igorduino">
		<div class="social_item telegram"></div>
		<Fa icon={faTelegram} class="iconca" />
	</a>
	<a href="https://www.linkedin.com/in/igordoinno/">
		<div class="social_item li"></div>
		<Fa icon={faLinkedin} class="iconca" />
	</a>
</div>

<style>
	.social {
		margin-top: 40px;
		height: 35px;
		width: 320px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}

	.social a {
		font-size: 30px;
		text-decoration: none;
		color: #0c0d11;
	}

	body.dark-theme .social a {
		color: #f6f5f5;
	}

	@media (max-width: 1200px) {
		.social {
			width: 100%;
			max-width: 320px;
			margin-top: 20px;
		}
	}
</style>
