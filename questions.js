const questionsBySubject = {
      "IDE": [
    {
      "id": 1,
      "type": "IDE",
      "title": "Qu'est-ce qu'un environnement de développement intégré (IDE) ?",
      "choices": [
        "Plugin de navigateur",
        "Logiciel combinant éditeur de code, compilateur, débogueur et outils de gestion de projet",
        "Suite bureautique",
        "Outil de gestion de versions"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Un IDE fournit un éditeur de code, un compilateur/interpréteur, un débogueur et des outils de gestion de projet intégrés.</p>"
    },
    {
      "id": 2,
      "type": "IDE",
      "title": "Quel IDE JetBrains est principalement utilisé pour le développement Python ?",
      "choices": [
        "WebStorm",
        "PyCharm",
        "PHPStorm",
        "IntelliJ IDEA"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>PyCharm est l'IDE JetBrains dédié au développement Python, avec des outils de débogage et de test intégrés.</p>"
    },
    {
      "id": 3,
      "type": "IDE",
      "title": "Quel IDE open-source est extensible via des plugins et principalement utilisé pour le développement Java ?",
      "choices": [
        "Visual Studio Code",
        "Eclipse",
        "Atom",
        "NetBeans"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Eclipse est un IDE open-source principalement utilisé pour Java et extensible à d'autres langages via des plugins.</p>"
    },
    {
      "id": 4,
      "type": "IDE",
      "title": "Laquelle de ces fonctionnalités permet d'écrire du code plus rapidement en suggérant des complétions automatiquement ?",
      "choices": [
        "Débogage intégré",
        "Contrôle de version",
        "Complétion de code",
        "Code splitting"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La complétion de code aide à écrire du code plus rapidement en proposant des suggestions basées sur le contexte.</p>"
    },
    {
      "id": 5,
      "type": "IDE",
      "title": "Laquelle de ces extensions pour Visual Studio Code sert à formater automatiquement le code ?",
      "choices": [
        "GitLens",
        "ESLint",
        "Live Server",
        "Prettier"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Prettier est un formateur de code assurant une mise en forme cohérente et automatique.</p>"
    },
    {
      "id": 6,
      "type": "IDE",
      "title": "Qu'est-ce qu'Emmet ?",
      "choices": [
        "Un IDE JetBrains",
        "Un gestionnaire de paquets",
        "Un outil de productivité pour générer du code HTML et CSS via une syntaxe abrégée",
        "Un plugin de navigateur"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Emmet permet d'écrire rapidement du code HTML et CSS grâce à une syntaxe abrégée et des snippets.</p>"
    },
    {
      "id": 7,
      "type": "IDE",
      "title": "Quel est le rôle d'un gestionnaire de paquets ?",
      "choices": [
        "Est un débogueur",
        "Permet de formater le code",
        "Sert de serveur de développement",
        "Automatise l'installation, la mise à jour et la gestion des dépendances d'un projet"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Un gestionnaire de paquets automatise l'installation, la mise à jour et la gestion des dépendances d'un projet.</p>"
    },
    {
      "id": 8,
      "type": "IDE",
      "title": "Lequel de ces outils est un gestionnaire de paquets pour PHP ?",
      "choices": [
        "Yarn",
        "Webpack",
        "Composer",
        "npm"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Composer est le gestionnaire de paquets standard pour les projets PHP.</p>"
    },
    {
      "id": 9,
      "type": "IDE",
      "title": "Qu'est-ce qu'un outil de gestion de tâches dans le développement web ?",
      "choices": [
        "Un gestionnaire de paquets",
        "Un plugin pour IDE",
        "Un logiciel qui automatise les tâches répétitives comme la compilation, la minification et le bundling",
        "Un type d'IDE"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un tel outil automatise les étapes répétitives (compilation, minification, bundling) pour améliorer la productivité.</p>"
    },
    {
      "id": 10,
      "type": "IDE",
      "title": "Qu'est-ce que Webpack ?",
      "choices": [
        "Un task runner comme Gulp",
        "Un module bundler open-source pour JavaScript qui regroupe les ressources d'une application",
        "Un plugin Visual Studio Code",
        "Un gestionnaire de paquets pour PHP"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Webpack est un module bundler qui crée un graphique de dépendances pour regrouper JS, CSS, images et HTML.</p>"
    },
    {
      "id": 11,
      "type": "IDE",
      "title": "Qu'est-ce que Gulp ?",
      "choices": [
        "Un bundler JavaScript",
        "Un IDE",
        "Un outil d'automatisation des tâches de construction basé sur Node.js",
        "Un gestionnaire de paquets"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Gulp est un task runner Node.js qui utilise des pipelines pour automatiser les workflows de construction web.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "ENV": [
    {
      "id": 1,
      "type": "ENV",
      "title": "Où configure-t-on les variables d'environnement sous Windows ?",
      "choices": [
        "~/.bash_profile",
        "Panneau de configuration > Système > Paramètres système avancés > Variables d'environnement",
        "Éditeur de code",
        "Paramètres de mise à jour"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Sur Windows, les variables d'environnement se gèrent via le Panneau de configuration → Système → Paramètres système avancés → Variables d'environnement.</p>"
    },
    {
      "id": 2,
      "type": "ENV",
      "title": "Quel fichier édite-t-on principalement sous macOS/Linux pour définir des variables d'environnement pour Bash ?",
      "choices": [
        "/var/log/syslog",
        "~/.bashrc",
        "/etc/environment",
        "~/.bash_profile"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Sur macOS et la plupart des distributions Linux utilisant Bash, on ajoute des exportations comme <code>export VARIABLE_NAME=value</code> dans <code>~/.bash_profile</code> (ou <code>~/.bashrc</code> selon la configuration).</p>"
    },
    {
      "id": 3,
      "type": "ENV",
      "title": "Qu'est-ce qu'un serveur web local ?",
      "choices": [
        "Client HTTP",
        "Éditeur de code",
        "Logiciel simulant un serveur web sur la machine",
        "Navigateur"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un serveur web local est un logiciel qui simule un serveur HTTP sur votre propre machine pour tester et déboguer des applications web avant déploiement.</p>"
    },
    {
      "id": 4,
      "type": "ENV",
      "title": "Quelle extension pour Visual Studio Code permet de lancer rapidement un serveur web local avec rechargement automatique ?",
      "choices": [
        "Live Server",
        "MAMP",
        "XAMPP",
        "WAMP"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>L'extension <strong>Live Server</strong> pour VS Code crée un serveur local léger avec rechargement automatique pour le développement front-end.</p>"
    },
    {
      "id": 5,
      "type": "ENV",
      "title": "Lequel des outils suivants N’EST PAS un pack « tout-en-un » pour serveur local mentionné ?",
      "choices": [
        "MAMP",
        "Live Server",
        "WAMP",
        "XAMPP"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Live Server est une simple extension VS Code, alors que XAMPP, WAMP et MAMP fournissent un ensemble complet (Apache, PHP, MySQL, etc.).</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "Versioning": [
    {
      "id": 1,
      "type": "Versioning",
      "title": "Qu'est-ce qu'un logiciel de versioning ?",
      "choices": [
        "Plateforme de déploiement continu",
        "Outil pour suivre et gérer les modifications de fichiers",
        "Service d'hébergement de code en ligne",
        "La gestion des tâches en équipe"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Un logiciel de versioning permet de suivre, gérer et enregistrer les modifications apportées à un ensemble de fichiers au fil du temps, en gardant un historique clair.</p>"
    },
    {
      "id": 2,
      "type": "Versioning",
      "title": "Pourquoi un logiciel de versioning est-il important ?",
      "choices": [
        "Pour faciliter la collaboration et revenir à des versions antérieures",
        "Pour créer des interfaces graphiques",
        "Pour augmenter la vitesse du processeur",
        "Pour effectuer l'analyse de données"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Le versioning facilite la collaboration entre développeurs et permet de revenir facilement à une version antérieure pour corriger des erreurs.</p>"
    },
    {
      "id": 3,
      "type": "Versioning",
      "title": "Comment installer Git sur votre système ?",
      "choices": [
        "En configurant user.name et user.email",
        "En exécutant git init dans le terminal",
        "En créant un fichier .gitignore",
        "En téléchargeant depuis git-scm.com et suivant les instructions"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Pour installer Git, il faut télécharger la dernière version depuis git-scm.com et suivre les instructions propres à votre OS.</p>"
    },
    {
      "id": 4,
      "type": "Versioning",
      "title": "Quelle commande permet de vérifier l'installation de Git ?",
      "choices": [
        "git clone",
        "git status",
        "git --check",
        "git --version"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La commande <code>git --version</code> affiche la version installée de Git pour vérifier que l'installation a réussi.</p>"
    },
    {
      "id": 5,
      "type": "Versioning",
      "title": "Comment configurer votre nom d'utilisateur et e-mail dans Git ?",
      "choices": [
        "git init",
        "git clone",
        "git config --global user.name et git config --global user.email",
        "git commit --amend"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Les commandes <code>git config --global user.name \"Votre Nom\"</code> et <code>git config --global user.email \"votre_email@example.com\"</code> définissent vos informations personnelles.</p>"
    },
    {
      "id": 6,
      "type": "Versioning",
      "title": "Quel avantage principal est offert par les branches dans Git ?",
      "choices": [
        "Générer automatiquement des rapports",
        "Augmenter la taille des fichiers",
        "Permettre de travailler sur des fonctionnalités isolées sans affecter le code principal",
        "Accélérer la vitesse du réseau"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Les branches permettent de développer de nouvelles fonctionnalités ou corrections de bugs de façon isolée, sans impacter la branche principale.</p>"
    },
    {
      "id": 7,
      "type": "Versioning",
      "title": "Quelle est la différence principale entre Git, GitHub et GitLab ?",
      "choices": [
        "GitLab ne supporte pas CI/CD",
        "Git est un Outil de Contrôle de Version, GitHub et GitLab sont des plateformes d'hébergement",
        "Git est uniquement en ligne, GitHub est local",
        "GitHub est un langage de programmation, GitLab est un éditeur de code"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Git est un système de contrôle de version distribué ; GitHub et GitLab sont des services en ligne pour héberger et gérer des dépôts Git.</p>"
    },
    {
      "id": 8,
      "type": "Versioning",
      "title": "Comment cloner un dépôt Git existant ?",
      "choices": [
        "git pull origin main",
        "git branch -m",
        "git init",
        "git clone https://url_du_depot.git"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La commande <code>git clone https://url_du_depot.git</code> permet de récupérer une copie complète du dépôt localement.</p>"
    },
    {
      "id": 9,
      "type": "Versioning",
      "title": "Quelle suite d'étapes décrit la résolution d'un conflit de fusion dans Git ?",
      "choices": [
        "git init, git add, git commit",
        "git clone, git pull, git push",
        "git checkout, git merge, git reset",
        "Détecter avec git status, modifier les fichiers en conflit, git add, git commit"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Pour résoudre un conflit : repérer les fichiers en conflit (<code>git status</code>), éditer et corriger, puis <code>git add</code> et <code>git commit</code>.</p>"
    },
    {
      "id": 10,
      "type": "Versioning",
      "title": "Qu'est-ce qu'un fichier .gitignore et à quoi sert-il ?",
      "choices": [
        "Configuration des hooks Git",
        "Fichier listant les fichiers à ignorer par Git pour ne pas les suivre",
        "Script de déploiement continu",
        "Fichier contenant les commits en attente"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Un fichier <code>.gitignore</code> indique à Git les fichiers ou dossiers qu'il ne doit pas suivre ni inclure dans le suivi de version.</p>"
    },
    {
      "id": 11,
      "type": "Versioning",
      "title": "Comment créer un fichier .gitignore ?",
      "choices": [
        "Ajouter .gitignore via git config",
        "Faire git exclude list",
        "Créer un fichier nommé .gitignore à la racine du dépôt et y ajouter les fichiers à ignorer",
        "Exécuter git ignore init"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Il suffit de créer manuellement un fichier <code>.gitignore</code> à la racine du dépôt, puis d'y lister les fichiers et répertoires à ignorer.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "Maquettes": [
    {
      "id": 1,
      "type": "Maquettes",
      "title": "Qu'est-ce que l'expérience utilisateur (UX) ?",
      "choices": [
        "Apparence visuelle et éléments graphiques",
        "Déploiement et mise en production",
        "Analyse des besoins et parcours utilisateur",
        "Gestion de projet"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>L'UX Design vise à étudier et optimiser l'expérience globale de l'utilisateur en comprenant ses besoins, son comportement, son parcours et sa satisfaction.</p>"
    },
    {
      "id": 2,
      "type": "Maquettes",
      "title": "Laquelle caractérise le mieux la différence entre UX et UI ?",
      "choices": [
        "L'UI structure la navigation et l'ergonomie",
        "L'UX optimise la satisfaction utilisateur tandis que l'UI gère l'apparence visuelle",
        "L'UI analyse les besoins et comportements des utilisateurs",
        "L'UX crée les éléments graphiques et interactifs"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'UX se concentre sur le fonctionnement global et la satisfaction de l'utilisateur, alors que l'UI s'attache à l'aspect graphique et interactif de l'interface.</p>"
    },
    {
      "id": 3,
      "type": "Maquettes",
      "title": "Quelle est la première étape pour créer une maquette ?",
      "choices": [
        "Créer des wireframes et établir la structure de base",
        "Itérer sur le design après retours",
        "Clarifier le but et les objectifs du projet",
        "Comprendre le public cible et les tendances du marché"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La clarification des objectifs et du périmètre du projet permet d'aligner le design sur les besoins réels avant toute conception visuelle.</p>"
    },
    {
      "id": 4,
      "type": "Maquettes",
      "title": "Quel outil est particulièrement adapté pour réaliser rapidement des wireframes simples ?",
      "choices": [
        "Adobe XD",
        "Sketch",
        "Balsamiq",
        "Figma"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Balsamiq est spécialement conçu pour produire des wireframes basse fidélité de manière très rapide et sans distractions graphiques.</p>"
    },
    {
      "id": 5,
      "type": "Maquettes",
      "title": "Dans un schéma de flux utilisateur, quel symbole est utilisé pour représenter une décision ?",
      "choices": [
        "Flèche",
        "Losange",
        "Rectangle",
        "Cercle"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le losange est le symbole standard pour indiquer un point de décision, avec plusieurs chemins en sortie selon la réponse.</p>"
    },
    {
      "id": 6,
      "type": "Maquettes",
      "title": "Quel format structurel est recommandé pour rédiger des critères d'acceptation ?",
      "choices": [
        "Objectif–Moyens–Résultat",
        "Input–Process–Output",
        "GIVEN–WHEN–THEN",
        "Start–Stop–Continue"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le format GIVEN–WHEN–THEN permet de décrire clairement les conditions initiales, l'action et le résultat attendu pour chaque critère, rendant les tests plus simples.</p>"
    },
    {
      "id": 7,
      "type": "Maquettes",
      "title": "Parmi les éléments suivants, qu'il faut éviter dans un cahier des charges fonctionnel ?",
      "choices": [
        "Décrire des fonctionnalités attendues en termes mesurables",
        "Hiérarchiser les fonctions (principales, secondaires)",
        "Mentionner des solutions techniques spécifiques",
        "Inclure les contraintes budgétaires"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un cahier des charges fonctionnel doit rester indépendant des choix techniques pour laisser la liberté à l'équipe de trouver la meilleure solution.</p>"
    },
    {
      "id": 8,
      "type": "Maquettes",
      "title": "Quelle caractéristique distingue principalement un prototype d'une maquette ?",
      "choices": [
        "Coût généralement moindre",
        "Stade de développement plus précoce",
        "Interactivité complète et haute fidélité",
        "Basse fidélité et statique"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le prototype se caractérise par son interactivité et sa haute fidélité, permettant des tests d'utilisabilité avancés.</p>"
    },
    {
      "id": 9,
      "type": "Maquettes",
      "title": "Quel outil de design vectoriel est spécifiquement réservé aux utilisateurs Mac ?",
      "choices": [
        "Adobe XD",
        "Sketch",
        "Figma",
        "Balsamiq"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Sketch est un logiciel de design vectoriel disponible uniquement sur macOS, très répandu pour la conception d'interfaces.</p>"
    },
    {
      "id": 10,
      "type": "Maquettes",
      "title": "Lequel n'est PAS une étape recommandée pour créer un schéma de flux utilisateur ?",
      "choices": [
        "Ajouter des flèches pour indiquer la direction du flux",
        "Définir des couleurs et typographies pour chaque étape",
        "Valider le flux avec les parties prenantes",
        "Simplifier le schéma pour une meilleure lisibilité"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le choix des couleurs et typographies relève de l'UI Design, pas du schéma de flux purement fonctionnel.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "HTML": [
    {
      "id": 1,
      "type": "HTML",
      "title": "Qu'est-ce que HTML ?",
      "choices": [
        "Suite bureautique",
        "Protocole de communication",
        "Langage de balisage",
        "Langage compilé"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>HTML (HyperText Markup Language) est le langage standard de balisage utilisé pour structurer le contenu sur le web.</p>"
    },
    {
      "id": 2,
      "type": "HTML",
      "title": "Quelle est la différence principale entre HTML et XHTML ?",
      "choices": [
        "XHTML est basé sur XML et plus strict",
        "HTML nécessite de fermer toutes les balises",
        "XHTML est la version 5 de HTML",
        "XHTML est plus permissif que HTML"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>XHTML est une reformulation de HTML 4.01 en XML, ce qui impose une syntaxe plus rigoureuse (fermeture des balises, minuscules, etc.).</p>"
    },
    {
      "id": 3,
      "type": "HTML",
      "title": "Quelle version de HTML a introduit les formulaires et les tables en 1995 ?",
      "choices": [
        "HTML5",
        "HTML 3.2",
        "HTML 4.01",
        "HTML 2.0"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>HTML 2.0, publié en 1995, a été la première version standardisée et a introduit les formulaires et les tables.</p>"
    },
    {
      "id": 4,
      "type": "HTML",
      "title": "Quelle version de HTML a ajouté la prise en charge des feuilles de style, des scripts et des applets ?",
      "choices": [
        "HTML 4.01",
        "HTML5",
        "HTML 3.2",
        "XHTML 1.0"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>HTML 3.2, publié en 1997, a ajouté le support des feuilles de style, des scripts et des applets Java.</p>"
    },
    {
      "id": 5,
      "type": "HTML",
      "title": "Quelle version de HTML améliore l'accessibilité, l'internationalisation et la séparation du contenu et de la présentation ?",
      "choices": [
        "HTML 4.01",
        "HTML5",
        "HTML 3.2",
        "HTML 2.0"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>HTML 4.01, publié en 1999, a mis l'accent sur l'accessibilité et la séparation stricte du contenu (HTML) et de la présentation (CSS).</p>"
    },
    {
      "id": 6,
      "type": "HTML",
      "title": "Quel langage reformule HTML 4.01 en XML avec une syntaxe plus stricte ?",
      "choices": [
        "HTML5",
        "XML 1.1",
        "HTML 3.2",
        "XHTML 1.0"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>XHTML 1.0, publié en 2000, est la version XML de HTML 4.01, appliquant des règles de syntaxe plus rigoureuses.</p>"
    },
    {
      "id": 7,
      "type": "HTML",
      "title": "Quelle version de HTML, publiée en 2014, introduit des éléments sémantiques, l'audio/vidéo natifs et le canvas ?",
      "choices": [
        "HTML 4.01",
        "HTML5",
        "HTML 3.2",
        "XHTML 1.0"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>HTML5, finalisé en 2014, a introduit des balises sémantiques (&lt;section&gt;, &lt;article&gt;…), le support natif audio/vidéo et le &lt;canvas&gt; pour le dessin.</p>"
    },
    {
      "id": 8,
      "type": "HTML",
      "title": "Qu'est-ce qu'une balise HTML ?",
      "choices": [
        "Un attribut",
        "Un commentaire",
        "Un élément structurant délimité par une balise d'ouverture et une balise de fermeture",
        "Un script JavaScript"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une balise HTML définit un élément de la page et est généralement structurée avec une ouverture (&lt;tag&gt;) et une fermeture (&lt;/tag&gt;).</p>"
    },
    {
      "id": 9,
      "type": "HTML",
      "title": "Comment est structurée une balise HTML avec un attribut ?",
      "choices": [
        "<balise>contenu</balise>",
        "<balise propriete=\"valeur\">contenu</balise>",
        "<balise propriete>contenu</balise>",
        "<balise propriete=\"valeur\"/>"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Une balise avec attribut inclut le nom de l'attribut et sa valeur entre guillemets : &lt;balise propriete=\"valeur\"&gt;contenu&lt;/balise&gt;.</p>"
    },
    {
      "id": 10,
      "type": "HTML",
      "title": "Qu'est-ce qu'un attribut dans une balise HTML ?",
      "choices": [
        "Un commentaire",
        "Une propriété du navigateur",
        "Une information supplémentaire sur l'élément",
        "Un script interne"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un attribut fournit des informations supplémentaires à une balise, par exemple type, id, class, etc.</p>"
    },
    {
      "id": 11,
      "type": "HTML",
      "title": "Quel est le rôle du DOCTYPE en HTML ?",
      "choices": [
        "Déclare l'encodage des caractères",
        "Ajoute des fichiers CSS externes",
        "Permet de commenter le code",
        "Informe le navigateur du type de document et de la version de HTML utilisée"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La déclaration &lt;!DOCTYPE html&gt; informe le navigateur du type de document et de la version de HTML à respecter.</p>"
    },
    {
      "id": 12,
      "type": "HTML",
      "title": "Quelle est la structure de base d'un fichier HTML ?",
      "choices": [
        "head, body, script, style",
        "DOCTYPE, head, html, body",
        "DOCTYPE, html, head, body",
        "html, head, body, footer"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un document HTML commence par le DOCTYPE, puis &lt;html&gt;, &lt;head&gt; (métadonnées) et enfin &lt;body&gt; (contenu visible).</p>"
    },
    {
      "id": 13,
      "type": "HTML",
      "title": "Comment le HTML interagit-il avec le CSS et le JavaScript ?",
      "choices": [
        "Le CSS manipule le DOM",
        "Le HTML structure le contenu, le CSS le met en forme et le JavaScript ajoute de l'interactivité via le DOM",
        "Le JavaScript définit la structure",
        "Le HTML exécute le CSS"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le HTML crée la structure, le CSS gère le style, et le JavaScript agit sur le DOM pour rendre la page interactive.</p>"
    },
    {
      "id": 14,
      "type": "HTML",
      "title": "Comment les métadonnées sont-elles utilisées dans une page HTML ?",
      "choices": [
        "Elles sont affichées dans le body",
        "Elles définissent le style CSS",
        "Elles fournissent des informations aux navigateurs et moteurs de recherche",
        "Elles sont exécutées comme scripts"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Les métadonnées (&lt;meta&gt;) donnent des informations sur la page aux navigateurs et aux moteurs de recherche (SEO, viewport, auteur, etc.).</p>"
    },
    {
      "id": 15,
      "type": "HTML",
      "title": "Qu'est-ce que le HTML sémantique ?",
      "choices": [
        "Ajouter des commentaires",
        "Embarquer CSS inline",
        "Créer des formulaires",
        "Utiliser des balises qui transmettent la signification du contenu"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Le HTML sémantique utilise des balises (&lt;article&gt;, &lt;section&gt;…) qui décrivent le rôle du contenu pour l'accessibilité et le SEO.</p>"
    },
    {
      "id": 16,
      "type": "HTML",
      "title": "Quelle balise est utilisée pour créer des liens en HTML ?",
      "choices": [
        "<link>",
        "<url>",
        "<a>",
        "<href>"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La balise &lt;a href=\"...\"&gt; permet de créer des liens internes ou externes.</p>"
    },
    {
      "id": 17,
      "type": "HTML",
      "title": "Comment utiliser les commentaires dans le code HTML ?",
      "choices": [
        "// Ceci est un commentaire",
        "/* Ceci est un commentaire */",
        "<comment>Ceci est un commentaire</comment>",
        "<!-- Ceci est un commentaire -->"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Les commentaires HTML sont écrits &lt;!-- commentaire --&gt; et ne s'affichent pas dans le navigateur.</p>"
    },
    {
      "id": 18,
      "type": "HTML",
      "title": "Qu'est-ce que l'attribut data-* en HTML ?",
      "choices": [
        "Tag obsolète",
        "Attribut personnalisé pour stocker des données supplémentaires",
        "Attribut standard pour les liens",
        "Attribut qui définit le style"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'attribut data-* permet de stocker des données personnalisées sur un élément pour manipulation via JavaScript.</p>"
    },
    {
      "id": 19,
      "type": "HTML",
      "title": "Comment éviter les erreurs dans l'écriture du code HTML ?",
      "choices": [
        "Éviter le CSS",
        "Ne pas utiliser le DOCTYPE",
        "Valider le code et utiliser correctement les balises fermantes",
        "Utiliser uniquement HTML5"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Valider le code avec le validateur W3C, fermer toutes les balises, vérifier l'orthographe des attributs et éviter les imbriquations incorrectes.</p>"
    },
    {
      "id": 20,
      "type": "HTML",
      "title": "Comment optimiser le chargement des ressources en HTML ?",
      "choices": [
        "Ajouter plus de CSS inline",
        "Utiliser defer/async pour charger les scripts, combiner les fichiers et compresser les images",
        "Charger tous les scripts synchrones",
        "Utiliser des frames"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Pour accélérer le rendu, charger les scripts en asynchrone (defer/async), combiner CSS/JS, et compresser les images (formats modernes comme WebP).</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "CSS": [
    {
      "id": 1,
      "type": "CSS",
      "title": "Qu'est-ce que CSS ?",
      "choices": [
        "Un langage de script pour interagir avec le DOM",
        "Un langage de feuilles de style pour décrire la présentation d'un document HTML",
        "Un protocole de communication client-serveur",
        "Un gestionnaire de dépendances pour les bibliothèques web"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>CSS (Cascading Style Sheets) est un langage de feuilles de style utilisé pour décrire la présentation et la mise en forme des éléments d'un document structuré en HTML.</p>"
    },
    {
      "id": 2,
      "type": "CSS",
      "title": "Qu'est-ce qu'un sélecteur en CSS ?",
      "choices": [
        "Un moyen de sélectionner une portion de texte pour la copier",
        "Un motif pour cibler les éléments HTML à styliser",
        "Un outil de gestion de versions intégré",
        "Une fonction JavaScript pour manipuler le style"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Un sélecteur CSS est un motif qui permet de sélectionner un ou plusieurs éléments HTML afin de leur appliquer des règles de style.</p>"
    },
    {
      "id": 3,
      "type": "CSS",
      "title": "Quelle est la différence principale entre un sélecteur de classe et un sélecteur d'identifiant ?",
      "choices": [
        "Les classes sont plus spécifiques que les identifiants",
        "Les identifiants ciblent un élément unique et ont une priorité plus élevée",
        "Les classes ne peuvent s’appliquer qu’à des balises <div>",
        "Les identifiants nécessitent d’être importés via @import"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Les sélecteurs d'identifiant (#id) ciblent un élément unique et ont une spécificité plus élevée que les sélecteurs de classe (.classe), qui peuvent s’appliquer à plusieurs éléments.</p>"
    },
    {
      "id": 4,
      "type": "CSS",
      "title": "Quelle propriété CSS est utilisée pour changer la couleur du texte ?",
      "choices": [
        "background-color",
        "text-color",
        "color",
        "font-color"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La propriété <code>color</code> est utilisée pour définir la couleur du texte d'un élément HTML.</p>"
    },
    {
      "id": 5,
      "type": "CSS",
      "title": "Dans le modèle de boîte CSS, quelles sont les quatre zones qui composent chaque élément ?",
      "choices": [
        "Contenu, alignement, transformation, espace",
        "Marque, feuille, script, lien",
        "Contenu, marge, bordure, remplissage",
        "Document, section, bloc, inline"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le modèle de boîte CSS se compose des zones : contenu (content), remplissage (padding), bordure (border) et marge (margin).</p>"
    },
    {
      "id": 6,
      "type": "CSS",
      "title": "Quelle option de positionnement CSS retire un élément du flux normal et le positionne par rapport à son ancêtre le plus proche positionné ?",
      "choices": [
        "static",
        "relative",
        "absolute",
        "sticky"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le positionnement « absolute » retire l’élément du flux normal et le positionne par rapport à son parent le plus proche dont la position n’est pas « static ». </p>"
    },
    {
      "id": 7,
      "type": "CSS",
      "title": "Quel module CSS utilise un modèle de disposition unidimensionnel pour organiser les éléments en lignes ou colonnes ?",
      "choices": [
        "CSS Grid",
        "Flexbox",
        "CSS Variables",
        "Preprocesseur Sass"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Flexbox (Flexible Box Layout) est un module CSS unidimensionnel conçu pour disposer les éléments en rangées ou en colonnes, avec un contrôle de l’alignement et de la flexibilité.</p>"
    },
    {
      "id": 8,
      "type": "CSS",
      "title": "Lequel des avantages suivants n’est PAS caractéristique de CSS Grid ?",
      "choices": [
        "Disposition bidimensionnelle en lignes et colonnes",
        "Unités fr (fraction) pour la taille flexible",
        "Positionnement explicite et implicite d’éléments",
        "Contrôle du cache navigateur"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>CSS Grid offre un système bidimensionnel, des unités fr, et le positionnement explicite/implicite, mais ne gère pas le cache du navigateur.</p>"
    },
    {
      "id": 9,
      "type": "CSS",
      "title": "Quelle propriété CSS permet de définir une variable personnalisée ?",
      "choices": [
        "--nom-variable",
        "@variable nom",
        "$nom-variable",
        "var(nom-variable)"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les variables CSS (custom properties) sont déclarées avec la syntaxe --nom-variable : valeur; et utilisées via var(--nom-variable).</p>"
    },
    {
      "id": 10,
      "type": "CSS",
      "title": "Parmi les propositions suivantes, laquelle décrit correctement une pseudo-classe en CSS ?",
      "choices": [
        "Une balise HTML inventée",
        "Un sélecteur d’attribut avancé",
        "Un mot-clé ajoutant un état particulier au sélecteur, comme :hover",
        "Une règle @import spéciale"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une pseudo-classe (comme :hover, :active) permet de cibler un élément dans un état particulier, sans ajouter de nouvelle balise.</p>"
    },
    {
      "id": 11,
      "type": "CSS",
      "title": "Quelle propriété est utilisée pour créer une transition en douceur entre deux états d’un élément ?",
      "choices": [
        "animation-name",
        "transition-duration",
        "transform",
        "display"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La propriété transition-duration (avec transition-property) permet de spécifier la durée de la transition entre états.</p>"
    },
    {
      "id": 12,
      "type": "CSS",
      "title": "Comment la spécificité CSS est-elle calculée pour un sélecteur comprenant un identifiant, une classe et un type d’élément ?",
      "choices": [
        "1 point pour l’ID, 10 pour la classe, 100 pour l’élément",
        "100 pour l’ID, 10 pour la classe, 1 pour l’élément",
        "10 pour l’ID, 1 pour la classe, 100 pour l’élément",
        "1000 pour l’ID, 100 pour la classe, 10 pour l’élément"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La spécificité CSS attribue 100 points pour chaque ID, 10 pour chaque classe/attribut/pseudo-classe, et 1 pour chaque type d’élément ou pseudo-élément.</p>"
    },
    {
      "id": 13,
      "type": "CSS",
      "title": "Quel est l’avantage principal d’un préprocesseur CSS comme Sass ou LESS ?",
      "choices": [
        "Compiler automatiquement en JavaScript",
        "Offrir des variables, mixins et imbrications pour une écriture plus maintenable",
        "Générer des sprites images automatiquement",
        "Augmenter la vitesse de chargement du navigateur"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Les préprocesseurs CSS ajoutent des fonctionnalités comme variables, mixins, fonctions et imbrications, puis compilent en CSS standard.</p>"
    },
    {
      "id": 14,
      "type": "CSS",
      "title": "Lequel des frameworks CSS suivants est basé sur une approche utilitaire plutôt que sur des composants prêts à l’emploi ?",
      "choices": [
        "Bootstrap",
        "Foundation",
        "Bulma",
        "Tailwind CSS"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Tailwind CSS est un framework utilitaire, offrant des classes à granularité fine pour composer des designs, plutôt que des composants préconçus.</p>"
    },
    {
      "id": 15,
      "type": "CSS",
      "title": "Quelle méthodologie de nommage CSS sépare les blocs, éléments et modificateurs pour une meilleure clarté ?",
      "choices": [
        "OOCSS",
        "SMACSS",
        "BEM",
        "Atomic CSS"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>BEM (Block, Element, Modifier) utilise une nomenclature structurée pour distinguer les blocs indépendants, leurs éléments et leurs modificateurs.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "Responsive": [
    {
      "id": 1,
      "type": "Responsive",
      "title": "Qu'est-ce que le responsive design en CSS et comment l'implémenter ?",
      "choices": [
        "Méthode de minimisation du CSS",
        "Processus de conversion du CSS en JavaScript",
        "Approche d'adaptation des mises en page aux différentes tailles d'écran via unités flexibles, media queries et grilles fluides",
        "Technique pour créer des effets d'animation en CSS"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le responsive design consiste à adapter automatiquement la présentation du site à la taille de l’écran à l’aide d’unités flexibles (%/em/rem), de media queries et de grilles fluides.</p>"
    },
    {
      "id": 2,
      "type": "Responsive",
      "title": "Quelles sont les techniques CSS couramment utilisées pour créer un design responsive ?",
      "choices": [
        "Flexbox, CSS Grid, media queries et unités relatives",
        "CSS Variables, animations keyframes, pseudo-éléments, mixins",
        "Transforms 3D, blend modes, clip-path, filters",
        "Animations CSS, transitions, shadows portés, gradients"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les techniques de base incluent Flexbox et CSS Grid pour la mise en page, les media queries pour cibler les breakpoints, et les unités relatives (%/vw/vh/rem/em) pour des tailles fluides.</p>"
    },
    {
      "id": 3,
      "type": "Responsive",
      "title": "Quelles sont les principales caractéristiques prises en charge dans les media queries ?",
      "choices": [
        "min-width/max-width, orientation, aspect-ratio, resolution",
        "color-scheme, dark-mode, container queries, element queries",
        "display-mode, grid-template, column-count, transform",
        "box-shadow, z-index, animation-duration, transition-delay"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les media queries permettent de cibler des caractéristiques comme la largeur/hauteur (min/max), l’orientation, le ratio, la résolution, etc.</p>"
    },
    {
      "id": 4,
      "type": "Responsive",
      "title": "Quels sont les différents médias pris en compte par les media queries ?",
      "choices": [
        "screen, print, speech, all",
        "all, color, grid, layout",
        "mobile, desktop, tablet, wearable",
        "svg, canvas, WebGL, DOM"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les media queries peuvent cibler <code>all</code> (tous), <code>screen</code> (écrans), <code>print</code> (impression) ou <code>speech</code> (synthèses vocales).</p>"
    },
    {
      "id": 5,
      "type": "Responsive",
      "title": "Qu'est-ce qu'un breakpoint en responsive design ?",
      "choices": [
        "Une unité relative de mesure (%)",
        "Un sélecteur CSS avancé",
        "Une valeur de largeur d'écran définie pour modifier la mise en page",
        "Un plug-in JavaScript pour gérer le CSS"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un breakpoint est un seuil de largeur d'écran (e.g. 768px) à partir duquel on applique des styles différents via media queries.</p>"
    },
    {
      "id": 6,
      "type": "Responsive",
      "title": "Quels sont les différents breakpoints et les écrans qui leur sont associés (six tailles) ?",
      "choices": [
        "< 576px: Petit smartphone; < 768px: Grand smartphone; < 992px: Petite tablette; < 1200px: Grande tablette; < 1400px: PC standard; > 1400px: PC large",
        "< 320px: Portrait mobile; < 480px: Paysage mobile; < 768px: Portrait tablette; < 1024px: Paysage tablette; < 1200px: PC; > 1200px: Ultra large",
        "< 600px: Petit mobile; < 900px: Grand mobile; < 1200px: Tablette; < 1500px: PC moyen; < 1800px: PC; > 1800px: Écran géant",
        "320–480px: Mobile; 481–768px: Mini tablette; 769–1024px: Tablette; 1025–1280px: PC standard; 1281–1600px: PC large; > 1600px: Écran ultra"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les six breakpoints classiques sont < 576, < 768, < 992, < 1200, < 1400 et > 1400 pixels pour les différents appareils.</p>"
    },
    {
      "id": 7,
      "type": "Responsive",
      "title": "Pourquoi est-il important de définir des breakpoints adaptés ?",
      "choices": [
        "Pour améliorer la compatibilité JavaScript",
        "Pour garantir lisibilité et accessibilité sur tous les appareils",
        "Pour diminuer la taille des images",
        "Pour augmenter la complexité du CSS"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Des breakpoints adaptés assurent que le contenu reste lisible et navigable sur mobiles, tablettes et bureaux, améliorant l’expérience utilisateur.</p>"
    },
    {
      "id": 8,
      "type": "Responsive",
      "title": "Quelles sont les meilleures pratiques pour choisir des breakpoints efficaces ?",
      "choices": [
        "Se baser uniquement sur les grilles Bootstrap",
        "Choisir en fonction des statistiques d’usage, tester sur appareils réels et adapter au contenu",
        "Utiliser des largeurs fixes de multiples de 50px",
        "Appliquer les mêmes breakpoints pour tous les projets"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>On détermine les breakpoints via l’analyse des tailles d’écran des utilisateurs, des tests réels et en fonction du contenu plutôt que de valeurs fixes.</p>"
    },
    {
      "id": 9,
      "type": "Responsive",
      "title": "Comment les media queries sont-elles utilisées pour gérer le responsive design ?",
      "choices": [
        "En appliquant des styles CSS selon des conditions de caractéristiques d’appareil (largeur, orientation, etc.)",
        "En compressant le CSS pour réduire la latence",
        "En convertissant le CSS en inline styles JavaScript",
        "En générant des animations lors du redimensionnement"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les media queries permettent d’appliquer ou de surcharger des règles CSS selon la largeur d’écran, l’orientation, la résolution, etc.</p>"
    },
    {
      "id": 10,
      "type": "Responsive",
      "title": "Comment tester l’affichage d’un site web sur différents appareils et tailles d’écran ?",
      "choices": [
        "Via les outils de dev du navigateur, BrowserStack/Responsinator et tests sur appareils réels",
        "En modifiant l’extension de fichier en .amp",
        "En exécutant le site uniquement sur un émulateur Android",
        "En désactivant JavaScript et CSS"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les navigateurs offrent un simulateur de viewport, complété par des services comme BrowserStack et des tests réels sur mobiles/tablettes.</p>"
    },
    {
      "id": 11,
      "type": "Responsive",
      "title": "Comment le responsive design améliore-t-il l’expérience utilisateur ?",
      "choices": [
        "En réduisant le besoin de zoom et de défilement horizontal",
        "En augmentant le poids des pages",
        "En supprimant toutes les images",
        "En désactivant les liens externes"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Un site responsive évite le zoom horizontal/vertical inutile, rendant la navigation plus fluide et agréable sur tout écran.</p>"
    },
    {
      "id": 12,
      "type": "Responsive",
      "title": "Quels outils peuvent aider à créer des designs responsives ?",
      "choices": [
        "Figma, Adobe XD, Sketch, frameworks CSS comme Bootstrap/Foundation, outils de test en ligne",
        "Photoshop uniquement",
        "Blender et Maya",
        "SQL et MongoDB"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Figma, Adobe XD et Sketch facilitent le prototypage adaptatif, tandis que Bootstrap/Foundation offrent des grilles et composants responsives, testables via BrowserStack.</p>"
    },
    {
      "id": 13,
      "type": "Responsive",
      "title": "Quelle est la différence entre le design adaptatif et le responsive design ?",
      "choices": [
        "Le adaptatif utilise plusieurs mises en page fixes ; le responsive est fluide et s’ajuste dynamiquement",
        "Le adaptatif est purement JavaScript ; le responsive est purement CSS",
        "Le adaptatif ne supporte pas les images ; le responsive oui",
        "Le adaptatif est pour mobile ; le responsive pour bureau"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Le design adaptatif propose plusieurs layouts fixes pour plages précises, alors que le responsive ajuste continuellement la mise en page selon la largeur.</p>"
    },
    {
      "id": 14,
      "type": "Responsive",
      "title": "Comment la balise meta viewport influence-t-elle le responsive design ?",
      "choices": [
        "Elle contrôle la mise à l’échelle initiale et la largeur du viewport sur mobile",
        "Elle charge les polices en priorité",
        "Elle bloque les media queries",
        "Elle convertit les images en WebP"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La balise <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;</code> définit la largeur du viewport et le zoom initial sur mobile.</p>"
    },
    {
      "id": 15,
      "type": "Responsive",
      "title": "Comment Bootstrap facilite-t-il le responsive design ?",
      "choices": [
        "Avec un système de grille 12 colonnes, des classes utilitaires responsives, des composants pré-stylés et des breakpoints prédéfinis",
        "En forçant l’usage de tables HTML",
        "En supprimant toutes les media queries",
        "En convertissant le CSS en inline styles JavaScript"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Bootstrap fournit un grid system, des utilitaires adaptatifs (<code>sm/md/lg</code>), des composants responsives et des breakpoints standards pour accélérer le dev.</p>"
    },
    {
      "id": 16,
      "type": "Responsive",
      "title": "Quels sont les défis courants lors de la mise en œuvre du responsive design ?",
      "choices": [
        "Performances mobiles, compatibilité navigateurs, complexité de mise en page, cohérence visuelle",
        "Absence de HTML, impossibilité de charger CSS, manque de JavaScript",
        "Impossible d’utiliser des images, pas de gestion des polices",
        "Obligation d’utiliser PHP, MySQL et Java"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les défis incluent l’optimisation des performances sur mobile, les différences d’interprétation du CSS, la gestion de layouts complexes et la cohérence stylistique.</p>"
    },
    {
      "id": 17,
      "type": "Responsive",
      "title": "Comment le responsive design impacte-t-il le référencement naturel (SEO) d'un site web ?",
      "choices": [
        "Il améliore le SEO en offrant une meilleure expérience mobile, en réduisant le taux de rebond et en évitant le contenu dupliqué",
        "Il pénalise le site car il ajoute trop de CSS",
        "Il n’a aucun effet sur le SEO",
        "Il nécessite l’usage d’un plugin spécial pour Google"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Google privilégie les sites adaptés mobile, un taux de rebond réduit et l’absence de contenu dupliqué, ce qui renforce le positionnement.</p>"
    },
    {
      "id": 18,
      "type": "Responsive",
      "title": "Comment le responsive design peut-il améliorer l'accessibilité d'un site web ?",
      "choices": [
        "En garantissant lisibilité et navigabilité sur tous les appareils et en facilitant l’usage des technologies d’assistance",
        "En désactivant les lecteurs d’écran",
        "En supprimant toutes les images",
        "En forçant l’usage du mode sombre"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Un design responsive assure que le contenu reste lisible, permet une navigation cohérente et facilite l’usage de lecteurs d’écran sur divers appareils.</p>"
    },
    {
      "id": 19,
      "type": "Responsive",
      "title": "Quelles sont les meilleures pratiques pour concevoir des formulaires responsives ?",
      "choices": [
        "Champs flexibles, étiquetage clair, boutons adaptés et tests sur différents écrans",
        "Champs fixes en px, suppression des labels, boutons inactifs",
        "Utiliser uniquement des tableaux HTML",
        "Intégrer des plugins Flash pour les formulaires"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les formulaires doivent utiliser des champs en %/em, labels clairs, boutons larges et être testés sur mobiles et tablettes pour une UX optimale.</p>"
    },
    {
      "id": 20,
      "type": "Responsive",
      "title": "Comment gérer les images et les médias dans un design responsive ?",
      "choices": [
        "Utiliser <picture> avec srcset/sizes, formats modernes (WebP/AVIF) et loading=\"lazy\"",
        "Toujours charger l’image la plus grande",
        "Convertir les images en base64 inline",
        "Ignorer les images sur mobile"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Le balisage <code>&lt;picture&gt;</code> et <code>srcset/sizes</code> permet de charger la version adaptée d’une image, avec formats WebP/AVIF et lazy loading.</p>"
    },
    {
      "id": 21,
      "type": "Responsive",
      "title": "Comment gérer les polices et la typographie dans un design responsive ?",
      "choices": [
        "Utiliser des unités relatives (em/rem) et ajuster via media queries",
        "Définir toutes les tailles en pixels",
        "Intégrer les polices en JPG",
        "Utiliser uniquement la police system-ui"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>L’emploi d’<code>em</code> ou <code>rem</code> pour la taille de police et l’ajustement avec media queries assurent une typographie fluide.</p>"
    },
    {
      "id": 22,
      "type": "Responsive",
      "title": "Quel rôle jouent les images adaptatives dans le responsive design ?",
      "choices": [
        "Elles chargent des versions optimisées selon la largeur d'écran pour améliorer performances et UX",
        "Elles suppriment automatiquement les images sur mobile",
        "Elles génèrent des animations SVG",
        "Elles convertissent les images en texte"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les images adaptatives garantissent que seules les tailles et formats nécessaires sont chargés, réduisant le temps de chargement et optimisant l’expérience.</p>"
    },
    {
      "id": 23,
      "type": "Responsive",
      "title": "Qu'est-ce que l'UX et l'UI et quelles sont les différences ?",
      "choices": [
        "L'UX concerne l'expérience globale et la satisfaction de l'utilisateur ; l'UI se concentre sur l'apparence visuelle et l'interaction directe",
        "L'UX gère le code JavaScript ; l'UI gère le CSS",
        "L'UX est pour mobile ; l'UI est pour bureau",
        "L'UX et l'UI sont identiques"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>L'UX design optimise le parcours et la satisfaction utilisateur, tandis que l'UI design crée l'interface visuelle et les interactions.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "ACCESSIBILITE": [
    {
      "id": 1,
      "type": "ACCESSIBILITE",
      "title": "Qu'est-ce que l'accessibilité numérique ?",
      "choices": [
        "Rendre les contenus et services en ligne utilisables par tous, y compris les personnes en situation de handicap",
        "Optimiser le référencement naturel des sites web",
        "Accroître la vitesse de chargement des pages",
        "Créer des animations interactives pour tous les utilisateurs"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>L'accessibilité numérique consiste à rendre les contenus et services en ligne utilisables par tous, y compris les personnes en situation de handicap.</p>"
    },
    {
      "id": 2,
      "type": "ACCESSIBILITE",
      "title": "Laquelle des affirmations suivantes N’EST PAS un bénéfice de l'accessibilité numérique ?",
      "choices": [
        "Amélioration de l'expérience utilisateur pour tous",
        "Conformité légale aux normes d'accessibilité",
        "Réduction systématique des coûts de développement",
        "Extension du public et avantage commercial"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Les pratiques d'accessibilité améliorent l'expérience utilisateur, garantissent la conformité légale et permettent d'atteindre un public plus large, mais n'entraînent pas nécessairement une réduction systématique des coûts de développement.</p>"
    },
    {
      "id": 3,
      "type": "ACCESSIBILITE",
      "title": "Quel référentiel français s'inspire des WCAG pour définir des critères d'accessibilité des sites publics ?",
      "choices": [
        "PDF/UA",
        "RGAA",
        "ADA",
        "ISO 9001"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le RGAA (Référentiel Général d'Amélioration de l'Accessibilité) est le cadre français qui s'inspire des WCAG pour les sites publics.</p>"
    },
    {
      "id": 4,
      "type": "ACCESSIBILITE",
      "title": "Comment intégrer l'accessibilité dès la phase de conception d'un site web ?",
      "choices": [
        "Créer des maquettes accessibles et planifier des tests tout au long du développement",
        "Attendre la fin du développement pour ajouter des fonctionnalités d'accessibilité",
        "Se concentrer uniquement sur le design visuel sans tester l'accessibilité",
        "Utiliser exclusivement des images sans descriptions textuelles"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Intégrer l'accessibilité dès la conception implique de créer des maquettes accessibles, d'utiliser des balises sémantiques et de planifier des tests d'accessibilité tout au long du processus.</p>"
    },
    {
      "id": 5,
      "type": "ACCESSIBILITE",
      "title": "Laquelle des erreurs suivantes est courante en accessibilité et doit être évitée ?",
      "choices": [
        "Utilisation de polices sans-serif pour un meilleur contraste",
        "Absence de textes alternatifs pour les images",
        "Structuration logique du contenu avec des balises sémantiques",
        "Navigation clavier complète et cohérente"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'absence de textes alternatifs pour les images empêche les utilisateurs de lecteurs d'écran de comprendre le contenu visuel.</p>"
    },
    {
      "id": 6,
      "type": "ACCESSIBILITE",
      "title": "Quel rôle jouent les attributs ARIA dans l'accessibilité web ?",
      "choices": [
        "Ils définissent des styles CSS avancés",
        "Ils permettent d'optimiser le SEO",
        "Ils fournissent des informations supplémentaires aux technologies d'assistance",
        "Ils remplacent entièrement les balises HTML sémantiques"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Les attributs ARIA (role, aria-label, aria-hidden…) fournissent des informations supplémentaires aux technologies d'assistance pour une meilleure navigation.</p>"
    },
    {
      "id": 7,
      "type": "ACCESSIBILITE",
      "title": "Quelle pratique de design améliore l'accessibilité d'un site web ?",
      "choices": [
        "Utiliser des polices manuscrites pour plus de style",
        "Choisir des couleurs offrant un contraste élevé",
        "Créer des mises en page fixes sans adaptabilité",
        "Ignorer la structure sémantique du contenu"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Choisir des couleurs avec un bon contraste facilite la lecture pour tous les utilisateurs, notamment ceux en situation de handicap visuel.</p>"
    },
    {
      "id": 8,
      "type": "ACCESSIBILITE",
      "title": "Quel outil automatisé peut être utilisé pour tester l'accessibilité d'un site web ?",
      "choices": [
        "WAVE",
        "Photoshop",
        "Figma",
        "Slack"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>WAVE est un outil d'évaluation automatisé spécialement conçu pour tester l'accessibilité des sites web.</p>"
    },
    {
      "id": 9,
      "type": "ACCESSIBILITE",
      "title": "Quelle loi américaine impose des obligations d'accessibilité pour les sites web ?",
      "choices": [
        "RGAA",
        "ADA",
        "WCAG",
        "GDPR"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'ADA (Americans with Disabilities Act) impose des obligations d'accessibilité aux sites web aux États-Unis.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "DOM": [
  {
    "id": 1,
    "type": "DOM",
    "title": "Que signifie l'acronyme DOM dans le contexte du web ?",
    "choices": [
      "Data Object Model",
      "Document Object Model",
      "Dynamic Output Module",
      "Document Output Manager"
    ],
    "answer": [1],
    "explanation": "<h4>Explication</h4><p>Le DOM signifie « Document Object Model » : c’est l’interface normalisée par le W3C pour manipuler des documents HTML ou XML sous forme d’arbres de nœuds.</p>"
  },
  {
    "id": 2,
    "type": "DOM",
    "title": "Comment le DOM représente-t-il la structure d’un document HTML ?",
    "choices": [
      "Sous forme de liste plate d’éléments",
      "Sous forme de chaîne de caractères unique",
      "Sous forme d’un graphique orienté non hiérarchique",
      "Sous forme d’une structure arborescente de nœuds"
    ],
    "answer": [3],
    "explanation": "<h4>Explication</h4><p>Le DOM modélise un document en une arborescence où chaque balise, attribut et texte est un nœud lié hiérarchiquement.</p>"
  },
  {
    "id": 3,
    "type": "DOM",
    "title": "Quel type de nœud représente le texte à l’intérieur d’un élément HTML ?",
    "choices": [
      "Nœud Élément",
      "Nœud Attribut",
      "Nœud Commentaire",
      "Nœud Texte"
    ],
    "answer": [3],
    "explanation": "<h4>Explication</h4><p>Le nœud Texte porte le contenu textuel situé entre les balises d’un élément.</p>"
  },
  {
    "id": 4,
    "type": "DOM",
    "title": "Lequel des éléments suivants n’est PAS un type de nœud dans le DOM ?",
    "choices": [
      "Nœud Document",
      "Nœud Élément",
      "Nœud Script",
      "Nœud Commentaire"
    ],
    "answer": [2],
    "explanation": "<h4>Explication</h4><p>Il n'existe pas de « nœud Script » spécifique : le code JavaScript est contenu dans un nœud Élément &lt;script&gt;.</p>"
  },
  {
    "id": 5,
    "type": "DOM",
    "title": "Qu’est-ce qu’un élément dans le DOM ?",
    "choices": [
      "Un attribut d’un nœud",
      "Un type de nœud qui peut contenir des attributs et des enfants",
      "Un commentaire HTML",
      "Un texte brut sans balise"
    ],
    "answer": [1],
    "explanation": "<h4>Explication</h4><p>Dans le DOM, chaque balise HTML correspond à un nœud Élément pouvant contenir des attributs et des nœuds enfants.</p>"
  },
  {
    "id": 6,
    "type": "DOM",
    "title": "Quelle méthode DOM permet de récupérer un élément par son identifiant ?",
    "choices": [
      "getElementsByName()",
      "getElementsByClassName()",
      "getElementById()",
      "querySelectorAll()"
    ],
    "answer": [2],
    "explanation": "<h4>Explication</h4><p>getElementById() renvoie l’élément unique dont l’attribut id correspond à la valeur donnée.</p>"
  },
  {
    "id": 7,
    "type": "DOM",
    "title": "Quelle méthode renvoie une collection d’éléments par leur nom de classe ?",
    "choices": [
      "getElementsByClassName()",
      "getElementByTagName()",
      "querySelector()",
      "getAttribute()"
    ],
    "answer": [0],
    "explanation": "<h4>Explication</h4><p>getElementsByClassName() retourne un HTMLCollection de tous les éléments possédant la classe spécifiée.</p>"
  },
  {
    "id": 8,
    "type": "DOM",
    "title": "Quelle méthode DOM permet de sélectionner le premier élément correspondant à un sélecteur CSS ?",
    "choices": [
      "querySelector()",
      "getElementsByTagName()",
      "getElementById()",
      "getComputedStyle()"
    ],
    "answer": [0],
    "explanation": "<h4>Explication</h4><p>querySelector() renvoie le premier élément correspondant au sélecteur CSS fourni.</p>"
  },
  {
    "id": 9,
    "type": "DOM",
    "title": "Laquelle de ces propriétés permet de modifier le contenu HTML d’un élément ?",
    "choices": [
      "innerText",
      "textContent",
      "innerHTML",
      "nodeValue"
    ],
    "answer": [2],
    "explanation": "<h4>Explication</h4><p>innerHTML permet de définir ou récupérer le contenu HTML (avec balises) à l’intérieur d’un élément.</p>"
  },
  {
    "id": 10,
    "type": "DOM",
    "title": "Quelle méthode est utilisée pour créer un nouvel élément DOM avant de l’insérer ?",
    "choices": [
      "appendChild()",
      "insertBefore()",
      "createElement()",
      "removeChild()"
    ],
    "answer": [2],
    "explanation": "<h4>Explication</h4><p>createElement() génère un nouvel nœud Élément, que l’on peut ensuite insérer avec appendChild() ou insertBefore().</p>"
  },
  {
    "id": 11,
    "type": "DOM",
    "title": "Comment supprimer un élément existant du DOM ?",
    "choices": [
      "removeChild() sur son parent",
      "deleteElement()",
      "detachNode()",
      "clearElement()"
    ],
    "answer": [0],
    "explanation": "<h4>Explication</h4><p>removeChild() est appelé sur le nœud parent pour retirer le nœud enfant spécifié.</p>"
  },
  {
    "id": 12,
    "type": "DOM",
    "title": "Qu’est-ce qu’un événement dans le DOM ?",
    "choices": [
      "Une propriété CSS",
      "Un type de nœud",
      "Un script exécuté par le navigateur en réponse à une interaction",
      "Un attribut HTML"
    ],
    "answer": [2],
    "explanation": "<h4>Explication</h4><p>Un événement est une action ou un signal (clic, saisie, chargement, etc.) déclenché par l’utilisateur ou le navigateur.</p>"
  },
  {
    "id": 13,
    "type": "DOM",
    "title": "Quelle méthode attache un gestionnaire d’événement à un élément DOM ?",
    "choices": [
      "addEventListener()",
      "attachEvent()",
      "onEvent()",
      "listenEvent()"
    ],
    "answer": [0],
    "explanation": "<h4>Explication</h4><p>addEventListener() associe un callback à l’élément pour l’événement spécifié.</p>"
  },
  {
    "id": 14,
    "type": "DOM",
    "title": "Comment retirer un gestionnaire d’événement précédemment attaché ?",
    "choices": [
      "removeEventListener()",
      "detachListener()",
      "deleteEvent()",
      "offEvent()"
    ],
    "answer": [0],
    "explanation": "<h4>Explication</h4><p>removeEventListener() supprime le callback attaché avec addEventListener().</p>"
  },
  {
    "id": 15,
    "type": "DOM",
    "title": "L’événement mouseover se déclenche lorsque :",
    "choices": [
      "La souris clique sur un élément",
      "La souris quitte la zone d’un élément",
      "Le curseur passe au-dessus d’un élément",
      "La page est entièrement chargée"
    ],
    "answer": [2],
    "explanation": "<h4>Explication</h4><p>mouseover survient quand le pointeur de la souris entre dans la zone de l’élément.</p>"
  },
  {
    "id": 16,
    "type": "DOM",
    "title": "Que désigne la propagation d’événements (event bubbling) ?",
    "choices": [
      "L’arrêt de tous les événements sur la page",
      "Le déclenchement d’un même événement sur plusieurs éléments en descendant l’arbre",
      "Le transfert d’un événement du document vers le serveur",
      "La mise en file d’attente des événements"
    ],
    "answer": [1],
    "explanation": "<h4>Explication</h4><p>En bubbling, l’événement part de l’élément cible et remonte successivement chaque parent jusqu’au document racine.</p>"
  },
  {
    "id": 17,
    "type": "DOM",
    "title": "Comment modifier dynamiquement le style CSS d’un élément via le DOM ?",
    "choices": [
      "element.css('color', 'red')",
      "element.setStyle('color','red')",
      "element.style.color = 'red'",
      "element.changeStyle.color = 'red'"
    ],
    "answer": [2],
    "explanation": "<h4>Explication</h4><p>On accède à la propriété style de l’élément, puis on modifie la propriété CSS souhaitée.</p>"
  },
  {
    "id": 18,
    "type": "DOM",
    "title": "Quelle propriété permet d’obtenir le nœud parent dans l’arbre DOM ?",
    "choices": [
      "childNodes",
      "parentNode",
      "nextSibling",
      "previousSibling"
    ],
    "answer": [1],
    "explanation": "<h4>Explication</h4><p>parentNode renvoie directement le nœud parent de l’élément courant.</p>"
  },
  {
    "id": 19,
    "type": "DOM",
    "title": "Qu’est-ce que le DOM virtuel utilisé par des bibliothèques comme React ?",
    "choices": [
      "Un système de cache des CSS",
      "Une copie en mémoire de l’arbre DOM pour optimiser les mises à jour",
      "Un nouveau type de nœud pour le rendu 3D",
      "Une API REST pour le DOM"
    ],
    "answer": [1],
    "explanation": "<h4>Explication</h4><p>Le DOM virtuel est une représentation légère en mémoire de l’arbre réel, utilisée pour calculer et appliquer efficacement les différences au vrai DOM.</p>"
  }
],
      // Ajouter d'autres sujets ici
      "JS": [
    {
      "id": 1,
      "type": "JS",
      "title": "Qu'est-ce que le lazy loading ?",
      "choices": [
        "Une méthode de conception de base de données",
        "Un protocole de sécurité réseau",
        "Une technique de chargement différé de ressources non essentielles",
        "Un style de codage JavaScript"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le lazy loading est une technique qui consiste à différer le chargement de ressources (images, vidéos, etc.) jusqu'à ce qu'elles soient nécessaires, améliorant ainsi la performance de l'application.</p>"
    },
    {
      "id": 2,
      "type": "JS",
      "title": "Quel attribut HTML permet d'activer le lazy loading sur les images ?",
      "choices": [
        "async",
        "loading=\"lazy\"",
        "defer",
        "id"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'attribut <code>loading=\"lazy\"</code> appliqué à une balise <code>&lt;img&gt;</code> indique au navigateur de ne charger l'image que lorsqu'elle entre dans la zone de visualisation de l'utilisateur.</p>"
    },
    {
      "id": 3,
      "type": "JS",
      "title": "Qu'est-ce que le localStorage ?",
      "choices": [
        "Stockage temporaire limité à la session",
        "Base de données SQL côté serveur",
        "Stockage de données clé-valeur persistant dans le navigateur",
        "Stockage basé sur les cookies"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le <code>localStorage</code> est une API Web qui fournit un stockage clé-valeur persistant côté client, conservé même après la fermeture du navigateur.</p>"
    },
    {
      "id": 4,
      "type": "JS",
      "title": "Quelle méthode permet de stocker une valeur dans le localStorage ?",
      "choices": [
        "localStorage.setItem",
        "localStorage.getItem",
        "localStorage.removeItem",
        "localStorage.clear"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La méthode <code>localStorage.setItem(key, value)</code> sert à stocker une paire clé-valeur dans le <code>localStorage</code>.</p>"
    },
    {
      "id": 5,
      "type": "JS",
      "title": "Pourquoi doit-on sérialiser un objet avant de le stocker dans le localStorage ?",
      "choices": [
        "Pour compresser les données",
        "Pour respecter le principe de même origine",
        "Pour assurer la sécurité des données",
        "Parce que localStorage ne stocke que des chaînes de caractères"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Le <code>localStorage</code> ne peut stocker que des chaînes de caractères. Il faut donc utiliser <code>JSON.stringify()</code> pour convertir un objet en chaîne avant stockage.</p>"
    },
    {
      "id": 6,
      "type": "JS",
      "title": "Qu'est-ce que le sessionStorage ?",
      "choices": [
        "Stockage persistant client",
        "Stockage côté client limité à la session",
        "Base de données orientée document",
        "Mémoire cache du serveur"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le <code>sessionStorage</code> est similaire au <code>localStorage</code>, mais les données sont effacées automatiquement à la fermeture de l'onglet ou de la fenêtre du navigateur.</p>"
    },
    {
      "id": 7,
      "type": "JS",
      "title": "Quelle est la différence principale entre localStorage et sessionStorage ?",
      "choices": [
        "Ils ont différentes tailles maximales",
        "Ils utilisent des protocoles différents",
        "Le localStorage persiste après fermeture du navigateur, contrairement au sessionStorage",
        "Le sessionStorage est partagé entre les onglets"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La différence essentielle réside dans la durée de vie : le <code>localStorage</code> conserve les données après la fermeture du navigateur, alors que le <code>sessionStorage</code> non.</p>"
    },
    {
      "id": 8,
      "type": "JS",
      "title": "Qu'est-ce qu'un cookie ?",
      "choices": [
        "Un framework JavaScript",
        "Un petit fichier texte stocké par un site sur l'appareil de l'utilisateur",
        "Une API Web de stockage clé-valeur",
        "Une feuille de style en cascade"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Un cookie est un petit fichier texte envoyé par le serveur et stocké sur le navigateur, utilisé pour conserver des informations de session, préférences ou suivi utilisateur.</p>"
    },
    {
      "id": 9,
      "type": "JS",
      "title": "Quels sont les deux types principaux de cookies ?",
      "choices": [
        "Cookie tiers (third-party)",
        "Cookie persistants",
        "Cookie de session",
        "Cookie propriétaire (first-party)"
      ],
      "answer": [0, 3],
      "explanation": "<h4>Explication</h4><p>Les deux types principaux sont les cookies propriétaire (first-party), créés par le domaine visité, et les cookies tiers (third-party), créés par un domaine externe.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "L'algorithmie": [
    {
      "id": 1,
      "type": "L'algorithmie",
      "title": "Qu'est-ce que l'algorithmie ?",
      "choices": [
        "Un langage de programmation",
        "Le domaine d'étude de la résolution de problèmes par la mise en œuvre de suites d'opérations élémentaires",
        "Un compilateur",
        "Une base de données"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'algorithmie est le domaine d'étude de la résolution de problèmes par la mise en œuvre de suites d'opérations élémentaires selon un processus défini aboutissant à une solution.</p>"
    },
    {
      "id": 2,
      "type": "L'algorithmie",
      "title": "Qui a rédigé les premiers ouvrages d'algorithmie au IXᵉ siècle ?",
      "choices": [
        "Euclide",
        "Al-Khwârizmî",
        "Archimède",
        "Al-Farabi"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Les premiers ouvrages d'algorithmie ont été rédigés au IXᵉ siècle par le mathématicien perse Al-Khwârizmî.</p>"
    },
    {
      "id": 3,
      "type": "L'algorithmie",
      "title": "À quelle période l'algorithmie s'est-elle surtout développée comme support conceptuel de la programmation informatique ?",
      "choices": [
        "Deuxième moitié du XIXᵉ siècle",
        "Deuxième moitié du XXᵉ siècle",
        "Premier quart du XXIᵉ siècle",
        "Début du XVIIIᵉ siècle"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'algorithmie s'est surtout développée dans la deuxième moitié du XXᵉ siècle, en soutien conceptuel à la programmation des ordinateurs.</p>"
    },
    {
      "id": 4,
      "type": "L'algorithmie",
      "title": "Le tri des livres d'une bibliothèque par ordre alphabétique est un exemple de problème en algorithmie, plus généralement de quel type de problème ?",
      "choices": [
        "Recherche de chemin",
        "Tri d'un ensemble en respectant un certain ordre",
        "Problème de couverture de sommets",
        "Problème de sac à dos"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Il s'agit d'un problème de tri : réorganiser un ensemble d'éléments (livres) selon un ordre donné (alphabétique).</p>"
    },
    {
      "id": 5,
      "type": "L'algorithmie",
      "title": "Qu'est-ce qu'une boucle en programmation ?",
      "choices": [
        "Une structure de données",
        "Une fonction anonyme",
        "Une structure de contrôle exécutant un bloc de code de manière répétée tant qu'une condition est vraie",
        "Un algorithme de tri"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une boucle est une structure de contrôle permettant d'exécuter un bloc de code de manière répétée tant qu'une condition spécifiée est vraie.</p>"
    },
    {
      "id": 6,
      "type": "L'algorithmie",
      "title": "Quelle boucle garantit l'exécution du bloc de code au moins une fois avant de tester la condition ?",
      "choices": [
        "while",
        "for",
        "do...while",
        "foreach"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La boucle do...while exécute d'abord le bloc puis teste la condition, assurant au moins une exécution.</p>"
    },
    {
      "id": 7,
      "type": "L'algorithmie",
      "title": "Quelle boucle est particulièrement adaptée pour parcourir directement tous les éléments d'une collection sans index explicite ?",
      "choices": [
        "while",
        "for classique",
        "foreach (ou for...of)",
        "do...while"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La boucle foreach (ou for...of en JavaScript) permet de parcourir directement chaque élément d'une collection.</p>"
    },
    {
      "id": 8,
      "type": "L'algorithmie",
      "title": "Quelle est la principale différence entre une structure de données linéaires et non linéaires ?",
      "choices": [
        "Les linéaires utilisent des index, les non linéaires non",
        "Les linéaires sont toujours plus rapides",
        "Les linéaires organisent les éléments de façon séquentielle ; les non linéaires de façon hiérarchique ou en réseau",
        "Les linéaires stockent des paires clé-valeur"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Les structures linéaires organisent les éléments séquentiellement, alors que les non linéaires le font hiérarchiquement ou en réseau.</p>"
    },
    {
      "id": 9,
      "type": "L'algorithmie",
      "title": "Qu'est-ce qu'un tableau (ou une liste) ?",
      "choices": [
        "Une structure non linéaire hiérarchique",
        "Une liste de paires clé-valeur",
        "Une structure stockant une collection ordonnée d'éléments accessibles par un index numérique",
        "Une fonction anonyme"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un tableau ou une liste est une structure de données stockant une collection ordonnée d'éléments, généralement accessibles via un index numérique.</p>"
    },
    {
      "id": 10,
      "type": "L'algorithmie",
      "title": "Qu'est-ce qu'une map ou un dictionnaire ?",
      "choices": [
        "Une liste d'éléments triés",
        "Une pile LIFO",
        "Une structure stockant des paires clé-valeur avec accès rapide via la clé",
        "Une fonction récursive"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une map (ou dictionnaire) stocke des paires clé-valeur, permettant d'accéder rapidement aux valeurs via leurs clés uniques.</p>"
    },
    {
      "id": 11,
      "type": "L'algorithmie",
      "title": "Quel concept spécifique décrit une implémentation de map utilisant une fonction de hachage ?",
      "choices": [
        "ArrayList",
        "HashMap",
        "LinkedList",
        "TreeMap"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Une HashMap est une implémentation de map/dictionnaire qui utilise une fonction de hachage pour stocker et accéder rapidement aux données.</p>"
    },
    {
      "id": 12,
      "type": "L'algorithmie",
      "title": "Qu'est-ce qu'un objet en programmation orientée objet ?",
      "choices": [
        "Une fonction anonyme",
        "Une paire clé-valeur",
        "Une instance de classe encapsulant attributs et méthodes",
        "Un algorithme diviser pour régner"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Un objet est une instance d'une classe, encapsulant des attributs (données) et des méthodes (comportements).</p>"
    },
    {
      "id": 13,
      "type": "L'algorithmie",
      "title": "Qu'est-ce que le JSON ?",
      "choices": [
        "Une base de données relationnelle",
        "Un format de données textuel léger pour l'échange d'informations, fondé sur la syntaxe des objets JavaScript",
        "Un langage de programmation",
        "Un algorithme de tri"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>JSON (JavaScript Object Notation) est un format de données textuel léger, fondé sur la syntaxe des objets JavaScript, utilisé pour l'échange de données.</p>"
    },
    {
      "id": 14,
      "type": "L'algorithmie",
      "title": "Lequel des suivants n'est PAS un paradigme de programmation courant ?",
      "choices": [
        "Impératif",
        "Orienté objet",
        "Réactif",
        "Cryptographique"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Le paradigme cryptographique n'existe pas en tant que paradigme de programmation ; les autres sont des paradigmes reconnus.</p>"
    },
    {
      "id": 15,
      "type": "L'algorithmie",
      "title": "Qu'est-ce qu'une closure (fermeture) ?",
      "choices": [
        "Une fonction sans nom",
        "Une fonction qui capture son environnement lexical et conserve l'accès à ses variables même hors de son contexte",
        "Une boucle imbriquée",
        "Un algorithme de tri diviser pour régner"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Une closure est une fonction qui capture et conserve l'accès aux variables de son environnement lexical, même lorsqu'elle est exécutée en dehors de cet environnement.</p>"
    },
    {
      "id": 16,
      "type": "L'algorithmie",
      "title": "Qu'est-ce qu'une expression lambda ?",
      "choices": [
        "Un type de boucle",
        "Une fonction anonyme et brève, définie et utilisée immédiatement",
        "Une structure conditionnelle",
        "Un type de donnée statique"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Une expression lambda est une fonction sans nom, brève, qui peut être définie et utilisée immédiatement, souvent comme argument d'autres fonctions.</p>"
    },
    {
      "id": 17,
      "type": "L'algorithmie",
      "title": "Quel est le but de la notation O(grand O) en algorithmie ?",
      "choices": [
        "Mesurer l'espace disque utilisé",
        "Mesurer la complexité temporelle ou spatiale d'un algorithme en fonction de la taille de l'entrée",
        "Indiquer la version d'un algorithme",
        "Définir la lisibilité du code"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La notation Big O exprime la complexité temporelle (ou spatiale) d'un algorithme en fonction de la taille de son entrée.</p>"
    },
    {
      "id": 18,
      "type": "L'algorithmie",
      "title": "Parmi les algorithmes de tri suivants, lequel a une complexité moyenne de O(n log n) ?",
      "choices": [
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort",
        "Selection Sort"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Merge Sort est un tri par division qui a une complexité de O(n log n) en moyenne.</p>"
    },
    {
      "id": 19,
      "type": "L'algorithmie",
      "title": "En quoi consiste la stratégie divide and conquer (diviser pour régner) ?",
      "choices": [
        "Exécuter un algorithme en parallèle",
        "Diviser un problème en sous-problèmes, les résoudre puis combiner les solutions",
        "Trier les données en place sans mémoire supplémentaire",
        "Utiliser une seule boucle pour tout résoudre"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Divide and conquer divise un problème en sous-problèmes plus petits, résout chacun récursivement puis combine les résultats.</p>"
    },
    {
      "id": 20,
      "type": "L'algorithmie",
      "title": "Qu'est-ce que la récursion en programmation ?",
      "choices": [
        "Une fonction qui s'appelle elle-même",
        "Un type de boucle infinie",
        "Une structure de données récursive",
        "Une méthode de tri"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La récursion est un concept où une fonction s'appelle elle-même pour résoudre un problème.</p>"
    },
    {
      "id": 21,
      "type": "L'algorithmie",
      "title": "Quelle est la différence principale entre types primitifs et types par référence en Java ?",
      "choices": [
        "Les primitifs sont stockés sur le tas, les références sur la pile",
        "Les primitifs sont immuables, les références mutables",
        "Les primitifs contiennent la valeur directement, les références stockent une adresse vers un objet",
        "Les références ne peuvent pas être nulles"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>En Java, les types primitifs stockent directement la valeur, tandis que les types par référence contiennent une adresse pointant vers un objet en mémoire.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "L'architecture": [
    {
      "id": 1,
      "type": "L'architecture",
      "title": "Qu'est-ce que le MVC ?",
      "choices": [
        "Pattern gère base de données sans UI",
        "Pattern qui divise en modèle, vue et contrôleur",
        "Pattern de versionnage de code",
        "Pattern microservices"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le pattern Model-View-Controller (MVC) sépare l'application en trois composants : le modèle (logique métier et données), la vue (interface utilisateur) et le contrôleur (gestion des entrées utilisateur et coordination modèle-vue).</p>"
    },
    {
      "id": 2,
      "type": "L'architecture",
      "title": "Qu'est-ce que le MVT ?",
      "choices": [
        "Pattern CLI",
        "Pattern Django Model-View-Template",
        "Pattern pour microservices",
        "Pattern design Pattern ViewModel"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le pattern Model-View-Template (MVT) de Django sépare la logique métier (Model), la logique de contrôle (View) qui traite les requêtes HTTP, et le Template (fichier HTML) pour le rendu.</p>"
    },
    {
      "id": 3,
      "type": "L'architecture",
      "title": "Qu'est-ce que le MVVM ?",
      "choices": [
        "Model-View-Controller",
        "Model-View-Template",
        "Model-View-ViewModel",
        "Model-View-Presenter"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le pattern Model-View-ViewModel (MVVM) introduit une couche ViewModel entre le Modèle et la Vue, facilitant la liaison de données et la séparation des responsabilités interface/présentation.</p>"
    },
    {
      "id": 4,
      "type": "L'architecture",
      "title": "Qu'est-ce qu'un design pattern ?",
      "choices": [
        "Bibliothèque de composants",
        "Solution réutilisable à un problème récurrent",
        "Exigence fonctionnelle",
        "Portion de code prête à l'emploi"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Un design pattern est un modèle éprouvé, non pas du code prêt à l'emploi, mais un guide pour structurer et organiser le code afin de résoudre des problèmes récurrents.</p>"
    },
    {
      "id": 5,
      "type": "L'architecture",
      "title": "Qu'est-ce qu'une factory method ?",
      "choices": [
        "Observer",
        "Méthode qui crée un objet sans préciser la classe concrète",
        "Command",
        "Singleton"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La Factory Method encapsule la création d'objets dans une méthode fabrique, permettant aux sous-classes de redéfinir le type d'objets retournés sans modifier le code client.</p>"
    },
    {
      "id": 6,
      "type": "L'architecture",
      "title": "Qu'est-ce que le singleton ?",
      "choices": [
        "Pattern d'adaptateur",
        "Pattern de notification",
        "Pattern garantissant une seule instance",
        "Pattern de création d'objet en chaîne"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le Singleton garantit qu'une classe n'a qu'une unique instance accessible globalement, utile pour contrôler l'accès à une ressource partagée.</p>"
    },
    {
      "id": 7,
      "type": "L'architecture",
      "title": "Qu'est-ce que le couplage fort ?",
      "choices": [
        "Pattern créational",
        "Encapsulation",
        "Relation étroite entre composants",
        "Faible dépendance"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le couplage fort se caractérise par des dépendances étroites entre composants, rendant le code moins flexible et plus difficile à maintenir et tester.</p>"
    },
    {
      "id": 8,
      "type": "L'architecture",
      "title": "Qu'est-ce que le couplage faible ?",
      "choices": [
        "Notification automatique",
        "Faible dépendance entre composants",
        "Connexion forte",
        "Modèle de données"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le couplage faible réduit les dépendances entre composants via des interfaces ou abstractions, améliorant la flexibilité, la testabilité et la réutilisabilité.</p>"
    },
    {
      "id": 9,
      "type": "L'architecture",
      "title": "Lequel des éléments suivants est un pattern structurel ?",
      "choices": [
        "Singleton",
        "Observer",
        "Adapter",
        "Factory Method"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le pattern Adapter est un pattern structurel qui permet à des interfaces incompatibles de fonctionner ensemble via une classe adaptatrice.</p>"
    },
    {
      "id": 10,
      "type": "L'architecture",
      "title": "Lequel est un pattern comportemental ?",
      "choices": [
        "Facade",
        "Abstract Factory",
        "Observer",
        "Builder"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le pattern Observer est comportemental : il définit une dépendance un-à-plusieurs, où un sujet notifie automatiquement ses observateurs de tout changement d'état.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "POO": [
    {
      "id": 1,
      "type": "POO",
      "title": "Qu'est-ce que la POO ?",
      "choices": [
        "Langage de script spécialisé",
        "Paradigme de programmation organisant le code en objets réutilisables",
        "Protocole de communication réseau",
        "Modèle de base de données relationnelle"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La Programmation Orientée Objet (POO) est un paradigme structurant le code en unités logiques appelées objets, facilitant la modularité, la réutilisabilité et la maintenance.</p>"
    },
    {
      "id": 2,
      "type": "POO",
      "title": "Quels sont les quatre piliers fondamentaux de la POO ?",
      "choices": [
        "Abstraction",
        "Gestion de la mémoire",
        "Polymorphisme",
        "Encapsulation",
        "Héritage"
      ],
      "answer": [0,2,3,4],
      "explanation": "<h4>Explication</h4><p>Les quatre piliers de la POO sont l'Abstraction, l'Encapsulation, l'Héritage et le Polymorphisme, qui ensemble permettent de modéliser, protéger, réutiliser et étendre le code.</p>"
    },
    {
      "id": 3,
      "type": "POO",
      "title": "Qu'est-ce que l'abstraction ?",
      "choices": [
        "Regrouper les données et les méthodes dans une même classe",
        "Se concentrer sur l'essentiel en ignorant les détails non pertinents",
        "Capacité d'une classe à hériter d'une autre",
        "Autoriser plusieurs versions d'une méthode selon ses paramètres"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'abstraction consiste à définir des modèles simplifiés d'objets, en ne gardant que les informations essentielles pour gérer la complexité.</p>"
    },
    {
      "id": 4,
      "type": "POO",
      "title": "Qu'est-ce que l'encapsulation ?",
      "choices": [
        "Mécanisme de surcharge d'opérateur",
        "Cache des détails d'implémentation en regroupant données et méthodes dans la classe",
        "Processus d'hériter des propriétés et méthodes",
        "Capacité d'objets différents à répondre au même message"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'encapsulation protège les données en les cachant derrière des getters et setters, et regroupe les attributs et méthodes dans la même unité.</p>"
    },
    {
      "id": 5,
      "type": "POO",
      "title": "Qu'est-ce que l'héritage ?",
      "choices": [
        "Capacité à redéfinir un opérateur pour une classe",
        "Processus d'importer des modules externes",
        "Capacité d'une classe à hériter des propriétés et méthodes d'une autre",
        "Technique de sérialisation d'objets"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>L'héritage permet à une classe fille de réutiliser le code d'une classe mère, favorisant la hiérarchie et la réutilisation sans duplication.</p>"
    },
    {
      "id": 6,
      "type": "POO",
      "title": "Qu'est-ce que le polymorphisme ?",
      "choices": [
        "Capacité d'objets de différentes classes à répondre à un même message",
        "Génération automatique de code",
        "Conversion d'un objet en une suite de bits",
        "Regroupement statique des données"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Le polymorphisme permet d'utiliser une interface unique pour manipuler des objets de types différents, rendant le code plus générique et extensible.</p>"
    },
    {
      "id": 7,
      "type": "POO",
      "title": "Quelle est la différence entre une classe et un objet ?",
      "choices": [
        "Une classe est une instance, un objet est un plan",
        "Une classe est un plan, un objet est une instance concrète de ce plan",
        "Une classe est statique, un objet est toujours dynamique",
        "Il n'y a aucune différence"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La classe définit le modèle (attributs/méthodes), tandis que l'objet est une occurrence particulière créée à partir de ce modèle.</p>"
    },
    {
      "id": 8,
      "type": "POO",
      "title": "Qu'est-ce qu'une méthode abstraite ?",
      "choices": [
        "Méthode sans implémentation dans une classe abstraite",
        "Méthode accessible uniquement par héritage",
        "Méthode avec surcharge de paramètres",
        "Méthode accessible sans instance"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Une méthode abstraite est déclarée sans corps dans une classe abstraite et doit être implémentée par les sous-classes.</p>"
    },
    {
      "id": 9,
      "type": "POO",
      "title": "Qu'est-ce qu'une interface ?",
      "choices": [
        "Classe dont on ne peut pas hériter",
        "Contrat définissant un ensemble de méthodes sans implémentation",
        "Collection de données pour sérialisation",
        "Mécanisme d'encapsulation avancé"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Une interface spécifie des signatures de méthodes à implémenter, sans fournir de code, garantissant un contrat entre classes.</p>"
    },
    {
      "id": 10,
      "type": "POO",
      "title": "Quelle est la différence entre une classe abstraite et une interface ?",
      "choices": [
        "Une classe abstraite peut avoir des méthodes concrètes et des attributs, une interface non",
        "Une interface peut avoir des constructeurs, une classe abstraite non",
        "Une classe abstraite ne peut pas déclarer de méthodes, une interface oui",
        "Il n'y a pas de différence"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Une classe abstraite peut contenir des méthodes concrètes et des attributs d'instance, tandis qu'une interface ne définit que des signatures et constantes.</p>"
    },
    {
      "id": 11,
      "type": "POO",
      "title": "Quelle est la différence entre une méthode de classe et une méthode d'instance ?",
      "choices": [
        "Méthode de classe nécessite une instance pour être appelée",
        "Méthode d'instance appartient à la classe elle-même",
        "Méthode de classe est statique et n'a pas besoin d'instance, méthode d'instance en a besoin",
        "Aucune différence"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une méthode de classe (statique) s'appelle sur la classe, sans instance, tandis qu'une méthode d'instance agit sur un objet spécifique.</p>"
    },
    {
      "id": 12,
      "type": "POO",
      "title": "Qu'est-ce que le getter et le setter ?",
      "choices": [
        "Méthodes spéciales pour sérialiser un objet",
        "Opérateurs redéfinis pour une classe",
        "Accesseurs et mutateurs permettant d'accéder et de modifier des attributs privés",
        "Techniques de surcharge de méthode"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Les getters (accès) et setters (modification) contrôlent l'accès aux attributs privés, respectant l'encapsulation.</p>"
    },
    {
      "id": 13,
      "type": "POO",
      "title": "Qu'est-ce que le concept de constructeur ?",
      "choices": [
        "Méthode appelée pour initialiser un nouvel objet de la classe",
        "Fonction qui détruit un objet",
        "Mécanisme de gestion des exceptions",
        "Surcharge d'un opérateur"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Le constructeur est une méthode spéciale invoquée à la création d'un objet pour initialiser ses attributs.</p>"
    },
    {
      "id": 14,
      "type": "POO",
      "title": "Qu'est-ce que le concept de 'this'/'self' ?",
      "choices": [
        "Mot-clé référant à l'instance courante de la classe",
        "Fonction de rappel pour événements",
        "Type de méthode statique",
        "Alias pour la classe parente"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>'this' (ou 'self') désigne l'objet courant dans lequel on accède à ses attributs et méthodes.</p>"
    },
    {
      "id": 15,
      "type": "POO",
      "title": "Qu'est-ce que la surcharge de méthode ?",
      "choices": [
        "Définir plusieurs méthodes de même nom avec des paramètres différents",
        "Redéfinir le comportement d'un opérateur",
        "Hériter de plusieurs classes",
        "Convertir un objet en données brutes"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La surcharge de méthode consiste à proposer plusieurs versions d'une même méthode, différenciées par leur liste de paramètres.</p>"
    },
    {
      "id": 16,
      "type": "POO",
      "title": "Qu'est-ce que la surcharge d'opérateur ?",
      "choices": [
        "Capacité à hériter de plusieurs classes",
        "Redéfinir le comportement des opérateurs pour des objets personnalisés",
        "Création automatique d'opérateurs bit à bit",
        "Technique de sérialisation avancée"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La surcharge d'opérateur permet d'utiliser des opérateurs (ex. '+') sur des objets, via des méthodes spéciales (ex. '__add__' en Python).</p>"
    },
    {
      "id": 17,
      "type": "POO",
      "title": "Comment la POO améliore-t-elle la réutilisabilité du code ?",
      "choices": [
        "En forçant l'utilisation de fonctions globales",
        "En regroupant données et méthodes dans des classes réutilisables, via héritage, polymorphisme et abstraction",
        "En éliminant toute modularité",
        "En masquant complètement les implémentations"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La POO favorise la réutilisation grâce aux classes modulaires, à l'héritage, au polymorphisme et à l'abstraction, évitant la duplication.</p>"
    },
    {
      "id": 18,
      "type": "POO",
      "title": "Comment la POO facilite-t-elle la maintenance du code ?",
      "choices": [
        "En rendant le code entièrement statique",
        "En structurant le code en modules indépendants et en protégeant les données via l'encapsulation",
        "En supprimant les tests unitaires",
        "En complexifiant l'héritage"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La modularité, l'encapsulation et l'héritage de la POO facilitent les modifications isolées et réduisent les erreurs.</p>"
    },
    {
      "id": 19,
      "type": "POO",
      "title": "Qu'est-ce que la composition ?",
      "choices": [
        "Relation 'partie-tout' forte où le composite gère la vie de ses composants",
        "Héritage multiple de classes parentes",
        "Technique de sérialisation d'objets",
        "Surcharge de méthodes"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La composition lie fortement un objet composite à ses composants : si le composite est détruit, ses composants le sont aussi.</p>"
    },
    {
      "id": 20,
      "type": "POO",
      "title": "Quelle est la différence entre l'agrégation et la composition ?",
      "choices": [
        "Dans l'agrégation, la vie des parties est indépendante du tout ; en composition, non",
        "L'agrégation redéfinit des opérateurs, la composition non",
        "La composition permet l'héritage multiple, l'agrégation non",
        "Il n'y a pas de différence"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>L'agrégation est une relation faible où les composants peuvent vivre seuls, la composition est une relation forte dépendant du cycle de vie.</p>"
    },
    {
      "id": 21,
      "type": "POO",
      "title": "Qu'est-ce que l'héritage multiple et quelles sont ses implications ?",
      "choices": [
        "Capacité à hériter de plusieurs classes, pouvant entraîner le problème du diamant",
        "Utilisation de plusieurs objets pour une seule classe",
        "Technique d'encapsulation avancée",
        "Méthode de sérialisation parallèle"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>L'héritage multiple permet à une classe d'avoir plusieurs parents mais peut provoquer des ambiguïtés (problème du diamant) et rendre la hiérarchie complexe.</p>"
    },
    {
      "id": 22,
      "type": "POO",
      "title": "Comment la POO gère-t-elle les exceptions et les erreurs ?",
      "choices": [
        "En utilisant une hiérarchie de classes d'exceptions et des blocs try…catch",
        "En arrêtant automatiquement le programme sans gestion",
        "En convertissant toutes les erreurs en entiers",
        "En masquant les erreurs pour simplifier le code"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La POO utilise des exceptions, lancées par throw/raise et capturées par try…catch/except, avec des classes spécialisées pour différents types d'erreurs.</p>"
    },
    {
      "id": 23,
      "type": "POO",
      "title": "Comment les objets immuables sont-ils utilisés en POO ?",
      "choices": [
        "Ils ne peuvent pas être modifiés après création, améliorant la sécurité et la thread-safety",
        "Ils sont détruits immédiatement après création",
        "Ils possèdent toujours des getters et setters dynamiques",
        "Ils permettent l'héritage multiple par défaut"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Un objet immuable ne change pas d'état après création, ce qui simplifie le raisonnement, garantit la sécurité en contexte multithread et facilite l'utilisation comme clé.</p>"
    },
    {
      "id": 24,
      "type": "POO",
      "title": "Qu'est-ce que la sérialisation ?",
      "choices": [
        "Processus de conversion d'un objet en une suite de bits pour stockage ou transmission",
        "Technique de composition d'objets",
        "Mécanisme de polymorphisme avancé",
        "Surcharge de méthodes à la volée"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La sérialisation transforme un objet en une représentation binaire ou textuelle pour le stocker ou le transmettre, la désérialisation reconstruisant l'objet.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "Le Clean Code": [
    {
      "id": 1,
      "type": "Le Clean Code",
      "title": "Qu'est-ce que le Clean Code ?",
      "choices": [
        "Outil de gestion de versions",
        "Framework de développement web",
        "Ensemble de pratiques visant à produire un code compréhensible, efficace et maintenable",
        "Méthode de tests unitaires automatisés"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le Clean Code est un ensemble de pratiques et de principes pour écrire un code lisible, maintenable et intuitif, popularisé par Robert C. Martin.</p>"
    },
    {
      "id": 2,
      "type": "Le Clean Code",
      "title": "Quel aspect suivant n'est PAS un principe du Clean Code ?",
      "choices": [
        "Gestion éthique des données",
        "Cohérence et intentionnalité",
        "Compression du code pour le rendre plus compact",
        "Simplicité du code"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le Clean Code met l'accent sur la simplicité, la cohérence et la responsabilité, mais pas sur la compression ou l'obfuscation du code.</p>"
    },
    {
      "id": 3,
      "type": "Le Clean Code",
      "title": "Quel nom de fonction respecte le mieux les bonnes pratiques de nommage en Python ?",
      "choices": [
        "articles()",
        "getArticles()",
        "calculate_total_price()",
        "proc()"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>calculate_total_price() utilise un verbe et un nom explicite, en snake_case, ce qui est conforme aux conventions Python.</p>"
    },
    {
      "id": 4,
      "type": "Le Clean Code",
      "title": "Selon le Clean Code, une fonction doit principalement :",
      "choices": [
        "Modifier des variables externes",
        "Mélanger plusieurs niveaux d'abstraction",
        "Faire plus de 30 lignes pour être complète",
        "Être courte (idéalement moins de 20 lignes) et accomplir une seule tâche"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Une fonction propre doit rester courte et ne faire qu'une seule chose, sans effets de bord.</p>"
    },
    {
      "id": 5,
      "type": "Le Clean Code",
      "title": "Que signifie l'acronyme SOLID ?",
      "choices": [
        "Ensemble de cinq principes de conception pour du code maintenable",
        "Cinq langages de programmation",
        "Cinq patterns de design",
        "Cinq outils de test"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>SOLID regroupe cinq principes (SRP, OCP, LSP, ISP, DIP) visant à améliorer la flexibilité et la maintenabilité.</p>"
    },
    {
      "id": 6,
      "type": "Le Clean Code",
      "title": "Que signifie le \"S\" dans SOLID ?",
      "choices": [
        "Simple Resource",
        "Single Responsibility Principle",
        "Solidarity",
        "Single Reuse"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le Single Responsibility Principle indique qu'une classe ne doit avoir qu'une seule raison de changer.</p>"
    },
    {
      "id": 7,
      "type": "Le Clean Code",
      "title": "Que stipule l'Open/Closed Principle (OCP) ?",
      "choices": [
        "Une classe doit être ouverte à la modification mais fermée à l’extension",
        "Il faut ségréguer les interfaces en plusieurs petites",
        "Une classe doit être ouverte à l’extension mais fermée à la modification",
        "Les dépendances doivent être inversées"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>L'OCP encourage l'ajout de fonctionnalités via l'extension plutôt que la modification du code existant.</p>"
    },
    {
      "id": 8,
      "type": "Le Clean Code",
      "title": "Que stipule le Liskov Substitution Principle (LSP) ?",
      "choices": [
        "Principe de responsabilité unique",
        "Les objets d'une classe dérivée doivent pouvoir remplacer ceux de la classe de base sans altérer le fonctionnement",
        "Il faut séparer les interfaces en plusieurs petites",
        "Les classes doivent être fermées à la modification"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le LSP garantit la substituabilité des sous-classes sans changer le comportement attendu.</p>"
    },
    {
      "id": 9,
      "type": "Le Clean Code",
      "title": "Selon l'Interface Segregation Principle (ISP), il est préférable :",
      "choices": [
        "De garder le code simple",
        "D'utiliser plusieurs interfaces spécifiques plutôt qu'une seule interface générale",
        "De séparer les sections de code par préoccupations",
        "De répéter le code pour plus de clarté"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>L'ISP déconseille les interfaces monolithiques et encourage des interfaces fines adaptées aux besoins.</p>"
    },
    {
      "id": 10,
      "type": "Le Clean Code",
      "title": "Que préconise le Dependency Inversion Principle (DIP) ?",
      "choices": [
        "Les fonctions doivent être pures et sans état",
        "Les modules de haut niveau doivent dépendre des abstractions, pas des modules de bas niveau",
        "Les modules de bas niveau doivent dépendre directement des modules de haut niveau",
        "Le code doit être toujours court"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le DIP recommande d'injecter des abstractions plutôt que d'utiliser directement des implémentations concrètes.</p>"
    },
    {
      "id": 11,
      "type": "Le Clean Code",
      "title": "Qu'est-ce que l'Inversion of Control (IoC) ?",
      "choices": [
        "Séparation des préoccupations",
        "Inversion du flux de contrôle géré par des frameworks ou conteneurs",
        "Inversion des dépendances",
        "Ségrégation des interfaces"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Avec l'IoC, ce ne sont plus les composants eux-mêmes qui contrôlent l'exécution, mais un conteneur ou un framework.</p>"
    },
    {
      "id": 12,
      "type": "Le Clean Code",
      "title": "Que signifie le principe de Separation of Concern (SoC) ?",
      "choices": [
        "Répéter moins souvent le code",
        "Garder le code simple",
        "Séparer le programme en sections distinctes par préoccupations",
        "Créer du code multi-plateformes"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Le SoC consiste à isoler les différentes préoccupations (UI, logique métier, accès aux données, etc.) pour réduire la complexité.</p>"
    },
    {
      "id": 13,
      "type": "Le Clean Code",
      "title": "Que stipule le principe DRY (Don't Repeat Yourself) ?",
      "choices": [
        "Utiliser des interfaces spécifiques",
        "Éviter de répéter une même information ou logique dans le code",
        "Garder le code aussi simple que possible",
        "Créer des classes open/closed"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le DRY vise à centraliser la logique pour éviter la duplication et réduire les erreurs de maintenance.</p>"
    },
    {
      "id": 14,
      "type": "Le Clean Code",
      "title": "Quel est le principe KISS ?",
      "choices": [
        "Ajouter des fonctionnalités dès que possible",
        "Séparer les préoccupations",
        "Injection des dépendances",
        "Garder le code aussi simple que possible"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>KISS (Keep It Simple, Stupid) encourage à privilégier des solutions simples et évite la complexité inutile.</p>"
    },
    {
      "id": 15,
      "type": "Le Clean Code",
      "title": "Que conseille le principe YAGNI (You Aren't Gonna Need It) ?",
      "choices": [
        "Documenter chaque fonction",
        "Ne pas ajouter de fonctionnalités tant qu'elles ne sont pas nécessaires",
        "Répéter du code pour faciliter les tests",
        "Garder le code KISS"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>YAGNI recommande de ne pas sur-architecturer ni implémenter de fonctionnalités avant qu'elles soient réellement utiles.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "Les bases de données": [
    {
      "id": 1,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une base de données ?",
      "choices": [
        "Un document texte contenant des informations brutes",
        "Un système organisé pour stocker, gérer et récupérer des données",
        "Un langage de programmation orienté données",
        "Un protocole de communication réseau"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Une base de données est un système conçu pour organiser, stocker, gérer et récupérer des données de façon efficace, garantissant intégrité et sécurité.</p>"
    },
    {
      "id": 2,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'un SGBD ?",
      "choices": [
        "Un logiciel pour créer, gérer et manipuler des bases de données",
        "Un type de base de données non structurée",
        "Un langage de requête spécialisé",
        "Un protocole réseau pour bases de données"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Un Système de Gestion de Base de Données (SGBD) est un ensemble de logiciels fournissant les outils pour créer, manipuler et sécuriser les bases de données.</p>"
    },
    {
      "id": 3,
      "type": "Les bases de données",
      "title": "Lequel des SGBD suivants est un exemple de SGBD NoSQL ?",
      "choices": [
        "MySQL",
        "PostgreSQL",
        "Microsoft SQL Server",
        "MongoDB"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>MongoDB est un SGBD NoSQL orienté documents JSON, offrant une grande flexibilité pour les données non structurées.</p>"
    },
    {
      "id": 4,
      "type": "Les bases de données",
      "title": "Quelle fonctionnalité fait partie des principales fonctionnalités d'un SGBD ?",
      "choices": [
        "Gestion des transactions",
        "Rendu graphique avancé",
        "Navigation web intégrée",
        "Programmation orientée objets"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La gestion des transactions permet de garantir l'atomicité et l'intégrité des opérations dans un SGBD.</p>"
    },
    {
      "id": 5,
      "type": "Les bases de données",
      "title": "Qu'est-ce que le SQL ?",
      "choices": [
        "Un protocole réseau pour bases de données",
        "Un langage standard pour interagir avec les bases de données relationnelles",
        "Un type de SGBD distribué",
        "Un modèle de données graphique"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>SQL (Structured Query Language) est le langage standard pour effectuer des opérations CRUD et des requêtes sur des bases de données relationnelles.</p>"
    },
    {
      "id": 6,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une table dans une base de données relationnelle ?",
      "choices": [
        "Un ensemble de scripts SQL",
        "Un modèle de données hiérarchique",
        "Un protocole de stockage de fichiers",
        "Une collection structurée en lignes et colonnes"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Une table organise les données en lignes (enregistrements) et colonnes (attributs) dans une base relationnelle.</p>"
    },
    {
      "id": 7,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une requête SQL ?",
      "choices": [
        "Un module du SGBD",
        "Une table temporaire",
        "Une instruction pour interroger ou manipuler les données",
        "Un type de sauvegarde"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une requête SQL est une instruction (SELECT, INSERT, UPDATE, DELETE…) utilisée pour manipuler ou interroger les données.</p>"
    },
    {
      "id": 8,
      "type": "Les bases de données",
      "title": "Quelle clause SQL permet de sélectionner des enregistrements ?",
      "choices": [
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La clause SELECT extrait des données d'une ou plusieurs tables selon les critères définis.</p>"
    },
    {
      "id": 9,
      "type": "Les bases de données",
      "title": "Quelle clause SQL permet d'insérer de nouveaux enregistrements ?",
      "choices": [
        "DROP",
        "UPDATE",
        "DELETE",
        "INSERT"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La clause INSERT INTO ajoute de nouveaux enregistrements dans une table.</p>"
    },
    {
      "id": 10,
      "type": "Les bases de données",
      "title": "Quelle clause SQL permet de mettre à jour des enregistrements existants ?",
      "choices": [
        "SELECT",
        "INSERT",
        "UPDATE",
        "CREATE"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La clause UPDATE modifie les valeurs des enregistrements qui correspondent aux conditions spécifiées.</p>"
    },
    {
      "id": 11,
      "type": "Les bases de données",
      "title": "Quelle clause SQL permet de supprimer des enregistrements ?",
      "choices": [
        "CREATE",
        "DELETE",
        "ALTER",
        "DROP"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La clause DELETE supprime les lignes correspondant aux critères donnés.</p>"
    },
    {
      "id": 12,
      "type": "Les bases de données",
      "title": "Quelle clause SQL permet de créer une nouvelle table ?",
      "choices": [
        "CREATE",
        "INSERT",
        "UPDATE",
        "DROP"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La clause CREATE TABLE définit la structure d'une nouvelle table dans la base de données.</p>"
    },
    {
      "id": 13,
      "type": "Les bases de données",
      "title": "Quelle clause SQL permet de supprimer une table entière ?",
      "choices": [
        "DELETE",
        "TRUNCATE",
        "ALTER",
        "DROP"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La clause DROP TABLE supprime complètement la table et toutes ses données.</p>"
    },
    {
      "id": 14,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une clé primaire ?",
      "choices": [
        "Un index non unique",
        "Un champ identifiant de façon unique chaque enregistrement",
        "Un type de vue SQL",
        "Une contrainte d'intégrité référentielle"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La clé primaire garantit l'unicité de chaque enregistrement dans une table.</p>"
    },
    {
      "id": 15,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une clé étrangère ?",
      "choices": [
        "Une clé privée stockée hors de la base",
        "Un index pour accélérer les requêtes",
        "Un champ référant à la clé primaire d'une autre table",
        "Un type de transaction"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une clé étrangère lie un enregistrement à la clé primaire d'une autre table pour maintenir l'intégrité référentielle.</p>"
    },
    {
      "id": 16,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une relation one-to-one ?",
      "choices": [
        "Chaque enregistrement d'une table correspond à un seul de l'autre table",
        "Chaque enregistrement de la table A peut correspondre à plusieurs de la table B",
        "Plusieurs enregistrements de la table A correspondent à plusieurs de la table B",
        "Aucune relation n'existe entre les tables"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Une relation un-à-un lie chaque enregistrement de la première table à un unique enregistrement de la seconde.</p>"
    },
    {
      "id": 17,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une relation one-to-many ?",
      "choices": [
        "Chaque enregistrement des deux tables est isolé",
        "Plusieurs enregistrements de la table B correspondent à un seul de la table A",
        "Chaque enregistrement d'une table ne peut pas correspondre à l'autre",
        "Un enregistrement de la table A correspond à plusieurs de la table B"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Une relation un-à-plusieurs lie une ligne de la table A à plusieurs lignes de la table B.</p>"
    },
    {
      "id": 18,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une relation many-to-many ?",
      "choices": [
        "Chaque enregistrement reste indépendant",
        "Chaque enregistrement de A correspond à un de B",
        "Chaque enregistrement de A peut correspondre à plusieurs de B, et vice versa",
        "Relation triviale sans table d'association"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Une relation plusieurs-à-plusieurs nécessite une table d'association pour lier les enregistrements entre les deux tables.</p>"
    },
    {
      "id": 19,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une table d'association ?",
      "choices": [
        "Une vue matérialisée",
        "Un index spécialisé",
        "Une table temporaire",
        "Une table qui lie deux tables dans une relation many-to-many"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La table d'association contient des clés étrangères vers les deux tables pour représenter la relation many-to-many.</p>"
    },
    {
      "id": 20,
      "type": "Les bases de données",
      "title": "Qu'est-ce qu'une jointure INNER JOIN ?",
      "choices": [
        "Retourne toutes les lignes de la table de gauche",
        "Retourne toutes les combinaisons possibles",
        "Retourne les enregistrements présents dans les deux tables",
        "Retourne toutes les lignes de la table de droite"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>L'INNER JOIN renvoie uniquement les lignes qui satisfont la condition de jointure dans les deux tables.</p>"
    },
    {
      "id": 21,
      "type": "Les bases de données",
      "title": "Que signifie l’acronyme CRUD ?",
      "choices": [
        "Copy, Run, Update, Delete",
        "Create, Read, Update, Delete",
        "Compute, Retrieve, Update, Drop",
        "Create, Replace, Undo, Delete"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>CRUD représente les opérations fondamentales Create, Read, Update et Delete sur les données.</p>"
    },
    {
      "id": 22,
      "type": "Les bases de données",
      "title": "Qu'est-ce que la normalisation d'une base de données ?",
      "choices": [
        "Processus de structuration pour réduire la redondance et améliorer l'intégrité",
        "Compression des données pour gagner de l'espace",
        "Cryptage des données sensibles",
        "Partitionnement physique des fichiers"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La normalisation organise les données en tables et relations pour éviter les anomalies et améliorer la cohérence.</p>"
    },
    {
      "id": 23,
      "type": "Les bases de données",
      "title": "Qu’exige la première forme normale (1NF) ?",
      "choices": [
        "Que la table ait une clé primaire",
        "Que chaque table ait au moins deux colonnes",
        "Que chaque colonne contienne une valeur atomique",
        "Que les tables soient partitionnées"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La 1NF impose que chaque colonne ne contienne qu’une seule valeur non composite.</p>"
    },
    {
      "id": 24,
      "type": "Les bases de données",
      "title": "Qu’exige la deuxième forme normale (2NF) ?",
      "choices": [
        "Que la table soit en 3NF",
        "Que chaque colonne soit unique",
        "Que la table n’ait qu’une colonne",
        "Que tous les attributs non-clefs dépendent entièrement de la clé primaire"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La 2NF élimine les dépendances partielles en exigeant que tous les attributs non-clefs dépendent de la totalité de la clé primaire.</p>"
    },
    {
      "id": 25,
      "type": "Les bases de données",
      "title": "Qu’exige la troisième forme normale (3NF) ?",
      "choices": [
        "Que la table soit en BCNF",
        "Qu’aucun attribut non-clef ne dépende d’un autre attribut non-clef",
        "Que chaque colonne soit indexée",
        "Que la table n’ait pas de clés étrangères"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>La 3NF supprime les dépendances transitives : aucun attribut non-clef ne doit dépendre d’un autre attribut non-clef.</p>"
    },
    {
      "id": 26,
      "type": "Les bases de données",
      "title": "Quelle contrainte garantit l’intégrité référentielle ?",
      "choices": [
        "Intégrité de domaine",
        "Intégrité d’entité",
        "Intégrité de transaction",
        "Contrainte de clé étrangère"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>La contrainte de clé étrangère assure que chaque valeur référencée existe dans la clé primaire de la table liée, maintenant la cohérence entre tables.</p>"
    }
  ]
,
      // Ajouter d'autres sujets ici
      "Le projet et les méthodes": [
    {
      "id": 1,
      "type": "Le projet et les méthodes",
      "title": "Qu'est-ce qu'un diagramme de Gantt ?",
      "choices": [
        "Un tableau de bord agile reposant sur des cartes",
        "Un graphique à barres horizontales représentant l'avancement des tâches d’un projet",
        "Un modèle linéaire de gestion de projet",
        "Un diagramme de flux de données"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Un diagramme de Gantt se présente sous forme de barres horizontales où l’axe horizontal est le temps et l’axe vertical liste les tâches, permettant de visualiser l’avancement du projet.</p>"
    },
    {
      "id": 2,
      "type": "Le projet et les méthodes",
      "title": "Quel est l'inconvénient principal d'un diagramme de Gantt pour les projets complexes ?",
      "choices": [
        "Il devient difficile à gérer et à lire",
        "Il ne permet pas d’estimer la durée des tâches",
        "Il ne montre pas les dépendances entre les tâches",
        "Il ne facilite pas l’allocation des ressources"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Pour les projets complexes, le diagramme de Gantt peut devenir surchargé et peu lisible, ce qui complique sa gestion.</p>"
    },
    {
      "id": 3,
      "type": "Le projet et les méthodes",
      "title": "Qu'est-ce qu'un tableau Kanban ?",
      "choices": [
        "Une méthode de développement logiciel en sprints",
        "Un diagramme de flux de données",
        "Une méthodologie de gestion séquentielle",
        "Un outil visuel de gestion de projet représentant le flux de travail par colonnes"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>Le tableau Kanban utilise des colonnes (À faire, En cours, Terminé) et des cartes pour visualiser et optimiser le flux de travail.</p>"
    },
    {
      "id": 4,
      "type": "Le projet et les méthodes",
      "title": "Quelle pratique permet d'éviter la surcharge de travail dans un tableau Kanban ?",
      "choices": [
        "Établir des limites de WIP pour chaque colonne",
        "Planifier des sprints de deux semaines",
        "Effectuer un refactoring régulier",
        "Mettre en place un déploiement continu"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les WIP limits (Work In Progress) limitent le nombre de tâches simultanées dans chaque colonne pour éviter la surcharge.</p>"
    },
    {
      "id": 5,
      "type": "Le projet et les méthodes",
      "title": "Quel est le caractère principal de la méthode Agile ?",
      "choices": [
        "Un modèle linéaire avec phases descendantes et ascendantes",
        "Une approche de modélisation des données",
        "Une approche itérative et collaborative basée sur des cycles courts",
        "Un outil de visualisation en colonnes"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La méthode Agile repose sur des itérations courtes (« sprints ») et la collaboration continue entre équipes et clients.</p>"
    },
    {
      "id": 6,
      "type": "Le projet et les méthodes",
      "title": "Combien de principes composent la méthode Agile selon le Manifeste Agile ?",
      "choices": [
        "10",
        "14",
        "12",
        "16"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>La méthode Agile est guidée par 12 principes fondamentaux issus du Manifeste Agile de 2001.</p>"
    },
    {
      "id": 7,
      "type": "Le projet et les méthodes",
      "title": "Comment se caractérise la méthode en V dans la gestion de projet ?",
      "choices": [
        "Un cycle linéaire où chaque phase de conception correspond à une phase de test",
        "Une approche itérative et collaborative",
        "Un tableau visuel de gestion du flux de travail",
        "Une architecture logicielle modulaire"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>La méthode en V associe chaque phase de spécification et de conception à une phase de test correspondante, garantissant la validation de chaque exigence.</p>"
    },
    {
      "id": 8,
      "type": "Le projet et les méthodes",
      "title": "Quelles sont les trois phases principales de la méthode Merise ?",
      "choices": [
        "Planification, exécution, clôture",
        "Analyse, conception, réalisation",
        "Définition, développement, maintenance",
        "Spécification, validation, déploiement"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Merise se divise en trois phases : analyse des besoins et modélisation des données, conception détaillée, puis réalisation et implémentation.</p>"
    },
    {
      "id": 9,
      "type": "Le projet et les méthodes",
      "title": "Qu'est-ce qu'une architecture monolithique ?",
      "choices": [
        "Une application conçue comme un ensemble de microservices faiblement couplés",
        "Une application regroupée en couches horizontales",
        "Une application unique et autonome où tous les composants sont fortement interdépendants",
        "Une architecture basée sur la production et la consommation d'événements"
      ],
      "answer": [2],
      "explanation": "<h4>Explication</h4><p>Dans une architecture monolithique, tous les modules et services sont intégrés dans une seule application déployée comme une unité unique.</p>"
    },
    {
      "id": 10,
      "type": "Le projet et les méthodes",
      "title": "Quel est l'objectif principal du refactoring ?",
      "choices": [
        "Ajouter de nouvelles fonctionnalités",
        "Restructurer le code existant sans modifier son comportement externe",
        "Déployer l’application en continu",
        "Définir l’architecture logicielle"
      ],
      "answer": [1],
      "explanation": "<h4>Explication</h4><p>Le refactoring améliore la structure et la lisibilité du code existant sans altérer son comportement fonctionnel.</p>"
    },
    {
      "id": 11,
      "type": "Le projet et les méthodes",
      "title": "Quel est l’avantage principal d’une architecture microservices ?",
      "choices": [
        "Permettre le déploiement et la mise à l’échelle indépendants de chaque service",
        "Regrouper tous les composants en une seule unité déployable",
        "Organiser le code en couches horizontales",
        "S’appuyer sur une séquence linéaire de phases"
      ],
      "answer": [0],
      "explanation": "<h4>Explication</h4><p>Les microservices sont indépendants et faiblement couplés, ce qui permet de les développer, déployer et mettre à l’échelle séparément.</p>"
    },
    {
      "id": 12,
      "type": "Le projet et les méthodes",
      "title": "Quelle architecture est organisée en couches horizontales typiquement nommées IHM, BO, DAL, BLL ?",
      "choices": [
        "Architecture événementielle",
        "Architecture microservices",
        "Architecture modulaire",
        "Architecture en couches"
      ],
      "answer": [3],
      "explanation": "<h4>Explication</h4><p>L'architecture en couches divise le système en niveaux (présentation, logique métier, accès aux données, etc.) pour séparer les responsabilités.</p>"
    }
  ]
    };
