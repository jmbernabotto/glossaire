// Données du glossaire organisées par catégories
let glossaryTerms = [
    // === CONCEPTS DE BASE ===
    {
        id: 1,
        term: "Intelligence Artificielle (IA)",
        definition: "Technologie qui permet aux machines de simuler l'intelligence humaine, incluant l'apprentissage, le raisonnement et l'auto-correction. L'IA vise à créer des systèmes capables d'effectuer des tâches qui nécessitent normalement l'intelligence humaine.",
        category: "Concepts de Base"
    },
    {
        id: 2,
        term: "Algorithme",
        definition: "Ensemble d'instructions ou de règles définies pour résoudre un problème ou accomplir une tâche. En IA, les algorithmes sont utilisés pour traiter les données, identifier des modèles et prendre des décisions automatisées.",
        category: "Concepts de Base"
    },
    {
        id: 3,
        term: "Réseau de Neurones",
        definition: "Modèle informatique inspiré du fonctionnement du cerveau humain, composé de neurones artificiels interconnectés. Ces réseaux peuvent apprendre à partir de données pour résoudre des problèmes complexes de reconnaissance, classification et prédiction.",
        category: "Concepts de Base"
    },

    // === TECHNIQUES D'APPRENTISSAGE ===
    {
        id: 4,
        term: "Machine Learning (Apprentissage Automatique)",
        definition: "Sous-domaine de l'IA qui permet aux ordinateurs d'apprendre et de s'améliorer automatiquement à partir de l'expérience sans être explicitement programmés. Les algorithmes de ML identifient des modèles dans les données pour faire des prédictions.",
        category: "Techniques d'Apprentissage"
    },
    {
        id: 5,
        term: "Deep Learning (Apprentissage Profond)",
        definition: "Sous-ensemble du machine learning utilisant des réseaux de neurones artificiels avec plusieurs couches cachées. Cette approche imite le fonctionnement du cerveau humain pour traiter des données complexes comme les images, le son et le texte.",
        category: "Techniques d'Apprentissage"
    },
    {
        id: 6,
        term: "Apprentissage Supervisé",
        definition: "Méthode d'apprentissage automatique où l'algorithme apprend à partir d'exemples étiquetés (données d'entrée avec les réponses correctes). Le modèle utilise ces exemples pour faire des prédictions sur de nouvelles données non étiquetées.",
        category: "Techniques d'Apprentissage"
    },
    {
        id: 7,
        term: "Apprentissage Non Supervisé",
        definition: "Technique d'apprentissage automatique où l'algorithme découvre des structures cachées dans des données non étiquetées, sans connaître les réponses correctes. Utilisé pour la classification automatique, la détection d'anomalies et la réduction de dimensionnalité.",
        category: "Techniques d'Apprentissage"
    },
    {
        id: 8,
        term: "Apprentissage par Renforcement",
        definition: "Méthode d'apprentissage où un agent apprend à prendre des décisions en interagissant avec un environnement. L'agent reçoit des récompenses ou des pénalités selon ses actions, optimisant ainsi sa stratégie au fil du temps.",
        category: "Techniques d'Apprentissage"
    },

    // === ARCHITECTURES ET MODÈLES ===
    {
        id: 9,
        term: "Transformer",
        definition: "Architecture de réseau de neurones révolutionnaire utilisant des mécanismes d'attention pour traiter des séquences de données. Les Transformers sont à la base des modèles de langage modernes comme GPT et BERT, excellant dans le traitement du langage naturel.",
        category: "Architectures et Modèles"
    },
    {
        id: 10,
        term: "Modèle de Fondation",
        definition: "Modèle d'IA large et polyvalent, pré-entraîné sur d'énormes quantités de données, qui peut être adapté à diverses tâches spécifiques. Ces modèles servent de base pour développer des applications IA spécialisées.",
        category: "Architectures et Modèles"
    },
    {
        id: 11,
        term: "LLM (Large Language Model / Grand Modèle de Langage)",
        definition: "Modèle d'IA entraîné sur de vastes corpus de texte pour comprendre et générer du langage naturel. Les LLM peuvent effectuer diverses tâches linguistiques comme la traduction, la rédaction et la conversation.",
        category: "Architectures et Modèles"
    },
    {
        id: 12,
        term: "IA Générative",
        definition: "Type d'intelligence artificielle capable de créer du nouveau contenu original (texte, images, audio, vidéo) en apprenant à partir de données existantes. Elle peut produire des créations qui semblent avoir été faites par des humains.",
        category: "Architectures et Modèles"
    },
    {
        id: 13,
        term: "IA Générale (AGI - Artificial General Intelligence)",
        definition: "Intelligence artificielle hypothétique qui égalerait ou surpasserait l'intelligence humaine dans tous les domaines cognitifs. Contrairement à l'IA spécialisée actuelle, l'AGI pourrait comprendre, apprendre et appliquer ses connaissances de manière flexible.",
        category: "Architectures et Modèles"
    },

    // === DONNÉES ET ENTRAÎNEMENT ===
    {
        id: 14,
        term: "Données d'EntraÎnement",
        definition: "Ensemble de données utilisées pour entraîner un modèle d'IA ou de machine learning. Ces données permettent au modèle d'apprendre les modèles et relations nécessaires pour faire des prédictions sur de nouvelles données.",
        category: "Données et EntraÎnement"
    },
    {
        id: 15,
        term: "EntraÎnement de Modèle",
        definition: "Processus par lequel un algorithme d'IA apprend à partir de données d'entraÎnement pour développer sa capacité à faire des prédictions ou prendre des décisions. L'entraÎnement ajuste les paramètres du modèle pour optimiser ses performances.",
        category: "Données et EntraÎnement"
    },

    // === APPLICATIONS ET INTERFACES ===
    {
        id: 16,
        term: "Prompt",
        definition: "Instruction ou question donnée à un modèle d'IA pour obtenir une réponse spécifique. La qualité et la précision du prompt influencent directement la pertinence et l'utilité de la réponse générée par l'IA.",
        category: "Applications et Interfaces"
    },

    // === ENJEUX ÉTHIQUES ET RÉGLEMENTAIRES ===
    {
        id: 17,
        term: "Éthique de l'IA",
        definition: "Ensemble de principes moraux et de considérations éthiques concernant le développement et l'utilisation de l'intelligence artificielle. Inclut la transparence, l'équité, la responsabilité et le respect de la vie privée.",
        category: "Enjeux Éthiques et Réglementaires"
    },
    {
        id: 18,
        term: "Biais Algorithmique",
        definition: "Erreurs systématiques dans les algorithmes d'IA qui produisent des résultats injustes ou discriminatoires envers certains groupes. Ces biais peuvent provenir des données d'entraÎnement ou de la conception de l'algorithme lui-même.",
        category: "Enjeux Éthiques et Réglementaires"
    },

    // === GLOSSAIRE ÉTENDU - TERMES COMPLÉMENTAIRES ===
    {
        id: 19,
        term: "API (Application Programming Interface)",
        definition: "Interface de programmation qui permet à différentes applications de communiquer entre elles. En IA, les APIs permettent d'intégrer facilement des services d'intelligence artificielle dans des applications tierces.",
        category: "Glossaire Étendu - Termes Complémentaires"
    },
    {
        id: 20,
        term: "Hallucination (IA)",
        definition: "Phénomène où un modèle d'IA génère des informations incorrectes, inventées ou non fondées, tout en les présentant avec confiance. C'est un défi majeur des modèles génératifs, particulièrement des LLM.",
        category: "Glossaire Étendu - Termes Complémentaires"
    },
    {
        id: 21,
        term: "Fine-tuning (Affinage)",
        definition: "Processus d'adaptation d'un modèle pré-entraîné à une tâche spécifique en continuant son entraînement sur un ensemble de données plus restreint et ciblé. Permet d'optimiser les performances pour des applications particulières.",
        category: "Glossaire Étendu - Termes Complémentaires"
    },
    {
        id: 22,
        term: "Token",
        definition: "Unité de base utilisée par les modèles de langage pour traiter le texte. Un token peut représenter un mot, une partie de mot, ou même un caractère, selon la méthode de tokenisation utilisée par le modèle.",
        category: "Glossaire Étendu - Termes Complémentaires"
    },
    {
        id: 23,
        term: "Inférence",
        definition: "Processus par lequel un modèle d'IA entraîné utilise ses connaissances acquises pour faire des prédictions ou générer des réponses sur de nouvelles données qu'il n'a jamais vues auparavant.",
        category: "Glossaire Étendu - Termes Complémentaires"
    },
    {
        id: 24,
        term: "Hyperparamètres",
        definition: "Paramètres de configuration qui contrôlent le processus d'entraînement d'un modèle d'IA, comme le taux d'apprentissage, le nombre d'époques, ou la taille des couches. Ils sont définis avant l'entraînement et influencent les performances du modèle.",
        category: "Glossaire Étendu - Termes Complémentaires"
    },
    {
        id: 36,
        term: "RGPD (Règlement Général sur la Protection des Données)",
        definition: "Règlement européen entré en vigueur en 2018 qui encadre le traitement des données personnelles. En IA, le RGPD impose des obligations strictes sur la collecte, le traitement et l'utilisation des données personnelles pour l'entraînement des modèles.",
        category: "Enjeux Éthiques et Réglementaires"
    },
    {
        id: 37,
        term: "AI Act (Loi européenne sur l'IA)",
        definition: "Premier cadre réglementaire complet au monde pour l'intelligence artificielle, adopté par l'UE en 2024. Il classe les systèmes d'IA selon leur niveau de risque et impose des obligations proportionnelles, visant à garantir une IA sûre et respectueuse des droits fondamentaux.",
        category: "Enjeux Éthiques et Réglementaires"
    },
    // === PERSONNALITÉS DE L'IA ===
    {
        id: 25,
        term: "Alan Turing",
        definition: "Fondateur théorique de l'informatique moderne et précurseur de l'intelligence artificielle. Créateur de la machine de Turing (1936) et du célèbre test de Turing (1950) pour évaluer l'intelligence des machines. Ses travaux ont posé les bases conceptuelles de l'IA.",
        category: "Personnalités de l'IA"
    },
    {
        id: 26,
        term: "John McCarthy",
        definition: "Créateur du terme 'intelligence artificielle' en 1956. Inventeur du langage de programmation LISP et organisateur de la conférence historique de Dartmouth qui a lancé officiellement le domaine de l'IA. Pionnier de la logique en IA.",
        category: "Personnalités de l'IA"
    },
    {
        id: 27,
        term: "Geoffrey Hinton",
        definition: "Surnommé le 'Parrain du deep learning'. Pionnier de l'algorithme de rétropropagation et des réseaux de neurones profonds. Ses travaux ont révolutionné l'apprentissage automatique moderne. Prix Turing 2018 avec Bengio et LeCun.",
        category: "Personnalités de l'IA"
    },
    {
        id: 28,
        term: "Marvin Minsky",
        definition: "Co-fondateur du MIT AI Lab en 1959. Pionnier des réseaux de neurones, de la représentation des connaissances et de la robotique. Auteur influent sur la théorie de l'esprit et l'intelligence artificielle. Prix Turing 1969.",
        category: "Personnalités de l'IA"
    },
    {
        id: 29,
        term: "Yann LeCun",
        definition: "Architecte des réseaux de neurones convolutifs (CNN) qui ont révolutionné la vision par ordinateur. Directeur scientifique de Meta AI et professeur à NYU. Co-lauréat du prix Turing 2018 pour ses contributions au deep learning.",
        category: "Personnalités de l'IA"
    },
    {
        id: 30,
        term: "Yoshua Bengio",
        definition: "Pionnier du deep learning et des réseaux de neurones récurrents. Professeur à l'Université de Montréal et co-fondateur d'Element AI. Co-lauréat du prix Turing 2018. Militant pour une IA éthique et bénéfique.",
        category: "Personnalités de l'IA"
    },
    {
        id: 31,
        term: "Andrew Ng",
        definition: "Figure majeure de la démocratisation du machine learning. Fondateur de Google Brain, ancien directeur du Stanford AI Lab, co-fondateur de Coursera. Pionnier de l'apprentissage en ligne massif en IA.",
        category: "Personnalités de l'IA"
    },
    {
        id: 32,
        term: "Demis Hassabis",
        definition: "Fondateur et CEO de DeepMind (acquis par Google). Architecte d'AlphaGo qui a battu le champion du monde de Go, et d'AlphaFold qui a révolutionné la prédiction de structure des protéines. Neuroscientifique et entrepreneur.",
        category: "Personnalités de l'IA"
    },
    {
        id: 33,
        term: "Judea Pearl",
        definition: "Révolutionnaire des réseaux bayésiens et de l'inférence causale en IA. Ses travaux sur la causalité ont transformé la compréhension des relations cause-effet dans les systèmes intelligents. Prix Turing 2011.",
        category: "Personnalités de l'IA"
    },
    {
        id: 34,
        term: "Stuart Russell",
        definition: "Référence mondiale en AI safety et alignement de l'IA. Co-auteur du manuel de référence 'Artificial Intelligence: A Modern Approach' (Russell & Norvig). Penseur influent sur les risques et la gouvernance de l'IA.",
        category: "Personnalités de l'IA"
    },
    {
        id: 35,
        term: "Sam Altman",
        definition: "CEO et co-fondateur d'OpenAI, l'organisation à l'origine de GPT et ChatGPT. Ancien président de Y Combinator. Figure emblématique du développement de l'IA générative et des grands modèles de langage.",
        category: "Personnalités de l'IA"
    },
    
];

