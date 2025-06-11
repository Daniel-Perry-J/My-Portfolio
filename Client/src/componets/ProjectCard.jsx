export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <a href={link} className="text-blue-600 mt-4 block">View Project →</a>
    </div>
  );
}
