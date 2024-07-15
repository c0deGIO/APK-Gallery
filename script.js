function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', () => {
    const gameDirs = ['puzzle-game', 'connect-4'];
    const gameNames = ['(n²-1) - Puzzle', 'Connect 4'];
    const apkTitles = ["(n^2)-1 Puzzle.apk", 'Connect 4.apk'];
    const deviceAndroid = isAndroid();

    const gamesContainer = document.getElementById('games-container');

    for(let i=0; i<gameDirs.length; i++){
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = () => {
            window.location.href = `/${gameDirs[i]}/`;
        };

        const gameTitle = document.createElement('h2');
        gameTitle.textContent = `${gameNames[i]}`;

        const gameImage = document.createElement('img');
        gameImage.src = `${gameDirs[i]}/assets/thumbnail.png`;
        gameImage.alt = `${gameDirs[i]} image`;

        let gameLink;
        if (deviceAndroid) {
            gameLink = document.createElement('a');
            gameLink.href = `/${gameDirs[i]}/${apkTitles[i]}`;
            gameLink.textContent = `Download`;
            gameLink.className = 'download-button';
        } else {
            gameLink = document.createElement('p');
            gameLink.textContent = "Only available for android devices";
        }

        gameCard.appendChild(gameImage);
        gameCard.appendChild(gameTitle);
        gameCard.appendChild(gameLink);
        gamesContainer.appendChild(gameCard);
    };
});
