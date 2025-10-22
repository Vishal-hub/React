import User from "./user";
import ClassUser from "./classUser";

const About = () => {
    return (
        <div className="restaurant-list" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>About Us</h1>
            <div className="restaurant-card">
                <User name="Mr. X" location="New Delhi" count={0}/>
            </div>
            <div className="restaurant-card">
                <ClassUser name="Mr. Y" location="Goa" count={0} />
            </div>
        </div>
    );
}

export default About;