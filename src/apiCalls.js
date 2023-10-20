const key = process.env.REACT_APP_API_KEY;

const fetchArticlesData = async (category) => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${key}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      const articles = data.results.map((item) => {
        return {
          section: item.section,
          title: item.title,
          abstract: item.abstract,
          url: item.url,
          byline: item.byline,
          largeImage: item.multimedia ? item.multimedia[1] : "#",
          thumbnailImage: item.multimedia ? item.multimedia[2] : "#",
        };
      });
      return articles;
    }
  } catch (error) {
    throw error;
  }
};

export { fetchArticlesData };