// Glossaire IA - Données chargées depuis JSON
let glossaryTerms = [];
let nextId = 38;
let filteredTerms = [];

// Fonction pour charger les données du glossaire
async function loadGlossaryData() {
    try {
        const response = await fetch('./glossary-data.json');
        if (!response.ok) {
            throw new Error('Impossible de charger les données du glossaire');
        }
        const data = await response.json();
        glossaryTerms = data.terms;
        nextId = data.nextId;
        
        // Charger les termes supplémentaires depuis localStorage
        loadFromLocalStorage();
        
        // Mettre à jour l'affichage
        filteredTerms = [...glossaryTerms];
        renderGlossary();
        
        console.log('Données du glossaire chargées:', glossaryTerms.length, 'termes');
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        // En cas d'erreur, utiliser les données de localStorage uniquement
        loadFromLocalStorage();
        filteredTerms = [...glossaryTerms];
        renderGlossary();
    }
}

// Éléments DOM
const glossaryGrid = document.getElementById('glossaryGrid');
const searchInput = document.getElementById('searchInput');
const addTermBtn = document.getElementById('addTermBtn');
const modal = document.getElementById('addTermModal');
const closeModal = document.querySelector('.close');
const addTermForm = document.getElementById('addTermForm');
const cancelBtn = document.getElementById('cancelBtn');

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Charger les données du glossaire depuis le fichier JSON
    loadGlossaryData();
    setupEventListeners();
});

