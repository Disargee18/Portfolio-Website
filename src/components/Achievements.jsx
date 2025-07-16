import InfoCard from "./InfoCard"

function Achievements(){
    return(
        <>
            <div>
                <h1 className="text-2xl font-bold pb-5">Achievements & Certifications</h1>
                <InfoCard
                    logo =''
                    title={'Excellence in Leadership Awardee'}
                    subtitle={'Senior HighSchool'}
                    date={'2023'}
                />
                <InfoCard
                    logo =''
                    title={'Certificate of Participation in Java Tutorial'}
                    subtitle={'Colle'}
                    date={'2024'}
                />
            </div>
        </>
    )
}

export default Achievements