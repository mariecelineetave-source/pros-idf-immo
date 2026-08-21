/* =====================================================================
   pros.idf.immo — coordonnées de la base

   La base n'appartient pas à ce site : c'est celle de toute la famille
   idf.immo, la même que gardiens, étudiants et associations, pilotée
   depuis app.idf.immo (dépôt app-idf-immo). On ne crée JAMAIS un second
   projet Supabase pour un site de la famille : Marie-Céline doit voir
   tous les réseaux au même endroit.

   Ces deux valeurs sont PUBLIQUES par conception : elles voyagent dans le
   navigateur de chaque visiteur, et Supabase les qualifie lui-même de
   « safe to use in a browser ». Les voir ne donne accès à rien. Ce qui
   protège les données, ce sont les règles par ligne du socle : la base
   refuse de servir à un professionnel autre chose que ses propres
   opportunités, quelle que soit la requête.

   La clé secrète (sb_secret_…) n'a sa place ni ici ni dans aucun fichier.

   Le raccordement de ce site au socle est le fichier
   base/correctif-2.sql du dépôt app-idf-immo : il ouvre le réseau
   « pros », ajoute l'enseigne et le métier à la fiche, et crée la vue
   « pros » que mon-espace.html interroge.
   ===================================================================== */

window.CONFIG_BASE = {
  url: "https://uiciolavnalimrjlpesx.supabase.co",
  cle: "sb_publishable_rCVYAzc9PyppEfijDMdHzg_C--mKXj1"
};
