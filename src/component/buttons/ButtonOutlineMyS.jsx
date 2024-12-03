export default function ButtonOutlineMyS({link, txt}) {
    return (
      <>
        <a href={link} className="inline-flex items-center rounded-lg px-5 shadow-md hover:bg-[#00cc7e] hover:border-none text-myS text-center text-sm font-medium border-2 border-bg hover:text-myS popup focus:outline-none focus:ring-4 focus:ring-cyan-300">
         {txt}
        </a>
      </>
    );
  }
  