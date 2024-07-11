<section class="photos">
	<div class="hgroup">
		<h2 class="photos_title">Some photos</h2>
	</div>
	<div class="photos_container">
		<div class="photo innoopen">
			<p class="photo_innoopen_text">InnoOpen, Innopolis</p>
		</div>
		<div class="photo nto">
			<p class="photo_nto_text">NTO, MIPHI</p>
		</div>
		<div class="photo ctflyceum">
			<p class="photo_ctflyceum_text">CTF, HSE lyceum</p>
		</div>
	</div>
	<div class="photos_container">
		<div class="photo robocup">
			<p class="photo_robocup_text">RoboCup, Tomsk</p>
		</div>
		<div class="photo worldskills">
			<p class="photo_worldskills_text">WorldSkills, Moscow</p>
		</div>
		<div class="photo pom">
			<p class="photo_pom_text">POM, Moscow</p>
		</div>
	</div>
	<div class="photos_container">
		<div class="photo drivehack">
			<p class="photo_drivehack_text">DriveHack, Cyberuniversity</p>
		</div>
		<div class="photo itgen">
			<p class="photo_itgen_text">ITGen hackathon, KS54</p>
		</div>
		<div class="photo ideathon">
			<p class="photo_ideathon_text">Ideathon, HSE</p>
		</div>
	</div>
</section>

<style>
	.photos {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.photos .hgroup h2 {
		color: #1f1f1f;
		font-size: 48px;

		margin-top: 0;
		margin-bottom: 0;
	}

	body.dark-theme .photos .hgroup h2 {
		color: white;
	}

	.photos_container {
		margin-top: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-align: center;
	}

	.photo {
		border-radius: 10px;
		width: 385px;
		height: 240px;
		display: flex;
		flex-direction: column;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.photo.robocup {
		background-image: url('img/RoboCup.png');
	}

	.photo.worldskills {
		background-image: url('img/WorldSkills.png');
	}

	.photo.pom {
		background-image: url('img/practice_on_mockups.png');
	}

	.photo.innoopen {
		background-image: url('img/innoopen.jpg');
	}
	.photo.nto {
		background-image: url('img/nto.png');
	}
	.photo.ctflyceum {
		background-image: url('img/ctflyceum.jpg');
	}

	.photo.drivehack {
		background-image: url('img/drivehack.jpg');
	}
	.photo.itgen {
		background-image: url('img/itgen.jpg');
	}
	.photo.ideathon {
		background-image: url('img/ideathon.jpg');
	}

	.photo p {
		display: none;
		margin-top: auto;
		font-size: 17px;
		color: white;
		font-weight: 600;
	}
</style>
