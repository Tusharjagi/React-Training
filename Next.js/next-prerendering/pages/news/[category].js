const ArticleListByCategory = ({ articles, category }) => {
  //   console.log(articles[0].title)
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>{" "}
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <div>
              <h3>{article.description}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Tushar"]);
  const { category } = params;
  //   console.log(category)
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
    console.log(`Pre-rendering News Articles for category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
};
