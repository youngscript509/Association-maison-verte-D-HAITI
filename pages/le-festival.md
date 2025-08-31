---
layout: default
title: Le festival
---
<!-- Hero Slider -->
<section class="hero">
  <div class="hero-slide active" style="background-image: url('/assets/img/hero3.jpg');">
    <div class="hero-content">
      <h1 class="banner-title">CINECOLO-HAITI</h1>
      <p class="banner-desc display-7">Le festival international du film de l'environnement</p>
      <button><a style="text-decoration: none;" href="">Lire Plus</a></button>
    </div>
  </div>
{% for slide in site.heroslides %}
  <div class="hero-slide" style="background-image: url('{{ slide.image }}');">
    <div class="hero-content">
      <h1 class="banner-title">{{ slide.title }}</h1>
      <p class="banner-desc display-7">{{ slide.subtitle }}</p>
      <button><a style="text-decoration: none;" href="{{ slide.link }}">Lire Plus</a></button>
    </div>
  </div>
  {% endfor %}
</section>


<div class="container card">
<h1>Le festival</h1>
<section class="about" id="festival">
  
  <p>Bienvenue au Festival CINECOLO-HAITI, une célébration du cinéma environnemental et durable.</p>

  <div class="flexOnBigScreen">
    <img class="imgAbout" src="/assets/img/cnecolo.jpg" alt="">
    <div>
        <h3>CINECOLO-HAITI</h3>
  <p>Initié à Port-au-Prince en 2015, CINECOLO est le premier festival international du film de l’environnement d’Haïti. Cet évènement est une initiative citoyenne dynamique et engageante qui célèbre le 7ème art, plus précisément les documentaires mettant en lumière les enjeux sociétaux, écologiques et climatiques auxquels nous sommes confrontés et les solutions innovantes pour un avenir durable.
<br>
Le festival CINECOLO-HAITI cherche à inspirer, éduquer et sensibiliser un large public à travers des œuvres cinématographiques captivantes qui suscitent la réflexion, encouragent le dialogue et incitent à l'action en faveur de la protection de notre planète et pour le respect du vivant.
<br>
En mettant en avant des films engagés, des réalisateurs passionnés et des experts du domaine, le festival CINECOLO-HAITI aspire à devenir une vitrine internationale de la créativité et de l'impact du cinéma en tant qu'outil puissant pour promouvoir la conscience environnementale et le changement social en Haïti.</p></div>
</div>

</section>
<div class="missionsEtVisions">
</div>
</div>


