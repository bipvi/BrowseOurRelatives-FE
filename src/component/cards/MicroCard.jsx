export default function MicroCard({ classe = '', item }) {
  return (
    <>
      <div className={`${classe} bg-myP rounded-lg shadow-lg popup`}>
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-txt">
            {item != undefined ? item.nome : ""}
          </h1>
          <p className="mt-1 text-sm text-txt">
            {item != undefined ? item.descrizione.slice(0, 58) : "Ciao"}...
          </p>
        </div>

        <img
          className="object-cover overflow-hidden w-full h-52 rounded-t-none rounded-b-lg"
          src={item != undefined && item.img}
          alt="animal"
        />
      </div>
    </>
  );
}
