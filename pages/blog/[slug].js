export default function PostPage({ post }) {
  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold">{post.baslık}</h1>
        <p>{post.icerik.tarih}</p>
        <hr className="my-4" />

        <div className="prose">{post.icerik.ad}</div>
      </article>
    </div>
  );
}


export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_POST_URL}${context.params.slug}.json`
  );

  const post = await res.json();
  
  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
    },
  };
};