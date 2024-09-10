import React from 'react'

export default function Coures1({item}) {
  return (
    <div className="card bg-base-100 w-85 h-95 shadow-xl bg-black mb-10 ml-10 hover:scale-105 duration-200">
  <figure>
    <img
      src={item.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title  font-bold	text-white">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='	text-xl text-white'>{item.description}</p>
    <div className="card-actions justify-end text-white mt-3">
    <button className="btn btn-active btn-secondary">{item.price}{" "}$</button>
    <button className="btn btn-active btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
  )
}
