# Guide d'Installation GitLab

## Prérequis Système

### Configuration Minimale Recommandée
- **CPU** : 4 cores (8 cores recommandés)
- **RAM** : 4 GB minimum (8 GB recommandés)
- **Stockage** : 10 GB minimum d'espace libre
- **Système** : 64-bit requis

### Ports Requis
- **80** (HTTP)
- **443** (HTTPS)
- **22** (SSH)

---

## Installation sur Linux

### Ubuntu/Debian

#### 1. Mise à jour du système
```bash
sudo apt-get update
sudo apt-get upgrade -y
```

#### 2. Installation des dépendances
```bash
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

#### 3. Installation de Postfix (optionnel, pour les notifications email)
```bash
sudo apt-get install -y postfix
```
Sélectionnez 'Internet Site' lors de la configuration.

#### 4. Ajout du dépôt GitLab
```bash
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

#### 5. Installation de GitLab
```bash
# Remplacez 'gitlab.example.com' par votre domaine
sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ee

# Pour GitLab Community Edition (gratuit)
sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ce
```

### CentOS/RHEL/Fedora

#### 1. Installation des dépendances
```bash
sudo yum install -y curl policycoreutils-python openssh-server openssh-clients
sudo systemctl enable sshd
sudo systemctl start sshd
```

#### 2. Configuration du firewall
```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

#### 3. Installation de Postfix
```bash
sudo yum install -y postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

#### 4. Ajout du dépôt GitLab
```bash
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

#### 5. Installation de GitLab
```bash
sudo EXTERNAL_URL="https://gitlab.example.com" yum install -y gitlab-ee
```

### Configuration Post-Installation (Linux)

#### Reconfiguration de GitLab
```bash
sudo gitlab-ctl reconfigure
```

#### Vérification du statut
```bash
sudo gitlab-ctl status
```

#### Accès initial
1. Ouvrez votre navigateur : `https://votre-domaine.com`
2. Utilisateur par défaut : `root`
3. Mot de passe : consultez le fichier `/etc/gitlab/initial_root_password`

---

## Installation sur macOS

### Option 1 : Docker Desktop (Recommandé)

