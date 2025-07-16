import InfoCard from "./InfoCard"

function Education(){
    return(
        <>
            <div>
                <h1 className="text-2xl font-bold py-5">Education</h1>
                <InfoCard
                    logo =''
                    title={'University of Cebu - Lapu-lapu and Mandaue'}
                    subtitle={'Bachelors in Information Technology'}
                    date={'2023-2027'}
                />
                <InfoCard
                    logo =''
                    title={'University of Cebu - Lapu-lapu and Mandaue'}
                    subtitle={'Senior High School Academic Track - STEM'}
                    date={'2021-2023'}
                />
                <InfoCard
                    logo =''
                    title={'Marigondon National Highschool'}
                    subtitle={'Vocational Highschool - Electronics Major'}
                    date={'2017-2021'}
                />
                
            </div>
        </>
    )
}

export default Education