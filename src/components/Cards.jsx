
function Cards({title, subtitle, picture, badge1, badge2}) {
    return (
        <>
            <div>
                <div className="card bg-base-100 w-80 shadow-sm py-11 bg-gray-500">
                    <figure>
                        <img className="w-80 h-50"
                            src={picture}
                            alt="Shoes" />  
                    </figure>
                    <div className="card-body p-5">
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <p>{subtitle}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{badge1}</div>
                            <div className="badge badge-outline">{badge2}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards