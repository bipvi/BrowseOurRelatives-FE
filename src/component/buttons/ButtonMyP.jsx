export default function ButtonMyP({link, txt, classe, onClick}) {
  return (
    <>
      <a href={link} onClick={onClick} className={`${classe} bg-myP shadow-xs text-txt font-semibold py-2 px-4 popup rounded-lg hover:bg-[#02C77C] hover:text-bg transition duration-300`}>
        {txt}
      </a>
    </>
  );
}
