import { Link, useSearchParams } from "react-router";
import { getSearchResualts } from "./services/services";
import { useQuery } from "@tanstack/react-query";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, isPending } = useQuery({
    queryKey: ["searchResults"],
    queryFn: () => getSearchResualts(query),
  });
  const results = data?.data?.movies;
  console.log(results);

  if (isPending) return <div>در حال بارگذاری...</div>;

  return (
    <section className="mx-40 grid grid-cols-6 gap-3">
      {results.map((result) => (
        <div
          key={result.id}
          dir="ltr"
          className="bg-white rounded-t-2xl flex flex-col gap-2"
        >
          <img
            src={result.medium_cover_image}
            alt={result.title_long}
            className="rounded-t-2xl"
          />
          <span className="text-sm mx-2 leading-6">{result.title_long}</span>
          <div className="mt-auto">
            <div className="flex mt-auto">
              <span className="bg-[#ffbd47] flex-1 py-1 text-center text-sm">
                {result.rating}
              </span>
              <span className="flex-1 py-1 text-center flex space-x-2 items-center justify-center text-sm bg-[#e8d5b5]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>{result.runtime}</span>
              </span>
            </div>
            <Link
              to={`/movie/${result.imdb_code}`}
              className="bg-third text-white py-1 text-[14px] w-full block text-center"
            >
              مشاهده
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SearchResults;
