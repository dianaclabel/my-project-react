export function Card({ image, name }) {
  return (
    <>
      <div className="card">
        <div className="container-image">
          <img alt="rey" src={image} className="img"></img>
        </div>
        <p className="kingName">{name}</p>
      </div>
    </>
  );
}