// Configuration des écouteurs d'événements
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    addTermBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    cancelBtn.addEventListener('click', closeModalHandler);
    addTermForm.addEventListener('submit', handleAddTerm);
    
    // Configurer les zones de drop
    setupDropZones();
    
    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalHandler();
        }
    });
}

// Rendu du glossaire
function renderGlossary() {
    glossaryGrid.innerHTML = '';
    
    if (filteredTerms.length === 0) {
        glossaryGrid.innerHTML = '<div class="no-results">Aucun terme trouvé</div>';
        return;
    }
    
    // Affichage simple en grille de 3 colonnes
    filteredTerms.forEach(term => {
        const termCard = createTermCard(term);
        glossaryGrid.appendChild(termCard);
    });
}

// Création d'une carte de terme (avec drag and drop simplifié)
function createTermCard(term) {
    const card = document.createElement('div');
    card.className = 'term-card';
    card.dataset.termId = term.id;
    card.innerHTML = `
        <button class="delete-btn" onclick="deleteTerm(${term.id})" title="Supprimer">
            ×
        </button>
        <div class="drag-handle" title="Glisser pour déplacer">⋮⋮</div>
        <h3 class="term-title">${term.term}</h3>
        <p class="term-definition">${term.definition}</p>
    `;
    
    // Ajouter les événements de drag and drop
    setupCardDragAndDrop(card);
    
    return card;
}

