export default function ButtonMyS({link, txt}) {
  return (
    <>
      <a href={link} className="inline-flex items-center rounded-lg shadow-md bg-myS px-4 py-2 text-center text-sm font-medium text-txt hover:bg-[#01122A] hover:shadow-gray-700 hover:text-txt focus:outline-none focus:ring-4 focus:ring-cyan-300">
       {txt}
      </a>
    </>
  );
}
