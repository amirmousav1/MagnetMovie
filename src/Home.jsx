import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function submitSearch(e) {
    e.preventDefault();
    navigate(`/search?query=${query}&page=1`);
  }
  return (
    <div className="flex justify-center gap-5 flex-col items-center px-5">
      <form
        className="flex text-sm md:text-base relative sm:w-[25rem] md:w-[32rem] border bg-white rounded-full border-third"
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
          placeholder="نام فیلم یا شناسه IMDb"
        />
        <button className="bg-third text-white rounded-l-full px-6 focus:outline-none">
          جستجو
        </button>
      </form>
      <h1 className="text-xl font-semibold">مووی مگنت، جستجوگر تورنت فیلم</h1>
      <h2 className="text-sm text-third">جستجو بین 64 هزار فیلم</h2>
      <span className="text-sm font-bold text-primary">
        لطفا قبل از جستجو حتما VPN خود را روشن کنید.
      </span>
      <span className="text-sm text-third">
        توجه داشته باشید که این سرویس تنها برای فیلم‌ها طراحی شده و شامل
        سریال‌ها نمی‌شود.
      </span>
    </div>
  );
}

export default Home;
