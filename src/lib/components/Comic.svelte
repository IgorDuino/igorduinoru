<button id="comicButton">Show comics</button>
<div class="comic-container" style="display: None">
  <h5 id="comic-title">Comic meme</h5>
  <img id="comic-img" src="placeholder" alt="Here will be a comic" />
  <p id="comic-date"></p>
  <p id="comic-from-now"></p>
</div>
<img class="iam" src="/img/i.jpg" alt="igor" />

<style>
  .comic-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  #comic-img {
    max-width: 80%;
    height: auto;
  }
</style>
