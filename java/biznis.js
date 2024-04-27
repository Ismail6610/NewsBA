
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
            imageUrl: "../assets/startap_finasiranje.jpg",
            title: "USPJEŠNE PRIČE O STARTUPIMA",
            description: "Otkrijte priče o uspješnim startupima i njihovim poduzetničkim putovanjima...",
            link: "./biznis/uspesne_price_o_startupima.html"
        },
        {
            imageUrl: "../assets/finansije.jpg",
            title: "FINANSIJSKA TRŽIŠTA: TRENDOVI I PROGNOZE",
            description: "Budite informisani o najnovijim trendovima i prognozama na finansijskim tržištima...",
            link: "./biznis/finansijska_trzista_trendovi_i_prognoze.html"
        },
        {
            imageUrl: "../assets/entrepreneurship.jpg",
            title: "PODUZETNIČKI SAVJETI ZA ASPIRIRAJUĆE PODUZETNIKE",
            description: "Dobijte vrijedne savjete i smjernice za aspirirajuće poduzetnike...",
            link: "./biznis/poduzetnicki_savjeti.html"
        },
        {
            imageUrl: "../assets/industry_analysis.jpg",
            title: "ANALIZA INDUSTRIJE: UVIDI U KLJUČNE POSLOVNE SEKTORE",
            description: "Steknite uvide u ključne poslovne sektore putem analize industrije...",
            link: "./biznis/analiza_industrije.html"
        },
        {
            imageUrl: "../assets/leadership.jpg",
            title: "LIDERSKE STRATEGIJE: RAZVIJANJE EFIKASNIH LIDERA",
            description: "Otkrijte strategije za razvoj efikasnih liderskih vještina...",
            link: "./biznis/liderske_strategije.html"
        },
        {
            imageUrl: "../assets/marketing.jpg",
            title: "TRENDOVI U MARKETINGU: INOVATIVNE STRATEGIJE ZA RAST BRENDA",
            description: "Istražite najnovije trendove u marketingu i inovativne strategije za rast bren... ",
            link: "./biznis/trendovi_u_marketingu.html"
        },
        {
            imageUrl: "../assets/finance.jpg",
            title: "FINANSIJSKO PLANIRANJE: PAMETNE STRATEGIJE ZA UPRAVLJANJE BOGATSTVOM",
            description: "Naučite pametne strategije za finansijsko planiranje i upravljanje bogatstvom...",
            link: "./biznis/finansijsko_planiranje.html"
        },
        {
            imageUrl: "../assets/technology.jpg",
            title: "TEHNOLOGIJA U POSLOVANJU: PODSTICANJE INOVACIJA I RASTA",
            description: "Otkrijte kako tehnologija podstiče inovacije i rast u poslovanju...",
            link: "./biznis/tehnologija_u_poslovanju.html"
        },
        {
            imageUrl: "../assets/global_markets.jpg",
            title: "GLOBALNI TRŽIŠNI UVIDI: NAVIGACIJA MEĐUNARODNIM POSLOM",
            description: "Budite ažurirani o globalnim tržišnim uvidima i trendovima...",
            link: "./biznis/globalni_trzisni_uvidi.html"
        },
        {
            imageUrl: "../assets/strategy.jpg",
            title: "POSLOVNA STRATEGIJA: RAZVIJANJE EFIKASNIH PLANOVA ZA USPJEH",
            description: "Naučite kako razviti efikasne poslovne strategije za rast i inovacije...",
            link: "./biznis/poslovna_strategija.html"
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
            imageUrl: "../assets/finance.jpg",
            title: "FINANSIJSKO PLANIRANJE: PAMETNE STRATEGIJE ZA UPRAVLJANJE BOGATSTVOM",
            description: "Naučite pametne strategije za finansijsko planiranje i upravljanje bogatstvom...",
            link: "./biznis/finansijsko_planiranje.html"
        },
        {
            imageUrl: "../assets/technology.jpg",
            title: "TEHNOLOGIJA U POSLOVANJU: PODSTICANJE INOVACIJA I RASTA",
            description: "Otkrijte kako tehnologija podstiče inovacije i rast u poslovanju...",
            link: "./biznis/tehnologija_u_poslovanju.html"
        },
        
    ];

    displayNews(newsDataBig);
});

