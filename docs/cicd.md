Intégration Continue et 
Déploiement Continu


## Présentation du formateur

- Loïc Rossignol
- + de 12 ans d’expérience en IT
- Responsable ingénierie projet et Manager d’équipe
- Formateur :

- 
- 

IPI : AWS, Docker, Ansible, Terraform, DevOps, Kanban et Scrum
Thales : DevOps, Lean/Agilité et Air Trafﬁc Management

- Badminton, plongée

https://www.linkedin.com/in/loicrossignol/

Loïc Rossignol - Déploiement continu – IINF170



Disclaimer

- Première version de la formation
- Il n’est pas possible de voir tous les concepts de CI/CD, déploiement,
toutes les conﬁgurations des outils etc. pour la durée du module
- Cette formation se concentre sur Gitlab et Jenkins mais il existe une

multitude d’outils

Loïc Rossignol - Déploiement continu – IINF170



Tour de table

- Prénom / Nom
- Mon expérience avec la pratique de CI/CD
- Mes attentes vis-à-vis de cette formation
- Autres choses ?
- Passions, loisirs, etc.

Loïc Rossignol - Déploiement continu – IINF170



## Objectifs globaux de la formation

- Comprendre ce qu’est le DevOps
- Utiliser le protocole GIT
- (Re)Découvrir les stratégies de déploiement
- Installer, conﬁgurer et utiliser des outils d’intégration et

déploiement continu comme Gitlab CI ou Jenkins

Loïc Rossignol - Déploiement continu – IINF170



Evaluation du module

Un dépôt GitHub par apprenant :

- Compte Rendu d’installation de GitLab et Jenkins
- Compte Rendu d’installation des plugins Jenkins
- Compte Rendu de déploiement d’une application sur Gitlab

- 

Incluant les commandes, les codes, etc.

- Compte Rendu de déploiement d’une application sur Jenkins

- 

Incluant les commandes, les codes, etc.

Format : Markdown et Mermaid (Si schémas)

Attention : certains TP contiennent des erreurs, mettre en lumière les 
corrections (blocs de citation)

Loïc Rossignol - Déploiement continu – IINF170



Sommaire

- 
- 

# Introduction
# Les concepts clés

Le DevOps
# Le DevSecOps

- 
- 
- Quelques pratiques DevOps

■
■
■
■
■
■
■

Intégration continue, livraison continue, déploiement continu
# Les tests
Le Post-Mortem
# L'ingénierie du chaos
Les stratégies de déploiements
L’Infrastructure as Code
# Le GitOps
# La mise en pratique des outils

- 

- Git
- Gitlab
- 

# Jenkins

Loïc Rossignol - Déploiement continu – IINF170



# Les concepts clés


## Objectifs du chapitre

- (Re)Découvrir qu’est-ce que le DevOps et quelques unes de ses

pratiques

- (Re)Découvrir les stratégies de déploiement
- Déﬁnir le concept de GitOps

Loïc Rossignol - Déploiement continu – IINF170



# DevOps


Une définition du Devops

- DevOps est une approche culturelle et une pratique qui vise à

améliorer la collaboration, la communication et la coopération entre 
les équipes de développement (Dev) et les équipes d'exploitation 
(Ops) au sein d'une organisation informatique.

- L'objectif principal de DevOps est de briser les silos traditionnels entre
ces deux équipes, de rationaliser les processus de développement et 
de déploiement de logiciels et de fournir des produits et des services 
de haute qualité plus
rapidement et plus efﬁcacement aux clients.

Loïc Rossignol - Déploiement continu – IINF170



Le mur de la confusion

Barrière symbolique entre les équipes de 
développement (Dev) et d’exploitation 
(Ops), où les responsabilités et objectifs 
divergent.

Conséquences

- Déploiements risqués et imprévisibles
- 
- 

Allongement des délais de mise en production
Augmentation des incidents en prod
Méﬁance entre Dev & Ops

Origine du problème

Solution (DevOps)

- Développement (Dev) : livrer vite de nouvelles

- 

- 

fonctionnalités
Exploitation (Ops) : garantir stabilité, sécurité 
et disponibilité
Communication limitée : transfert de 
responsabilités unilatéral

- 
Collaboration continue : pas de silos
- 
Automatisation des tests, CI/CD
- 
Surveillance et feedback en continu
- Objectifs communs centrés sur la valeur

utilisateur

Loïc Rossignol - Déploiement continu – IINF170



Les piliers du DevOps : Le framework CALMS

# DevOps

n
o

i
t

a
s
i
t

a
m
o
u
A

t

n
a
e
L

t

n
e
m
e
r
u
s
a
e
M

g
n
i
r
a
h
S

Culture

Loïc Rossignol - Déploiement continu – IINF170


 

Culture

- Collaboration et communication entre les équipes de

développement et d'exploitation.

- Partage d'une responsabilité commune pour la réussite du produit.

- Adoption d'une culture d'apprentissage et d'amélioration continue.

Loïc Rossignol - Déploiement continu – IINF170



L’Automatisation

- Automatisation des tâches répétitives et manuelles du

cycle de vie du développement logiciel.

- Mise en place d'une infrastructure et de processus

d'automatisation robustes.

- Utilisation d'outils et de technologies pour automatiser les

tests, la livraison et le déploiement.

Loïc Rossignol - Déploiement continu – IINF170



Lean

- Application des principes du Lean manufacturing au

développement logiciel (Lean IT)

- Réduction des gaspillages et des inefﬁcacités dans le

processus de développement.

- Concentration sur la création de valeur pour le client.

Loïc Rossignol - Déploiement continu – IINF170



Mesure (Measurement)

- Collecte et analyse de données pour mesurer les

performances du système et du processus.

- Identiﬁcation des goulots d'étranglement et des points

d'amélioration.

- Utilisation des données pour prendre des décisions

éclairées.

Loïc Rossignol - Déploiement continu – IINF170



Le Partage (Sharing)

- Partage des connaissances et des meilleures pratiques

entre les équipes.

- Création d'une communauté d'apprentissage et

d'entraide.

- Adoption d'une approche transparente et ouverte.

Loïc Rossignol - Déploiement continu – IINF170



La boucle du DevOps

Loïc Rossignol - Déploiement continu – IINF170



# Le DevSecOps


## Définition

- DevSecOps est un terme utilisé pour décrire l'intégration de

pratiques de sécurité dans le processus de développement et de 
déploiement d'applications dans un environnement DevOps.

- Il s'agit d'une approche collaborative qui vise à intégrer la sécurité
dès le début du cycle de vie de développement logiciel, plutôt que 
de la considérer comme une étape séparée à la ﬁn du processus.

Loïc Rossignol - Déploiement continu – IINF170



# Le DevSecOps

SEC

Loïc Rossignol - Déploiement continu – IINF170



Les objectifs du DevSecOps

- Créer des applications plus sûres et plus ﬁables en
intégrant des pratiques de sécurité telles que :
- 
- 
- 
- Et la réponse aux incidents dans le processus de développement continu (CI/CD).

L'analyse de code
La gestion des vulnérabilités
La surveillance de la sécurité

- En intégrant la sécurité dans le processus de

développement, les équipes peuvent détecter et corriger 
les vulnérabilités plus tôt, réduire les risques de sécurité et 
accélérer le déploiement des applications.

Loïc Rossignol - Déploiement continu – IINF170



SAST : Static Application Security Testing

- Analyse de code statique des applications
- Méthode de test de sécurité qui analyse le code source d'une

application sans l'exécuter

- Recherche de patterns de développement connus pour être à

l'origine de vulnérabilités

- Ils peuvent également rechercher des failles de conﬁguration

