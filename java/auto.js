
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
            imageUrl: "../assets/electric_car.jpg",
            title: "ELEKTRIČNA VOZILA",
            description: "Budućnost automobila i tehnologija ...",
            link: "./cars/elektricna_vozila.html"
        },
        {
            imageUrl: "../assets/autonomous_car.jpg",
            title: "AUTONOMNA VOŽNJA",
            description: "Rastuća tehnologija samovozećih automobila...",
            link: "./cars/autonomna_voznja.html"
        },
        {
            imageUrl: "../assets/sports_car.jpg",
            title: "SPORTSKI AUTOMOBILI",
            description: "Najnoviji modeli sportskih ...",
            link: "./cars/sportski_automobili.html"
        },
        {
            imageUrl: "../assets/sustainable_car.jpg",
            title: "OČUVANA MOBILNOST",
            description: "Ekološki prihvatljive opcije i ...",
            link: "./cars/ocuvana_mobilnost.html"
        },
        {
            imageUrl: "../assets/luxury_car.jpg",
            title: "LUKSUZNI AUTOMOBILI",
            description: "Spoj stila i tehnologije u luksuznim ...",
            link: "./cars/luksuzni_automobili.html"
        },
        {
            imageUrl: "../assets/classic_car.jpg",
            title: "KLASIČNI AUTOMOBILI",
            description: "Očuvanje automobilske baštine ...",
            link: "./cars/klasicni_automobili.html"
        },
        {
            imageUrl: "../assets/future_car.jpg",
            title: "BUDUĆNOST AUTOMOBILA",
            description: "Inovativni koncepti i ...",
            link: "./cars/buducnost_automobila.html"
        },
        {
            imageUrl: "../assets/suv.jpg",
            title: "SUV-OVI",
            description: "Svestrani i performantni za ...",
            link: "./cars/suvi.html"
        },
        {
            imageUrl: "../assets/used_car.jpg",
            title: "TRŽIŠTE RABLJENIH AUTOMOBILA",
            description: "Savjeti za kupovinu i prodaju ...",
            link: "./cars/trziste_rabljenih_automobila.html"
        },
        {
            imageUrl: "../assets/innovative_car.jpg",
            title: "INOVATIVNA AUTOMOBILSKA TEHNOLOGIJA",
            description: "Inovacije i trendovi u ...",
            link: "./cars/inovativna_automobilska_tehnologija.html"
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

