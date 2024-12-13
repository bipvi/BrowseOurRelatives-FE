export default function ButtonMyS({link, txt, onclick}) {
  return (
    <>
      <a href={link} onClick={onclick} className="rounded-lg inline-flex items-center px-5 shadow-md bg-myS py-2 text-center text-sm font-medium text-txt hover:bg-[#002C6F] popup hover:text-txt focus:outline-none focus:ring-4 focus:ring-cyan-300">
       {txt}
      </a>
    </>
  );
}
