
function StudentCard({ name, id, dept }) {
  return (
    <div style={{
      border: "1px solid #ffffffff",
      borderRadius: "8px",
      padding: "16px",
      width: "250px",
      margin: "10px auto",
      textAlign: "center",
      boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>Name: {name}</h3>
      <p>ID: {id}</p>
      <p>Department: {dept}</p>
    </div>
  );
}

export default StudentCard;

