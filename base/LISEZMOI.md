# La base de pros.idf.immo

Il n'y en a pas en propre : **ce site partage la base de toute la famille
idf.immo**, avec gardiens, étudiants et associations. Elle est décrite et
maintenue dans le dépôt [`app-idf-immo`](https://github.com/mariecelineetave-source/app-idf-immo),
qui sert aussi le back-office **app.idf.immo**.

| | |
|---|---|
| Socle | `base/socle.sql` du dépôt `app-idf-immo` |
| Raccordement de ce site | `base/correctif-2.sql` du même dépôt |
| Coordonnées publiques | `config.js`, ici |

## Ce que ce site lit

- la vue **`pros`** — sa fiche de professionnel (identifiant, prénom, nom,
  e-mail, téléphone, enseigne, métier, commune, IBAN) ;
- les tables communes **`opportunites`**, **`evenements`** et **`primes`**,
  filtrées par la base elle-même : un professionnel ne voit que les siennes.

## La règle à ne pas oublier

**Jamais un second projet Supabase pour un site de la famille.** Marie-Céline
doit voir tous les réseaux dans un seul back-office ; une base à part rend
ses prescripteurs et ses opportunités invisibles. Le cas s'est déjà produit
avec nounous.idf.immo.
