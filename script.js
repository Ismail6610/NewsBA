document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.container');

    function displayNews(news) {
        news.forEach(newsItem => {
            const newItem = document.createElement('div');
            newItem.classList.add('news');

            newItem.innerHTML = `
            <div class="news-container">
                <img src="${newsItem.imageUrl}" alt="Image">
                <div class="news-content">
                    <h2>${newsItem.title}</h2>
                    <p>${newsItem.description}</p>
                    <a href="${newsItem.link}" class="read-more">Read more</a>
                </div>
            </div>
            `;

            newsList.appendChild(newItem);
        });
    }
    const newsData = [
        {
            imageUrl: "./assets/klix.jpg",
            title: "SUDAR NA CESTI",
            description: "U jutarnjim satima desila se nesreća...",
            link: "./vijesti/sudar.html"
        },
        {
            imageUrl:"./assets/klix1.jpg",
            title:"BEZOBRAZNI TAKSISTA",
            description:"Taksista optuzen za pljackanje zene(36) u Sarajevu...",
            link:"./vijesti/taksi.html"
        }
    ];


    displayNews(newsData);
});

document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.bigContainer');

    function displayNews(news) {
        news.forEach(newsItem => {
            const newItem = document.createElement('div');
            newItem.classList.add('news');

            newItem.innerHTML = `
            <div class="news-container">
                <img src="${newsItem.imageUrl}" alt="Image">
                <div class="news-content">
                    <h2>${newsItem.title}</h2>
                    <p>${newsItem.description}</p>
                    <a href="${newsItem.link}" class="read-more">Read more</a>
                </div>
            </div>
            `;

            newsList.appendChild(newItem);
        });
    }


    const newsDataBig = [
        {
            imageUrl: "./assets/klix7.jpg",
            title: "ZELJEZNICAR POBJEDIO SARAJEVO",
            description: "U jutarnjim satima desila se nesreća...",
            link: "./vijesti/sudar.html"
        }
    ];

    displayNews(newsDataBig);
});

