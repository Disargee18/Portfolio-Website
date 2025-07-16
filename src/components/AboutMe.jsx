
function AboutMe() {

    return (
        <>
            <div className="aboutMe">
                <h1 className="text-5xl font-bold">Hey, this is Argee👋</h1>
                <h3 className="text-3xl font-thin text-gray-400 mt-4" >Web Developer</h3>
                <div className="avatar absolute top-18 right-110">
                    <div className="w-30 rounded-full ring-3 ring-offset-4">
                        {/* <img src={image} /> */}
                    </div>
                </div>
                <h1 className="text-2xl font-bold py-3">About</h1>
                <p className="text-justify text-l font-light">I'm a passionate beginner web-developer currently studying a Bachelor's Degree in
                    Information in Technology at University of Cebu Lapu-lapu and Mandaue.
                    I am currently striving to become a competitive web-developer that is able to make cool, useful apps and
                    websites, that is both proficient in front-end and back-end development.
                </p>
            </div>
        </>
    )
}

export default AboutMe