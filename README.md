# Site web — Association Maison Verte d'Haïti

Site Jekyll du site [maisonvertehaiti.org](https://maisonvertehaiti.org), avec un CMS
intégré (Decap CMS) permettant à l'équipe de modifier tout le contenu du site
sans toucher au code.

## 🧱 Stack technique

- **Générateur de site** : [Jekyll](https://jekyllrb.com/) 4.4.x (Ruby)
- **CMS** : [Decap CMS](https://decapcms.org/) (fork actif de Netlify CMS), accessible sur `/admin`
- **Hébergement** : Netlify
- **Authentification CMS** : Netlify Identity + Git Gateway (les modifications faites dans le CMS sont automatiquement enregistrées comme des commits Git sur la branche `main`)

## 📁 Où vit le contenu (pour comprendre le code, pas pour l'équipe)

Tout le contenu modifiable depuis `/admin` est stocké dans des fichiers texte, jamais codé en dur dans les pages :

| Contenu | Emplacement |
|---|---|
| Menu de navigation | `_data/nav.yml` |
| Coordonnées, réseaux sociaux, footer | `_data/site.yml` |
| Bandeau d'accueil + mot du coordonnateur | `_data/home.yml` |
| Section "Faire un don" | `_data/don.yml` |
| Actualités | `_posts/` |
| Éditions du festival Cinécolo | `_leseditions/` |
| Nos projets (Cinécolo, Karibiodiv, Jaden Fanm, Je dis Vert) | `_projects/` |
| Galerie photo | `_gallery/` |
| Diapositives du bandeau défilant (accueil) | `_slides/` |
| À propos de Maison Verte | `_aboutus/` |
| Pages avancées (mini-sites HTML détaillés, ex. Cinécolo) | `projects/cinecolo/`, `projects/karibiodiv/`, etc. — éditables en HTML brut via la collection CMS "Pages avancées" |

Les pages elles-mêmes (`index.html`, `apropos/index.html`, `projects/index.html`, etc.)
ne contiennent quasiment plus de texte : elles vont chercher le contenu dans ces
fichiers via des boucles Jekyll (Liquid). C'est ce qui permet au CMS de tout piloter.

## 🚀 Déploiement

### 1. Pousser ce projet sur GitHub

```bash
cd Association-maison-verte-D-HAITI-main
git init
git add .
git commit -m "Restructuration du site + intégration CMS"
git branch -M main
git remote add origin https://github.com/youngscript509/Association-maison-verte-D-HAITI.git
git push -u origin main --force
```

> ⚠️ `--force` écrase l'historique existant du dépôt distant avec cette nouvelle
> version. Si l'organisation veut garder l'ancien historique, pousse plutôt sur
> une nouvelle branche puis fais une Pull Request.

### 2. Connecter le dépôt à Netlify

1. Sur [app.netlify.com](https://app.netlify.com), **Add new site → Import an existing project**.
2. Choisis le dépôt GitHub `Association-maison-verte-D-HAITI`.
3. Netlify détecte automatiquement `netlify.toml` (commande `bundle exec jekyll build`, dossier `_site`). Rien à changer.
4. Clique sur **Deploy**.
5. Dans **Site settings → Domain management**, connecte le domaine `maisonvertehaiti.org`.

### 3. Activer le CMS (Netlify Identity + Git Gateway)

C'est l'étape indispensable pour que l'équipe puisse se connecter à `/admin` :

1. Dans le tableau de bord Netlify du site → **Site configuration → Identity → Enable Identity**.
2. Dans **Identity → Registration**, choisis **Invite only** (recommandé, pour ne pas laisser n'importe qui s'inscrire).
3. Toujours dans **Identity**, descends à **Services → Git Gateway → Enable Git Gateway**.
4. Va dans l'onglet **Identity** du site, clique sur **Invite users**, et entre l'email de chaque membre de l'équipe qui doit pouvoir modifier le site. Chacun recevra un email pour créer son mot de passe.
5. Une fois invités, les membres de l'équipe se rendent sur `https://maisonvertehaiti.org/admin/`, se connectent, et peuvent tout modifier.

Voir le [guide simple pour l'équipe](./GUIDE-CMS.md) à leur transmettre directement.

## 🧪 Tester en local (optionnel, pour un développeur)

```bash
bundle install
bundle exec jekyll serve
```
Le site sera accessible sur `http://localhost:4000`.
Le CMS (`/admin`) ne fonctionne pas en local avec `git-gateway` sans configuration
supplémentaire (`netlify dev` + `netlify-cms-proxy-server`) — le plus simple est
de tester le CMS directement une fois le site déployé sur Netlify.

## 🩹 Corrections apportées lors de cette restructuration

- Bug visible en production : un bloc de configuration Jekyll s'affichait en
  texte brut au-dessus du bandeau d'accueil (`_includes/slides.html`).
- Page "Qui sommes-nous" cassée (layout inexistant + doublon de tout le HTML).
- `<!DOCTYPE html>` orphelin en plein milieu de la page Actualités.
- 6 fichiers de layout vides et 4 pages orphelines (jamais reliées au menu) supprimés.
- Page "Dans la presse" qui affichait du faux contenu "Lorem ipsum" — remplacée par les vraies actualités.
- Bandeau défilant : le nombre de puces de navigation était figé à 5 ; si une diapositive est ajoutée ou retirée via le CMS, le carrousel plantait. Corrigé pour s'adapter automatiquement.
- Boutons "Faire un don" qui ne menaient nulle part (`href="#"`).
- Lien cassé vers `/about/` (page inexistante) sur la page de remerciement.
- `admin/config.yml` ne correspondait pas à la structure réelle du site : collections vers des dossiers inexistants, noms invalides, et la quasi-totalité du contenu du site était codée en dur dans le HTML (donc invisible pour le CMS). Entièrement reconstruit.
- Ajout d'un plugin (`jekyll-sitemap`) avait été envisagé puis retiré car non installé dans le `Gemfile` — cela aurait fait échouer le déploiement.
- Titres et méta-descriptions identiques sur toutes les pages (mauvais pour le référencement) — désormais générés dynamiquement par page.

## ⚠️ Limite assumée

Les mini-sites très riches en HTML sous `projects/cinecolo/public/` (archives
2016 à 2025, galerie, presse, invités) contiennent une grande quantité de
contenu déjà mis en forme. Plutôt que de tout reconvertir en collections
(risque élevé de casser des pages qui fonctionnent), ils restent éditables
depuis le CMS dans la section **"🛠️ Pages avancées (HTML)"**, mais sous forme de
code HTML brut — à modifier avec un minimum de prudence, contrairement aux
autres collections qui utilisent des formulaires simples.
