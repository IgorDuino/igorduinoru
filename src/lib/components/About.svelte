<section id="about" class="about">
  <h2 class="about_title">About</h2>
  <div class="about_div foss">
    <p class="about_foss">I use, love and contribute to OpenSource 💕</p>
  </div>
</section>

<style>
  @import url('/global.css');

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

  .about_div.university {
    background: url('img/university.jpg') fixed center;
    background-size: cover;
  }

  .about_div.learn {
    background: url('img/matrix.jpeg') fixed center;
    background-size: cover;
  }

  .about_div.foss {
    /* background: url('img/lyceum.png') fixed center; */
    background: black;
  }

  body.dark-theme .about_div {
    background: transparent;
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

  .toggle_about {
    height: 35px;
    width: 414px;

    margin-top: 50px;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .toggle_about_item {
    width: 83px;
    height: 10px;

    border-radius: 100px;
    transition: 0.2s;
  }

  .toggle_about_item:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  body.dark-theme .toggle_about_item:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .toggle_about_item {
    background-color: #cfc8be;
  }

  .toggle_about_item.active {
    background-color: #131313;
  }

  @media (max-width: 1200px) {
    .about p {
      width: 100%;
      font-size: 50px;
    }

    .toggle_about {
      width: 80%;
      max-width: 414px;
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

    .toggle_about {
      width: 35%;
    }

    .toggle_about_item {
      width: 20%;
    }

    .about_div {
      width: 80%;
    }
  }
</style>
