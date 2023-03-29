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
  }
  // {
  //   title: "America Already Loves Spritzes. Now It Just Needs Its Own Aperol.",
  //   url: "https://www.nytimes.com/2023/03/21/dining/drinks/aperol-producers-us.html",
  //   abstract:
  //     "Producers across the United States are working to create a uniquely American aperitif and digestif tradition using local ingredients and less sugar.",
  //   uri: "nyt://article/c123a19d-0817-56c0-af04-e4ca5eadfabd",
  //   byline: "By Molly Fitzpatrick",
  //   published_date: "2023-03-21T05:00:50-04:00",
  //   section: "dining",
  //   multimedia: [
  //     {
  //       url: "https://static01.nyt.com/images/2023/03/20/multimedia/20american-apertif-promo/20american-apertif-promo-superJumbo.jpg",
  //     },
  //     {
  //       url: "https://static01.nyt.com/images/2023/03/20/multimedia/20american-apertif-promo/20american-apertif-promo-thumbLarge.jpg",
  //     },
  //   ],
  // },
];

const mockSingleArticle = {
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

export { articles, searchArticles, mockSingleArticle };
