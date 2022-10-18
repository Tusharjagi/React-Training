import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The NewsPage Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great FrameWork
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
