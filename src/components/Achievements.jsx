import InfoCard from "./InfoCard"
import slogo from "../assets/shslogo.jpg"
import logo from "../assets/uclmlogo.webp"


function Achievements(){
    return(
        <>
            <div>
                <h1 className="text-xl font-bold pb-5">Achievements & Certifications</h1>
                <InfoCard
                    logo ={slogo}
                    title={'Excellence in Leadership Awardee'}
                    subtitle={'Senior HighSchool'}
                    date={'2023'}
                />
                <InfoCard
                    logo ={logo}
                    title={'Certificate of Participation in Java Tutorial'}
                    subtitle={'College'}
                    date={'2024'}
                />
            </div>
        </>
    )
}

export default Achievements