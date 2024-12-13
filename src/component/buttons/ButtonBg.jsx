export default function ButtonBg({ link, txt }) {
  return (
    <>
      <a
        href={link}
        className="inline-flex items-center rounded-lg shadow-md bg-bg px-4 py-2 text-center text-sm font-medium text-txt hover:bg-[#1C3B26] hover:text-txt hover:shadow-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200"
      >
        {txt}
      </a>
    </>
  );
}
