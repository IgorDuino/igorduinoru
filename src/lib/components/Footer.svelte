<script>
  import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<footer>
  <h2 class="contact_title">Contacts</h2>
  <h3 class="contact_short_description">
    You can find me on any of these social networks
  </h3>
  <SocialLinks />
</footer>

<style>
  @import url('/global.css');
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 50px;
  }

  footer.mail_link {
    text-decoration: underline;
    font-size: 18px;
  }

  footer h2 {
    color: #333333;
    font-size: 48px;
    margin-bottom: 0;
    margin-top: 0;
  }

  footer h3 {
    font-size: 18px;
    color: #6b7280;
    margin-bottom: 0;
    margin-top: 38px;
    font-weight: normal;
  }

  body.dark-theme footer h3,
  body.dark-theme footer h2,
  body.dark-theme footer a {
    color: white;
  }

  body.dark-theme footer a {
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    footer {
      margin-top: 50px;
    }
    footer h3 {
      text-align: center;
    }
  }
</style>
