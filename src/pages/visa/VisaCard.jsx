import "./Visa.css";

export default function VisaCard({ icon, title, desc, points }) {
  return (
    <div className="visa-card">
      <div className="visa-card-icon">{icon}</div>
      <h3 className="visa-card-title">{title}</h3>
      <p className="visa-card-desc">{desc}</p>
      <ul className="visa-points">
        {points.map((p, i) => (
          <li key={i}>
            <span className="check-icon">✔</span> {p}
          </li>
        ))}
      </ul>
      <button className="visa-card-btn">Know More →</button>
    </div>
  );
}