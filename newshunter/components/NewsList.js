import Link from "next/link";

// Getting the articles on home page by fetching from the index page and mapping over it.
export const NewsList = ({ newsArticles }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {newsArticles.map((news) => {
          return (
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src={news.bannerImage}
                className="object-cover w-full h-64 lg:h-72"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase space-x-5">
                  <a
                    href="/"
                    className="font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 inline-flex px-4 py-2 text-xs"
                    aria-label="Category"
                    title="traveling"
                  >
                    {news.category}
                  </a>
                  <span className="font-semibold tracking-widest uppercase rounded-full text-blue-500 bg-blue-100 inline-flex px-4 py-2 text-xs">
                    {" "}
                    {news.postedOn}
                  </span>
                </p>

                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block  mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-blue-500"
                >
                  {news.title}
                </a>
                <p className="mb-2 text-gray-700 font-semibold line-clamp-3">
                  {news.description}
                </p>
                <Link
                  href="/articles/abc"
                  aria-label=""
                  class="inline-flex  items-center underline decoration-2 decoration-amber-500  font-semibold text-xl"
                >
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
