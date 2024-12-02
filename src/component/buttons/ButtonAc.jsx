export default function ButtonAc({link, txt}) {
    return (
      <>
        <a href={link} className="inline-flex items-center rounded-lg shadow-md bg-ac px-4 py-2 text-center text-txt hover:bg-[#105e70] hover:shadow-gray-700 hover:text-txt focus:outline-none focus:ring-4 focus:ring-cyan-300">
         {txt}
        </a>
      </>
    );
  }
  