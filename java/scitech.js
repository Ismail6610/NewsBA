
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


