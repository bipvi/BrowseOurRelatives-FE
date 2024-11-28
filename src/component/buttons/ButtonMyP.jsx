export default function ButtonMyP({link, txt}) {
  return (
    <>
      <a href={link} className="bg-myP text-bg font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#3E9248] hover:text-bg transition duration-300">
        {txt}
      </a>
    </>
  );
}
