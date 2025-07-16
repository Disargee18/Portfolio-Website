import Cards from "./Cards"

function Projects() {
    return (
        <>
            <div className="projects fl">
                <h1 className="text-2xl font-bold py-5">Projects</h1>
                <div className="grid grid-flow-row grid-cols-2 gap-4 flex pb-20">
                    <div className="">
                        <Cards
                            title={"BoomNaBorrow!"}
                            subtitle={"An Equipment Borrowing System used to ease the booking and tracking of items that are being rented or borrowed. This app helped me learn the major concepts of making a GUI."}
                            badge1={"Java"}
                            badge2={"Notepad"}
                            picture={""}
                        />
                    </div>
                    <div className="">
                        <Cards
                            title={"Simon Game"}
                            subtitle={"A simple game created in java. The objective of this game is to follow the the flashing lights around the four boxes in the screen. This app helped me learn and master panels in Java."}
                            badge1={"Java"}
                            badge2={"Notepad"}
                            picture={""}
                        />
                    </div>
                    <div className="">
                        <Cards
                            title={"Portfolio Website"}
                            subtitle={"It's this app!! This app is my attempt to fully create a website using react and tailwind css. This website taught me the fundamentals of tailwind css and react"}
                            badge1={"React"}
                            badge2={"Tailwind CSS"}
                            picture={""}
                        />
                    </div>
                    <div className="">
                        <Cards
                            title={"Movie App"}
                            subtitle={"This app shows a gallery of the most popular movies while also being able to search and add to favorites movies. This app gave me an introductory insights into web-development "}
                            badge1={"React"}
                            badge2={"Javascript"}
                            picture={""}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects