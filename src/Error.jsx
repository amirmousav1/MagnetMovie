import { Link } from "react-router";

function Error() {
  return (
    <div className="flex flex-col items-center gap-4 mx-4 text-sm">
      <span className="bg-red-400 py-3 px-5 rounded-lg text-white leading-7">
        متاسفانه فیلم مورد نظر شما پیدا نشد، دقت کنید که باید اسم لاتین یا شناسه
        IMDb فیلم را وارد نمایید.
      </span>
      <Link className="bg-primary text-white py-2 px-4 rounded-lg" to="/">
        برگشت به صفحه جستجو
      </Link>
    </div>
  );
}

export default Error;
