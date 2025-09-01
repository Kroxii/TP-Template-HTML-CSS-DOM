# TP Template - HTML, CSS & Manipulation du DOM

## 📋 Description

Ce projet est un template d'exercice pratique (TP) démontrant l'utilisation d'HTML, CSS et la manipulation du DOM en JavaScript. Il s'agit d'une application web interactive comprenant plusieurs fonctionnalités modernes typiques d'un site e-commerce.

## ✨ Fonctionnalités

### 🛒 Simulateur de Prix
- Sélection de couleurs pour un produit (casque audio)
- Choix de versions avec impact sur le prix
- Options supplémentaires avec calcul automatique du prix final
- Interface interactive avec templates HTML

### ⭐ Système d'Avis Clients
- Affichage des avis existants avec système d'étoiles
- Formulaire d'ajout de nouveaux avis
- Filtrage des avis par note
- Génération automatique d'avis factices
- Suppression d'avis avec confirmation

### ❓ FAQ Interactive
- Liste de questions fréquemment posées
- Fonction de recherche dans les questions
- Interface accordéon pour afficher/masquer les réponses
- Formulaire pour poser de nouvelles questions

### 📧 Formulaire de Contact
- Validation côté client des champs obligatoires
- Vérification du format email
- Modal de confirmation après envoi
- Gestion des erreurs avec messages personnalisés

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique et templates
- **CSS3** : Stylisation et responsive design
- **JavaScript ES6+** : Manipulation du DOM, événements, validation
- **Templates HTML** : Pour la génération dynamique de contenu

## 📁 Structure du Projet

```
TP-Template-HTML-CSS-DOM/
├── index.html              # Page principale
├── style.css              # Styles globaux
├── script.js              # Script principal (vide)
├── faq/
│   └── faq.js            # Logique de la FAQ
├── formulaire.contact/
│   └── contact.js        # Validation du formulaire
├── PriceSimulator/
│   └── script.js         # Simulateur de prix
└── reviews/
    └── reviews.js        # Gestion des avis
```

## 🚀 Installation et Utilisation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Kroxii/TP-Template-HTML-CSS-DOM.git
   ```

2. **Ouvrir le projet**
   ```bash
   cd TP-Template-HTML-CSS-DOM
   ```

3. **Lancer l'application**
   - Ouvrir `index.html` dans un navigateur web
   - Ou utiliser un serveur local (Live Server, Python simple server, etc.)

## 🎯 Objectifs Pédagogiques

Ce projet permet d'apprendre et de pratiquer :

- ✅ Manipulation avancée du DOM
- ✅ Gestion des événements JavaScript
- ✅ Utilisation des templates HTML
- ✅ Validation de formulaires côté client
- ✅ Filtrage et recherche dynamique
- ✅ Gestion d'état avec JavaScript
- ✅ Bonnes pratiques en développement web

## 🔧 Fonctionnalités Techniques

### Manipulation du DOM
- Utilisation de `querySelector` et `getElementById`
- Clonage d'éléments avec `cloneNode()`
- Gestion des templates HTML natifs

### Gestion des Événements
- Event listeners pour les interactions utilisateur
- Prévention du comportement par défaut des formulaires
- Gestion des événements de changement et de soumission

### Validation et Filtrage
- Validation en temps réel des champs de formulaire
- Expressions régulières pour la validation email
- Filtrage dynamique basé sur les critères utilisateur

## 🤝 Contribution

Ce projet étant un template éducatif, les contributions sont les bienvenues pour :
- Améliorer les fonctionnalités existantes
- Ajouter de nouvelles fonctionnalités
- Corriger les bugs
- Améliorer la documentation

## 📄 Licence

Ce projet est libre d'utilisation à des fins éducatives.

---

*Développé dans le cadre d'un TP sur la manipulation du DOM et les bonnes pratiques JavaScript.*
Créé par Marie-Isabel, Ludovic, Nicolas et Remi