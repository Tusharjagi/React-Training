import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">
        <h4>Users</h4>
      </Link>
      <Link href="/posts">
        <p>Posts</p>
      </Link>

    </>
  );
};

export default Home;
