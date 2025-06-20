import ProjectCard from "../components/ProjectCard";

const my_projects = [
    {
        title: "Project 1",
        description: "Description for project 1",
        link: "/projects/1"
    },
    {
        title: "Project 2",
        description: "Description for project 2",
        link: "/projects/2"
    },
    {
        title: "Project 3",
        description: "Description for project 3",
        link: "/projects/3"
    }
];

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {my_projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
