// Glossaire IA - Données chargées depuis JSON
// Variables globales
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
    
    filteredTerms.forEach(term => {
        const termCard = createTermCard(term);
        glossaryGrid.appendChild(termCard);
    });
}

// Création d'une carte de terme
function createTermCard(term) {
    const card = document.createElement('div');
    card.className = 'term-card';
    card.dataset.termId = term.id;
    card.innerHTML = `
        <button class="delete-btn" onclick="deleteTerm(${term.id})" title="Supprimer">
            ×
        </button>
        <h3 class="term-title">${term.term}</h3>
        <p class="term-definition">${term.definition}</p>
        ${term.category ? `<span class="term-category">${term.category}</span>` : ''}
    `;
    
    return card;
}

// Recherche
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    filteredTerms = glossaryTerms.filter(term => 
        term.term.toLowerCase().includes(searchTerm) || 
        term.definition.toLowerCase().includes(searchTerm) ||
        (term.category && term.category.toLowerCase().includes(searchTerm))
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
            definition: termDefinition,
            category: 'Nouveau'
        };
        
        glossaryTerms.push(newTerm);
        filteredTerms = [...glossaryTerms];
        
        // Sauvegarder seulement les nouveaux termes
        saveToLocalStorage();
        
        renderGlossary();
        closeModalHandler();
        
        // Scroll vers le nouveau terme
        setTimeout(() => {
            const newCard = document.querySelector(`[data-term-id="${newTerm.id}"]`);
            if (newCard) {
                newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                newCard.style.animation = 'modalSlideIn 0.5s ease';
            }
        }, 100);
    }
}

// Suppression d'un terme
function deleteTerm(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce terme ?')) {
        glossaryTerms = glossaryTerms.filter(term => term.id !== id);
        filteredTerms = filteredTerms.filter(term => term.id !== id);
        
        // Sauvegarder les changements
        saveToLocalStorage();
        
        renderGlossary();
    }
}

// Sauvegarde locale (seulement les nouveaux termes)
function saveToLocalStorage() {
    const newTerms = glossaryTerms.filter(term => term.id >= 38);
    localStorage.setItem('newGlossaryTerms', JSON.stringify(newTerms));
    console.log('Nouveaux termes sauvegardés:', newTerms.length);
}

// Chargement depuis localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('newGlossaryTerms');
    if (saved) {
        try {
            const newTerms = JSON.parse(saved);
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