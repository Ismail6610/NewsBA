
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
            imageUrl: "../assets/sprinterka.jpg",
            title: "Novi Svjetski Rekord",
            description: "Kenijska sprinterka, poznata po nevjerojatnoj izdržljivosti...",
            link: "./vijesti/sprinterka.html"
        },
        {
            imageUrl: "../assets/tenis.jpg",
            title: "Najava Spektakla",
            description: "Teniski svijet drži dah dok se bliži ...",
            link: "./vijesti/tenis.html"
        },
        {
            imageUrl: "../assets/bicikl.jpg",
            title: "Pobjednički Povratak",
            description: "Nakon teške povrede koja je stavila ...",
            link: "./vijesti/bicikl.html"
        },
        {
            imageUrl: "../assets/kosarka.jpg",
            title: "Timski Trijumf",
            description: "Nacionalna košarkaška ekipa oduševila je ...",
            link: "./vijesti/kosarka.html"
        },
        {
            imageUrl: "../assets/hokej.jpg",
            title: "Povijesna Pobjeda",
            description: "Ženski hokejaški tim stvara povijest osvajanjem ...",
            link: "./vijesti/hokej.html"
        },
        {
            imageUrl: "../assets/fudbal.jpg",
            title: "Transfer Sjajnih Proporcija",
            description: "Transfer vijeka u svijetu nogometa ...",
            link: "./vijesti/fudbal.html"
        },
        {
            imageUrl: "../assets/tenis_pravila.jpg",
            title: "Rasprava O Prijedlogu",
            description: "Najava planiranih promjena u pravilima ...",
            link: "./vijesti/tenis_pravila.html"
        },
        {
            imageUrl: "../assets/f1.jpg",
            title: "Inovacija Na Stazi",
            description: "Svijet Formule 1 uzbuđen je najavom ...",
            link: "./vijesti/f1.html"
        },
        {
            imageUrl: "../assets/planinarenje.jpg",
            title: "Najnoviji Izazov",
            description: "Planinari diljem svijeta...",
            link: "./vijesti/planinarenje.html"
        },
        {
            imageUrl: "../assets/atletika.jpg",
            title: "Osvajanje Srca Publike",
            description: "Mladi atletičar osvaja srca publike ...",
            link: "./vijesti/atletika.html"
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
            imageUrl: "../assets/f1.jpg",
            title: "Inovacija Na Stazi",
            description: "Svijet Formule 1 uzbuđen je najavom ...",
            link: "./vijesti/f1.html"
        },
        {
            imageUrl: "../assets/planinarenje.jpg",
            title: "Najnoviji Izazov",
            description: "Planinari diljem svijeta...",
            link: "./vijesti/planinarenje.html"
        },
        
    ];

    displayNews(newsDataBig);
});

