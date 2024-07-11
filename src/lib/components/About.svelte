<section id="about" class="about">
	<h2 class="about_title">About</h2>
	<div class="about_div foss">
		<p class="about_foss">I use, love and contribute to OpenSource 💕</p>
	</div>
</section>

<style>
	.about {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.about h2 {
		color: #1f1f1f;
		font-size: 48px;

		margin-top: 0;
		margin-bottom: 0;
	}

	body.dark-theme .about h2 {
		color: #f2f2f2;
	}

	.about_div {
		margin-top: 50px;
	}

	.about_div.foss {
		background: black;
	}

	.about p {
		margin-top: 0;
		margin-bottom: 0;

		color: #000;
		background: #fff;
		mix-blend-mode: lighten;
		width: 1020px;
		font-size: 90px;
		font-weight: 900;
	}

	body.dark-theme .about p {
		color: #f2f2f2;
		background: transparent;
		mix-blend-mode: normal;
	}

	@media (max-width: 1200px) {
		.about p {
			width: 100%;
			font-size: 50px;
		}

		.about {
			width: 100%;
			font-size: 20px;
		}
	}

	@media (max-width: 700px) {
		.about p {
			font-size: 30px;
		}

		.about_div {
			width: 80%;
		}
	}
</style>
