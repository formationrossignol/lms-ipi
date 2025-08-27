# TP Jenkins - Déploiement d'une Application JavaScript

## Objectifs du TP

À la fin de ce TP, vous serez capable de :
- Créer et configurer un pipeline Jenkins
- Déployer automatiquement une application JavaScript
- Mettre en place un processus CI/CD complet
- Gérer les différentes étapes du déploiement

## Prérequis

- Jenkins installé et configuré
- Node.js installé sur le serveur Jenkins
- Git installé
- Accès à un repository Git (GitHub, GitLab, etc.)
- Un serveur web pour le déploiement (Apache, Nginx, ou serveur de développement)

## Partie 1 : Préparation de l'Application JavaScript

### 1.1 Structure du projet

Créez la structure suivante pour votre application :

```
mon-app-js/
├── src/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   └── utils.js
├── tests/
│   └── app.test.js
├── package.json
├── Jenkinsfile
└── README.md
```

### 1.2 Fichiers de l'application

**package.json**
```json
{
  "name": "mon-app-js",
  "version": "1.0.0",
  "description": "Application JavaScript pour TP Jenkins",
  "main": "src/app.js",
  "scripts": {
    "start": "node server.js",
    "test": "jest",
    "build": "npm run copy-files",
    "copy-files": "mkdir -p dist && cp -r src/* dist/",
    "clean": "rm -rf dist node_modules"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "express": "^4.18.0"
  }
}
```

**src/index.html**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon App JS - Jenkins TP</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Application JavaScript</h1>
            <p>Déployée avec Jenkins</p>
        </header>
        
        <main>
            <section class="calculator">
                <h2>Calculatrice Simple</h2>
                <input type="number" id="num1" placeholder="Premier nombre">
                <select id="operation">
                    <option value="add">Addition</option>
                    <option value="subtract">Soustraction</option>
                    <option value="multiply">Multiplication</option>
                    <option value="divide">Division</option>
                </select>
                <input type="number" id="num2" placeholder="Deuxième nombre">
                <button onclick="calculate()">Calculer</button>
                <div id="result"></div>
            </section>

            <section class="status">
                <h2>Statut du Déploiement</h2>
                <p>Version: <span id="version">1.0.0</span></p>
                <p>Dernière mise à jour: <span id="timestamp"></span></p>
            </section>
        </main>
    </div>
    
    <script src="utils.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

**src/app.js**
```javascript
// Application principale
document.addEventListener('DOMContentLoaded', function() {
    updateTimestamp();
    console.log('Application chargée avec succès');
});

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = 'Erreur: Veuillez entrer des nombres valides';
        resultDiv.className = 'error';
        return;
    }

    let result;
    switch(operation) {
        case 'add':
            result = addNumbers(num1, num2);
            break;
        case 'subtract':
            result = subtractNumbers(num1, num2);
            break;
        case 'multiply':
            result = multiplyNumbers(num1, num2);
            break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.innerHTML = 'Erreur: Division par zéro impossible';
                resultDiv.className = 'error';
                return;
            }
            result = divideNumbers(num1, num2);
            break;
        default:
            result = 'Opération non supportée';
    }

    resultDiv.innerHTML = `Résultat: ${result}`;
    resultDiv.className = 'success';
}

function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        timestampElement.textContent = new Date().toLocaleString('fr-FR');
    }
}
```

**src/utils.js**
```javascript
// Fonctions utilitaires pour les calculs
function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

// Fonction de validation
function isValidNumber(value) {
    return !isNaN(value) && isFinite(value);
}

// Export pour les tests (si environnement Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addNumbers,
        subtractNumbers,
        multiplyNumbers,
        divideNumbers,
        isValidNumber
    };
}
```

**src/styles.css**
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #007bff;
}

header h1 {
    color: #333;
    margin-bottom: 10px;
}

header p {
    color: #666;
    font-size: 1.1em;
}

.calculator {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 5px;
}

.calculator h2 {
    color: #333;
    margin-bottom: 20px;
}

.calculator input, .calculator select, .calculator button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.calculator button {
    background-color: #007bff;
    color: white;
    cursor: pointer;
    font-weight: bold;
}

.calculator button:hover {
    background-color: #0056b3;
}

#result {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
}

#result.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

#result.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

.status {
    padding: 20px;
    background-color: #e9ecef;
    border-radius: 5px;
}

.status h2 {
    color: #333;
    margin-bottom: 15px;
}

.status p {
    margin: 8px 0;
    font-size: 1.1em;
}

