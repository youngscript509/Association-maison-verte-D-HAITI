---
layout: default
title: Contact
---


{% include header.html %}


<div class="container card">
<h1>Contact</h1>
<form id="contactForm" class="contact-form">
<label>Nom <input name="name" required></label>
<label>Email <input name="email" type="email" required></label>
<label>Message <textarea name="message" rows="4" required></textarea></label>
<button type="submit" class="btn primary">Envoyer</button>
</form>
</div>


{% include footer.html %}