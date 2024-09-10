import React from 'react'

export default function Card1({item}) {
  return (
    <>
        <div className="card bg-base-100 w-92 shadow-xl mt-20 ml-10 bg-black hover:scale-105 duration-200 mb-10">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font text-white">
      {item.name}
      <div className="badge badge-secondary ">NEW</div>
    </h2>
    <p className='text-white'> If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end text-white pl-40">
    <button className="btn btn-active btn-secondary">{item.price}{" "}$</button>
    <button className="btn btn-active btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}
