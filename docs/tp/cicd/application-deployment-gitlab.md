# Déploiement d'une Application JavaScript sur Machine Locale avec GitLab CI/CD

## Configuration Requise

### Sur la machine locale
- Node.js installé
- Un répertoire de déploiement (ex: `/var/www/monapp`)
- SSH activé sur la machine locale

### Sur GitLab
- Un runner GitLab configuré
- Variables CI/CD configurées dans le projet

## Configuration des Variables GitLab

Dans GitLab, allez dans Settings → CI/CD → Variables et ajoutez :

- `SSH_PRIVATE_KEY` : Clé SSH privée pour accéder à votre machine
- `DEPLOY_HOST` : Adresse IP de votre machine locale
- `DEPLOY_USER` : Nom d'utilisateur SSH
- `DEPLOY_PATH` : Chemin de déploiement (ex: `/var/www/monapp`)

## Fichier .gitlab-ci.yml

```yaml
stages:
  - build
  - test
  - deploy

variables:
  NODE_VERSION: "18"

# Installation et build
build:
  stage: build
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
      - package.json
      - package-lock.json
    expire_in: 1 hour

# Tests
test:
  stage: test
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm test

# Déploiement
deploy:
  stage: deploy
  image: alpine:latest
  dependencies:
    - build
  before_script:
    - apk add --no-cache openssh-client
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | ssh-add -
    - mkdir -p ~/.ssh
    - ssh-keyscan -H $DEPLOY_HOST >> ~/.ssh/known_hosts
  script:
    # Créer le répertoire si nécessaire
    - ssh $DEPLOY_USER@$DEPLOY_HOST "mkdir -p $DEPLOY_PATH"
    
    # Copier les fichiers
    - scp -r dist/* $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/
    - scp package*.json $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/
    
    # Installer les dépendances et redémarrer l'application
    - ssh $DEPLOY_USER@$DEPLOY_HOST "
        cd $DEPLOY_PATH &&
        npm ci --production &&
        pm2 restart monapp || pm2 start dist/index.js --name monapp
      "
  only:
    - main
```

## Script de Déploiement Alternatif (avec rsync)

```yaml
deploy:
  stage: deploy
  image: alpine:latest
  dependencies:
    - build
  before_script:
    - apk add --no-cache openssh-client rsync
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | ssh-add -
    - mkdir -p ~/.ssh
    - ssh-keyscan -H $DEPLOY_HOST >> ~/.ssh/known_hosts
  script:
    # Synchroniser les fichiers
    - rsync -avz --delete dist/ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/
    
    # Redémarrer l'application
    - ssh $DEPLOY_USER@$DEPLOY_HOST "cd $DEPLOY_PATH && npm install --production && npm restart"
  only:
    - main
```

## Configuration SSH sur la Machine Locale

### Générer une paire de clés SSH
```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/gitlab_deploy
```

### Autoriser la clé sur votre machine
```bash
cat ~/.ssh/gitlab_deploy.pub >> ~/.ssh/authorized_keys
```

### Copier la clé privée
```bash
cat ~/.ssh/gitlab_deploy
```
Copiez le contenu et ajoutez-le dans la variable `SSH_PRIVATE_KEY` sur GitLab.

## Structure du Projet

```
mon-projet/
├── .gitlab-ci.yml
├── package.json
├── package-lock.json
├── src/
│   └── index.js
├── dist/           # Généré par le build
└── tests/
    └── test.js
```

## Package.json Exemple

```json
{
  "name": "mon-app",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --mode production",
    "start": "node dist/index.js",
    "test": "jest",
    "restart": "pm2 restart monapp || npm start"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0",
    "jest": "^29.0.0"
  }
}
```

## Commandes Utiles

### Vérifier le statut du pipeline
```bash
git push origin main
# Puis vérifier dans GitLab → CI/CD → Pipelines
```

### Logs sur la machine locale
```bash
# Si vous utilisez PM2
pm2 logs monapp
pm2 status

# Ou directement
journalctl -u monapp -f
```

### Redémarrage manuel
```bash
cd /var/www/monapp
npm restart
```

## Dépannage

### Permission denied
Vérifiez que la clé SSH est correctement configurée et que l'utilisateur a les droits sur le répertoire de déploiement.

### Port déjà utilisé
```bash
# Trouver le processus
lsof -i :3000
# Tuer le processus
kill -9 <PID>
```

### Pipeline qui échoue
Vérifiez les logs dans GitLab → CI/CD → Jobs et cliquez sur le job en échec pour voir les détails.
