
document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.container');

    function displayNews(news) {
        newsList.innerHTML = '';

        news.forEach(newsItem => {
            const newItem = document.createElement('div');
            newItem.classList.add('news');

            newItem.innerHTML = `
                <div class="news-container">
                <div class="small-image-overlay"></div>
                    <img src="${newsItem.imageUrl}" alt="Image">
                    <div class="news-content">
                    <div class="overlay"></div>
                        <h2>${newsItem.title}</h2>
                        <p>${newsItem.description}</p>
                        <a href="${newsItem.link}" class="read-more">Read more</a>
                    </div>
                </div>
            `;

            newsList.appendChild(newItem);
        });
    }

    function filterNews(search) {
        const filteredNews = newsData.filter(newsItem => newsItem.title.toLowerCase().includes(search.toLowerCase()));
        displayNews(filteredNews);
    }

    document.getElementById('search').addEventListener('input', function() {
        const search = this.value.trim();
        if (search === '') {
            displayNews(newsData);
        } else {
            filterNews(search);
        }
    });

    const newsData = [
        {
            imageUrl: "../assets/moda.jpg",
            title: "NAJNOVIJI TRENDOVI ",
            description: "Magazin donosi najnovije ...",
            link: "./lifestyle/moda.html"
        },
        {
            imageUrl: "../assets/kulinarstvo.jpg",
            title: "RECEPTI ZA UKUSNE  SPECIJALITETE",
            description: "Upoznajte se s receptima za ukusne proljetne ...",
            link: "./lifestyle/kulinarstvo.html"
        },
        {
            imageUrl: "../assets/putovanja.jpg",
            title: "TOP DESTINACIJE ZA PROLJETNI ODMOR",
            description: "Otkrijte najbolje destinacije ...",
            link: "./lifestyle/putovanja.html"
        },
        {
            imageUrl: "../assets/zdravlje.jpg",
            title: "SVE O ZDRAVLJU I VITALNOSTI U PROLJEĆU",
            description: "Magazin donosi korisne savjete za ...",
            link: "./lifestyle/zdravlje.html"
        },
        {
            imageUrl: "../assets/tehnologija.jpg",
            title: "NAJNOVIJE TEHNOLOŠKE INOVACIJE ",
            description: "Saznajte o najnovijim tehnološkim ...",
            link: "./lifestyle/tehnologija.html"
        },
        {
            imageUrl: "../assets/kultura.jpg",
            title: "KULTURNI DOGAĐAJI ",
            description: "Pregled najzanimljivijih kulturnih događaja ...",
            link: "./lifestyle/kultura.html"
        },
        {
            imageUrl: "../assets/umjetnost.jpg",
            title: "UMJETNIČKI IZRAZI U PROLJEĆU",
            description: "Upoznajte se s najnovijim umjetničkim ...",
            link: "./lifestyle/umjetnost.html"
        },
        {
            imageUrl: "../assets/obrazovanje.jpg",
            title: "EDUKATIVNI SADRŽAJI ",
            description: "Pronađite edukativne sadržaje i...",
            link: "./lifestyle/obrazovanje.html"
        },
        {
            imageUrl: "../assets/fitness.jpg",
            title: "FITNESS TRENINZI",
            description: "Magazin donosi najefikasnije fitness ...",
            link: "./lifestyle/fitness.html"
        },
        {
            imageUrl: "../assets/lifestyle.jpg",
            title: "LIFESTYLE TRENDOVI ",
            description: "Saznajte o najnovijim lifestyle ...",
            link: "./lifestyle/lifestyle.html"
        }
    ];
    

    displayNews(newsData);
});



document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.bigContainer');
    

    function displayNews(news) {
        newsList.innerHTML=' ';

        news.forEach(newsItem2 => {
            const newItem = document.createElement('div');
            newItem.classList.add('news');

            newItem.innerHTML = `
            <div class="bigNews-container">
            <div class="image-overlay"></div>
                <img src="${newsItem2.imageUrl}" alt="Image">
                <div class="bigNews-content">
                    <h2>${newsItem2.title}</h2>
                    <p>${newsItem2.description}</p>
                    <a href="${newsItem2.link}" class="bigRead-more">Read more</a>
                </div>
            </div>
            `;

            newsList.appendChild(newItem);
        });
    }

    

    


    const newsDataBig = [
        {
            imageUrl: "../assets/obrazovanje.jpg",
            title: "EDUKATIVNI SADRŽAJI ",
            description: "Pronađite edukativne sadržaje i...",
            link: "./lifestyle/obrazovanje.html"
        },
        {
            imageUrl: "../assets/fitness.jpg",
            title: "FITNESS TRENINZI",
            description: "Magazin donosi najefikasnije fitness ...",
            link: "./lifestyle/fitness.html"
        },
        
    ];

    displayNews(newsDataBig);
});