#### 1. Installation de Docker Desktop
Téléchargez et installez Docker Desktop depuis [docker.com](https://www.docker.com/products/docker-desktop)

#### 2. Création du docker-compose.yml
```yaml
version: '3.7'
services:
  gitlab:
    image: 'gitlab/gitlab-ce:latest'
    container_name: gitlab
    restart: always
    hostname: 'localhost'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://localhost:8080'
        gitlab_rails['gitlab_shell_ssh_port'] = 2222
    ports:
      - '8080:80'
      - '2222:22'
      - '443:443'
    volumes:
      - '$HOME/gitlab/config:/etc/gitlab'
      - '$HOME/gitlab/logs:/var/log/gitlab'
      - '$HOME/gitlab/data:/var/opt/gitlab'
```

#### 3. Lancement de GitLab
```bash
docker-compose up -d
```

### Option 2 : Installation avec Homebrew

#### 1. Installation des prérequis
```bash
# Installation de Homebrew si nécessaire
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Installation des dépendances
brew install git postgresql redis
```

#### 2. Installation via Ruby
```bash
# Installation de Ruby
brew install ruby

# Installation de GitLab Development Kit
gem install gitlab-development-kit
```

#### 3. Configuration GDK
```bash
# Création du répertoire
mkdir ~/gitlab-development-kit
cd ~/gitlab-development-kit

# Installation
gdk install

# Configuration
gdk reconfigure
```

#### 4. Démarrage
```bash
gdk start
```

---

## Installation sur Windows

### Option 1 : Docker Desktop (Recommandé)

#### 1. Prérequis
- Activez WSL2 (Windows Subsystem for Linux 2)
- Installez Docker Desktop pour Windows

#### 2. Configuration WSL2
```powershell
# PowerShell en tant qu'administrateur
wsl --install
wsl --set-default-version 2
```

#### 3. Docker Compose
Créez un fichier `docker-compose.yml` :
```yaml
version: '3.7'
services:
  gitlab:
    image: 'gitlab/gitlab-ce:latest'
    container_name: gitlab
    restart: always
    hostname: 'localhost'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://localhost'
        gitlab_rails['time_zone'] = 'Europe/Paris'
        gitlab_rails['gitlab_shell_ssh_port'] = 2222
    ports:
      - '80:80'
      - '443:443'
      - '2222:22'
    volumes:
      - './gitlab/config:/etc/gitlab'
      - './gitlab/logs:/var/log/gitlab'
      - './gitlab/data:/var/opt/gitlab'
    shm_size: '256m'
```

#### 4. Lancement
```powershell
docker-compose up -d
```

### Option 2 : Machine Virtuelle

#### 1. Installation de VirtualBox ou VMware
Téléchargez et installez un hyperviseur de votre choix.

#### 2. Création d'une VM Linux
- Créez une VM Ubuntu Server 20.04 LTS
- Allouez au minimum 4GB RAM et 20GB de stockage
- Configurez le réseau en mode Bridge

#### 3. Installation de GitLab dans la VM
Suivez les instructions Linux ci-dessus une fois la VM démarrée.

---

## Configuration Commune

### Configuration SSL/TLS

#### Let's Encrypt (Automatique)
```bash
sudo gitlab-ctl reconfigure
sudo gitlab-ctl renew-le-certs
```

#### Certificat personnalisé
```bash
# Éditez le fichier de configuration
sudo nano /etc/gitlab/gitlab.rb

# Ajoutez les lignes suivantes
nginx['ssl_certificate'] = "/path/to/certificate.crt"
nginx['ssl_certificate_key'] = "/path/to/certificate.key"

# Reconfigurer
sudo gitlab-ctl reconfigure
```

### Configuration SMTP pour les emails

Éditez `/etc/gitlab/gitlab.rb` :
```ruby
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.gmail.com"
gitlab_rails['smtp_port'] = 587
gitlab_rails['smtp_user_name'] = "your-email@gmail.com"
gitlab_rails['smtp_password'] = "your-password"
gitlab_rails['smtp_domain'] = "smtp.gmail.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = false
```

### Sauvegarde et Restauration

#### Création d'une sauvegarde
```bash
sudo gitlab-backup create
```

#### Restauration
```bash
sudo gitlab-backup restore BACKUP=timestamp_of_backup
```

---

## Commandes Utiles

### Linux/macOS (Installation native)
```bash
# Démarrer GitLab
sudo gitlab-ctl start

# Arrêter GitLab
sudo gitlab-ctl stop

# Redémarrer GitLab
sudo gitlab-ctl restart

# Voir les logs
sudo gitlab-ctl tail

# Vérifier la configuration
sudo gitlab-rake gitlab:check

# Mettre à jour GitLab
sudo apt-get update && sudo apt-get install gitlab-ce
```

### Docker
```bash
# Voir les logs
docker logs -f gitlab

# Accéder au conteneur
docker exec -it gitlab bash

# Redémarrer le conteneur
docker restart gitlab

# Mettre à jour l'image
docker pull gitlab/gitlab-ce:latest
docker-compose down
docker-compose up -d
```

---

## Sécurisation

### Premières étapes de sécurité

1. **Changer le mot de passe root**
```bash
sudo gitlab-rails console
user = User.find_by(username: 'root')
user.password = 'nouveau_mot_de_passe_securise'
user.password_confirmation = 'nouveau_mot_de_passe_securise'
user.save!
```

2. **Activer l'authentification à deux facteurs (2FA)**
   - Paramètres utilisateur → Compte → Authentification à deux facteurs

3. **Configurer les restrictions d'accès**
   - Admin Area → Settings → General → Sign-up restrictions

4. **Limiter les tentatives de connexion**
```ruby
# Dans /etc/gitlab/gitlab.rb
gitlab_rails['rack_attack_git_basic_auth'] = {
  'enabled' => true,
  'ip_whitelist' => ["127.0.0.1"],
  'maxretry' => 3,
  'findtime' => 60,
  'bantime' => 3600
}
```

---

## Vérification de l'Installation

### Tests de base

1. **Accès Web** : `http://votre-domaine.com`
2. **Test SSH** :
```bash
ssh -T git@votre-domaine.com
```

3. **API GitLab** :
```bash
curl --header "PRIVATE-TOKEN: votre-token" \
  "http://votre-domaine.com/api/v4/projects"
```

### Diagnostic complet
```bash
sudo gitlab-rake gitlab:env:info
sudo gitlab-rake gitlab:check
```

---

## Dépannage

### Problèmes Courants

#### GitLab ne démarre pas
```bash
# Vérifier les erreurs
sudo gitlab-ctl tail

# Reconfigurer
sudo gitlab-ctl reconfigure

# Redémarrer tous les services
sudo gitlab-ctl restart
```

#### Problème de mémoire
```ruby
# Dans /etc/gitlab/gitlab.rb
unicorn['worker_processes'] = 2
postgresql['shared_buffers'] = "256MB"
```

#### Réinitialisation des permissions
```bash
sudo gitlab-rake gitlab:check
sudo chmod -R 755 /var/opt/gitlab/git-data/repositories
```

---

## Ressources Supplémentaires

- [Documentation officielle GitLab](https://docs.gitlab.com)
- [Forum de la communauté GitLab](https://forum.gitlab.com)
- [GitLab Status](https://status.gitlab.com)
- [GitLab University](https://university.gitlab.com)

---

## Notes de Version

- **GitLab CE** : Version Community Edition (gratuite)
- **GitLab EE** : Version Enterprise Edition (payante avec fonctionnalités avancées)
- Vérifiez toujours la compatibilité de votre système avec la version de GitLab choisie