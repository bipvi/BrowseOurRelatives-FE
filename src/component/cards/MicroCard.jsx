export default function MicroCard({classe}) {
  return (
    <>
      <div className={`${classe} card bg-base-100 image-full w-96 shadow-xs hover:shadow-sm minipop`}>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-txt">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn bg-bg text-txt">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
