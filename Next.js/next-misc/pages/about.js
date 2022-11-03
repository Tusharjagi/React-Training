import Head from "next/head";
import Footer from "components/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About Tango</title>
        <meta name="description" content="kuc alag krna hain" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
