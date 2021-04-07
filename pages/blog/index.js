import Link from "next/link";
const Blog = ({ post }) => {
  const postKeys = Object.keys(post);
  const posts = Object.values(post);
  return (
    <div className="site-container">
      <div className="space-y-4">
        {posts.map((post, i) => {
          return (
            <Link href={`/blog/${postKeys[i]}`}>
              <article key={i} className=" cursor-pointer">
                <h2 className="text-xl font-bold">
                  <a>{post.baslık}</a>
                </h2>
                <p className="truncate max-w-xl ">{post.icerik.ad}</p>
                <div className="text-gray-400">
                  <span>{post.icerik.tarih}</span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
/* export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_DB_URL);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}; */
export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_DB_URL);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };}

export default Blog
