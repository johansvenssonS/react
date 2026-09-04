function HelloName({ name, color }) {
  return (
    <div>
      <h1 style={{ backgroundColor: color }}>{name}</h1>
    </div>
  );
}

export default HelloName;
