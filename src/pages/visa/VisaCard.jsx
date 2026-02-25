
import "./Visa.css";

export default function VisaCard({ icon, title, desc, points }) {
  return (
    <div className="visa-card">
      <div className="visa-icon">{icon}</div>
      <h3 className="visa-card-title">{title}</h3>
      <p className="visa-card-desc">{desc}</p>

      <ul className="visa-points">
        {points.map((p, i) => (
          <li key={i}>✔ {p}</li>
        ))}
      </ul>
    </div>
  );
}
