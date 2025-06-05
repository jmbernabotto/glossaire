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