et
d'autres problèmes de sécurité

- Exemples de produits : Coverity, Fortify, Checkmarx et

AppScan

Loïc Rossignol - Déploiement continu – IINF170



DAST : Dynamic Application Security Testing

- Tests dynamiques de sécurité des applications
- Méthode de test de sécurité qui analyse une application en

cours

- d'exécution.
- Les outils DAST simulent des attaques contre l'application.
- Ils peuvent :

Envoyer des requêtes malveillantes
Tenter de s'inﬁltrer dans l'application

- 
- 
- Détourner son fonctionnement.

- Exemples de produits : Acunetix, Nessus, Burp Suite et

AppScan

Loïc Rossignol - Déploiement continu – IINF170



SCA : Software Composition Analysis

- Analyse de composition logicielle

- Consiste à examiner les logiciels pour identiﬁer les

composants tiers qu'ils utilisent :
- Bibliothèques open source
- 
- Modules

Frameworks

- Exemples de produits : Snyk, Black Duck et OWASP

Dependency-Check 

Loïc Rossignol - Déploiement continu – IINF170



Pyramide des outils de test de sécurité applicative

Loïc Rossignol - Déploiement continu – IINF170



# Quelques pratiques DevOps


Savez-vous différencier intégration 
continue, livraison continue et 
déploiement continu ?

Loïc Rossignol - Déploiement continu – IINF170



L’intégration continue

- 

- 

L'intégration continue (CI) est une pratique de développement logiciel dans laquelle les 
développeurs intègrent régulièrement leur code dans un référentiel central

L'objectif principal de l'intégration continue est de détecter et de corriger les problèmes 
d'intégration le plus tôt possible dans le processus de développement

- Des builds et des tests automatisés sont exécutés dans le référentiel central

- 

- 

Les outils d'intégration continue tels que Jenkins, Travis CI, CircleCI, GitLab CI/CD, etc., 
permettent d'automatiser les tâches de build, de test et de déploiement

Les pipelines d'intégration continue peuvent être déclenchés par des événements tels que 
l'envoi de code, la création d'une demande d'extraction ou la planiﬁcation d'une tâche de build 
périodique

Loïc Rossignol - Déploiement continu – IINF170



La livraison continue

- La livraison continue (Continuous Delivery, CD) est une pratique de
développement logiciel qui vise à automatiser le processus de
livraison de logiciels, de manière à ce que les modiﬁcations de code
puissent être livrées rapidement, facilement et de manière ﬁable à
tout moment.

- La livraison continue se concentre sur la création d'un pipeline de
livraison automatisé qui permet aux modiﬁcations de code d'être
testées, validées et déployées en production en un seul clic ou en 
une seule commande.

Loïc Rossignol - Déploiement continu – IINF170



Le déploiement continu

- 

- 

- 

Le déploiement continu (CD) est une pratique de développement logiciel qui consiste 
à déployer automatiquement les modiﬁcations de code validées en production, de 
manière continue et ﬁable.
Le déploiement continu est une extension naturelle de l'intégration continue (CI), qui 
se concentre sur la validation automatisée des modiﬁcations de code.
Le processus de déploiement continu implique généralement les étapes suivantes :

- 

- 

- 

- 

Les modiﬁcations de code sont validées à l'aide de tests automatisés dans un environnement 
d'intégration continue.
Si les tests sont réussis, les modiﬁcations de code sont automatiquement déployées dans un 
environnement de pré-production pour des tests supplémentaires.
Si les tests en pré-production sont réussis, les modiﬁcations de code sont automatiquement 
déployées en production.
Si des problèmes sont détectés à n'importe quelle étape du processus, le déploiement est 
arrêté et les développeurs sont alertés pour résoudre les problèmes.

- Cela nécessite une culture de développement solide axée sur l'automatisation, la

surveillance et la collaboration

Loïc Rossignol - Déploiement continu – IINF170



## Synthèse

Loïc Rossignol - Déploiement continu – IINF170



# Les tests


Le «Shift left»

 Le « Shift Left » est une approche de développement logiciel qui consiste à déplacer 
les activités de test et de validation vers la gauche du cycle de vie de développement 
logiciel, c'est-à-dire plus tôt dans le processus de développement.

- Détecter et de corriger les erreurs et les défauts le plus tôt possible
- Réduction des coûts et des délais de développement
- Amélioration de la qualité du logiciel
- Réduction des risques de sécurité (correction des vulnérabilités de sécurité au

plus tôt)

Loïc Rossignol - Déploiement continu – IINF170



LEFT

RIGHT

«Shift Left» VS «Shift Right»

 Le « Shift Left » est une approche de 
développement logiciel qui consiste à déplacer 
les activités de test et de validation vers la 
gauche du cycle de vie de développement 
logiciel, c'est-à-dire plus tôt dans le processus 
de développement.

- Détecter et de corriger les erreurs et les

défauts le plus tôt possible

- Réduction des coûts et des délais de

développement

- Amélioration de la qualité du logiciel
- Réduction des risques de sécurité

