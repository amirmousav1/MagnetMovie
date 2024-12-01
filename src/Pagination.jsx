function Pagination({
  resultsNumber,
  handlePrevPage,
  handleNextPage,
  currentPage,
}) {
  const pagesNumber = Math.round(resultsNumber / 4);
  currentPage = !currentPage ? 1 : currentPage;
  return (
    <nav className="col-span-4">
      <ul className="flex justify-center gap-5">
        <li>
          <button
            onClick={handleNextPage}
            disabled={Number(currentPage) === pagesNumber}
            className="bg-secondary py-2 px-4 rounded-lg transition-all hover:bg-primary hover:text-white duration-300 flex items-center disabled:opacity-75 disabled:hover:bg-secondary disabled:hover:text-black disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <span>صفحه بعدی</span>
          </button>
        </li>
        <li>
          <button
            onClick={handlePrevPage}
            disabled={Number(currentPage) === 1}
            className="bg-secondary py-2 px-4 rounded-lg transition-all hover:bg-primary hover:text-white duration-300 flex items-center disabled:opacity-75 disabled:hover:bg-secondary disabled:hover:text-black disabled:cursor-not-allowed"
          >
            <span>صفحه قبلی</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
