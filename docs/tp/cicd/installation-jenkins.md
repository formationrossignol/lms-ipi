# TP : Installation de Jenkins sur Windows, Linux ou macOS

## Objectifs du TP

À la fin de ce TP, vous serez capable de :
- Installer Jenkins sur Windows, Linux et macOS
- Configurer Jenkins pour un premier usage
- Comprendre les prérequis et dépendances
- Résoudre les problèmes courants d'installation

## Prérequis généraux

- **Java** : Jenkins nécessite Java 8 ou supérieur (recommandé : Java 11 ou 17)
- **RAM** : Minimum 256 MB, recommandé 1 GB+
- **Espace disque** : Minimum 1 GB pour l'installation Jenkins
- Droits administrateur sur le système

---

## Partie 1 : Installation sur Windows

### Méthode 1 : Installation via l'installateur Windows (.msi)

#### Étape 1 : Téléchargement
1. Rendez-vous sur https://jenkins.io/download/
2. Cliquez sur "Download Jenkins" pour Windows
3. Téléchargez le fichier `.msi`

#### Étape 2 : Installation
1. Double-cliquez sur le fichier `.msi` téléchargé
2. Suivez l'assistant d'installation :
   - Acceptez les termes de licence
   - Choisissez le répertoire d'installation (par défaut : `C:\Program Files\Jenkins`)
   - Configurez le service Windows
3. Jenkins s'installera automatiquement comme service Windows

#### Étape 3 : Vérification
1. Ouvrez un navigateur web
2. Accédez à `http://localhost:8080`
3. Vous devriez voir la page de configuration initiale de Jenkins

### Méthode 2 : Installation via fichier WAR

#### Étape 1 : Installation de Java
```powershell
# Vérifiez si Java est installé
java -version

# Si Java n'est pas installé, téléchargez et installez Java JDK
```

#### Étape 2 : Téléchargement du fichier WAR
1. Téléchargez `jenkins.war` depuis https://jenkins.io/download/
2. Placez le fichier dans un dossier de votre choix (ex: `C:\Jenkins`)

#### Étape 3 : Lancement
```powershell
cd C:\Jenkins
java -jar jenkins.war
```

### Exercice Windows
**Exercice 1.1** : Installez Jenkins via la méthode .msi et documentez chaque étape avec des captures d'écran.

**Exercice 1.2** : Configurez Jenkins pour qu'il démarre automatiquement au démarrage de Windows.

---

## Partie 2 : Installation sur Linux

### Méthode 1 : Installation via les paquets officiels (Ubuntu/Debian)

#### Étape 1 : Mise à jour du système
```bash
sudo apt update
sudo apt upgrade -y
```

#### Étape 2 : Installation de Java
```bash
# Installation d'OpenJDK 11
sudo apt install openjdk-11-jdk -y

# Vérification
java -version
```

#### Étape 3 : Ajout du dépôt Jenkins
```bash
# Ajout de la clé GPG
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# Ajout du dépôt
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
```

#### Étape 4 : Installation de Jenkins
```bash
sudo apt update
sudo apt install jenkins -y
```

#### Étape 5 : Démarrage et activation du service
```bash
# Démarrage du service
sudo systemctl start jenkins

# Activation au démarrage
sudo systemctl enable jenkins

# Vérification du statut
sudo systemctl status jenkins
```

### Méthode 2 : Installation sur CentOS/RHEL

#### Étape 1 : Installation de Java
```bash
sudo yum install java-11-openjdk-devel -y
```

#### Étape 2 : Ajout du dépôt Jenkins
```bash
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
```

#### Étape 3 : Installation
```bash
sudo yum install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

### Configuration du pare-feu (Ubuntu)
```bash
# UFW
sudo ufw allow 8080

# Firewalld (CentOS/RHEL)
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload
```

### Exercice Linux
**Exercice 2.1** : Installez Jenkins sur une machine Ubuntu et configurez le pare-feu.

**Exercice 2.2** : Créez un script bash qui automatise l'installation complète de Jenkins sur Ubuntu.

---

## Partie 3 : Installation sur macOS

### Méthode 1 : Installation via Homebrew (recommandée)

#### Étape 1 : Installation d'Homebrew (si non installé)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Étape 2 : Installation de Java
```bash
# Installation d'OpenJDK
brew install openjdk@11

# Configuration du PATH
echo 'export PATH="/usr/local/opt/openjdk@11/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### Étape 3 : Installation de Jenkins
```bash
# Installation
brew install jenkins

# Démarrage du service
brew services start jenkins
```

### Méthode 2 : Installation via le fichier WAR