(correction

Loïc Rossignol - Déploiement continu – IINF170



Les tests automatiques

Types de tests automatisés

## Bonnes pratiques

- 

- 

- 

- 

Unitaires : testent des fonctions/méthodes isolées

- 

Couvrir 80% du code critique par des tests

Intégration : testent la communication entre modules

Fonctionnels / E2E : testent le comportement global 
de l’application

Tests de performance : mesurent la rapidité et la 
charge

- Maintenir des tests rapides et fiables

- 

Intégrer des tests dans tous les environnements (dev, 
staging, prod)

Intégration dans DevOps

- 

- 

- 

Exécution automatique à chaque commit ou PR

Inclusion dans les pipelines CI/CD (ex : Jenkins, 
GitLab CI)

Déclenche alertes ou rollback en cas d’échec

Loïc Rossignol - Déploiement continu – IINF170



# Le “Post-Mortem”


## Définition

Le post mortem est une pratique de rétrospective qui 
consiste à analyser les incidents de production et les 
problèmes rencontrés dans le processus de développement 
et de déploiement de logiciels, dans le but d'identiﬁer les 
causes profondes et de trouver des moyens d'améliorer les 
processus et les pratiques.

Loïc Rossignol - Déploiement continu – IINF170



Les étapes d’un “Post-Mortem”

Loïc Rossignol - Déploiement continu – IINF170



# L'ingénierie du chaos


## Définition

- Également connue sous le nom de "Chaos Engineering", il s’agit d’une
discipline de l'informatique qui consiste à tester intentionnellement la 
résilience et la ﬁabilité d'un système en provoquant des défaillances, des 
perturbations ou des conditions imprévues dans un environnement 
contrôlé.

- L'objectif principal de l'ingénierie du chaos est d'identiﬁer et de corriger les

vulnérabilités et les faiblesses d'un système avant qu'elles ne deviennent des 
problèmes majeurs en production, améliorant ainsi la disponibilité et la 
robustesse globales du système.

Loïc Rossignol - Déploiement continu – IINF170



Principes clés

- Déﬁnir une hypothèse : “Que se passe-t-il si ce service

tombe ?”  

- Introduire des perturbations contrôlées : coupure réseau,

surcharge CPU, panne d’un nœud…  

- Observer le comportement réel : monitoring, logs, alertes.
- Améliorer : renforcer l’architecture et les processus

d’incident.

Loïc Rossignol - Déploiement continu – IINF170



Bénéfices

- Identiﬁer les points faibles avant qu’ils ne causent une

panne réelle.  

- Augmenter la conﬁance dans le système en production.
- Former les équipes à la gestion de crise.
- Favoriser une culture d’amélioration continue et de

résilience.  

Loïc Rossignol - Déploiement continu – IINF170



# Les stratégies de déploiement


Le Blue-Green

- 

- 

Stratégie de déploiement utilisant deux environnements identiques (Bleu et Vert).

Pendant que l'un sert le traﬁc production (Bleu), l'autre reçoit la nouvelle version (Vert). 

- Une fois validée, on bascule instantanément tout le traﬁc vers le nouvel environnement, permettant

un rollback immédiat si nécessaire.

## Avantages

## Inconvénients

Bascule instantanée

Coût : nécessite doubler l'infrastructure

Rollback immédiat

Complexité : gestion de deux environnements

Tests en conditions réelles : validation sur 

Base de données : plus complexe à gérer avec des 

l'infrastructure de production

changements de schéma

Réduction des risques : isolation complète entre les 

versions

Loïc Rossignol - Déploiement continu – IINF170



Le Canary
- 

Le déploiement Canary consiste à déployer progressivement une nouvelle version en 

l'exposant d'abord à un petit pourcentage d'utilisateurs.

## Avantages

## Inconvénients

Risque limité : impact réduit en cas de bug

Complexité technique (Routage sophistiqué, Monitoring 

avancé, Gestion des sessions utilisateurs, etc.)

Détection rapide : problèmes identiﬁés sur un petit échantillon

Expérience utilisateur inconsistante (Support client compliqué, 

Versions différentes, Bugs partiels, etc.)

Feedback utilisateur : retours sur une population limitée

Gestion des données (Migration de schéma, Cohérence des 

données, Synchronisation, etc.)

Coût réduit : pas besoin de doubler l'infrastructure

Complexité de rollback

Validation progressive : conﬁance qui augmente 
graduellement

Tests incomplets (tests de charge, etc.)

Loïc Rossignol - Déploiement continu – IINF170



Le Rolling

- Mise à jour des serveurs un par un (ou par petits groupes) en séquence.

- On remplace progressivement chaque instance de l'ancienne version par la nouvelle, en maintenant

le service disponible pendant tout le processus.

## Avantages

## Inconvénients

Économique (utilise infrastructure existante)

Versions mixtes temporaires

Simple à comprendre et implémenter

Rollback lent et complexe

Pas de duplication de ressources

Problèmes de compatibilité possibles

Déploiement automatisable

Impact progressif mais inévitable

Adapté aux petites équipes

Difﬁcile de tester toutes les combinaisons

Loïc Rossignol - Déploiement continu – IINF170



# Le GitOps


## Définition

- Méthodologie de gestion d’infrastructure et d’applications qui

utilise Git (source de vérité) pour stocker et gérer la 
conﬁguration de l’infrastructure et des applications
- Déﬁnition de l’état souhaité de l’infrastructure et des

applications

- Suivre les modiﬁcations apportées
- Déployer les modiﬁcations de manière automatisée et ﬁable
- Quelques outils du GitOps : ArgoCD, FluxCD et Kustomize

Loïc Rossignol - Déploiement continu – IINF170



Représentation schématique

Loïc Rossignol - Déploiement continu – IINF170



# La mise en pratique des outils


## Objectifs du chapitre

- Utiliser le protocole Git aﬁn d'interagir avec un dépôt Git
- Découvrir les fonctionnalités et l'écosystème de l’outil Gitlab CI
- Déployer une application avec Gitlab CI
- Découvrir les fonctionnalités et l'écosystème de l’outil Jenkins
- Déployer une application avec Jenkins

Loïc Rossignol - Déploiement continu – IINF170



## Synthèse des produits sur le marché

Loïc Rossignol - Déploiement continu – IINF170



# Git


Git : Un système de contrôle de version

- Conçu pour gérer efﬁcacement le développement de

projets logiciels

- Git permet à plusieurs personnes de travailler

simultanément sur un projet :
- En suivant les modiﬁcations apportées aux ﬁchiers
- En fusionnant les changements
- Et en conservant l'historique des versions.

Loïc Rossignol - Déploiement continu – IINF170



## Glossaire

- Repository (Repo) : Dépôt de code source versionné. Peut être public ou

privé.

- Commit : Enregistrement d’un ensemble de modiﬁcations dans Git.
- Branch : Branche parallèle de développement (ex: main, dev, feature/xyz).
- Merge : Fusion d’une branche dans une autre.
- Merge Request (MR) : Demande de fusion d’une branche dans une autre

via GitLab, avec revue de code.

- Fork : Copie d’un repo pour modiﬁcation personnelle avant de proposer

une MR.

- Rebase : Ré-applique les commits d’une branche par-dessus une autre

(réécriture propre).

- Conﬂict : Conﬂit entre deux branches lors d’un merge ou rebase. Doit

être résolu manuellement.

Loïc Rossignol - Déploiement continu – IINF170



Installation et configuration


## LAB
Installation et configuration de Git

https://github.com/formationrossignol/tp-cicd/blob/main/installation-git.md


UTILISATION


LES BASES DE GIT

Conﬁguration des outils (conﬁgurer les informations de l’utilisateur)

git config --global user.name «[nom]»

git config --global user.email «[adresse 
email]»

Création des dépôts

git init [nom-du-projet]
Créer un dépôt local

Effectuer des changements

git clone [url]
Télécharge un projet existant

git status
Liste les nouveaux ﬁchiers et les ﬁchiers modiﬁés

git add [fichier]
Ajouter le ﬁchier en préparation pour le suivi de version

git reset
Enlève le ﬁchier de l’index

git diff
Montre les modiﬁcations de ﬁchiers qui ne sont pas 
encore indexées

git diff --staged
Montre les différences de ﬁchiers entre la version 
indexée et la dernière version

git commit –m «[message de commit]»
Enregistre des instantanés de ﬁchiers dans l’historique 
des versions



LES BASES DE GIT

Grouper les changements

git branch
Liste toutes les branches locales

git checkout [nom-de-branche]
Bascule sur la branche spéciﬁée

git branch –d [nom-de-branche]
Supprime la branche spéciﬁée

git branch [nom-de-branche]
Crée une nouvelle branche

git merge [nom-de-branche]
Combine dans la branche courante l’historique de la branche
spéciﬁée

Changements au niveau des noms de ﬁchiers

git rm [fichier]
Supprime le ﬁchier du répertoire de travail

git mv [nom-fichier] [nouveau-nom-fichier]
Renomme le ﬁchier

Enregistrer des fragments

git stash
Enregistre de manière temporaire tous les ﬁchiers

git stash pop
Applique une remise et la supprimer immédiatement

git stash list
Liste toute les remises

git stash drop
Supprime la remise la plus récente



LES BASES DE GIT

Vériﬁer l’historique des versions

git log
Montre l’historique dans la branche courante
git diff [premiere-branche] [deuxième-branche]
Montre les différences entre deux branches
Refaire des commits

git reset [commit]
Annule tous les commits en conservant les modifications 
localement
Synchroniser les changements

git fetch [nom-dépôt]
Récupère tout l’historique
git push [nom-branche]
Envoie tous les commits de la branche vers le dépot

git show [commit]
Crée une nouvelle branche

git reset --hard [commit]
Supprime tout l’historique et les modifications effectuées

git merge [nom-dépôt]/[branche]
Fusionne la branche du dépôt dans la branche locale courante
git pull
Récupère tout l’historique du dépôt et incorpore les
modifications



## SYNTHÈSE

Copie de travail

index

Dépôt local

Dépôt distant

ad
d

clone

commit

pul
l

push

fetch



Git init

Loïc Rossignol - Déploiement continu – IINF170



Git config

Loïc Rossignol - Déploiement continu – IINF170



Git clone

Loïc Rossignol - Déploiement continu – IINF170



Git status

Loïc Rossignol - Déploiement continu – IINF170



Git add

Loïc Rossignol - Déploiement continu – IINF170



Git diff

Loïc Rossignol - Déploiement continu – IINF170



Git commit

Loïc Rossignol - Déploiement continu – IINF170



Git log

Loïc Rossignol - Déploiement continu – IINF170



# Gitlab


## Présentation du produit

GitLab est une plateforme DevSecOps qui centralise la gestion du code, 
l’intégration continue, le déploiement, et la sécurité.

Principales fonctionnalités

- 

- 

- 

- 

- 

Gestion du code source (Git, branches, merge requests)

CI/CD intégré pour automatiser les builds, tests et déploiements

Suivi des issues & Kanban pour la gestion de projets Agile

Intégration de la sécurité (SAST, DAST, container scanning)

Registry pour images Docker et packages

- Observabilité : monitoring et alertes intégrés

Loïc Rossignol - Déploiement continu – IINF170



Le glossaire

- Pipeline : Enchaînement de jobs automatisés (build, test, deploy) déﬁnis dans

.gitlab-ci.yml.
Job : Tâche unique dans un pipeline (ex: "run tests", "build image").
Stage : Groupe de jobs exécutés en parallèle ou séquentiellement (build, test, deploy).

- 
- 
- Runner : Agent d’exécution des jobs GitLab CI. Peut être shared ou custom.
- Artifacts : Fichiers générés par un job et partagés avec d’autres jobs.
- Cache : Mécanisme pour réutiliser des ﬁchiers entre jobs (ex: dépendances).
- Variables CI/CD : Variables d’environnement disponibles dans les jobs (ex: secrets,

tokens).

Trigger : Mécanisme pour démarrer un pipeline via une API ou un événement externe.

- Manual Job : Job déclenché manuellement dans l’interface GitLab.
- 
- Environment : Environnement de déploiement (ex: staging, production).
- Review App : Environnement temporaire créé automatiquement à partir d’une

branche ou MR.

- Auto DevOps : Pipeline CI/CD préconﬁguré pour simpliﬁer le déploiement automatisé.

Loïc Rossignol - Déploiement continu – IINF170



## Architecture


# Introduction

- GitLab est une application monolithique Ruby on Rails (frontend en

Vue.js, backend Ruby + Go).

- Déployable en self-managed (on-premise) ou en SaaS (gitlab.com).
- Organisation modulaire : chaque service a un rôle précis (web, API,

jobs, stockage, CI/CD).

Loïc Rossignol - Déploiement continu – IINF170



Les principaux composants

- GitLab Rails : cœur applicatif (issues, merge requests, CI/CD

orchestration).

- Sidekiq : traitement asynchrone (jobs en arrière-plan).
- Workhorse : proxy Go performant pour les requêtes Git/HTTP.
- Gitaly : service d’accès optimisé aux dépôts Git.
- Praefect (optionnel) : gestion des dépôts Git en cluster/réplication.

Loïc Rossignol - Déploiement continu – IINF170



Base de données et stockage

- PostgreSQL : base de données relationnelle principale.
- Redis : cache et ﬁle d’attente (sessions, ﬁles Sidekiq).
- Object Storage (S3, MinIO, GCS, Azure Blob…) : stockage des

artefacts CI/CD, paquets et registres.

- NFS ou volumes persistants : stockage partagé des dépôts Git si

pas de Gitaly.

Loïc Rossignol - Déploiement continu – IINF170



Les Runners

- Un GitLab Runner est un agent ((Docker, Shell, Kubernetes, VM) qui exécute les jobs

- 

déﬁnis dans vos pipelines CI/CD GitLab.
Il récupère les tâches depuis GitLab et les exécute dans un environnement isolé.
GitLab Coordinator : orchestre l’exécution des jobs.

- Executors : méthodes d’exécution (Docker, Shell, Kubernetes, SSH).
- Runners peuvent être :

- 
- 

Shared runners (communs à plusieurs projets).
Speciﬁc runners (dédiés à un projet/groupe).

Loïc Rossignol - Déploiement continu – IINF170



Observabilité et intégrations

- Monitoring : intégration Prometheus/Grafana pour métriques et alertes.
- 
Logs centralisés : journaux applicatifs, CI/CD, audit.
- 
Intégrations externes : Jira, Slack, Kubernetes, Vault, cloud providers.
- API REST & GraphQL : exposition de toutes les fonctionnalités GitLab.

Loïc Rossignol - Déploiement continu – IINF170



## Synthèse

- 

- 

- 

- 

Frontend : NGINX / 
Workhorse (proxy et cache).
Backend : Rails + Sidekiq + 
Gitaly.
Données : Postgres + Redis 
+ Object Storage.
CI/CD : Coordinator + 
Runners.

- Observabilité : Prometheus +

Grafana + Logs.

Loïc Rossignol - Déploiement continu – IINF170



Tour d’horizon des 
fonctionnalités PRINCIPALES


Gestion du code

GitLab centralise et sécurise la gestion du code grâce à Git et ses fonctionnalités avancées :

- Dépôts (Repository) : stockage du code et historique des versions
- Branches : développement parallèle et isolation des fonctionnalités
- Demandes de fusion (Merge Requests) : validation collaborative du code
- Tags : marquage de versions stables ou milestones
- Graphique de révision : visualisation des branches et de l’historique
- Extraits (Snippets) : partage de blocs de code réutilisables
- Fichiers verrouillés : éviter les conﬂits sur des ﬁchiers critiques
- Protections de branches et approbations : contrôle qualité et validation obligatoire
- Gestion des releases : planiﬁcation et publication des versions logicielles

Loïc Rossignol - Déploiement continu – IINF170



CI/CD intégré

GitLab propose une chaîne complète d’automatisation pour accélérer la livraison logicielle :

- Pipelines : orchestration des étapes (build, test, déploiement)
- Jobs parallèles et séquentiels : ﬂexibilité dans l’exécution
- Templates YAML : standardisation des workﬂows
- Environnements : gestion du staging, pré-production et production
- Déploiements manuels ou automatiques : progressive delivery, blue/green, canary
- Intégration Kubernetes : déploiements natifs sur clusters
- Logs détaillés : visibilité sur chaque étape du pipeline

Loïc Rossignol - Déploiement continu – IINF170



Gestion de projet

GitLab combine planiﬁcation et exécution avec des outils agiles 
intégrés :

- Issues : gestion des tickets, demandes et bugs
- Tableaux Kanban : organisation visuelle du travail
- Epics : regroupement d’issues par thématiques ou projets
- Roadmaps : planiﬁcation stratégique sur plusieurs mois
- Labels et milestones : classiﬁcation et suivi des objectifs
- Lien direct avec commits et MR : traçabilité complète entre code et

tâches

- Planiﬁcation des sprints : gestion de cycles agiles

Loïc Rossignol - Déploiement continu – IINF170



Sécurité intégrée (DevSecOps)

GitLab intègre la sécurité dès le développement :

- SAST (Static Application Security Testing)
- DAST (Dynamic Application Security Testing)
- Dependency Scanning : détection de vulnérabilités dans les

bibliothèques tierces

- Container Scanning : analyse des images Docker
- Secret Detection : détection d’identiﬁants ou clés exposées dans le

code

- Security Dashboards : suivi centralisé des vulnérabilités
- Politiques de sécurité CI/CD : intégration de contrôles dans les

pipelines

Loïc Rossignol - Déploiement continu – IINF170



Registry intégré

GitLab inclut une gestion complète des artefacts et images :

- Container Registry : hébergement d’images Docker intégré
- Package Registry : support de multiples formats (npm, Maven,

PyPI, Go, etc.)

- Artefacts CI/CD : stockage et partage des résultats de build/tests
- Versioning des packages : distribution et réutilisation ﬁables
- Intégration native aux pipelines : push/pull automatisés depuis

CI/CD

- Contrôle d’accès : gestion ﬁne des permissions pour images et

packages

Loïc Rossignol - Déploiement continu – IINF170



Observabilité et monitoring

GitLab assure la visibilité et le suivi des projets et applications :

- Dashboards intégrés : suivi des métriques projet et application
- Logs CI/CD et déploiements : auditabilité complète
- Alertes conﬁgurables : notiﬁcations en cas d’incident
- Intégration Prometheus & Grafana : observabilité avancée
- Error tracking : suivi des erreurs applicatives en production
- Audit logs : traçabilité des actions utilisateurs et administrateurs

Loïc Rossignol - Déploiement continu – IINF170



Auto DevOps

Auto DevOps dans GitLab, c’est une fonctionnalité qui permet de mettre en place un 
pipeline complet CI/CD sans avoir à écrire tout le .gitlab-ci.yml

En résumé, GitLab détecte automatiquement

1.
2.
3.

Le langage et le framework de ton application (Java, Python, Node.js, etc.)
Les étapes nécessaires : build, tests, sécurité, déploiement…
Les environnements où déployer (Kubernetes, par défaut).

Pour activer Auto DevOps

1. Accédez à Paramètres > CI/CD > Pipelines généraux.
2. Activez l'option Auto DevOps.

Loïc Rossignol - Déploiement continu – IINF170



Installation et configuration


## LAB
Installation et configuration de Gitlab

https://github.com/formationrossignol/tp-cicd/blob/main/installation-gitlab.md


Utiliser les jobs et les 
pipelines


Le fichier .gitlab-ci.yml

- Fichier principal de conﬁguration CI/CD pour GitLab
- Versionné avec le projet (comme le code source)
- Décrit les pipelines, stages et jobs
- Détecté automatiquement par GitLab à chaque commit

https://docs.gitlab.com/ci/yaml/

Loïc Rossignol - Déploiement continu – IINF170



Stages

- Les stages sont les grandes étapes logiques d’un pipeline GitLab.
- Chaque stage regroupe un ou plusieurs jobs exécutés en parallèle.
- Les stages s’exécutent dans l’ordre déﬁni.
- Tous les jobs d’un stage doivent réussir pour passer au suivant.
- L’organisation classique suit le cycle DevOps :
- build :  compilation / création d’artefacts
- test : exécution des tests automatiques
- deploy : déploiement sur l’environnement cible

Loïc Rossignol - Déploiement continu – IINF170



Jobs

- Un job est une unité d’exécution dans GitLab CI/CD.
- Il contient un ensemble d’instructions (scripts) qui s’exécutent dans un Runner

lors d’un pipeline.

Caractéristiques

- Associé à un stage (build, test, deploy, etc.)
- Peut être exécuté en parallèle avec d’autres jobs du même stage
- Déﬁni dans le ﬁchier .gitlab-ci.yml
- Peut utiliser des artefacts produits par d’autres jobs

Loïc Rossignol - Déploiement continu – IINF170



Structure d’un pipeline

- Stages : ordonnancement du

pipeline

- Variables : valeurs globales
accessibles par tous les jobs
- before_script / after_script :

stages:
- build
- test
- deploy

actions répétitives 
avant/après jobs

variables:
```bash
ENV: "staging"
```

before_script:
- echo "Préparation"

Loïc Rossignol - Déploiement continu – IINF170



## Définition des jobs

- stage : déﬁnit l’étape du job
- script : liste des commandes

à exécuter

- only / except / rules :

conditions d’exécution

build_ job:
```bash
stage: build
```
```bash
script:
```
- echo "Compilation du projet"
test_ job:
```bash
stage: test
```
```bash
script:
```
- echo "Exécution des tests"
deploy_ job:
```bash
stage: deploy
```
```bash
script:
```
- echo "Déploiement sur main"
```bash
only:
```
- main

Loïc Rossignol - Déploiement continu – IINF170



Artifacts et cache

- Artifacts : ﬁchiers générés à
conserver pour les jobs 
suivants

- Cache : accélère les builds en

réutilisant des ﬁchiers 
(dépendances, modules, 
etc.)

build_ job:
```bash
stage: build
```
```bash
script:
```
- mvn package
```bash
artifacts:
```
```bash
paths:
```
- target/*.jar
```bash
expire_in: 1 week
```

Loïc Rossignol - Déploiement continu – IINF170



Variables et secrets

- Déclaration de secrets

sécurisés via GitLab CI/CD 
(Settings → CI/CD → 
Variables)

- Utilisables dans les jobs
avec $VARIABLE_NAME

stages:
- deploy

variables:
```bash
ENV: "staging"
```
```bash
APP_NAME: "mon-app"
```

deploy_ job:
```bash
stage: deploy
```
```bash
script:
```
- echo "Déploiement de $APP_NAME sur
$ENV"
- echo "Clé API : $API_KEY"
- curl -H "Authorization: Bearer $API_KEY"
https://api.exemple.com/deploy
```bash
only:
```
- main

Loïc Rossignol - Déploiement continu – IINF170



Catalogue CI/CD et composants CI/CD

Loïc Rossignol - Déploiement continu – IINF170



## Bonnes pratiques

- Versionner le ﬁchier avec le code source
- Organiser le pipeline en stages logiques
- Utiliser variables et secrets pour ne pas exposer d’infos sensibles
- Documenter les jobs et scripts
- Réutiliser des ﬁchiers externes avec include

Loïc Rossignol - Déploiement continu – IINF170



Variables CI/CD, artifacts, 
caches


Variables CI/CD

- 

Paires clé/valeur utilisées pour conﬁgurer et sécuriser les pipelines.

Types de variables 

- 

- 

- 

Projet / Groupe : déﬁnies dans les paramètres GitLab.

Pipeline : déﬁnies au lancement d’un pipeline.

Job : déﬁnies directement dans .gitlab-ci.yml.

Utilisations

- 

- 

- 

Stockage de secrets (tokens, clés API, mots de passe).

Paramétrage d’environnements (dev, staging, prod).

Personnalisation de l’exécution des jobs.

Sécurité

- 

variables masquées et protégées pour éviter la fuite d’informations sensibles.

Loïc Rossignol - Déploiement continu – IINF170



Intégration d’outils externes


Intégration d’outils externes

Loïc Rossignol - Déploiement continu – IINF170



# Jenkins


## Présentation du produit

Serveur d’intégration continue open source permettant d’automatiser la construction, les tests et le déploiement 
d’applications.

Caractéristiques principales

- 

- 

- 

- 

Plus de 2000 plugins pour s’intégrer avec divers outils (Git, Docker, Kubernetes, etc.).

Pipeline as Code via Jenkinsﬁle (déﬁnition des workﬂows en YAML/Groovy).

Haute ﬂexibilité : déploiement sur serveur unique ou distribué avec agents.

Extensible : support de nombreux langages, environnements et outils de build.

Cas d’usage

- 

- 

- 

Automatisation des builds et tests unitaires.

Déploiement continu (CD) sur différents environnements.

Orchestration de workﬂows complexes.

Loïc Rossignol - Déploiement continu – IINF170



Le glossaire

- 

- 

- 

- 

- 

- 

- 

Job : Unité d’exécution dans Jenkins (build, test, 
déploiement, etc.).

Pipeline : Suite de jobs enchaînés définissant le flux 
CI/CD.

Jenkinsfile : Fichier (en Groovy) décrivant un pipeline 
en tant que code.

Stage : Étape logique d’un pipeline (ex. : Build, Test, 
Deploy).

Step : Action élémentaire exécutée dans un stage (ex. 
: lancer un script).

Node : Machine (agent) capable d’exécuter des jobs.

Agent : Environnement d’exécution d’un job (machine 
physique, VM, conteneur).

- 

- 

- 

- 

- 

- 

- 

- 

- 

Master/Controller : Instance centrale Jenkins qui orchestre les jobs et 
les agents.

Executor : Ressource de calcul attribuée à un job sur un agent.

Plugin : Extension permettant d’ajouter des fonctionnalités à Jenkins.

Workspace : Répertoire temporaire utilisé par un job pour stocker ses 
fichiers.

Build : Exécution d’un job ou pipeline.

Freestyle project : Type de job simple, défini via l’interface graphique.

Declarative Pipeline : Syntaxe pipeline simplifiée et structurée 
(recommandée).

Scripted Pipeline : Syntaxe pipeline avancée, plus flexible mais 
complexe.

Blue Ocean : Interface utilisateur moderne pour Jenkins.

Loïc Rossignol - Déploiement continu – IINF170



## Architecture


Contrôleur / Agent

Contrôleur Jenkins

- 
- 

Interface web, gestion des jobs
Planiﬁe et assigne les builds aux agents

Agent Jenkins

- Machine ou container exécutant les builds
- 

Peut être dédié à un type de tâche spéciﬁque

Loïc Rossignol - Déploiement continu – IINF170



Les types d’agents

- Agent statique : toujours disponible, machine dédiée
- Agent dynamique : créé à la volée selon les besoins (ex : via Docker, Kubernetes)
- Avantages des agents dynamiques

- Optimisation des ressources
- 

Isolation des builds

Loïc Rossignol - Déploiement continu – IINF170



Exécution distribuée

Les builds peuvent être répartis sur plusieurs agents

- 
- Permet parallélisation et rapidité des pipelines
- Réduit la charge sur le Master
- 

Idéal pour les projets avec tests lourds ou multiples langages

Loïc Rossignol - Déploiement continu – IINF170



## Synthèse

Loïc Rossignol - Déploiement continu – IINF170



Tour d’horizon des 
fonctionnalités PRINCIPALES


Gestion des projets et jobs

Jenkins organise le travail autour de jobs hautement conﬁgurables :

- Freestyle jobs : exécution de scripts et tâches simples
- Pipeline jobs (Declarative & Scripted) : automatisation avancée via

Jenkinsﬁle

- Multi-branch pipelines : détection automatique des branches d’un

dépôt Git

- Parameterized builds : personnalisation des exécutions (variables,

environnements)

- Matrix jobs : tests parallèles sur plusieurs conﬁgurations
- Gestion de vues : organisation des jobs par projet ou équipe

Loïc Rossignol - Déploiement continu – IINF170



CI/CD et automatisation

Jenkins offre une chaîne complète d’intégration et de livraison 
continues :

- Build automatisés déclenchés par commit, merge ou planiﬁcation
- Exécution de tests unitaires, d’intégration, fonctionnels
- Déploiements automatisés sur serveurs, conteneurs ou clouds
- Jenkinsﬁle pour versionner les pipelines dans le code
- Stages parallèles et séquentiels pour orchestrer les workﬂows
- Blue Ocean UI pour une visualisation claire des pipelines

Loïc Rossignol - Déploiement continu – IINF170



Intégrations & SCM

Jenkins s’intègre avec une multitude de systèmes :

- Contrôle de version : Git, GitHub, GitLab, Bitbucket, SVN…
- Gestion des dépendances : Maven, Gradle, npm, etc.
- Cloud & conteneurs : Kubernetes, Docker, OpenShift, AWS, Azure,

GCP

- Notiﬁcation & collaboration : Slack, Teams, e-mail, Jira
- Webhooks pour déclencher des jobs automatiquement depuis

SCM

Loïc Rossignol - Déploiement continu – IINF170



Plugins et extensibilité

La véritable force de Jenkins réside dans ses plugins :

- +2000 plugins disponibles sur le Jenkins Plugin Index
- Pipeline plugins (workﬂow, stages, steps)
- Plugins de build tools (Maven, Gradle, Ant, npm…)
- Plugins SCM (Git, Subversion, Mercurial…)
- Plugins cloud & container (Docker, Kubernetes, AWS, Azure…)
- Plugins UI (Blue Ocean, Dashboard View…)
- Plugins de sécurité (credentials, role-based access, audit)

Loïc Rossignol - Déploiement continu – IINF170



Sécurité et gestion des accès

Jenkins inclut des mécanismes pour protéger l’écosystème CI/CD :

- Gestion des utilisateurs et rôles (Role-Based Access Control)
- Intégration LDAP / Active Directory
- Sécurisation des credentials via le Credentials Store
- Secrets masking dans les pipelines
- Audit des actions via logs et plugins spécialisés
- Protection des jobs et agents par permissions granulaires

Loïc Rossignol - Déploiement continu – IINF170



Monitoring et observabilité

Jenkins fournit plusieurs outils de suivi et peut s’intégrer à des solutions 
externes :

- Console output pour chaque build/job
- Historique des builds avec indicateurs de succès/échec
- Tableaux de bord personnalisés via plugins
- Alertes par e-mail, Slack, Teams, etc.
- Export des métriques vers Prometheus/Grafana
- Logs système et audit pour supervision complète

Loïc Rossignol - Déploiement continu – IINF170



Installation et configuration


## LAB
Installation et configuration de Jenkins

https://github.com/formationrossignol/tp-cicd/blob/main/installation-jenkins.md


Les bases de l’administration 
# Jenkins


Gérer les utilisateurs

Modes de gestion

- Base interne : création et gestion des comptes directement dans Jenkins.
- Annuaire externe : intégration avec LDAP, Active Directory ou SSO.

Sécurité & permissions

- Matrice de permissions : gestion ﬁne des droits par rôle et par projet.
- 
- 

Stratégies globales ou spéciﬁques aux dossiers/pipelines.
Attribution de droits : admin, lecture, exécution, conﬁguration.

## Bonnes pratiques

- Utiliser un annuaire externe pour les équipes importantes.
- 
- 

Appliquer le principe du moindre privilège.
Auditer régulièrement les comptes et accès.

Loïc Rossignol - Déploiement continu – IINF170



La gestion des plugins

Installation & mise à jour

Via le Plugin Manager dans l’interface Jenkins.
Recherche, installation, désactivation et suppression des plugins.

- 
- 
- Mise à jour régulière pour bénéﬁcier des correctifs et nouvelles fonctionnalités.

Rôle des plugins

- 
- 
- 

Intégration avec des outils externes : Git, Docker, Kubernetes, Slack, etc.
Ajout de fonctionnalités : authentiﬁcation, notiﬁcations, pipelines avancés.
Personnalisation de Jenkins selon les besoins de l’équipe.

## Bonnes pratiques

- N’installer que les plugins nécessaires pour limiter la surface d’attaque.
- 
- 
- 

Vériﬁer la compatibilité avec la version de Jenkins.
Effectuer des sauvegardes avant toute mise à jour importante.
Surveiller les plugins dépréciés ou non maintenus.

Loïc Rossignol - Déploiement continu – IINF170



Utiliser les jobs et les 
pipelines


Le Jenkinsfile

Objectif

## Avantages

- Déﬁnir et automatiser les pipelines CI/CD sous

forme de code

Qu’est-ce qu’un Jenkinsﬁle ?

- 

Fichier texte (souvent nommé Jenkinsﬁle)

- Décrit le pipeline Jenkins en Pipeline as Code

- 

Versionné dans le dépôt Git avec le code 
source

- 

- 

- 

- 

Traçabilité : historique des changements dans 
# Git

Collaboration : même workﬂow que le code 
applicatif

Réutilisable : partage et standardisation des 
pipelines

Automatisation complète du build → test → 
déploiement

Loïc Rossignol - Déploiement continu – IINF170



Syntaxe d’une pipeline Jenkins

- 
- 

- 

- 

- 

- 

- 

pipeline { } : bloc principal
agent : déﬁnit l’environnement 
d’exécution
environment { } : Déclare des variables 
d’environnement accessibles dans tout 
le pipeline
options { } : Déﬁnit les paramètres et 
comportements globaux du pipeline
stages { } : contient les différentes 
étapes
steps { } : actions à exécuter (shell, 
scripts, plugins…)
post { } : actions après l’exécution

pipeline {
```bash
agent any
```
```bash
environment {
```
```bash
VAR = "value"
```
    }
```bash
options {
```
```bash
timeout(time: 30, unit: 'MINUTES')
```
    }
```bash
stages {
```
```bash
stage('Build') {
```
```bash
steps {
```
```bash
echo "Compilation..."
```
            }
        }
```bash
stage('Test') {
```
```bash
steps {
```
```bash
echo "Tests unitaires..."
```
            }
        }
```bash
stage('Deploy') {
```
```bash
steps {
```
```bash
echo "Déploiement..."
```
            }
        }
    }
```bash
post {
```
```bash
always { echo "Pipeline terminé" }
```
```bash
success { echo "Succès !" }
```
```bash
failure { echo "Échec !" }
```
    }
}

https://www.jenkins.io/doc/book/pipeline/syntax/

Loïc Rossignol - Déploiement continu – IINF170



Syntaxe (avancée) d’une pipeline Jenkins

Conditions avec when

- 

Exécute uniquement selon des critères (branche, 
tag, etc.)
- 
Évite des déploiements inutiles
- Quelques conditions courantes :

- 
- 
- 
- 
- 

branch (main, develop, feature/*, etc.)
tag (versions)
environment (variable d’env Jenkins)
expression (script Groovy custom)
allOf / anyOf / not pour combiner les 
conditions

stage('Deploy') {
```bash
when {
```
```bash
branch 'main'
```
    }
```bash
steps {
```
```bash
echo "Déploiement en
```
production"
    }
}

Loïc Rossignol - Déploiement continu – IINF170


https://www.jenkins.io/doc/book/pipeline/syntax/#when


Syntaxe (avancée) d’une pipeline Jenkins

Exécution parallèle

- Réduit le temps global de

- 

pipeline
Isole différents types de 
tests

stage('Tests') {
```bash
parallel {
```
```bash
stage('Unit Tests') {
```
```bash
steps { echo "Exécution des tests
```
unitaires" }
        }
```bash
stage('Integration Tests') {
```
```bash
steps { echo "Exécution des tests
```
d’intégration" }
        }
    }
}

Loïc Rossignol - Déploiement continu – IINF170


https://www.jenkins.io/doc/book/pipeline/syntax/#parallel


Syntaxe (avancée) d’une pipeline Jenkins

parameters { } : permet de 
déﬁnir des paramètres que 
l’utilisateur renseigne au 
déclenchement du job 
(texte, booléen, choix, mot 
de passe…)

pipeline {
```bash
agent any
```

```bash
parameters {
```
```bash
string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Nom de la
```
branche à builder')
```bash
booleanParam(name: 'RUN_TESTS', defaultValue: true, description: 'Exécuter les
```
tests ?')
```bash
choice(name: 'ENVIRONMENT', choices: ['dev', 'staging', 'prod'], description:
```
'Environnement de déploiement')
```bash
password(name: 'SECRET_KEY', defaultValue: '', description: 'Clé API secrète')
```
    }

```bash
stages {
```
```bash
stage('Build') {
```
```bash
steps {
```
```bash
echo "Branche : ${params.BRANCH_NAME}"
```
```bash
echo "Tests activés : ${params.RUN_TESTS}"
```
```bash
echo "Déploiement sur : ${params.ENVIRONMENT}"
```
            }
        }
    }
}

https://www.jenkins.io/doc/book/pipeline/syntax/#parameters

Loïc Rossignol - Déploiement continu – IINF170



Syntaxe (avancée) d’une pipeline Jenkins

- 

- 

tools { } : installe et met à 
disposition des outils déclarés 
dans Jenkins (Maven, JDK, 
Gradle, etc.)
Les outils doivent être déﬁnis 
dans Manage Jenkins > Global 
Tool Conﬁguration

pipeline {
```bash
agent any
```

```bash
tools {
```
```bash
maven 'Maven-3.9'
```
```bash
jdk 'JDK-17'
```
    }

```bash
stages {
```
```bash
stage('Build avec Maven') {
```
```bash
steps {
```
```bash
sh 'mvn clean package'
```
            }
        }
    }
}

Loïc Rossignol - Déploiement continu – IINF170


https://www.jenkins.io/doc/book/pipeline/syntax/#tools


Syntaxe (avancée) d’une pipeline Jenkins

- 

triggers { } : déﬁnit des déclencheurs 
automatiques pour exécuter le pipeline 
(ex : cron, SCM polling, webhook 
GitHub/GitLab…)

- 
- 

- 

cron : planiﬁcation périodique
pollSCM : exécution si 
changement dans le dépôt 
(pull/polling)
upstream : déclenché après la 
réussite d’autres jobs Jenkins

pipeline {
```bash
agent any
```

```bash
triggers {
```
```bash
cron('H 2 * * 1-5')
```
```bash
pollSCM('H/15 * * * *')
```
```bash
upstream(upstreamProjects: 'Job-A,Job-B', threshold:
```
hudson.model.Result.SUCCESS)
    }

```bash
stages {
```
```bash
stage('Build') {
```
```bash
steps {
```
```bash
echo "Pipeline déclenché automatiquement"
```
            }
        }
    }
}

Loïc Rossignol - Déploiement continu – IINF170


https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-matrix


Syntaxe (avancée) d’une pipeline Jenkins

Pipeline en matrice

- 

Teste plusieurs combinaisons (OS, 
versions, etc.)

- Détecte les incompatibilités

rapidement

stage('Matrix Build') {
```bash
matrix {
```
```bash
axes {
```
```bash
axis {
```
```bash
name 'OS'
```
```bash
values 'linux', 'windows'
```
            }
```bash
axis {
```
```bash
name 'JDK'
```
```bash
values '8', '11'
```
            }
        }
```bash
stages {
```
```bash
stage('Build') {
```
```bash
steps {
```
```bash
echo "Build sur ${OS} avec JDK ${JDK}"
```
                }
            }
        }
    }
}

https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-matrix

Loïc Rossignol - Déploiement continu – IINF170



## Bonnes pratiques

- Versionner le Jenkinsﬁle

- Garder le ﬁchier dans le dépôt Git pour traçabilité et revue de code

- Utiliser la syntaxe déclarative

- Plus lisible, standardisée et maintenable que la syntaxe scriptée

- Modulariser avec des stages clairs

- 

Séparer build, tests, déploiement pour faciliter le debug

- Gérer les secrets avec Jenkins Credentials

- Ne jamais mettre de mots de passe ou tokens en clair

- 

Favoriser la réutilisabilité

- Utiliser des librairies partagées (shared libraries) pour éviter la duplication

- Optimiser les ressources

- Utiliser l’exécution parallèle et les agents dynamiques (Docker/Kubernetes)

Loïc Rossignol - Déploiement continu – IINF170



## LAB
Créer sa première pipeline

https://github.com/formationrossignol/tp-cicd/blob/main/application-js-jenkins.md


Intégration d’outils externes


Blue Ocean

Qu’est-ce que c’est ?

## Avantages

- 

Interface utilisateur moderne et ergonomique 
pour Jenkins.

Plus intuitif que l’interface Jenkins classique.
- 
- Meilleure collaboration entre développeurs,

- Orientée pipelines CI/CD avec une meilleure

QA et Ops.

expérience visuelle.

- Réduction des erreurs grâce à une vue claire

des pipelines.

Caractéristiques

- 

Visualisation graphique des pipelines (stages, 
steps, statuts).

- Gestion simplifiée des branches Git et pull

requests.
Tableau de bord clair : suivi des builds, résultats 
de tests, logs.
Intégration fluide avec Jenkinsfile.

- 

- 

Loïc Rossignol - Déploiement continu – IINF170



Intégration de Blue Ocean dans Jenkins

Installer Blue Ocean

1.

2.

3.

4.

Aller dans Jenkins → Manage Jenkins → Manage Plugins

Ouvrir l’onglet Available

Rechercher Blue Ocean

Cliquer sur Install without restart ou Download now and install after restart

Créer un pipeline Blue Ocean

1.

2.

3.

4.

5.

Aller dans Jenkins → Open Blue Ocean

Cliquer sur Create a new Pipeline

Sélectionner le dépôt Git/Gitea/GitHub contenant votre projet

Choisir la branche et les credentials si nécessaire

Blue Ocean détecte automatiquement le Jenkinsfile pour configurer le pipeline

https://www.jenkins.io/doc/book/blueocean/

Loïc Rossignol - Déploiement continu – IINF170



# Docker

Qu’est-ce que Docker ?

## Avantages

- 

- 

Plateforme de conteneurisation permettant 
d’exécuter des applications de manière isolée

Les conteneurs incluent tout ce dont l’application a 
besoin : code, bibliothèques, dépendances

Fonctionnalités principales

Création et gestion d’images Docker

- 

- 

- 

- 

Portabilité entre machines et environnements

Rapidité et efficacité grâce aux conteneurs légers

Réduction des conflits entre dépendances

Large écosystème et communauté active

Exécution de conteneurs légers et portables

Cas d’usage typique

Isolation et cohérence des environnements (dev, test, 
prod)

Intégration avec CI/CD et orchestrateurs (ex : 
Kubernetes)

- 

- 

Déploiement rapide d’applications

Tests automatisés dans des environnements isolés

- Microservices et architecture cloud-native

Loïc Rossignol - Déploiement continu – IINF170


- 

- 

- 

- 


Intégration de Docker dans Jenkins

Prérequis

- 

- 
- 

Installer Docker sur le serveur Jenkins ou sur les 
agents
Installer le plugin Docker dans Jenkins
Configurer les credentials Docker (Docker Hub, 
registry privée)

Utilisation dans les Jobs / Pipelines

- 

- 

Freestyle Job : exécuter des commandes docker 
build, docker run
Pipeline : utilisation du bloc docker pour gérer les 
conteneurs

pipeline {
```bash
agent any
```
```bash
stages {
```
```bash
stage('Build Docker') {
```
```bash
steps {
```
```bash
script {
```
```bash
docker.build("mon-image:latest")
```
                }
            }
        }
    }
}

https://www.jenkins.io/doc/book/installing/docker/

Loïc Rossignol - Déploiement continu – IINF170



# Gitea

Qu’est-ce que Gitea ?

## Avantages

- 

- 
- 

Plateforme Git self-hosted, open source et 
légère
Alternative simple à GitHub/GitLab
Idéal pour les petites équipes ou projets 
internes

Fonctionnalités principales

- Hébergement de dépôts Git
- Gestion des branches, tags et releases
- 
- 
- 

Pull requests et revue de code
Suivi des issues et projets
Intégration avec un outil de CI/CD (ex : 
Jenkins)

Léger et rapide, facile à installer
- 
Interface web simple et intuitive
- 
- 
Faible consommation de ressources
- Communauté active et open source

Cas d’usage typique

- Développement collaboratif interne
- 

Projets open source de petite à moyenne 
taille
Intégration continue avec Jenkins ou autres 
outils CI/CD

- 

- Webhooks pour automatisation

Loïc Rossignol - Déploiement continu – IINF170



Intégration de Gitea dans Jenkins

Connexion Jenkins ↔ Gitea

Déclencheurs Automatiques

Installer le plugin Gitea dans Jenkins
- 
- Configurer le serveur Gitea dans Jenkins
- Créer un token d’accès côté Gitea pour

# Jenkins

- Webhook Gitea : déclenche un build à

chaque push
Planification (cron) : builds réguliers
Pull Requests : tests automatiques sur PR

- 
- 

Création d’un Job / Pipeline

## Bonnes pratiques

- 

- 

Sélectionner Git / Gitea comme source du 
code
Ajouter l’URL du dépôt et les credentials 
(token)

- Définir les branches à builder

- 
Limiter les permissions du token Gitea
- Nommer clairement les jobs selon les

- 

branches/projets
Vérifier les logs Jenkins et Gitea pour le 
debug

https://plugins.jenkins.io/gitea/

Loïc Rossignol - Déploiement continu – IINF170



# Slack

Qu’est-ce que Slack ?

## Avantages

- 

Plateforme de messagerie collaborative 
pour les équipes

- Centralise les communications, fichiers et

intégrations dans un seul endroit

Fonctionnalités principales

- Canaux organisés par projet, équipe ou sujet
- Messages directs et appels audio/vidéo
Partage de fichiers et historique de 
- 
discussion
Intégrations avec plus de 2 000 outils 
(Jenkins, GitHub, Trello…)

- 

- Notifications et alertes personnalisables

- Réduction des emails internes
- Communication centralisée et transparente
- Collaboration en temps réel et suivi des

projets
Automatisation via bots et intégrations

- 

Cas d’usage typique

- Notifications CI/CD et alertes techniques
- Coordination des équipes de développement

- 

et support
Partage instantané d’informations et 
documents

Loïc Rossignol - Déploiement continu – IINF170



Intégration de Slack dans Jenkins

Pré-requis

Utilisation dans les Pipelines (Exemple pipeline déclaratif)

- 
- 

- 

Compte Slack et accès à un workspace
Installer le plugin Slack Notification dans 
# Jenkins
Créer un Webhook Slack pour Jenkins 
(Incoming Webhook)

Configuration dans Jenkins

- 
- 

Ajouter les credentials Webhook dans Jenkins
Paramétrer les canaux Slack où envoyer les 
notifications
Choisir les événements à notifier :

- 
- 
- 

Build réussi
Build échoué
Build instable

https://plugins.jenkins.io/slack/

pipeline {
```bash
agent any
```
```bash
stages {
```
```bash
stage('Build') { steps { echo 'Building...' } }
```
    }
```bash
post {
```
```bash
success { slackSend channel: '#dev-alerts',
```
message: 'Build réussi !' }
```bash
failure { slackSend channel: '#dev-alerts',
```
message: 'Build échoué !' }
    }
}

Loïc Rossignol - Déploiement continu – IINF170



## LAB

Intégrer les plugins Blue Ocean, Slack et Gitea

https://github.com/formationrossignol/tp-cicd/blob/main/plugins-jenkins.md


# Merci

“Apprendre, c’est déposer de l’or dans la banque de son esprit.”

```bash
Shad Helmstetter
```
