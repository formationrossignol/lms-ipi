# Guide d'installation et configuration de Git

## Table des matières
1. [Installation de Git](#installation-de-git)
2. [Configuration initiale](#configuration-initiale)
3. [Configuration avancée](#configuration-avancée)
4. [Vérification de l'installation](#vérification-de-linstallation)

## Installation de Git

### Windows

#### Option 1 : Installateur officiel
1. Rendez-vous sur [git-scm.com](https://git-scm.com/download/win)
2. Téléchargez l'installateur pour Windows
3. Exécutez le fichier `.exe` téléchargé
4. Suivez l'assistant d'installation en acceptant les paramètres par défaut

#### Option 2 : Chocolatey
```bash
choco install git
```

#### Option 3 : Winget
```bash
winget install --id Git.Git -e --source winget
```

### macOS

#### Option 1 : Homebrew (recommandé)
```bash
brew install git
```

#### Option 2 : MacPorts
```bash
sudo port install git
```

#### Option 3 : Installateur officiel
1. Téléchargez depuis [git-scm.com](https://git-scm.com/download/mac)
2. Installez le package `.dmg`

#### Option 4 : Xcode Command Line Tools
```bash
xcode-select --install
```

### Linux

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install git
```

#### CentOS/RHEL/Fedora
```bash
# CentOS/RHEL
sudo yum install git

# Fedora
sudo dnf install git
```

#### Arch Linux
```bash
sudo pacman -S git
```

#### Compilation depuis les sources
```bash
# Installation des dépendances (Ubuntu/Debian)
sudo apt install make libssl-dev libghc-zlib-dev libcurl4-gnutls-dev libxml2-dev libffi-dev

# Téléchargement et compilation
wget https://github.com/git/git/archive/master.zip
unzip master.zip
cd git-master
make configure
./configure --prefix=/usr/local
make all
sudo make install
```

## Options d'installation détaillées

### Options de l'installateur Git pour Windows

Lors de l'installation de Git avec l'installateur officiel Windows, plusieurs options importantes vous sont proposées :

#### 1. Composants additionnels
- **Git Bash Here** : Ajoute une option dans le menu contextuel pour ouvrir Git Bash dans le dossier courant
- **Git GUI Here** : Ajoute une interface graphique Git dans le menu contextuel
- **Git LFS (Large File Support)** : Extension pour gérer les gros fichiers dans Git
- **Associate .git* configuration files** : Associe les fichiers de configuration Git avec l'éditeur par défaut
- **Associate .sh files** : Associe les scripts shell avec Git Bash
- **Check daily for Git for Windows updates** : Vérification automatique des mises à jour

#### 2. Éditeur par défaut
L'installateur propose plusieurs éditeurs :
- **Vim** : Éditeur en ligne de commande (par défaut)
- **Notepad++** : Si installé sur le système
- **Visual Studio Code** : Si installé sur le système
- **Atom**, **Sublime Text**, **Nano** : Selon ce qui est disponible

#### 3. Nom de la branche initiale
- **Let Git decide** : Git utilise 'master' (comportement historique)
- **Override the default branch name** : Permet de définir 'main' ou un autre nom

#### 4. Ajustement de la variable PATH
Option cruciale qui détermine comment utiliser Git :
- **Use Git from Git Bash only** : Git n'est accessible que depuis Git Bash
- **Git from the command line and also from 3rd-party software** (recommandé) : Git accessible depuis Command Prompt, PowerShell et autres applications
- **Use Git and optional Unix tools from the Command Prompt** : Ajoute aussi les outils Unix, peut causer des conflits

#### 5. Exécutable SSH
Choix du client SSH à utiliser :
- **Use bundled OpenSSH** : Utilise la version OpenSSH fournie avec Git (recommandé)
- **Use external OpenSSH** : Utilise OpenSSH installé séparément sur le système

#### 6. Transport HTTPS
Configuration du backend SSL/TLS :
- **Use the OpenSSL library** : Utilise OpenSSL, validé par le fichier ca-bundle.crt
- **Use the native Windows Secure Channel library** : Utilise l'API Windows, validé par le magasin de certificats Windows (recommandé)

#### 7. Configuration des fins de ligne
Gestion des caractères de fin de ligne entre Windows (CRLF) et Unix (LF) :
- **Checkout Windows-style, commit Unix-style line endings** (recommandé pour Windows) : Convertit LF vers CRLF au checkout, CRLF vers LF au commit
- **Checkout as-is, commit Unix-style line endings** : Pas de conversion au checkout, CRLF vers LF au commit
- **Checkout as-is, commit as-is** : Aucune conversion

#### 8. Émulateur de terminal pour Git Bash
- **Use MinTTY** (recommandé) : Terminal moderne avec support Unicode et redimensionnement
- **Use Windows' default console window** : Utilise le terminal Windows classique

#### 9. Comportement par défaut de `git pull`
- **Default (fast-forward or merge)** : Comportement traditionnel
- **Rebase** : Rebase les commits locaux au-dessus des commits distants
- **Only ever fast-forward** : Échoue si un fast-forward n'est pas possible

#### 10. Gestionnaire d'identifiants
- **Git Credential Manager Core** : Gestionnaire moderne cross-platform (recommandé)
- **Git Credential Manager** : Version précédente pour Windows uniquement
- **None** : Pas de gestionnaire d'identifiants

#### 11. Options expérimentales
- **Enable experimental support for pseudo consoles** : Support amélioré des programmes natifs dans Git Bash
- **Enable experimental built-in file system monitor** : Améliore les performances sur les gros dépôts

### Recommandations pour une installation standard

Pour la plupart des utilisateurs, voici les options recommandées :

1. **Composants** : Cocher Git Bash Here et Git LFS
2. **Éditeur** : Visual Studio Code si installé, sinon Nano pour les débutants
3. **Branche initiale** : Override avec "main"
4. **PATH** : "Git from the command line and also from 3rd-party software"
5. **SSH** : Use bundled OpenSSH
6. **HTTPS** : Use the native Windows Secure Channel library
7. **Fins de ligne** : Checkout Windows-style, commit Unix-style
8. **Terminal** : Use MinTTY
9. **Git pull** : Default (fast-forward or merge)
10. **Credentials** : Git Credential Manager Core

### Installation silencieuse

Pour automatiser l'installation avec des paramètres prédéfinis :

```bash
# Exemple d'installation silencieuse avec options
Git-2.x.x-64-bit.exe /VERYSILENT /NORESTART /NOCANCEL /SP- /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS /COMPONENTS="icons,ext\reg\shellhere,assoc,assoc_sh" /o:PathOption=Cmd /o:BashTerminalOption=ConHost /o:CRLFOption=CRLFAlways
```

## Configuration initiale

### Configuration de l'identité utilisateur

La première étape après installation consiste à configurer votre nom et adresse email :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

### Configuration de l'éditeur par défaut

```bash
# Vim
git config --global core.editor vim

# Nano
git config --global core.editor nano

# Visual Studio Code
git config --global core.editor "code --wait"

# Sublime Text
git config --global core.editor "subl -n -w"
```

### Configuration de la branche par défaut

```bash
git config --global init.defaultBranch main
```

## Configuration avancée

### Alias utiles

```bash
# Raccourcis pour les commandes courantes
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Alias avancés
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

### Configuration des fins de ligne

```bash
# Windows
git config --global core.autocrlf true

# macOS/Linux
git config --global core.autocrlf input

# Désactiver la conversion
git config --global core.autocrlf false
```

### Configuration de la fusion

```bash
# Outil de merge par défaut
git config --global merge.tool vimdiff

# Autres outils populaires
git config --global merge.tool meld
git config --global merge.tool kdiff3
```

### Configuration des couleurs

```bash
# Activer la coloration
git config --global color.ui auto

# Configuration spécifique
git config --global color.branch auto
git config --global color.diff auto
git config --global color.status auto
```

### Configuration du cache des credentials

```bash
# Cache temporaire (15 minutes par défaut)
git config --global credential.helper cache

# Cache avec timeout personnalisé (1 heure)
git config --global credential.helper 'cache --timeout=3600'

# Store permanent (non sécurisé)
git config --global credential.helper store

# Windows - utiliser le gestionnaire d'identifiants
git config --global credential.helper manager-core

# macOS - utiliser Keychain
git config --global credential.helper osxkeychain
```

## Vérification de l'installation

### Vérifier la version

```bash
git --version
```

### Afficher la configuration

```bash
# Afficher toute la configuration
git config --list

# Afficher la configuration globale
git config --global --list

# Vérifier une configuration spécifique
git config user.name
git config user.email
```

### Tester l'installation

```bash
# Créer un dépôt test
mkdir test-git
cd test-git
git init

# Vérifier le statut
git status

# Créer un fichier et l'ajouter
echo "Test Git" > README.md
git add README.md
git commit -m "Premier commit"

# Afficher l'historique
git log
```

## Fichier de configuration exemple

Voici un exemple de fichier `.gitconfig` complet :

```ini
[user]
    name = Votre Nom
    email = votre.email@example.com

[core]
    editor = code --wait
    autocrlf = input
    excludesfile = ~/.gitignore_global

[init]
    defaultBranch = main

[color]
    ui = auto

[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

[credential]
    helper = cache --timeout=3600

[push]
    default = simple

[pull]
    rebase = false
```

Votre installation et configuration de Git sont maintenant terminées ! Vous êtes prêt à commencer à utiliser Git pour vos projets.
