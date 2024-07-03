<script>
</script>

<div class="social">
  <a href="mailto:igor.kuzmenkov.05@mail.ru">
    <div class="social_item mail"></div>
    <i class="fa-solid fa-at"></i>
  </a>
  <a href="https://github.com/IgorDuino">
    <div class="social_item github"></div>
    <i class="fa-brands fa-github"></i>
  </a>
  <a href="https://t.me/igorduino">
    <div class="social_item telegram"></div>
    <i class="fa-brands fa-telegram"></i>
  </a>
  <a href="https://www.linkedin.com/in/igordoinno/">
    <div class="social_item li"></div>
    <i class="fa-brands fa-linkedin"></i>
  </a>
</div>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7/css/all.min.css');
  @import url('/global.css');

  .social {
    margin-top: 40px;
    height: 35px;
    width: 320px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .social i {
    font-size: 30px;
    text-decoration: none;
    color: #0c0d11;
  }

  body.dark-theme .social i {
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
