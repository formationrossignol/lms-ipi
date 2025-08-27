# TP : Intégration des plugins Jenkins - Blue Ocean, Gitea et Slack

## Objectifs du TP

À la fin de ce TP, vous serez capable de :
- Installer et configurer le plugin Blue Ocean
- Intégrer le plugin Slack pour les notifications
- Configurer le plugin Gitea pour l'intégration Git
- Créer un pipeline avec ces trois plugins

## Prérequis

- Jenkins installé et fonctionnel (http://localhost:8080)
- Droits administrateur sur Jenkins
- Accès à un workspace Slack
- Serveur Gitea ou compte GitHub/GitLab

---

## Partie 1 : Installation des plugins

### Étape 1 : Installation via l'interface Jenkins

1. Connectez-vous à Jenkins (http://localhost:8080)
2. Allez dans **"Manage Jenkins"** → **"Manage Plugins"**
3. Dans l'onglet **"Available"**, recherchez et installez :
   - **Blue Ocean**
   - **Slack Notification Plugin**
   - **Gitea Plugin** (ou Git Plugin)
4. Cliquez sur **"Install without restart"**
5. Attendez la fin de l'installation

### Étape 2 : Vérification de l'installation

1. Retournez au tableau de bord Jenkins
2. Vérifiez la présence du bouton **"Open Blue Ocean"**
3. Vérifiez dans **"Manage Jenkins"** → **"Configure System"** la présence des sections Slack et Gitea

---

## Partie 2 : Configuration du plugin Blue Ocean

### Qu'est-ce que Blue Ocean ?
Blue Ocean est une interface moderne pour Jenkins qui améliore la visualisation des pipelines.

### Configuration

1. Cliquez sur **"Open Blue Ocean"** dans le menu Jenkins
2. Explorez l'interface :
   - Vue des pipelines
   - Éditeur visuel
   - Historique des builds
3. Blue Ocean ne nécessite pas de configuration supplémentaire

**Exercice 2.1** : Créez un pipeline simple via Blue Ocean et observez la différence avec l'interface classique.

---

## Partie 3 : Configuration du plugin Slack

### Étape 1 : Préparation de Slack

1. Allez sur https://api.slack.com/apps
2. Créez une nouvelle app : **"Create New App"** → **"From scratch"**
3. Nommez votre app : "Jenkins Notifications"
4. Dans **"OAuth & Permissions"**, ajoutez les permissions :
   - `chat:write`
   - `chat:write.public`
5. Installez l'app dans votre workspace
6. Copiez le **Bot User OAuth Token** (commence par `xoxb-`)

### Étape 2 : Configuration dans Jenkins

1. Allez dans **"Manage Jenkins"** → **"Configure System"**
2. Trouvez la section **"Slack"**
3. Configurez :
   - **Workspace** : nom de votre workspace Slack
   - **Credential** : Créez une nouvelle credential
     - Kind : "Secret text"
     - Secret : votre Bot User OAuth Token
     - ID : "slack-token"
   - **Default channel** : `#general` (ou créez un canal dédié)
4. Testez la connexion

### Étape 3 : Test des notifications

Créez un job simple pour tester :

```groovy
pipeline {
    agent any
    
    stages {
        stage('Test') {
            steps {
                echo 'Test du pipeline'
            }
        }
    }
    
    post {
        always {
            slackSend(
                channel: '#general',
                color: 'good',
                message: "Test Jenkins - Build ${env.BUILD_NUMBER}"
            )
        }
    }
}
```

**Exercice 3.1** : Configurez les notifications Slack et testez avec un pipeline simple.

---

## Partie 4 : Configuration du plugin Gitea

### Étape 1 : Configuration des credentials Git

1. Allez dans **"Manage Jenkins"** → **"Manage Credentials"**
2. Ajoutez une nouvelle credential :
   - **Kind** : Username with password
   - **Username** : votre nom d'utilisateur Git
   - **Password** : votre mot de passe ou token
   - **ID** : git-credentials

### Étape 2 : Configuration des webhooks (optionnel)

Si vous utilisez Gitea :
1. Dans votre repository Gitea, allez dans **"Settings"** → **"Webhooks"**
2. Ajoutez un webhook :
   - **URL** : `http://jenkins-url:8080/gitea-webhook/post`
   - **Content Type** : application/json
   - **Events** : Push events

### Étape 3 : Test avec un repository

Créez un job multibranch pipeline :
1. **"New Item"** → **"Multibranch Pipeline"**
2. Configurez la source Git :
   - **Repository URL** : URL de votre repository
   - **Credentials** : sélectionnez git-credentials
3. Sauvegardez

**Exercice 4.1** : Connectez un repository Git et configurez un pipeline automatique.

---

## Partie 5 : Pipeline intégré avec les trois plugins

### Exemple de Jenkinsfile complet

```groovy
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code'
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Construction de l\'application'
                // Ajoutez vos commandes de build ici
            }
        }
        
        stage('Test') {
            steps {
                echo 'Exécution des tests'
                // Ajoutez vos commandes de test ici
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Déploiement en production'
                // Ajoutez vos commandes de déploiement ici
            }
        }
    }
    
    post {
        success {
            slackSend(
                channel: '#general',
                color: 'good',
                message: """
                Build réussi !
                Projet: ${env.JOB_NAME}
                Build: ${env.BUILD_NUMBER}
                Branche: ${env.BRANCH_NAME}
                """
            )
        }
        
        failure {
            slackSend(
                channel: '#general',
                color: 'danger',
                message: """
                Build échoué !
                Projet: ${env.JOB_NAME}
                Build: ${env.BUILD_NUMBER}
                Voir: ${env.BUILD_URL}
                """
            )
        }
    }
}
```

### Test du pipeline intégré

1. Créez un repository avec ce Jenkinsfile
2. Configurez le job multibranch pipeline
3. Faites un push pour déclencher le build
4. Vérifiez :
   - La visualisation dans Blue Ocean
   - Les notifications Slack
   - L'intégration Git

**Exercice 5.1** : Créez un pipeline complet utilisant les trois plugins et testez toutes les fonctionnalités.

---

## Partie 6 : Fonctionnalités avancées

### Notifications Slack enrichies

```groovy
// Message Slack avec plus d'informations
slackSend(
    channel: '#general',
    color: 'good',
    attachments: [[
        title: "Build ${env.BUILD_NUMBER} - ${env.JOB_NAME}",
        titleLink: "${env.BUILD_URL}",
        fields: [
            [title: 'Branche', value: "${env.BRANCH_NAME}", short: true],
            [title: 'Commit', value: "${env.GIT_COMMIT[0..7]}", short: true],
            [title: 'Durée', value: "${currentBuild.durationString}", short: true]
        ],
        actions: [
            [
                type: "button",
                text: "Voir dans Blue Ocean",
                url: "${env.BUILD_URL}display/redirect"
            ]
        ]
    ]]
)
```

### Paramètres de pipeline dans Blue Ocean

```groovy
pipeline {
    agent any
    
    parameters {
        choice(
            choices: ['dev', 'staging', 'prod'],
            description: 'Environnement de déploiement',
            name: 'ENVIRONMENT'
        )
        booleanParam(
            defaultValue: false,
            description: 'Ignorer les tests ?',
            name: 'SKIP_TESTS'
        )
    }
    
    stages {
        stage('Deploy') {
            steps {
                echo "Déploiement vers ${params.ENVIRONMENT}"
                script {
                    if (params.SKIP_TESTS) {
                        echo "Tests ignorés"
                    } else {
                        echo "Exécution des tests"
                    }
                }
            }
        }
    }
}
```

**Exercice 6.1** : Ajoutez des paramètres à votre pipeline et testez-les via Blue Ocean.

---

## Troubleshooting

### Problèmes courants

#### Plugin Slack ne fonctionne pas
```bash
# Vérifiez le token dans les credentials
# Testez manuellement la connexion dans Configure System
```

#### Webhook Gitea ne déclenche pas
```bash
# Vérifiez l'URL du webhook
# Vérifiez que Jenkins est accessible depuis Gitea
# Consultez les logs Gitea pour les erreurs
```

#### Blue Ocean n'affiche pas le pipeline
```bash
# Vérifiez que le Jenkinsfile est bien présent
# Assurez-vous que la syntaxe du pipeline est correcte
# Consultez les logs Jenkins
```
---
## Documentation officielle
- **Jenkins Plugins** : https://plugins.jenkins.io/
- **Blue Ocean** : https://jenkins.io/projects/blueocean/
- **Slack API** : https://api.slack.com/
- **Gitea** : https://docs.gitea.io/
