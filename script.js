function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', () => {
    const gameDirs = ['puzzle-game', 'connect-4', "higher-lower"];
    const gameNames = ['(n²-1) - Puzzle', 'Connect 4', "Higher Or Lower"];
    const apkTitles = ["https://github.com/c0deGIO/APK-Gallery/raw/main/puzzle-game/(n^2)-1 Puzzle.apk", 'https://github.com/c0deGIO/APK-Gallery/raw/main/connect-4/Connect 4.apk', "https://github.com/c0deGIO/APK-Gallery/raw/main/higher-lower/Higher Or Lower.apk"];
    const deviceAndroid = isAndroid();

    const gamesContainer = document.getElementById('games-container');

    for(let i=0; i<gameDirs.length; i++){
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = () => {
            window.location.href = `${gameDirs[i]}/`;
            //window.location.href = `${window.location.pathname}${gameDirs[i]}/`;
        };

        const gameTitle = document.createElement('h2');
        gameTitle.textContent = `${gameNames[i]}`;

        const gameImage = document.createElement('img');
        gameImage.src = `${gameDirs[i]}/assets/thumbnail.png`;
        gameImage.alt = `${gameDirs[i]} image`;

        let gameLink;
        if (deviceAndroid) {
            gameLink = document.createElement('a');
            gameLink.href = `${apkTitles[i]}`;
            //gameLink.href = `${window.location.pathname}${gameDirs[i]}/${apkTitles[i]}`;
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
