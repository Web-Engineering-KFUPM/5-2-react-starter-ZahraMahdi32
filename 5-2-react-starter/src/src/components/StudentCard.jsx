function StudentCard(name , id, depatment) {
     return (
       <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "250px",
      margin: "10px auto",
      textAlign: "center",
      boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    }}>
        <h3>Name: {name}</h3>
        <p>ID: {id}</p>
        <p>Department: {department}</p>
      </div>
     );
   }
export default StudentCard;