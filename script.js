const ICON_DIR_PATH = './assets/icons/';
const ICON_SUFFIX = '.svg';

const projectCardsContainer = document.querySelector('.project-cards');

const CARD_BUTTON_ICONS = [
    'favorite',
    'watch',
    'share'
];

createCards(10);

function createCards(numberOfCards = 0) {
    for (let i = 0; i < numberOfCards; i++) {
        createProjectCard();
    }
}

function createProjectCard(projectCards = projectCardsContainer) {
    const cardButtonsContainer = document.createElement('div');
    cardButtonsContainer.classList = "card-buttons";

    CARD_BUTTON_ICONS.forEach(iconName => {
        const cardButtonElement = document.createElement('a');
        cardButtonElement.href = "";
        const iconElement = document.createElement('img');
        iconElement.src = ICON_DIR_PATH + iconName + ICON_SUFFIX;
        cardButtonElement.appendChild(iconElement);
        cardButtonsContainer.appendChild(cardButtonElement);
    });

    const cardElement = document.createElement('div');
    cardElement.classList = 'project-card';

    const cardTitleElement = document.createElement('p');
    cardTitleElement.classList = 'project-title';
    cardTitleElement.textContent = "Project Fake Title JS";

    const cardDescriptionElement = document.createElement('p');
    cardDescriptionElement.classList = 'project-description';
    cardDescriptionElement.textContent = 'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

    cardElement.appendChild(cardTitleElement);
    cardElement.appendChild(cardDescriptionElement);
    cardElement.appendChild(cardButtonsContainer);

    projectCards.appendChild(cardElement);
}
