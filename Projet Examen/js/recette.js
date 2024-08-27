// Navbar
const bars = document.querySelector('.bars');
const menu = document.querySelector('.nav-items');

bars.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

document.addEventListener('mouseup', (e) => {
    if (!menu.contains(e.target) && !bars.contains(e.target)) {
        menu.classList.remove('show-menu');
    }
});

// Main Section
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const recetteId = parseInt(params.get('recette')) || 1; 
    const recetteCategoryId = params.get('recetteCategory') || 0;

    let recette;
    for (let category of recettesData.categories) {
        recette = category.recettes.find(r => r.id === recetteId);
        if (recette) break;
    }

    if (recette) {
        document.title = `Tea Spoon - ${recette.titre}`;
        const container = document.querySelector('.recipe-container');

        const ingredientsList = recette.ingredients && recette.ingredients.length > 0 
            ? recette.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('') 
            : "<li>Pas d'ingrédients disponibles</li>";

        const instructionsList = recette.instructions && recette.instructions.length > 0 
            ? recette.instructions.map(instruction => `<li>${instruction}</li>`).join('') 
            : "<li>Pas d'instructions disponibles</li>";

        container.innerHTML = `
            <div class="recipe-header">
                <h2>${recette.titre}</h2>
                <p>${recette.description}</p>
            </div>
            <div class="recipe-image">
                <img src="${recette.image}" alt="${recette.titre}">
            </div>
            <div class="recipe-details">
                <h3>Ingrédients</h3>
                <ul>${ingredientsList}</ul>
                <h3>Instructions</h3>
                <ol>${instructionsList}</ol>
                <button><a href="recetteCategory.html?recetteCategory=${recetteCategoryId}">Retour aux recettes</a></button>
            </div>
        `;
    } else {
        document.querySelector('.recipe-container').innerHTML = `<p>Recette non trouvée</p>`;
    }
});