<section id="achievements" class="achievements">
  <div class="hgroup">
    <!-- because According to the HTML5 specification, only heading elements (<h1> to <h6>) are allowed in hgroup in right order -->
    <h2 class="achievements_title">Achievements</h2>
    <h3 class="achievements_description">
      Some of my results of participation in competitions
    </h3>
  </div>
  <ul class="achievements_list">
    <li class="achievement achievement_itmo">
      Winner of the ITMO grant competition "ITMO Stars" - 2023 <a
        href="https://news.itmo.ru/ru/education/students/news/13345/">🔗</a
      >
    </li>
    <li class="achievement achievement_preprof">
      The absolute winner of the Moscow School Olympiad in the profile
      "Pre-professional - Information technology" - 2023 <a
        href="/pdf/predprof.pdf">🔗</a
      >
    </li>
    <li class="achievement achievement_cyberbbiathlon">
      1st place in the cyberbiathlon information security competition - 2023
    </li>
    <li class="achievement achievement_worldskills2020">
      1st place at the WorldSkills Russia Moscow championship electronics
      competencies - 2020 <a href="/pdf/worldskills2020.pdf">🔗</a>
    </li>
    <li class="achievement achievement_nto_tallant">
      Winner of the NTO Talant competition in "Buisness Application Development"
      competence - 2023 <a href="/pdf/nto_tallant.pdf">🔗</a>
    </li>
    <li class="achievement achievement_cyberfight">
      3rd place at poligon "All-Russian student cyber battle" by InnoStage -
      2023 <a href="https://cyberbattle.innostage-group.ru/">🔗</a>
    </li>
    <li class="achievement achievement_worldskills2019">
      2nd place at the WorldSkills Russia Moscow championship electronics
      competencies - 2019
    </li>
    <li class="achievement achievement_worldskills2021">
      3nd place the WorldSkills Russia Moscow championship electronics
      competencies - 2021
    </li>
    <li class="achievement achievement_robocup">
      4th place at the RoboCup Robotics Championship in Tomsk in the competence
      of robofootball Open Soccer - 2021 <a href="/pdf/robocup.pdf">🔗</a>
    </li>
    <li class="achievement achievement_practiceonmockups">
      First category in the radio electronics competition "practice on mockups"
      in Moscow - 2019 <a href="https://mephi.ru/content/news/1810/130617">🔗</a
      >
    </li>
    <li class="achievement achievement_gosha">
      2nd place at the exhibition of technical projects Archimede with the
      project "Robot dog Gosha" - 2019
    </li>
    <li class="achievement achievement_drivehack">
      Participant of the DriveHack hackathon (award from the creators of the
      case "Transport Innovations of Moscow") - 2022
    </li>
    <li class="achievement achievement_itgen">
      Participant of the Moscow Hackathon "IT generation" KS54 - 2022
    </li>
    <li class="achievement achievement_nto">
      Finalist of the NTO Olympiad on Information Security - 2022
    </li>
    <li class="achievement achievement_innoopen">
      Finalist of the InnoOpen Olympiad on Information security - 2022
    </li>
  </ul>
</section>

<style>
  @import url('/global.css');

  .achievements {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .achievements .hgroup h2 {
    color: #1f1f1f;
    font-size: 48px;

    margin-top: 0;
    margin-bottom: 0;
  }

  .achievements .hgroup h3 {
    color: #6b7280;
    width: 760px;
    font-size: 18px;
    font-weight: normal;
  }

  body.dark-theme .achievements .hgroup h2 {
    color: white;
  }

  body.dark-theme .achievements .hgroup h3 {
    color: white;
  }

  .achievements_list {
    list-style: none;
    width: 1070px;
    font-size: 28px;
    font-weight: normal;
    text-align: justify;
    font-style: normal;
  }

  .achievements_list li {
    color: black;
    margin-top: 50px;
  }

  li.achievement a {
    font-size: 20px;
    color: gray;
  }

  body.dark-theme .achievements_list li {
    color: white;
  }

  @media (max-width: 1200px) {
    .achievements_list {
      padding: 0;
      font-size: 20px;
      margin: 0;
      width: 90%;
    }
  }
</style>
