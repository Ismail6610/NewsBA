
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
                title: "Novi Svjetski Rekord: Sprinterka Iz Kenije Ruši Granice Brzinom Od 100 Metara!",
                description: "Kenijska sprinterka, poznata po nevjerojatnoj izdržljivosti i brzini, ostvarila je povijesni trenutak rušeći svjetski rekord na 100 metara...",
                link: "./vijesti/sprinterka.html"
            },
            {
                imageUrl: "./assets/tenis.jpg",
                title: "Najava Spektakla: Nadolazeći Derbi Između Rivala U Tenisu Obećava Napete Borbe Na Terenu!",
                description: "Teniski svijet drži dah dok se bliži epski derbi između dva velika rivala na terenu...",
                link: "./vijesti/tenis.html"
            },
            {
                imageUrl: "./assets/bicikl.jpg",
                title: "Pobjednički Povratak: Biciklistički As Se Vraća Nakon Povrede Snažniji Negoli Ikad Prije!",
                description: "Nakon teške povrede koja je stavila njegovu karijeru na kušnju, biciklistički virtuoz se vraća na stazu s nevjerojatnom snagom i odlučnošću...",
                link: "./vijesti/bicikl.html"
            },
            {
                imageUrl: "./assets/kosarka.jpg",
                title: "Timski Trijumf: Nacionalna Košarkaška Ekipa Osvojila Zlatnu Medalju Na Međunarodnom Natjecanju!",
                description: "Nacionalna košarkaška ekipa oduševila je svoje navijače osvajanjem zlatne medalje na međunarodnom natjecanju...",
                link: "./vijesti/kosarka.html"
            },
            {
                imageUrl: "./assets/hokej.jpg",
                title: "Povijesna Pobjeda: Prvi Put U Povijesti, Ženski Hokejaški Tim Osvojio Veliki Naslov!",
                description: "Ženski hokejaški tim stvara povijest osvajanjem velikog naslova po prvi put u povijesti...",
                link: "./vijesti/hokej.html"
            },
            {
                imageUrl: "./assets/fudbal.jpg",
                title: "Transfer Sjajnih Proporcija: Fudbalska Zvijezda Potpisuje Za Novi Klub Za Milionsku Sumu!",
                description: "Transfer vijeka u svijetu nogometa dogodio se kada je jedna od najvećih fudbalskih zvijezda potpisala za novi klub za rekordnu sumu...",
                link: "./vijesti/fudbal.html"
            },
            {
                imageUrl: "./assets/tenis_pravila.jpg",
                title: "Rasprava O Prijedlogu: Planirane Promjene U Pravilima Teniskih Turnira Šokirale Svjetsku Tenisku Scenu!",
                description: "Najava planiranih promjena u pravilima teniskih turnira izazvala je žestoku raspravu među igračima, stručnjacima i navijačima...",
                link: "./vijesti/tenis_pravila.html"
            },
            {
                imageUrl: "./assets/f1.jpg",
                title: "Inovacija Na Stazi: Formula 1 Uvodi Revolucionarnu Tehnologiju Koja Će Promijeniti Dinamiku Utrka!",
                description: "Svijet Formule 1 uzbuđen je najavom revolucionarne tehnologije koja će promijeniti način na...",
                link: "./vijesti/f1.html"
            },
            {
                imageUrl: "./assets/planinarenje.jpg",
                title: "Najnoviji Izazov: Planinari Se Pripremaju Za Uspješan Uspon Na Najviši Vrh Kontinenta!",
                description: "Planinari diljem svijeta pripremaju se za izazov uspona na najviši vrh kontinenta...",
                link: "./vijesti/planinarenje.html"
            },
            {
                imageUrl: "./assets/atletika.jpg",
                title: "Osvajanje Srca Publike: Mladi Atletičar Pokazuje Izvanrednu Talenat I Inspirira Generacije!",
                description: "Mladi atletičar osvaja srca publike svojim izvanrednim talentom i inspirira generacije...",
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
            imageUrl: "./assets/zeljo.jpg",
            title: "HAOS NA GRBAVICI",
            description: "Zeljeznicar pobjedio rivala sa nevjerovatnih 12-0",
            link: "./vijesti/zeljo.html"
        },
        {
            imageUrl: "./assets/tramvaj.jpg",
            title: " NOVA GENERACIJA TRAMVAJA",
            description: " Grad Sarajevo ulazi u novu eru javnog prijevoza...",
            link: "./vijesti/tramvaj.html"
        },
        
    ];

    displayNews(newsDataBig);
});

