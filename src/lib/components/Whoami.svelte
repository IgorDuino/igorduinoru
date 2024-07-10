<script>
  import SocialLinks from './SocialLinks.svelte';
  import Comic from './Comic.svelte';
  import Fa from 'svelte-fa';
  import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="whoami">
  <div class="left">
    <h2 class="whoami_full_name">Kuzmenkov<br />Igor</h2>
    <p>
      <a href="https://innopolis.ru">
        <Fa icon={faLocationDot} />
        <span class="location">Innopolis, Russia</span>
      </a>
    </p>
    <p class="whoami_short_about">
      Hello everyone, I am a pentester from F.A.C.C.T.<br />I love finding
      vulnerabilities and writing code.
    </p>
    <hr />
    <SocialLinks />
  </div>
  <img class="iam" src="/img/i.jpg" alt="igor" />
</section>

<style>
  @import url('/global.css');

  .whoami {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .whoami a {
    text-decoration: none;
    color: #0c0d11;
  }

  .whoami img {
    border-radius: 2%;
    width: 450px;
    height: 450px;
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
      flex-direction: column;
      align-items: center;
    }

    .whoami .iam {
      display: none;
    }
  }
</style>
