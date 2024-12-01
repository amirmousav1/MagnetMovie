import toast from "react-hot-toast";

function MovieLink({ data, name }) {
  const { type, quality, video_codec, size, seeds, peers, url, hash } = data;
  function handleCopyMagnet() {
    navigator.clipboard.writeText(generateMagnetLink()).then(() => {
      toast.success("لینک مگنت با موفقیت کپی شد.");
    });
  }

  function generateMagnetLink() {
    const encodedMovieName = encodeURIComponent(
      `${name} ${type} ${quality} ${video_codec}`
    );
    return `magnet:?xt=urn:btih:${hash}&dn=${encodedMovieName}&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.leechers-paradise.org:6969`;
  }

  return (
    <div className="bg-secondary rounded-lg rounded-br-none lg:rounded-br-lg mt-2 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center border-r-4 border-r-primary">
      <span className="lg:mr-4 mt-5 lg:mt-0">
        کیفیت:{" "}
        {`${type.at(0).toUpperCase()}${type.slice(
          1
        )} ${quality} ${video_codec}`}
      </span>
      <span className="lg:mr-8">حجم: {`${size}`}</span>
      <span className="lg:mr-8">
        سیدر: <span className="text-green-600">{seeds}</span>
      </span>
      <span className="lg:mr-8">
        لیچر: <span className="text-red-600">{peers}</span>
      </span>
      <div className="grid grid-cols-2 w-full lg:w-auto lg:mr-auto">
        <a
          href={url}
          className="py-3 px-8 bg-third text-white flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
        <button
          onClick={handleCopyMagnet}
          className="py-4 px-8 bg-primary lg:rounded-l-lg flex justify-center"
        >
          <svg
            viewBox="-0.5 -0.5 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="Magnet--Streamline-Iconoir"
            height={22}
            width={22}
          >
            <desc>{"Magnet Streamline Icon: https://streamlinehq.com"}</desc>
            <path
              d="M0.78 0.78v6.968875C0.78 11.32275 3.7886249999999997 14.219999999999999 7.5 14.219999999999999c3.7113750000000003 0 6.720000000000001 -2.89725 6.720000000000001 -6.471125V0.78"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
            />
            <path
              d="M0.78 0.78h4.728875v5.7273125c0 1.0121875 0.8915 1.8326875 1.991125 1.8326875s1.991125 -0.8205 1.991125 -1.8326875V0.78h4.728875"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
            />
            <path
              d="M4.98 4.14h-4.2"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
            />
            <path
              d="M14.219999999999999 4.14h-4.2"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MovieLink;
