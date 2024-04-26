
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
            imageUrl: "./assets/startup.jpg",
            title: "STARTUP SUCCESS STORIES: INSPIRING ENTREPRENEURIAL JOURNEYS",
            description: "Explore the stories of successful startups, their entrepreneurial journeys, and the lessons learned along the way...",
            link: "./biznis/startup_success_stories.html"
        },
        {
            imageUrl: "./assets/financial_market.jpg",
            title: "FINANCIAL MARKET OUTLOOK: TRENDS AND FORECASTS",
            description: "Stay informed about the latest trends and forecasts in the financial markets, including stock market updates, investment strategies, and economic indicators...",
            link: "./biznis/financial_market_outlook.html"
        },
        {
            imageUrl: "./assets/entrepreneurship.jpg",
            title: "ENTREPRENEURSHIP TIPS: GUIDANCE FOR ASPIRING ENTREPRENEURS",
            description: "Get valuable advice and guidance for aspiring entrepreneurs, including tips for starting and growing a successful business...",
            link: "./biznis/entrepreneurship_tips.html"
        },
        {
            imageUrl: "./assets/industry_analysis.jpg",
            title: "INDUSTRY ANALYSIS: INSIGHTS INTO KEY BUSINESS SECTORS",
            description: "Gain insights into key business sectors with in-depth industry analysis, market trends, and competitive landscape assessments...",
            link: "./biznis/industry_analysis.html"
        },
        {
            imageUrl: "./assets/leadership.jpg",
            title: "LEADERSHIP STRATEGIES: DEVELOPING EFFECTIVE LEADERS",
            description: "Discover strategies for developing effective leadership skills, managing teams, and leading organizations to success...",
            link: "./biznis/leadership_strategies.html"
        },
        {
            imageUrl: "./assets/marketing.jpg",
            title: "MARKETING TRENDS: INNOVATIVE STRATEGIES FOR BRAND GROWTH",
            description: "Explore the latest marketing trends and innovative strategies for brand growth, customer engagement, and market expansion...",
            link: "./biznis/marketing_trends.html"
        },
        {
            imageUrl: "./assets/finance.jpg",
            title: "FINANCIAL PLANNING: SMART STRATEGIES FOR WEALTH MANAGEMENT",
            description: "Learn smart strategies for financial planning, wealth management, and achieving financial goals for both individuals and businesses...",
            link: "./biznis/financial_planning.html"
        },
        {
            imageUrl: "./assets/technology.jpg",
            title: "TECHNOLOGY IN BUSINESS: DRIVING INNOVATION AND GROWTH",
            description: "Discover how technology is driving innovation and growth in businesses across industries, from digital transformation to emerging tech trends...",
            link: "./biznis/technology_in_business.html"
        },
        {
            imageUrl: "./assets/global_markets.jpg",
            title: "GLOBAL MARKET INSIGHTS: NAVIGATING INTERNATIONAL BUSINESS",
            description: "Stay updated on global market insights and trends to navigate international business opportunities and challenges effectively...",
            link: "./biznis/global_market_insights.html"
        },
        {
            imageUrl: "./assets/strategy.jpg",
            title: "BUSINESS STRATEGY: DEVELOPING EFFECTIVE PLANS FOR SUCCESS",
            description: "Learn how to develop effective business strategies for growth, innovation, and sustainable success in dynamic market environments...",
            link: "./biznis/business_strategy.html"
        }
    ];
    

    displayNews(newsData);
});



const carNewsData = [
    {
        imageUrl: "./assets/electric_car.jpg",
        title: "ELECTRIC VEHICLES: THE FUTURE OF AUTOMOBILES",
        description: "Explore the latest electric car models, advancements in battery technology, and the growing infrastructure for electric vehicles...",
        link: "./cars/electric_vehicles.html"
    },
    {
        imageUrl: "./assets/autonomous_car.jpg",
        title: "AUTONOMOUS DRIVING: THE RISE OF SELF-DRIVING CARS",
        description: "Discover the latest developments and innovations in autonomous vehicle technology, including self-driving car tests and regulations...",
        link: "./cars/autonomous_driving.html"
    },
    {
        imageUrl: "./assets/sports_car.jpg",
        title: "SPORTS CARS: THRILLING PERFORMANCE AND DESIGN",
        description: "Stay updated on the newest sports car models, performance upgrades, and thrilling driving experiences...",
        link: "./cars/sports_cars.html"
    },
    {
        imageUrl: "./assets/sustainable_car.jpg",
        title: "SUSTAINABLE MOBILITY: ECO-FRIENDLY CARS AND INITIATIVES",
        description: "Learn about eco-friendly car options, sustainable mobility initiatives, and efforts to reduce carbon emissions in the automotive industry...",
        link: "./cars/sustainable_mobility.html"
    },
    {
        imageUrl: "./assets/luxury_car.jpg",
        title: "LUXURY AUTOMOBILES: COMBINING STYLE AND TECHNOLOGY",
        description: "Explore the latest luxury car models, cutting-edge features, and opulent designs that redefine automotive luxury...",
        link: "./cars/luxury_automobiles.html"
    },
    {
        imageUrl: "./assets/classic_car.jpg",
        title: "CLASSIC CARS: PRESERVING AUTOMOTIVE HERITAGE",
        description: "Discover the world of classic cars, vintage car restorations, and the enduring appeal of automotive history...",
        link: "./cars/classic_cars.html"
    },
    {
        imageUrl: "./assets/future_car.jpg",
        title: "FUTURE OF AUTOMOBILES: INNOVATIVE CONCEPTS AND DESIGNS",
        description: "Get insights into futuristic car concepts, cutting-edge automotive technology, and the potential of next-generation vehicles...",
        link: "./cars/future_of_automobiles.html"
    },
    {
        imageUrl: "./assets/suv.jpg",
        title: "SUVs: VERSATILITY AND PERFORMANCE FOR EVERYDAY ADVENTURES",
        description: "Stay informed about the latest SUV models, trends in sport utility vehicles, and innovations in crossover designs...",
        link: "./cars/suvs.html"
    },
    {
        imageUrl: "./assets/used_car.jpg",
        title: "USED CARS MARKET: TIPS FOR BUYING AND SELLING",
        description: "Learn about the used car market, buying pre-owned vehicles, and tips for selling your car efficiently...",
        link: "./cars/used_cars_market.html"
    },
    {
        imageUrl: "./assets/innovative_car.jpg",
        title: "INNOVATIVE AUTOMOTIVE TECHNOLOGY: BREAKTHROUGHS AND TRENDS",
        description: "Explore the latest advancements in automotive technology, from infotainment systems to driver assistance features...",
        link: "./cars/innovative_automotive_technology.html"
    }
];