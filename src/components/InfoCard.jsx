
function InfoCard({ logo, title, subtitle, date }) {
    return (
        <div className="gap-4 py-4 flex justify-between">
            <div className="infoCard flex items-start">
                <div className='image'>
                    <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
                </div>
                <div>
                    <h1 className="text-lg font-medium">{title}</h1>
                    <p className="text-gray-600">{subtitle}</p>
                </div>
            </div>
            <div>
                <p className="text-sm text-gray-500">{date}</p>
            </div>
        </div>
    )

}

export default InfoCard