// Configuration simplifiée du drag and drop
function setupCardDragAndDrop(card) {
    const dragHandle = card.querySelector('.drag-handle');
    
    dragHandle.addEventListener('mousedown', function(e) {
        e.preventDefault();
        startDrag(card, e);
    });
    
    // Support tactile pour mobile
    dragHandle.addEventListener('touchstart', function(e) {
        e.preventDefault();
        startDrag(card, e.touches[0]);
    });
}

// Variables pour le drag and drop
let draggedElement = null;
let dragOffset = { x: 0, y: 0 };
let isDragging = false;
let dragStarted = false;
let targetCard = null;

function startDrag(card, event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (isDragging) return;
    isDragging = true;
    dragStarted = false;
    
    // Désactiver la sélection de texte
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    
    draggedElement = card;
    
    // Calculer l'offset par rapport au clic
    const rect = card.getBoundingClientRect();
    const clientX = event.clientX || (event.touches && event.touches[0].clientX);
    const clientY = event.clientY || (event.touches && event.touches[0].clientY);
    
    dragOffset.x = clientX - rect.left;
    dragOffset.y = clientY - rect.top;
    
    // Gestionnaire de mouvement avec seuil de déclenchement
    function onMouseMove(e) {
        if (!draggedElement || !isDragging) return;
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        // Calculer la distance de déplacement
        const moveDistance = Math.sqrt(
            Math.pow(clientX - (rect.left + dragOffset.x), 2) + 
            Math.pow(clientY - (rect.top + dragOffset.y), 2)
        );
        
        // Démarrer le drag seulement après un déplacement significatif (20px)
        if (!dragStarted && moveDistance > 20) {
            dragStarted = true;
            
            // Configurer la carte pour le drag
            draggedElement.classList.add('dragging');
            draggedElement.style.position = 'fixed';
            draggedElement.style.zIndex = '1000';
            draggedElement.style.pointerEvents = 'none';
        }
        
        // Si le drag a commencé, mettre à jour la position
        if (dragStarted) {
            draggedElement.style.left = (clientX - dragOffset.x) + 'px';
            draggedElement.style.top = (clientY - dragOffset.y) + 'px';
            
            // Identifier la carte cible (sans créer de placeholder)
            findTargetCard(clientX, clientY);
        }
    }
    
    // Fonction pour identifier la carte cible
    function findTargetCard(clientX, clientY) {
        const cards = Array.from(glossaryGrid.querySelectorAll('.term-card:not(.dragging)'));
        let newTargetCard = null;
        
        // Trouver la carte sous le curseur
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            if (clientX >= rect.left && clientX <= rect.right && 
                clientY >= rect.top && clientY <= rect.bottom) {
                newTargetCard = card;
                break;
            }
        }
        
        // Mettre à jour le style de la carte cible
        if (targetCard && targetCard !== newTargetCard) {
            targetCard.style.backgroundColor = ''; // Retirer l'ancien highlight
        }
        
        if (newTargetCard && newTargetCard !== targetCard) {
            newTargetCard.style.backgroundColor = 'rgba(74, 144, 226, 0.1)'; // Highlight la nouvelle cible
        }
        
        targetCard = newTargetCard;
    }
    
    function onMouseUp(e) {
        if (!isDragging) return;
        
        isDragging = false;
        
        // Restaurer la sélection
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
        
        // Si le drag a vraiment commencé et qu'il y a une carte cible
        if (dragStarted && targetCard && draggedElement) {
            // Effectuer le réarrangement en cascade
            performCascadeRearrangement();
        }
        
        // Nettoyer les styles
        if (draggedElement) {
            draggedElement.classList.remove('dragging');
            draggedElement.style.position = '';
            draggedElement.style.left = '';
            draggedElement.style.top = '';
            draggedElement.style.zIndex = '';
            draggedElement.style.pointerEvents = '';
        }
        
        // Nettoyer le highlight de la carte cible
        if (targetCard) {
            targetCard.style.backgroundColor = '';
        }
        
        // Nettoyer les variables
        draggedElement = null;
        targetCard = null;
        dragOffset = { x: 0, y: 0 };
        dragStarted = false;
        
        // Supprimer les écouteurs
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);
    }
    
    // Fonction pour effectuer le réarrangement en cascade
    function performCascadeRearrangement() {
        if (!draggedElement || !targetCard) return;
        
        // Obtenir les IDs des cartes
        const draggedId = parseInt(draggedElement.dataset.termId);
        const targetId = parseInt(targetCard.dataset.termId);
        
        // Trouver les indices dans le tableau
        const draggedIndex = glossaryTerms.findIndex(term => term.id === draggedId);
        const targetIndex = glossaryTerms.findIndex(term => term.id === targetId);
        
        if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
            // Retirer l'élément de sa position actuelle
            const draggedTerm = glossaryTerms.splice(draggedIndex, 1)[0];
            
            // Calculer la nouvelle position cible (ajustée si nécessaire)
            let newTargetIndex = targetIndex;
            if (draggedIndex < targetIndex) {
                newTargetIndex = targetIndex - 1; // Compenser la suppression
            }
            
            // Insérer l'élément à sa nouvelle position
            glossaryTerms.splice(newTargetIndex, 0, draggedTerm);
            
            // Mettre à jour filteredTerms pour refléter le changement
            filteredTerms = [...glossaryTerms];
            
            // Sauvegarder dans localStorage
            localStorage.setItem('glossaryTerms', JSON.stringify(glossaryTerms));
            
            // Re-rendre le glossaire
            renderGlossary();
        }
    }
    
    // Ajouter les écouteurs
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
}

// Trouver la carte la plus proche
function getClosestCard(x, y) {
    const cards = Array.from(glossaryGrid.querySelectorAll('.term-card:not(.dragging)'));
    let closest = null;
    let closestDistance = Infinity;
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closest = card;
        }
    });
    
    return closest;
}

// Sauvegarder l'ordre des cartes (version corrigée)
function saveCardOrder() {
    const cards = Array.from(glossaryGrid.querySelectorAll('.term-card'));
    const newOrder = cards.map(card => parseInt(card.dataset.termId)).filter(id => !isNaN(id));
    
    // Réorganiser le tableau glossaryTerms selon le nouvel ordre
    const reorderedTerms = [];
    newOrder.forEach(id => {
        const term = glossaryTerms.find(t => t.id === id);
        if (term) reorderedTerms.push(term);
    });
    
    // Ajouter les termes manquants (au cas où)
    glossaryTerms.forEach(term => {
        if (!reorderedTerms.find(t => t.id === term.id)) {
            reorderedTerms.push(term);
        }
    });
    
    glossaryTerms = reorderedTerms;
    filteredTerms = [...glossaryTerms];
    
    // Sauvegarder en localStorage
    localStorage.setItem('glossaryTerms', JSON.stringify(glossaryTerms));
}

// Configuration des zones de drop pour la grille
function setupDropZones() {
    glossaryGrid.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });
    
    glossaryGrid.addEventListener('drop', function(e) {
        e.preventDefault();
        if (draggedElement && draggedElement.parentNode !== glossaryGrid) {
            glossaryGrid.appendChild(draggedElement);
            saveCardOrder();
        }
    });
}

// Modifier la fonction setupEventListeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    addTermBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    cancelBtn.addEventListener('click', closeModalHandler);
    addTermForm.addEventListener('submit', handleAddTerm);
    
    // Configurer les zones de drop
    setupDropZones();
    
    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalHandler();
        }
    });
}

// Recherche
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    filteredTerms = glossaryTerms.filter(term => 
        term.term.toLowerCase().includes(searchTerm) || 
        term.definition.toLowerCase().includes(searchTerm)
    );
    renderGlossary();
}

// Gestion du modal
function openModal() {
    modal.style.display = 'block';
    document.getElementById('termName').focus();
}

function closeModalHandler() {
    modal.style.display = 'none';
    addTermForm.reset();
}

// Ajout d'un nouveau terme
function handleAddTerm(event) {
    event.preventDefault();
    
    const termName = document.getElementById('termName').value.trim();
    const termDefinition = document.getElementById('termDefinition').value.trim();
    
    if (termName && termDefinition) {
        // Vérifier si le terme existe déjà
        const existingTerm = glossaryTerms.find(term => 
            term.term.toLowerCase() === termName.toLowerCase()
        );
        
        if (existingTerm) {
            alert('Ce terme existe déjà dans le glossaire.');
            return;
        }
        
        const newTerm = {
            id: nextId++,
            term: termName,
            definition: termDefinition
        };
        
        glossaryTerms.push(newTerm);
        filteredTerms = [...glossaryTerms];
        
        // Sauvegarder seulement les nouveaux termes (ID >= 38)
        saveToLocalStorage();
        
        renderGlossary();
        closeModalHandler();
        
        // Scroll vers le nouveau terme
        setTimeout(() => {
            const newCard = document.querySelector(`[onclick="deleteTerm(${newTerm.id})"]`).parentElement;
            newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            newCard.style.animation = 'modalSlideIn 0.5s ease';
        }, 100);
    }
}

// Suppression d'un terme
function deleteTerm(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce terme ?')) {
        glossaryTerms = glossaryTerms.filter(term => term.id !== id);
        filteredTerms = filteredTerms.filter(term => term.id !== id);
        
        // AJOUTER CETTE LIGNE POUR SAUVEGARDER
        localStorage.setItem('glossaryTerms', JSON.stringify(glossaryTerms));
        
        renderGlossary();
    }
}

// Sauvegarde locale (optionnel)
function saveToLocalStorage() {
    // Sauvegarder seulement les nouveaux termes (ID >= nextId initial)
    const newTerms = glossaryTerms.filter(term => term.id >= 38);
    localStorage.setItem('glossaryTerms', JSON.stringify(newTerms));
    console.log('Nouveaux termes sauvegardés:', newTerms.length);
}

// Fonction pour charger depuis localStorage (modifiée)
function loadFromLocalStorage() {
    const saved = localStorage.getItem('glossaryTerms');
    if (saved) {
        try {
            const newTerms = JSON.parse(saved);
            // Ajouter les nouveaux termes aux termes de base
            newTerms.forEach(term => {
                if (!glossaryTerms.find(existing => existing.id === term.id)) {
                    glossaryTerms.push(term);
                }
            });
            
            // Mettre à jour nextId
            if (glossaryTerms.length > 0) {
                nextId = Math.max(...glossaryTerms.map(term => term.id)) + 1;
            }
            
            console.log('Termes chargés depuis localStorage:', newTerms.length);
        } catch (error) {
            console.error('Erreur lors du chargement depuis localStorage:', error);
        }
    }
}