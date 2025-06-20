import { Link } from "react-router-dom";
export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-blue-300 rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <Link to={link} className="text-blue-600 mt-4 block">View Project →</Link>
    </div>
  );
}
