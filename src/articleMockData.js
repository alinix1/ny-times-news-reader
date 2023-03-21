const articles = [
  {
    title: "Inside the ‘Top Chef’ Industrial Complex",
    url: "https://www.nytimes.com/2023/03/09/dining/top-chef-season-20.html",
    abstract:
      "Entering its 20th season, the sprawling Bravo franchise has changed the way Americans eat and become a mirror of the restaurant industry.",
    uri: "nyt://article/33e16465-e532-5f23-aa21-e58f4181418e",
    byline: "By Brett Anderson",
    published_date: "2023-03-09T22:30:08-05:00",
    section: "dining",
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2023/03/15/dining/15Top-Chef-Cover/15Top-Chef-Cover-superJumbo.jpg",
      },
      {
        url: "https://static01.nyt.com/images/2023/03/15/dining/15Top-Chef-Cover/15Top-Chef-Cover-thumbLarge.jpg",
      },
    ],
    alt: "article",
  },
];

const mockArticle = {
  title: "Inside the ‘Top Chef’ Industrial Complex",
  url: "https://www.nytimes.com/2023/03/09/dining/top-chef-season-20.html",
  abstract:
    "Entering its 20th season, the sprawling Bravo franchise has changed the way Americans eat and become a mirror of the restaurant industry.",
  byline: "By Brett Anderson",
  published_date: "2023-03-09T22:30:08-05:00",
  section: "dining",
  multimedia: [
    {
      url: "https://static01.nyt.com/images/2023/03/15/dining/15Top-Chef-Cover/15Top-Chef-Cover-superJumbo.jpg",
    },
    {
      url: "https://static01.nyt.com/images/2023/03/15/dining/15Top-Chef-Cover/15Top-Chef-Cover-thumbLarge.jpg",
    },
  ],
  alt: "article",
};
  
const searchArticles = "Inside the ‘Top Chef’ Industrial Complex"
  
export { articles, searchArticles, mockArticle };
