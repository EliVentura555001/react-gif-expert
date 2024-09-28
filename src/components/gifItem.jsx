
export const GifItem = ({title, url}) => {

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <div className="info">
          <p>{title}</p>
          <button className="btn-cerrar">x</button>
        </div>
    </div>
  )
}
