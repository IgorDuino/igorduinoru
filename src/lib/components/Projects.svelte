<script>
</script>

<section id="projects" class="projects">
  <div class="hgroup">
    <h2 class="projects_title">My recent projects</h2>
  </div>
  <div class="projects_container">
    <a class="webeye project" href="https://github.com/CupSoft/webeye">
      <h4 class="projects_webeye_title">WebEye</h4>
      <p class="projects_webeye_description blurry-text">
        Distributed monitoring system for websites and web resources
      </p>
    </a>

    <a
      class="isabsent project"
      href="https://github.com/IgorDuino/isabsent_api"
    >
      <h4 class="projects_isabsent_title">IsAbsent</h4>
      <p class="projects_isabsent_description blurry-text">
        The system of monitoring and marking absence for educational
        institutions
      </p>
    </a>

    <a
      class="valentine project"
      href="https://github.com/IgorDuino/valentin_bot"
    >
      <h4 class="projects_valentinebot_title">Valentine bot</h4>
      <p class="projects_valentinebot_description blurry-text">
        Telegram bot for exchanging valentinee's cards
      </p>
    </a>

    <a
      href="a"
      class="wgbot project"
      on:click={() => {
        alert(
          'По требованию заказчика проект сейчас закрыт для публичного доступа'
        );
      }}
    >
      <h4 class="projects_wgbot_title">WireGuard telegram bot</h4>
      <p class="projects_wgbot_description blurry-text">
        Telegram bot for automatic selling vpn
      </p>
    </a>
  </div>
</section>

<style>
  @import url('/global.css');

  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .projects .hgroup h2 {
    color: #1f1f1f;
    font-size: 48px;

    margin-top: 0;
    margin-bottom: 0;
  }

  body.dark-theme .projects .hgroup h2 {
    color: #e0e0e0;
  }

  .projects .hgroup h3 {
    color: #6b7280;
    width: 760px;
    font-size: 18px;
    font-weight: normal;
  }

  body.dark-theme .projects .hgroup h3 {
    color: #e0e0e0;
  }

  .projects_container {
    width: 1000px;

    margin-top: 60px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 40px 40px;
    grid-auto-flow: row;
    grid-template-areas:
      'webeye webeye'
      'isabsent wgbot'
      'valentine wgbot';
  }

  .project {
    border-radius: 10px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    background-color: #333333;

    text-align: left;

    padding: 30px 15px;

    display: block;
  }

  .project h4 {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 50px;
    color: #ffffff;
  }

  .project p {
    margin-top: 0;
    margin-bottom: 0;
    color: #f2f2f2;
    font-weight: normal;
    width: 70%;
    font-size: 20px;
  }

  .valentine {
    grid-area: valentine;
    background-color: #f699ff;
    background-image: radial-gradient(
        at 7% 88%,
        hsla(264, 82%, 61%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 10% 3%, hsla(26, 67%, 79%, 1) 0px, transparent 50%),
      radial-gradient(at 77% 6%, hsla(275, 96%, 70%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 81%, hsla(304, 86%, 77%, 1) 0px, transparent 50%);
  }

  .wgbot {
    grid-area: wgbot;
    background: url('/img/mesh-417.png') no-repeat;
    background-size: cover;
  }

  .isabsent {
    grid-area: isabsent;
    background: url('/img/orange_bg.png');
  }

  .webeye {
    height: 270px;

    grid-area: webeye;

    background: url('/img/blue_bg.png');
  }

  .projects .blurry-text {
    color: transparent;
    transition: 0.2s;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  }

  .project:hover .blurry-text {
    color: #f2f2f2;
    text-shadow: 0 0 0;
  }

  @media (max-width: 1200px) {
    .projects_container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .project {
      width: 70%;
      background-size: cover;
    }

    .projects .blurry-text {
      text-shadow: 0 0 0;
      color: #f2f2f2;
    }

    .webeye,
    .isabsent,
    .wgbot,
    .valentine {
      height: 200px;
    }

    .project h4 {
      font-size: 30px;
    }
  }
</style>