#### Étape 1 : Installation de Java via le site Oracle
1. Téléchargez Java JDK depuis le site Oracle
2. Installez le package `.dmg`

#### Étape 2 : Téléchargement et lancement de Jenkins
```bash
# Téléchargement
curl -O http://mirrors.jenkins.io/war-stable/latest/jenkins.war

# Lancement
java -jar jenkins.war
```

### Méthode 3 : Installation via le package .pkg

#### Étape 1 : Téléchargement
1. Rendez-vous sur https://jenkins.io/download/
2. Téléchargez le fichier `.pkg` pour macOS

#### Étape 2 : Installation
1. Double-cliquez sur le fichier `.pkg`
2. Suivez l'assistant d'installation
3. Jenkins sera installé comme service système

### Exercice macOS
**Exercice 3.1** : Comparez les trois méthodes d'installation sur macOS et documentez les avantages/inconvénients.

**Exercice 3.2** : Configurez Jenkins pour qu'il démarre automatiquement au démarrage du système.

---

## Partie 4 : Configuration initiale commune

### Étape 1 : Accès à l'interface web
1. Ouvrez votre navigateur
2. Accédez à `http://localhost:8080`
3. Vous verrez la page de "Unlock Jenkins"

### Étape 2 : Récupération du mot de passe initial
```bash
# Linux/macOS
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

# Windows
type "C:\Program Files\Jenkins\secrets\initialAdminPassword"
```

### Étape 3 : Installation des plugins
1. Choisissez "Install suggested plugins"
2. Attendez la fin de l'installation des plugins

### Étape 4 : Création du premier utilisateur administrateur
1. Remplissez les champs :
   - Username
   - Password
   - Confirm password
   - Full name
   - E-mail address
2. Cliquez sur "Save and Continue"

### Étape 5 : Configuration de l'URL Jenkins
1. Vérifiez l'URL Jenkins (généralement `http://localhost:8080/`)
2. Cliquez sur "Save and Finish"

### Exercice Configuration
**Exercice 4.1** : Documentez le processus de configuration initiale avec des captures d'écran.

**Exercice 4.2** : Créez votre premier job Jenkins de type "Freestyle project" qui exécute une commande simple.

---

## Partie 5 : Vérification et tests

### Vérification de l'installation

#### Test 1 : Accès à l'interface
- [ ] L'interface Jenkins est accessible via le navigateur
- [ ] Vous pouvez vous connecter avec vos identifiants

#### Test 2 : Fonctionnalités de base
- [ ] Création d'un nouveau job
- [ ] Exécution d'un job simple
- [ ] Consultation des logs de build

#### Test 3 : Services système
```bash
# Linux
sudo systemctl status jenkins

# macOS (Homebrew)
brew services list | grep jenkins

# Windows
services.msc # Rechercher "Jenkins"
```

### Commandes utiles

#### Redémarrage de Jenkins
```bash
# Linux
sudo systemctl restart jenkins

# macOS (Homebrew)
brew services restart jenkins

# Windows
net stop jenkins
net start jenkins

# Via l'interface web
http://localhost:8080/restart
```

#### Changement de port
```bash
# Linux - Modifier le fichier de configuration
sudo nano /etc/default/jenkins
# Modifier JENKINS_PORT=8080

# Lancement manuel avec port personnalisé
java -jar jenkins.war --httpPort=9090
```

### Exercice Final
**Exercice 5.1** : Créez un document de troubleshooting listant les problèmes courants et leurs solutions pour chaque OS.

**Exercice 5.2** : Configurez Jenkins pour utiliser le port 9090 au lieu du port 8080 par défaut.

---

## Troubleshooting courant

### Problème : Port 8080 déjà utilisé
```bash
# Trouver le processus utilisant le port 8080
# Linux/macOS
sudo lsof -i :8080

# Windows
netstat -ano | findstr :8080

# Solution : Changer le port ou arrêter le processus
```

### Problème : Java non trouvé
```bash
# Vérifier l'installation Java
java -version
javac -version

# Configurer JAVA_HOME si nécessaire
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
```

### Problème : Permissions insuffisantes
```bash
# Linux - Vérifier les permissions du répertoire Jenkins
ls -la /var/lib/jenkins
sudo chown -R jenkins:jenkins /var/lib/jenkins
```

---

## Ressources complémentaires

- **Documentation officielle** : https://jenkins.io/doc/
- **Guide d'installation** : https://jenkins.io/doc/book/installing/
- **Community forums** : https://community.jenkins.io/
- **Plugin Index** : https://plugins.jenkins.io/

---
