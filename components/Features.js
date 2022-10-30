const Feature = ({ svg, h4, p }) => {
  return (
    <div className="card">
      {svg}
      <h4>{h4}</h4>
      <p>{p}</p>
    </div>
  );
};

export default Feature;
