<script>
  import SocialLinks from './SocialLinks.svelte';
  import Comic from './Comic.svelte';
</script>

<section class="whoami">
  <div class="left">
    <h2 class="whoami_full_name">Kuzmenkov<br />Igor</h2>
    <p>
      <i class="fa-solid fa-location-dot"></i><span class="location"
        >Innopolis, Russia</span
      >
    </p>
    <p class="whoami_short_about">
      Hello everyone, I am a pentester from F.A.C.C.T.<br />I love finding
      vulnerabilities and writing code.
    </p>
    <hr />
    <SocialLinks />
  </div>
  <Comic />
</section>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
  @import url('/global.css');

  .whoami {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .whoami h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 72px;
    color: #1f1f1f;
    font-weight: bold;
  }

  body.dark-theme .whoami h2 {
    color: #f6f5f5;
  }
  .whoami_short_about {
    margin-top: 40px;
  }
  .whoami p {
    margin-bottom: 0;
    color: #6b7280;
    font-weight: normal;
  }

  body.dark-theme .whoami p {
    color: #e0e0e0;
  }

  .whoami hr {
    width: 650px;
    height: 0;
    color: #1f1f1f;
    border: none;
    border-top: 2px solid;
    margin-top: 40px;
  }

  body.dark-theme .whoami hr {
    color: #f2f2f2;
  }

  .whoami .iam img {
    border-radius: 2%;
    width: 450px;
    height: 450px;
  }

  .fa-location-dot {
    color: #1f1f1f;
    margin-right: 10px;
    margin-top: 10px;
  }

  body.dark-theme .fa-location-dot {
    color: #f2f2f2;
  }

  .iam.mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    .whoami hr {
      width: 100%;
    }

    .whoami .iam {
      width: 40%;
      height: auto;
      margin-top: 20px;
    }

    .whoami .left {
      width: 50%;
    }

    .whoami h2 {
      font-size: 40px;
    }
  }

  @media (max-width: 700px) {
    .whoami .left {
      width: 70%;
    }

    .whoami {
      margin-top: 20px;
      flex-direction: column;
      align-items: center;
    }

    .whoami .iam {
      display: none;
    }
  }
</style>
