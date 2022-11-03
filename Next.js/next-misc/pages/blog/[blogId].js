import Head from "next/head";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Connecting to database with username ${user} and password ${password}`
  );
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
