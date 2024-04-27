
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
            imageUrl: "../assets/quantum_computing.jpg",
            title: "KVANTNO RAČUNANJE",
            description: "Najnoviji napretci u ...",
            link: "./scitech/kvantno_racunanje.html"
        },
        {
            imageUrl: "../assets/artificial_intelligence.jpg",
            title: "UMJETNA INTELIGENCIJA",
            description: "Rapidni napredak u tehnologiji ...",
            link: "./scitech/umjetna_inteligencija.html"
        },
        {
            imageUrl: "../assets/space_exploration.jpg",
            title: "ISTRAŽIVANJE SVEMIRA",
            description: "Najnovija istraživanja i ...",
            link: "./scitech/istrazivanje_svemira.html"
        },
        {
            imageUrl: "../assets/biotechnology.jpg",
            title: "BIOTEHNOLOGIJA",
            description: "Najnoviji napretci i inovacije ...",
            link: "./scitech/biotehnologija.html"
        },
        {
            imageUrl: "../assets/robotics.jpg",
            title: "ROBOTIKA",
            description: "Najnoviji razvoj i primjene...",
            link: "./scitech/robotika.html"
        },
        {
            imageUrl: "../assets/genetics.jpg",
            title: "GENETIKA",
            description: "Najnoviji napretci u genetičkom ...",
            link: "./scitech/genetika.html"
        },
        {
            imageUrl: "../assets/nanotechnology.jpg",
            title: "NANOTEHNOLOGIJA",
            description: "Najnoviji napretci u istraživanju ...",
            link: "./scitech/nanotehnologija.html"
        },
        {
            imageUrl: "../assets/health_tech.jpg",
            title: "ZDRAVSTVENA TEHNOLOGIJA",
            description: "Inovacije u tehnologiji ...",
            link: "./scitech/zdravstvena_tehnologija.html"
        },
        {
            imageUrl: "../assets/energy_tech.jpg",
            title: "ENERGETSKA TEHNOLOGIJA",
            description: "Napredak u tehnologiji za ...",
            link: "./scitech/energetska_tehnologija.html"
        },
        {
            imageUrl: "../assets/cybersecurity.jpg",
            title: "CYBER SIGURNOST",
            description: "Najnoviji trendovi i strategije...",
            link: "./scitech/cyber_sigurnost.html"
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
            imageUrl: "../assets/zeljo.jpg",
            title: "HAOS NA GRBAVICI",
            description: "Zeljeznicar pobjedio rivala sa nevjerovatnih 12-0",
            link: "./vijesti/zeljo.html"
        },
        {
            imageUrl: "../assets/tramvaj.jpg",
            title: " NOVA GENERACIJA TRAMVAJA",
            description: " Grad Sarajevo ulazi u novu eru javnog prijevoza...",
            link: "./vijesti/tramvaj.html"
        },
        
    ];

    displayNews(newsDataBig);
});


