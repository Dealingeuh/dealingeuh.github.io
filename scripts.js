// === Language Switching ===
function setLang(lang) {
  document.querySelectorAll(".lang").forEach(el => el.classList.remove("active"));
  document.querySelectorAll("." + lang).forEach(el => el.classList.add("active"));
}

const langButtons = document.querySelectorAll(".lang-btn");
let currentLang = "en";

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// === Skills Toggle (See more / See less) ===
const toggleBtn = document.querySelector(".skills__toggle");
const toggleTexts = document.querySelectorAll(".skills__toggle .lang");
const hiddenItems = document.querySelectorAll(".skills__item.hidden");

let expanded = false;

toggleBtn.addEventListener("click", () => {
  hiddenItems.forEach(item => {
    item.classList.toggle("show", !expanded);
  });

  expanded = !expanded;

  const eng = toggleBtn.querySelector(".lang.eng");
  const fr = toggleBtn.querySelector(".lang.fr");

  if (expanded) {
    eng.textContent = "See less...";
    fr.textContent = "Voir moins...";
  } else {
    eng.textContent = "See more...";
    fr.textContent = "Voir plus...";
  }
});

// === Project Data ===
const projectsData = [
  {
  id: 1,
  title: {
    en: "PING - Web application for stock management",
    fr: "PING - Application web pour la gestion de stocks"
  },
  description: {
    en: `
      <p><strong>Subject:</strong> Design of a stock management interface for an e-commerce company</p>

      <p><strong>Context and challenges:</strong><br>
      In a booming e-commerce sector, efficient stock management is essential to ensure a smooth customer experience and avoid costly stockouts or overstocks. 
      The goal is to design an intuitive and high-performance interface, enabling logistics teams and stock managers to track, organize, and update stocks in real time.</p>

      <p><strong>Main challenges to address:</strong></p>
      <ul>
        <li>Provide a clear and ergonomic interface to facilitate stock and order tracking.</li>
        <li>Enable collaborative stock management with change tracking via Git versioning.</li>
        <li>Ensure secure authentication and user access management according to their role.</li>
        <li>Provide complete traceability of actions through a detailed logging system.</li>
      </ul>

      <p>This stock management interface ensures precise and collaborative stock tracking while guaranteeing security, traceability, and efficiency. 
      Thanks to advanced versioning and a detailed logging system, it improves coordination among logistics teams, reducing errors and enhancing product availability.</p>
    `,
    fr: `
      <p><strong>Sujet :</strong> Conception d'une interface de gestion des stocks pour une entreprise de e-commerce</p>

      <p><strong>Contexte et enjeux :</strong><br>
      Dans un secteur e-commerce en pleine expansion, la gestion efficace des stocks est essentielle pour garantir une expérience client fluide et éviter les ruptures de stock ou les surstocks coûteux. 
      L’objectif est de concevoir une interface intuitive et performante, permettant aux équipes logistiques et aux gestionnaires de stock de suivre, organiser et mettre à jour les stocks en temps réel.</p>

      <p><strong>Principaux défis à relever :</strong></p>
      <ul>
        <li>Offrir une interface claire et ergonomique pour faciliter le suivi des stocks et des commandes.</li>
        <li>Permettre une gestion collaborative des stocks avec un suivi des modifications via versioning Git.</li>
        <li>Garantir une authentification sécurisée et une gestion des accès utilisateurs selon leur rôle.</li>
        <li>Fournir une traçabilité complète des actions via un système de logs détaillé.</li>
      </ul>

      <p>Cette interface de gestion des stocks assure un suivi précis et collaboratif des niveaux de stock tout en garantissant sécurité, traçabilité et efficacité. 
      Grâce à un versioning avancé et un système de logs détaillé, elle permet une meilleure coordination des équipes logistiques, réduisant ainsi les erreurs et améliorant la disponibilité des produits.</p>
    `
  },
  technologies: ["Java", "JavaScript", "HTML", "CSS", "PostgreSQL", "JWT", "Quarkus"]
}
,
  {
    id: 2,
    title: { en: "42sh", fr: "42sh" },
    description: {
      en: `Project architecture :  
      <pre><code>├── configure.ac
├── Makefile.am
├── src
│   ├── execution
│   │   ├── builtins.c
│   │   ├── builtins.h
│   │   ├── execution.c
│   │   ├── execution.h
│   │   └── Makefile.am
│   ├── lecture
│   │   ├── execute.c
│   │   ├── execute.h
│   │   ├── Makefile.am
│   │   ├── print_error.c
│   │   └── print_error.h
│   ├── lexer
│   │   ├── lexer.c
│   │   ├── lexer.h
│   │   ├── Makefile.am
│   │   └── token.h
│   ├── main.c
│   ├── Makefile.am
│   ├── parser
│   │   ├── ast.c
│   │   ├── ast.h
│   │   ├── Makefile.am
│   │   ├── parser.c
│   │   └── parser.h
│   ├── redirection
│   │   ├── Makefile.am
│   │   ├── redirection.c
│   │   └── redirection.h
│   └── variables
│       ├── Makefile.am
│       ├── variables.c
│       └── variables.h
└── tests
    ├── cat_file.txt
    ├── functionnal_tests.sh
    ├── Makefile.am
    ├── script.sh
    ├── testsuite.sh
    └── unit_tests.c</code></pre>
    <p><strong>4-week project</strong> in a team of 4 to build a fully functional UNIX shell compliant with POSIX standards.</p> \
<p>Implemented features:</p> \
<ul> \
  <li>Execution of simple and compound commands</li> \
  <li>Handling of redirections, pipelines, and operators (<code>&amp;&amp;</code>, <code>||</code>, <code>!</code>)</li> \
  <li>Control structures: <code>if</code>, <code>while</code>, <code>until</code>, <code>for</code>, <code>case</code></li> \
  <li>Environment variables and command substitution</li> \
  <li>Built-in commands such as <code>cd</code>, <code>echo</code>, <code>export</code>, <code>unset</code></li> \
  <li>Support for blocks, functions, and subshells</li> \
  <li>Aliases and advanced field splitting</li> \
</ul> \
<p>Tools and methods:</p> \
<ul> \
  <li>Build system with <strong>GNU Autotools</strong></li> \
  <li>Dedicated <strong>unit and functional test suite</strong></li> \
  <li>Memory safety and POSIX compliance</li> \
</ul>
<b>Compilation</b>
<pre><code>autoreconf --install
./configure
make</code></pre>
<b>Usage</b> \
</br>
There are three ways 42sh must read an input Shell program:
<ul>
  <li>It must read its input from a string given using -c
  <pre><code>42sh$ ./42sh -c "echo Input as string"
Input as string</code></pre></li>
  <li>It must read from a file directly given as a positional argument
  <pre><code>42sh$ cat -e script.sh
echo Input as file$
42sh$ ./42sh script.sh
Input as file</code></pre></li>
  <li>When no other source is provided, it must read commands from standard input.
  <pre><code>42sh$ cat -e script.sh
echo Input through stdin$
42sh$ ./42sh < script.sh
Input through stdin
42sh$ cat script.sh | ./42sh
Input through stdin</code></pre></li>
</ul>
<b>Testsuite Testing</b>
<pre><code>42sh$ BIN_PATH="$(pwd)/bin/42sh" COVERAGE="yes" make check
42sh$ BIN_PATH="$(pwd)/bin/42sh" OUTPUT_FILE="$(pwd)/out" make check</code></pre>
    `,
      fr: `Architecture du projet :  
      <pre><code>├── configure.ac
├── Makefile.am
├── src
│   ├── execution
│   │   ├── builtins.c
│   │   ├── builtins.h
│   │   ├── execution.c
│   │   ├── execution.h
│   │   └── Makefile.am
│   ├── lecture
│   │   ├── execute.c
│   │   ├── execute.h
│   │   ├── Makefile.am
│   │   ├── print_error.c
│   │   └── print_error.h
│   ├── lexer
│   │   ├── lexer.c
│   │   ├── lexer.h
│   │   ├── Makefile.am
│   │   └── token.h
│   ├── main.c
│   ├── Makefile.am
│   ├── parser
│   │   ├── ast.c
│   │   ├── ast.h
│   │   ├── Makefile.am
│   │   ├── parser.c
│   │   └── parser.h
│   ├── redirection
│   │   ├── Makefile.am
│   │   ├── redirection.c
│   │   └── redirection.h
│   └── variables
│       ├── Makefile.am
│       ├── variables.c
│       └── variables.h
└── tests
    ├── cat_file.txt
    ├── functionnal_tests.sh
    ├── Makefile.am
    ├── script.sh
    ├── testsuite.sh
    └── unit_tests.c</code></pre>
    <p><strong>Projet de 4 semaines</strong> en équipe de 4, visant à recréer un shell UNIX fonctionnel conforme aux standards POSIX.</p> \
<p>Fonctionnalités développées :</p> \
<ul> \
  <li>Exécution de commandes simples et composées</li> \
  <li>Gestion des redirections, pipelines et opérateurs (<code>&amp;&amp;</code>, <code>||</code>, <code>!</code>)</li> \
  <li>Structures de contrôle : <code>if</code>, <code>while</code>, <code>until</code>, <code>for</code>, <code>case</code></li> \
  <li>Variables d’environnement et substitutions de commandes</li> \
  <li>Implémentation de commandes internes (<em>builtins</em>) comme <code>cd</code>, <code>echo</code>, <code>export</code>, <code>unset</code></li> \
  <li>Support des blocs, fonctions et sous-shells</li> \
  <li>Aliases et gestion avancée des champs (<em>field splitting</em>)</li> \
</ul> \
<p>Outils et méthodes :</p> \
<ul> \
  <li>Compilation avec <strong>GNU Autotools</strong></li> \
  <li>Tests unitaires et fonctionnels via une <strong>testsuite dédiée</strong></li> \
  <li>Respect des contraintes mémoire et conformité POSIX</li> \
</ul>
<b>Compilation</b>
<pre><code>autoreconf --install
./configure
make</code></pre>

<b>Utilisation</b><br/>
Le shell 42sh peut lire un programme Shell de trois manières :
<ul>
  <li>Lecture d’une chaîne de caractères passée avec <code>-c</code> :
  <pre><code>42sh$ ./42sh -c "echo Entrée en chaîne"
Entrée en chaîne</code></pre></li>

  <li>Lecture à partir d’un fichier donné directement en argument :
  <pre><code>42sh$ cat -e script.sh
echo Entrée depuis un fichier$
42sh$ ./42sh script.sh
Entrée depuis un fichier</code></pre></li>

  <li>Lecture depuis l’entrée standard lorsqu’aucune autre source n’est fournie :
  <pre><code>42sh$ cat -e script.sh
echo Entrée depuis stdin$
42sh$ ./42sh < script.sh
Entrée depuis stdin
42sh$ cat script.sh | ./42sh
Entrée depuis stdin</code></pre></li>
</ul>

<b>Exécution de la suite de tests</b>
<pre><code>42sh$ BIN_PATH="$(pwd)/bin/42sh" COVERAGE="yes" make check
42sh$ BIN_PATH="$(pwd)/bin/42sh" OUTPUT_FILE="$(pwd)/out" make check</code></pre>
    `
    },
  technologies: ["C", "POSIX", "GNU Autotools", "UNIX"]
  },
{
  id: 3,
  title: {
    en: "Tiger Compiler",
    fr: "Tiger Compiler"
  },
  description: {
    fr: `<p><strong>Projet majeur sur plusieurs mois</strong> visant à construire un compilateur complet pour le langage <em>Tiger</em>, utilisé comme support pédagogique à l’EPITA.</p>
    <p>Le compilateur est réalisé en <strong>C++</strong> et suit une architecture modulaire permettant de couvrir toutes les étapes d’une chaîne de compilation :</p>
    <ul>
      <li><strong>Analyse lexicale</strong> avec Flex (découpage en tokens).</li>
      <li><strong>Analyse syntaxique</strong> avec Bison (construction de l’arbre de syntaxe).</li>
      <li><strong>Construction de l’AST</strong> typé et hiérarchisé.</li>
      <li><strong>Dessucrage</strong> (transformation du sucre syntaxique en structures de base).</li>
      <li><strong>Analyse sémantique</strong> : gestion des portées, vérification des identificateurs et préparation à l’inférence de types.</li>
    </ul>
    <p>Ce projet va bien au-delà de la théorie : il inclut <strong>la gestion de projet, les tests automatisés, la documentation et les bonnes pratiques d’ingénierie logicielle</strong>.</p>`,
    en: `<p><strong>Long-term capstone project</strong> at EPITA to build a full compiler for the <em>Tiger</em> programming language, used as a pedagogical tool.</p><p>The compiler is developed in <strong>C++</strong> and follows a modular pipeline covering all stages of a modern compiler:</p>
    <ul>
      <li><strong>Lexical analysis</strong> using Flex (token stream generation).</li>
      <li><strong>Syntax analysis</strong> with Bison (parse tree construction).</li>
      <li><strong>AST construction</strong> with hierarchical typed nodes.</li>
      <li><strong>Desugaring</strong>: transforming syntactic sugar into core constructs.</li>
      <li><strong>Semantic analysis</strong>: scope management, identifier resolution, and preparation for type inference.</li>
    </ul>
    <p>The project also emphasizes <strong>software engineering practices</strong>: automated testing, documentation, refactoring, and version control.</p>`
  },
  technologies: ["C++", "Flex", "Bison", "Autoconf", "AST", "Compiler Design"]
},
{
  id: 4,
  title: {
    en: "E/place – Collaborative Pixel Canvas",
    fr: "E/place – Canevas collaboratif de pixels"
  },
  description: {
    en: `<p><strong>E/place</strong> is a web development project inspired by Reddit’s <em>r/place</em>. The goal is to build a collaborative pixel canvas client where users can join a shared room, fetch its configuration, and display the canvas in real time. Communication with the server relies on <strong>WebSockets (Socket.io)</strong> for live updates and <strong>REST APIs</strong> for configuration and canvas data.</p>
    <p>The project is divided into steps:</p>
      <ul>
        <li><strong>Step 1 (Roe)</strong>:
          <ul>
            <li>Join a room (default: epi-place).</li>
            <li>Subscribe to the room’s stream and listen for pixel updates.</li>
            <li>Fetch the room’s configuration and canvas, decode the pixel data, and render it.</li>
          </ul>
        </li>
        <li><strong>Step 2 (Fry)</strong>:
          <ul>
            <li>Implement authentication with JWT and OIDC (Forge ID).</li>
            <li>Manage tokens, handle refresh flows, and secure API/WebSocket communications.</li>
          </ul>
        </li>
        <li><strong>Step 3 (Leela)</strong>:
          <ul>
            <li>Add interactivity to the canvas: users can select a pixel, choose a color, and send pixel updates to the server.</li>
            <li>Handle server acknowledgments to confirm updates.</li>
            <li>Ensure the client correctly synchronizes with the shared canvas when multiple users update simultaneously.</li>
          </ul>
        </li>
      </ul>
    <p>This project combines <strong>frontend engineering</strong> (Vite, JavaScript, ES6 modules), <strong>real-time networking</strong>, and <strong>authentication mechanisms</strong> to recreate the collaborative experience of r/place.</p>`,
    fr: `<p><strong>E/place</strong> est un projet de développement web inspiré de l’expérience <em>r/place</em> de Reddit. L’objectif est de créer un client de canevas collaboratif où les utilisateurs rejoignent une salle partagée, récupèrent sa configuration et affichent le canevas en temps réel. La communication avec le serveur se fait via <strong>WebSockets (Socket.io)</strong> pour les mises à jour en direct et via une <strong>API REST</strong> pour la configuration et les données du canevas.</p>
    <p>Le projet se découpe en étapes :</p>
      <ul>
        <li><strong>Étape 1 (Roe)</strong> :
          <ul>
            <li>Rejoindre une salle (par défaut : epi-place).</li>
            <li>S’abonner au flux de la salle et écouter les mises à jour de pixels.</li>
            <li>Récupérer la configuration et le canevas, décoder les données de pixels et les afficher.</li>
          </ul>
        </li>
        <li><strong>Étape 2 (Fry)</strong> :
          <ul><li>Implémenter l’authentification avec JWT et OIDC (Forge ID).</li>
            <li>Gérer les tokens, le rafraîchissement et sécuriser les communications API/WebSocket.</li>
          </ul></li><li><strong>Étape 3 (Leela)</strong> :
          <ul>
            <li>Ajouter l’interactivité au canevas : l’utilisateur peut sélectionner un pixel, choisir une couleur et envoyer les mises à jour au serveur.</li>
            <li>Traiter les accusés de réception du serveur pour confirmer les mises à jour.</li>
            <li>Garantir la bonne synchronisation du canevas partagé lorsque plusieurs utilisateurs modifient en même temps.</li>
          </ul>
        </li>
      </ul>
    <p>Ce projet combine <strong>ingénierie frontend</strong> (Vite, JavaScript, modules ES6), <strong>communication en temps réel</strong> et <strong>mécanismes d’authentification</strong> afin de recréer l’expérience collaborative de r/place.</p>`
  },
  technologies: [
    "JavaScript (ES6)",
    "Vite",
    "Socket.io",
    "REST API",
    "JWT",
    "OIDC",
    "Docker",
    "Node.js"
  ]
},
{
  id: 5,
  title: {
    en: "EpiBazaar – Resource Management Backend",
    fr: "EpiBazaar – Backend de gestion de ressources"
  },
  description: {
    en: `<p><strong>EpiBazaar</strong> is a backend development project simulating a resource management game. The player explores a grid-based map to collect resources, which are centralized in an <em>Inventory</em>. These resources can then be sold in a <em>Shop</em> to earn money and purchase upgrades for improved abilities or shop functionalities.</p>
    <p>The project’s main objective is to design and implement a <strong>layered backend architecture</strong> with three independent microservices:</p>
      <ul>
        <li><strong>Item Producer</strong>: handles player movement, resource collection, and upgrades (collect rate, movement speed, stamina).</li>
        <li><strong>Shop</strong>: manages shops, selling items, and upgrading shop prices.</li>
        <li><strong>Inventory</strong>: acts as the <em>source of truth</em>, ensuring data consistency across services.</li>
      </ul>
      <p>Communication between services is done asynchronously via <strong>Kafka</strong>, while <strong>REST APIs</strong> (documented with Swagger) expose endpoints to the client.</p>
      <p>Core technical requirements:</p>
      <ul>
        <li><strong>Frameworks</strong>: Quarkus for backend services, Hibernate for ORM, Kafka for inter-service messaging.</li>
        <li><strong>Architecture</strong>: layered pattern with Presentation (DTOs + Controllers), Business (Services + Entities), Data (Repositories + Models), and Converters.</li>
        <li><strong>Persistence</strong>: PostgreSQL databases for each microservice, synchronized through Kafka commands and aggregates.</li>
        <li><strong>Good practices</strong>: dependency injection, DTO separation, error handling, and environment variables for gameplay parameters.</li>
      </ul>
      <p>Ultimately, EpiBazaar combines <strong>modern backend engineering</strong>, <strong>microservices design</strong>, and <strong>real-time asynchronous communication</strong> to provide a scalable and maintainable game backend.</p>`,
    fr: `<p><strong>EpiBazaar</strong> est un projet de développement backend simulant un jeu de gestion de ressources. Le joueur explore une carte en grille pour collecter des ressources, qui sont centralisées dans un <em>Inventaire</em>. Ces ressources peuvent ensuite être revendues dans une <em>Boutique</em> afin de gagner de l’argent et d’acheter des améliorations pour les capacités du joueur ou pour la boutique.</p>
    <p>L’objectif principal est de concevoir et implémenter une <strong>architecture backend en couches</strong> organisée en trois microservices indépendants :</p>
    <ul>
      <li><strong>Item Producer</strong> : gère les déplacements du joueur, la collecte des ressources et les améliorations (taux de collecte, vitesse de déplacement, endurance).</li>
      <li><strong>Shop</strong> : gère la création de boutiques, la vente d’objets et l’amélioration des prix.</li><li><strong>Inventory</strong> : joue le rôle de <em>source de vérité</em>, garantissant la cohérence des données entre les services.</li>
    </ul>
    <p>La communication entre services est réalisée de manière asynchrone via <strong>Kafka</strong>, tandis que les <strong>APIs REST</strong> (documentées avec Swagger) exposent les points d’accès au client.</p>
    <p>Points techniques essentiels :</p>
    <ul>
      <li><strong>Frameworks</strong> : Quarkus pour les services backend, Hibernate pour l’ORM, Kafka pour la messagerie inter-services.</li>
      <li><strong>Architecture</strong> : modèle en couches avec Présentation (DTOs + Contrôleurs), Métier (Services + Entités), Données (Repositories + Modèles) et Convertisseurs.</li>
      <li><strong>Persistance</strong> : bases de données PostgreSQL par microservice, synchronisées via des commandes et agrégats Kafka.</li>
      <li><strong>Bonnes pratiques</strong> : injection de dépendances, séparation des DTOs, gestion des erreurs et variables d’environnement pour paramétrer le gameplay.</li>
    </ul>
    <p>En résumé, EpiBazaar combine <strong>ingénierie backend moderne</strong>, <strong>conception microservices</strong> et <strong>communication asynchrone temps réel</strong> pour proposer une architecture de jeu robuste et maintenable.</p>`
  },
  technologies: [
    "Java",
    "Quarkus",
    "Hibernate",
    "Kafka",
    "PostgreSQL",
    "Maven",
    "Docker/Podman",
    "Swagger (OpenAPI)"
  ]
},
{
  id: 6,
  title: {
    en: "libzork – Interactive Story Engine",
    fr: "libzork – Moteur d’histoires interactives"
  },
  description: {
    en: `<p><strong>libzork</strong> is a C++ project aimed at building a dynamic library for <em>branching story</em> games, where the reader makes decisions that shape the story. The goal is to design a modular and extensible engine capable of running interactive stories defined in YAML and text scripts.</p>
    <p>The project is divided into several parts:</p>
    <ul>
      <li><strong>Story representation</strong>: stories are defined as directed graphs with nodes (text) and arcs (choices), loaded from a YAML specification and associated scripts.</li>
      <li><strong>Core implementation</strong>: classes for <em>Node</em>, <em>Story</em> and <em>Store</em>, with support for parsing, navigating, and displaying the graph structure.</li>
      <li><strong>Runners</strong>: multiple execution modes to play stories:
        <ul>
          <li><em>Choice Runner</em>: numbered list of possible choices.</li>
          <li><em>Smart Runner</em>: natural language matching between player input and choices (with synonyms).</li>
          <li><em>HTML Runner</em>: generates static HTML files to play the story in a web browser.</li>
        </ul>
      </li>
      <li><strong>Dynamic variables</strong>: conditions and actions allow branching depending on player state (health, inventory, XP, etc.). Variables are updated dynamically and can unlock or block choices.</li>
      <li><strong>Advanced features</strong>: built-in commands (.undo, .redo, .save, .restore, .inventory), supporting state rollback and persistence.</li>
    </ul>
    <p>Through this project, students practice <strong>modern C++</strong>, memory safety with <em>std::unique_ptr</em>, design patterns (factory, PImpl idiom), and modular build systems with <strong>CMake</strong>. It emphasizes object-oriented design, error handling, and extensibility in interactive systems.</p>`,
    fr: `<p><strong>libzork</strong> est un projet en C++ dont l’objectif est de développer une bibliothèque dynamique pour des jeux d’histoires interactives de type <em>branching story</em>, où le lecteur prend des décisions qui influencent le déroulement du récit. L’objectif est de concevoir un moteur modulaire et extensible capable d’exécuter des histoires définies en YAML et en scripts texte.</p>
    <p>Le projet se décompose en plusieurs parties :</p>
    <ul>
      <li><strong>Représentation de l’histoire</strong> : les histoires sont décrites sous forme de graphes dirigés avec des nœuds (texte) et des arcs (choix), chargés depuis un fichier YAML et des scripts associés.</li>
      <li><strong>Implémentation du cœur</strong> : classes pour <em>Node</em>, <em>Story</em> et <em>Store</em>, permettant l’analyse, la navigation et l’affichage de la structure de l’histoire.</li>
      <li><strong>Runners</strong> : différents modes d’exécution pour jouer les histoires :
        <ul>
          <li><em>Choice Runner</em> : affichage numéroté des choix possibles.</li>
          <li><em>Smart Runner</em> : correspondance en langage naturel entre les choix du joueur et les options (via un dictionnaire de synonymes).</li>
          <li><em>HTML Runner</em> : génération de pages HTML statiques pour jouer dans un navigateur web.</li>
        </ul>
      </li>
      <li><strong>Variables dynamiques</strong> : conditions et actions permettent de faire évoluer l’histoire selon l’état du joueur (santé, inventaire, XP…). Les variables sont mises à jour et influencent l’accessibilité des choix.</li>
      <li><strong>Fonctionnalités avancées</strong> : commandes intégrées (.undo, .redo, .save, .restore, .inventory), permettant de gérer l’historique et de sauvegarder/restaurer la progression.</li>
    </ul>
    <p>Ce projet met en pratique le <strong>C++ moderne</strong>, la gestion mémoire sécurisée avec <em>std::unique_ptr</em>, des patrons de conception (factory, PImpl), ainsi qu’une organisation modulaire avec <strong>CMake</strong>. Il développe des compétences en conception orientée objet, robustesse et extensibilité d’un moteur interactif.</p>`
  },
  technologies: [
    "C++",
    "CMake",
    "YAML",
    "Graph theory"
  ]
}
];

// === Modal Management ===
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".project-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const projectId = parseInt(btn.dataset.project, 10);
    const project = projectsData.find(p => p.id === projectId);
    const techContainer = document.getElementById("modalTechnologies");

    if (project) {
      modalTitle.textContent = project.title[currentLang];
      modalDescription.innerHTML = project.description[currentLang];

      // Display modal
      document.body.classList.add("no-scroll");
      modal.style.display = "flex";

      // Add technologies
      techContainer.innerHTML = "";
      project.technologies.forEach(tech => {
        const span = document.createElement("span");
        span.classList.add("tech-badge");
        span.textContent = tech;
        techContainer.appendChild(span);
      });
    }
  });
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
});

// Close modal on outside click
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});

// Close modal on Escape key
window.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});
