import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function submitSearch(e) {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  }
  return (
    <div className="flex justify-center">
      <form
        className="flex relative w-[38rem] border bg-white rounded-full border-third"
        onSubmit={submitSearch}
      >
        <label htmlFor="search" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 h-full mx-[12px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="search"
          autoComplete="off"
          className="focus:outline-none py-3 flex-1"
          type="text"
          placeholder="نام فیلم یا آی‌دی IMDb فیلم را وارد کنید..."
        />
        <button className="bg-third text-white rounded-l-full px-6">
          جستجو
        </button>
      </form>
    </div>
  );
}

export default Home;
