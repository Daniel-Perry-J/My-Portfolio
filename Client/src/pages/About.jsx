import { Link } from "react-router-dom";
function About() {
    return (
        <div>
            <h1>My Story</h1>
            <h1>Background</h1>
            <h1>Skills</h1>
            <h1>Education</h1>
            <h1>Hobbies</h1>
            <h1 className="text-cyan-700 underline"><Link to="https://drive.google.com">Resume</Link></h1>
        </div>
    );
}

export default About;
