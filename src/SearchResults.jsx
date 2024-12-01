import { Link, useSearchParams } from "react-router";
import { getSearchResults } from "./services/services";
import { useQuery } from "@tanstack/react-query";
import Pagination from "./Pagination";
import Error from "./Error";
import { SyncLoader } from "react-spinners";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page")) || 1;

  const { data, isPending, isError } = useQuery({
    queryKey: ["searchResults", query, page],
    queryFn: () => getSearchResults(query, page),
  });
  function handleNextPage() {
    searchParams.set("page", page + 1);
    setSearchParams(searchParams);
  }
  function handlePrevPage() {
    searchParams.set("page", page - 1);
    setSearchParams(searchParams);
  }
  const results = data?.data?.movies || [];

  if (isPending)
    return (
      <div className="flex justify-center items-center h-[60dvh]">
        <SyncLoader color="#6A0DAD" />
      </div>
    );

  if (data.data.movie_count === 0 || isError) return <Error />;

  return (
    <div className="md:mx-20 bg-white p-8 rounded-lg">
      <h1 className="text-xl font-bold text-center mb-7">
        نتایج جستجو برای &quot;<span className="text-primary">{query}</span>
        &quot;
      </h1>
      <section className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {results.map((result) => (
          <div key={result.id} dir="ltr" className="flex flex-col gap-2 mb-5">
            <Link to={`/movie/${result.imdb_code}`}>
              <img
                className="hover:contrast-150 transition-all duration-300"
                src={result.large_cover_image}
                alt={result.title_long}
              />
            </Link>
            <span className="text-xs text-[#9CA3AF] font-bold">
              {result.language.toUpperCase()}, {result.year}
            </span>
            <Link
              to={`/movie/${result.imdb_code}`}
              className="leading-6 font-semibold text-base hover:text-primary transition-all duration-300"
            >
              {result.title_english}
            </Link>
            <div className="mt-auto">
              <span className="text-center text-xs flex items-center mb-1">
                <img src="/IMDb.svg" alt="IMDb" />
                <span className="ml-2">{result.rating}/10</span>
              </span>
              <span className="text-xs text-[#9CA3AF] font-bold">
                {result.genres?.slice(0, 4).join(", ")}
              </span>
            </div>
          </div>
        ))}
      </section>
      <Pagination
        resultsNumber={data.data.movie_count}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={page}
      />
    </div>
  );
}

export default SearchResults;
