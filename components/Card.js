import Image from "next/image";

export default function Card({ image, type, title, linkText }) {
  return (
    <div className="card">
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className="card__img"
      />
      <h4 className="card__type">{type}</h4>
      <h3 className="heading-3 heading-3--black">{title}</h3>
      <button className="card__btn">
        {linkText} <span>&rarr;</span>
      </button>
    </div>
  );
}
