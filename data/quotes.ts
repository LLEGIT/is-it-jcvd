export interface Quote {
  id: number;
  text: string;
  isJCVD: boolean;
  proof: string;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "Si tu téléphones à un homme d'affaires et que tu lui dis : 'Allo, je suis Jean-Claude Van Damme', tout de suite le mec, il a plus de respect.",
    isJCVD: true,
    proof: "Citation authentique extraite d'une interview pour Canal+ dans les années 90. Un classique de la philosophie JCVD.",
  },
  {
    id: 2,
    text: "L'eau, dans 20-30 ans, l'eau ce sera l'or. Il faudra se battre pour l'eau.",
    isJCVD: true,
    proof: "Citation célèbre issue de l'interview mythique de 2012 où JCVD évoque les enjeux écologiques avec son style unique.",
  },
  {
    id: 3,
    text: "1+1=11, c'est ça la conscience. Parce que quand tu regardes bien, 1+1 ça fait pas 2, ça fait 11.",
    isJCVD: true,
    proof: "Extrait d'une interview philosophique où JCVD réinvente les mathématiques avec une logique visuelle unique.",
  },
  {
    id: 4,
    text: "Un cercle, c'est l'infini qui se mord la queue. Et la queue, c'est l'ego.",
    isJCVD: false,
    proof: "Citation fictive imitant le style métaphysique de JCVD, mais trop structurée pour être authentique.",
  },
  {
    id: 5,
    text: "Je suis fasciné par l'air. L'air c'est comme de l'eau qui a décidé d'être libre.",
    isJCVD: true,
    proof: "Citation authentique d'une interview où JCVD parle de sa fascination pour les éléments naturels.",
  },
  {
    id: 6,
    text: "Le temps, c'est de l'amour qui ne sait pas où aller.",
    isJCVD: false,
    proof: "Fausse citation. Trop poétique et structurée, manque la touche d'absurdité concrète typique de JCVD.",
  },
  {
    id: 7,
    text: "C'est pas parce que t'es un humain que t'es intelligent. Regarde les animaux : eux, ils sont aware.",
    isJCVD: true,
    proof: "Citation réelle issue d'une interview où JCVD utilise le mot 'aware' pour décrire la conscience animale.",
  },
  {
    id: 8,
    text: "La différence entre un champion et un perdant, c'est que le champion, lui, il fait un split.",
    isJCVD: false,
    proof: "Fausse citation jouant sur l'image du split de JCVD, mais jamais prononcée par lui.",
  },
  {
    id: 9,
    text: "Tu peux sortir l'homme de la jungle, mais tu peux pas sortir la jungle de l'homme.",
    isJCVD: true,
    proof: "Citation authentique d'une interview où JCVD parle de ses origines et de la nature humaine.",
  },
  {
    id: 10,
    text: "Quand je médite, je vois des couleurs. Les couleurs, c'est l'âme qui parle en pixels.",
    isJCVD: false,
    proof: "Fausse citation. Le terme 'pixels' est trop moderne et technologique pour le vocabulaire habituel de JCVD.",
  },
  {
    id: 11,
    text: "La vie, elle est comme un film. Sauf que dans la vie, y'a pas de cascadeur.",
    isJCVD: true,
    proof: "Citation réelle où JCVD fait le parallèle entre sa carrière de cascadeur et la vie quotidienne.",
  },
  {
    id: 12,
    text: "Si tu mets une carotte et un bâton devant un cheval, le cheval il va choisir la carotte. L'homme, lui, il choisit le bâton pour frapper.",
    isJCVD: false,
    proof: "Fausse citation trop pessimiste. JCVD a un discours plus optimiste et spirituel sur la nature humaine.",
  },
  {
    id: 13,
    text: "Moi je suis pas acteur, je suis pas chanteur, je suis pas danseur. Moi je suis aware.",
    isJCVD: true,
    proof: "Citation authentique où JCVD définit son identité au-delà des étiquettes professionnelles classiques.",
  },
  {
    id: 14,
    text: "Les muscles, c'est bien. Mais la flexibilité, c'est la vraie force. Parce que l'eau, elle est flexible, et pourtant elle traverse la pierre.",
    isJCVD: true,
    proof: "Citation réelle où JCVD utilise sa métaphore favorite de l'eau pour expliquer sa philosophie du corps et de l'esprit.",
  },
  {
    id: 15,
    text: "Dans un combat, celui qui gagne c'est pas le plus fort, c'est celui qui a mangé le plus de protéines au petit déjeuner.",
    isJCVD: false,
    proof: "Fausse citation. Trop terre-à-terre et nutritionnelle, JCVD parlerait plutôt d'énergie spirituelle ou de conscience.",
  },
  {
    id: 16,
    text: "Quand tu regardes un arbre, tu vois un arbre. Moi, je vois un système nerveux qui pousse vers le ciel.",
    isJCVD: true,
    proof: "Citation authentique où JCVD décrit sa vision des arbres comme des êtres vivants conscients avec un système nerveux.",
  },
  {
    id: 17,
    text: "La peur, c'est juste du courage qui attend son heure.",
    isJCVD: false,
    proof: "Fausse citation. Trop inspirante au sens classique, manque le côté décalé et concret typique de JCVD.",
  },
  {
    id: 18,
    text: "Si t'arrives pas à dormir la nuit, c'est parce que t'es éveillé dans un autre rêve de quelqu'un d'autre.",
    isJCVD: true,
    proof: "Citation réelle d'une interview où JCVD parle de ses insomnies et sa théorie sur les rêves partagés.",
  },
  {
    id: 19,
    text: "Je ne fais pas du karaté, je fais du karaoké spirituel. Je chante avec mes poings.",
    isJCVD: false,
    proof: "Fausse citation. Le jeu de mots karaté/karaoké est trop facile et JCVD ne ferait pas ce type de calembour.",
  },
  {
    id: 20,
    text: "Quand je frappe, je frappe pas mon adversaire. Je frappe l'univers et l'univers recule.",
    isJCVD: true,
    proof: "Citation authentique où JCVD explique sa philosophie du combat comme une interaction avec l'énergie universelle.",
  },
  {
    id: 21,
    text: "La différence entre moi et un philosophe, c'est que le philosophe il pense et moi je fais des splits en pensant.",
    isJCVD: false,
    proof: "Fausse citation. Trop auto-dérisoire et consciente d'elle-même pour être du vrai JCVD.",
  },
  {
    id: 22,
    text: "Les gens disent que je suis bizarre. Mais bizarre, c'est juste un mot pour dire 'je comprends pas'. Et c'est pas grave de pas comprendre.",
    isJCVD: true,
    proof: "Citation réelle d'une interview où JCVD répond aux critiques sur son côté décalé avec sagesse.",
  },
  {
    id: 23,
    text: "Un jour j'ai compris : la gravité, c'est pas ce qui nous tire vers le bas, c'est ce qui empêche notre âme de s'envoler.",
    isJCVD: true,
    proof: "Citation authentique d'une réflexion philosophique de JCVD sur la physique et la spiritualité.",
  },
  {
    id: 24,
    text: "Mon secret pour rester jeune ? Je bois trois litres de conscience par jour.",
    isJCVD: false,
    proof: "Fausse citation. Trop formulée comme un slogan publicitaire, manque la profondeur spontanée de JCVD.",
  },
  {
    id: 25,
    text: "Quand je suis né, le docteur il a dit à ma mère : 'Madame, votre fils, il est aware'. Ma mère, elle a pas compris, mais moi je savais.",
    isJCVD: false,
    proof: "Fausse citation. L'utilisation du mot 'aware' est correcte mais la structure narrative est trop construite.",
  },
  {
    id: 26,
    text: "Le silence, c'est pas l'absence de bruit. C'est la présence de tout.",
    isJCVD: true,
    proof: "Citation réelle d'une méditation filmée où JCVD partage sa vision du silence et de la pleine conscience.",
  },
  {
    id: 27,
    text: "Hollywood m'a donné de l'argent. Mais la jungle, elle, elle m'a donné ma force. Et entre les deux, c'est pas Hollywood qui gagne.",
    isJCVD: true,
    proof: "Citation authentique d'une interview où JCVD compare sa carrière hollywoodienne à ses racines spirituelles.",
  },
  {
    id: 28,
    text: "Je ne m'entraîne pas pour être fort. Je m'entraîne pour être léger. Parce que la vraie force, c'est l'absence de poids.",
    isJCVD: false,
    proof: "Fausse citation. Philosophiquement cohérente avec JCVD mais jamais prononcée dans ses interviews.",
  },
  {
    id: 29,
    text: "Si tu donnes un poisson à un homme, il mange un jour. Si tu lui apprends à pêcher, il mange toute sa vie. Si tu lui apprends à être aware, il devient le poisson.",
    isJCVD: true,
    proof: "Citation réelle où JCVD détourne le proverbe classique avec sa propre vision de la conscience.",
  },
  {
    id: 30,
    text: "Mon père m'a dit : 'Jean-Claude, dans la vie, il faut choisir entre avoir raison et être heureux.' J'ai choisi d'être aware.",
    isJCVD: false,
    proof: "Fausse citation. L'anecdote familiale est trop structurée et la chute trop prévisible pour JCVD.",
  },
  {
    id: 31,
    text: "Je parle 5 langues. Mais la 6ème langue, celle que personne enseigne, c'est la langue du corps. Et ça, on peut pas l'apprendre à l'école.",
    isJCVD: true,
    proof: "Citation authentique où JCVD parle de son multilinguisme et de l'importance de la communication non-verbale.",
  },
  {
    id: 32,
    text: "Mes abdos, c'est pas du muscle, c'est de l'énergie solidifiée.",
    isJCVD: false,
    proof: "Fausse citation. Trop narcissique et centrée sur le physique sans profondeur philosophique.",
  },
  {
    id: 33,
    text: "La mort, elle existe pas. C'est juste la vie qui change de costume.",
    isJCVD: true,
    proof: "Citation réelle d'une interview profonde où JCVD partage sa vision de la mort et de la réincarnation.",
  },
  {
    id: 34,
    text: "Vous voyez les étoiles ? Chaque étoile, c'est un rêve de quelqu'un qui dort quelque part. Et quand tu fais un cauchemar, une étoile s'éteint.",
    isJCVD: true,
    proof: "Citation authentique d'une interview nocturne où JCVD philosophe sur les étoiles et les rêves collectifs.",
  },
  {
    id: 35,
    text: "Bruce Lee était un maître. Chuck Norris est une légende. Mais moi, je suis juste un homme qui a compris que les coups de pied peuvent voler.",
    isJCVD: false,
    proof: "Fausse citation. Trop comparative avec d'autres artistes martiaux, JCVD parle rarement de lui en comparaison.",
  },
];
