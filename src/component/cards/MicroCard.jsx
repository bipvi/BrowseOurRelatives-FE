export default function MicroCard({classe}) {
  return (
    <>
      <div className={`${classe} card bg-base-200 image-full w-full h-52 shadow-xs hover:shadow-sm minipop`}>
        <figure>
          <img
          className="object-cover w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Animalia_diversity.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center text-txt">Tigre</h2>
          <p>La tigre è un animale che vive pre...</p>
          <div className="card-actions justify-center">
            <button className="btn bg-bg hover:bg-ac hover:shadow-sm text-txt">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