.status span {
    font-weight: bold;
    color: #007bff;
}
```

**tests/app.test.js**
```javascript
const { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, isValidNumber } = require('../src/utils.js');

describe('Tests de la calculatrice', () => {
    test('Addition de deux nombres', () => {
        expect(addNumbers(2, 3)).toBe(5);
        expect(addNumbers(-1, 1)).toBe(0);
        expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('Soustraction de deux nombres', () => {
        expect(subtractNumbers(5, 3)).toBe(2);
        expect(subtractNumbers(0, 5)).toBe(-5);
        expect(subtractNumbers(10, 10)).toBe(0);
    });

    test('Multiplication de deux nombres', () => {
        expect(multiplyNumbers(3, 4)).toBe(12);
        expect(multiplyNumbers(-2, 5)).toBe(-10);
        expect(multiplyNumbers(0, 100)).toBe(0);
    });

    test('Division de deux nombres', () => {
        expect(divideNumbers(10, 2)).toBe(5);
        expect(divideNumbers(9, 3)).toBe(3);
        expect(divideNumbers(1, 4)).toBe(0.25);
    });

    test('Validation des nombres', () => {
        expect(isValidNumber(42)).toBe(true);
        expect(isValidNumber(0)).toBe(true);
        expect(isValidNumber(-10)).toBe(true);
        expect(isValidNumber(NaN)).toBe(false);
        expect(isValidNumber(Infinity)).toBe(false);
    });
});
```

**server.js** (pour le développement local)
```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
```

## Partie 2 : Configuration du Pipeline Jenkins

### 2.1 Création du Jenkinsfile

**Jenkinsfile**
```groovy
pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        APP_NAME = 'mon-app-js'
        DEPLOY_DIR = '/var/www/html/mon-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code source...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installation des dépendances Node.js...'
                sh '''
                    node --version
                    npm --version
                    npm ci
                '''
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Exécution des tests...'
                sh 'npm test'
            }
            post {
                always {
                    publishTestResults testResultsPattern: 'test-results.xml'
                }
            }
        }
        
        stage('Code Quality Check') {
            steps {
                echo 'Vérification de la qualité du code...'
                sh '''
                    echo "Vérification de la syntaxe JavaScript..."
                    find src -name "*.js" -exec node -c {} \\;
                    echo "Vérification terminée"
                '''
            }
        }
        
        stage('Build') {
            steps {
                echo 'Construction de l\'application...'
                sh '''
                    npm run build
                    ls -la dist/
                '''
            }
        }
        
        stage('Security Scan') {
            steps {
                echo 'Analyse de sécurité...'
                sh '''
                    echo "Vérification des dépendances..."
                    npm audit --audit-level=high
                '''
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Déploiement vers l\'environnement de staging...'
                sh '''
                    echo "Déploiement staging simulé"
                    mkdir -p staging
                    cp -r dist/* staging/
                '''
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo 'Déploiement vers la production...'
                sh '''
                    echo "Sauvegarde de la version précédente..."
                    if [ -d "${DEPLOY_DIR}" ]; then
                        cp -r ${DEPLOY_DIR} ${DEPLOY_DIR}_backup_$(date +%Y%m%d_%H%M%S)
                    fi
                    
                    echo "Déploiement de la nouvelle version..."
                    mkdir -p ${DEPLOY_DIR}
                    cp -r dist/* ${DEPLOY_DIR}/
                    
                    echo "Vérification du déploiement..."
                    ls -la ${DEPLOY_DIR}
                '''
            }
        }
        
        stage('Health Check') {
            steps {
                echo 'Vérification de santé de l\'application...'
                script {
                    try {
                        sh '''
                            echo "Test de connectivité..."
                            # Simulation d'un health check
                            echo "Application déployée avec succès"
                        '''
                    } catch (Exception e) {
                        currentBuild.result = 'UNSTABLE'
                        echo "Warning: Health check failed: ${e.getMessage()}"
                    }
                }
            }
        }
    }
    
    post {
        always {
            echo 'Nettoyage des ressources temporaires...'
            sh '''
                rm -rf node_modules/.cache
                rm -rf staging
            '''
        }
        success {
            echo 'Pipeline exécuté avec succès!'
            emailext (
                subject: "Build Success: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                body: """
                    Le déploiement de ${env.JOB_NAME} s'est terminé avec succès.
                    
                    Build: ${env.BUILD_NUMBER}
                    Branch: ${env.BRANCH_NAME}
                    
                    Voir les détails: ${env.BUILD_URL}
                """,
                to: "${env.CHANGE_AUTHOR_EMAIL}"
            )
        }
        failure {
            echo 'Le pipeline a échoué!'
            emailext (
                subject: "Build Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                body: """
                    Le déploiement de ${env.JOB_NAME} a échoué.
                    
                    Build: ${env.BUILD_NUMBER}
                    Branch: ${env.BRANCH_NAME}
                    
                    Voir les détails: ${env.BUILD_URL}
                """,
                to: "${env.CHANGE_AUTHOR_EMAIL}"
            )
        }
        unstable {
            echo 'Build instable - des avertissements ont été détectés'
        }
    }
}
```

## Partie 3 : Configuration de Jenkins

### 3.1 Installation des plugins nécessaires

Dans Jenkins, installez ces plugins :
- Pipeline
- Git plugin  
- NodeJS plugin
- Email Extension plugin
- Workspace Cleanup plugin
- Build Timeout plugin

### 3.2 Configuration globale

1. **Configuration Node.js** (Manage Jenkins > Global Tool Configuration)
   - Name: `NodeJS-18`
   - Version: `18.x.x`
   - Installation automatique: Coché

2. **Configuration Git** 
   - Vérifier que Git est configuré dans Global Tool Configuration

### 3.3 Création du job Jenkins

1. **Nouveau job**
   - New Item > Pipeline
   - Nom: `mon-app-js-pipeline`

2. **Configuration du pipeline**
   - Definition: Pipeline script from SCM
   - SCM: Git
   - Repository URL: `https://github.com/votre-username/mon-app-js.git`
   - Branch Specifier: `*/main`
   - Script Path: `Jenkinsfile`

3. **Configuration des triggers**
   - Build Triggers: GitHub hook trigger for GITScm polling
   - Poll SCM: `H/5 * * * *` (toutes les 5 minutes)

## Partie 4 : Exercices Pratiques

### Exercice 1 : Premier déploiement

1. Créez le repository Git avec tous les fichiers
2. Configurez le job Jenkins
3. Lancez un premier build
4. Vérifiez que toutes les étapes s'exécutent correctement

### Exercice 2 : Gestion des branches

1. Créez une branche `develop`
2. Modifiez le fichier `app.js` pour ajouter une nouvelle fonction
3. Commitez et poussez sur la branche `develop`
4. Observez que seul le déploiement staging s'exécute

### Exercice 3 : Tests et qualité

1. Ajoutez un test qui échoue dans `app.test.js`
2. Commitez et observez l'échec du pipeline
3. Corrigez le test et relancez

### Exercice 4 : Configuration avancée

1. Ajoutez une étape de notification Slack
2. Configurez des seuils de couverture de code
3. Ajoutez une étape d'archivage des artefacts

## Partie 5 : Questions et Réflexions

### Questions de compréhension

1. Quelle est la différence entre `npm install` et `npm ci` dans le contexte CI/CD?
2. Pourquoi utilise-t-on des conditions `when` dans certaines étapes?
3. Comment fonctionne la gestion des erreurs avec les blocs `post`?
4. Quel est l'intérêt de faire un backup avant déploiement?

### Améliorations possibles

1. **Sécurité**: Comment intégrer des scans de vulnérabilités?
2. **Performance**: Comment optimiser les temps de build?
3. **Monitoring**: Comment surveiller l'application après déploiement?
4. **Rollback**: Comment implémenter un mécanisme de retour en arrière?

## Partie 6 : Ressources et Documentation

### Commandes utiles Jenkins CLI

```bash
# Déclencher un build
java -jar jenkins-cli.jar -s http://localhost:8080 build "mon-app-js-pipeline"

# Voir les logs
java -jar jenkins-cli.jar -s http://localhost:8080 console "mon-app-js-pipeline" -f

# Lister les jobs
java -jar jenkins-cli.jar -s http://localhost:8080 list-jobs
```

### Scripts de déploiement manuel

```bash
# Script de déploiement local
#!/bin/bash
echo "Déploiement local de l'application..."
npm ci
npm run test
npm run build
npm start
```

### Troubleshooting

**Problèmes courants et solutions:**

1. **Erreur de permissions**: Vérifier les droits d'écriture sur `DEPLOY_DIR`
2. **Node.js non trouvé**: Configurer le PATH dans Jenkins
3. **Tests qui échouent**: Vérifier la configuration Jest
4. **Déploiement qui échoue**: Vérifier l'accès au serveur cible
