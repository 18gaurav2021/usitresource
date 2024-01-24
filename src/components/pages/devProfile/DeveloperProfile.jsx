import { useState } from "react";
import user1 from "../../../assets/img/male-developer.webp";
import user2 from "../../../assets/img/female-developer.webp";
import user3 from "../../../assets/img/profil1.jpg";
import user4 from "../../../assets/img/foto-sushi-ExVlW9b648Q-unsplash.jpg";
import user5 from "../../../assets/img/elizeu-dias-2EGNqazbAMk-unsplash.jpg";
import user6 from "../../../assets/img/mostafa-kordzangeneh-_tcJW4nqVtw-unsplash.jpg";


function DeveloperProfile() {
  const data = [
    {
      id: 1,
      name: "Aashish",
      skills: ["Java", "React"],
      experince: "8+ years of Experience",
      Image: user1,
    },
    {
      id: 2,
      name: "Damini",
      skills: ["Java", "React", "C#"],
      experince: "8+ years of Experience",
      Image: user2,
    },
    {
      id: 3,
      name: "Aashish",
      skills: ["Laravel", "Python"],
      experince: "8+ years of Experience",
      Image: user3,
    },
    {
      id: 4,
      name: "Rohan",
      skills: ["Java", "Python"],
      experince: "8+ years of Experience",
      Image: user4,
    },
    {
      id: 5,
      name: "Akash",
      skills: ["React", "Python"],
      experince: "2+ years of Experience",
      Image: user5,
    },
    {
      id: 6,
      name: "Manish",
      skills: ["Laravel", "Python"],
      experince: "6+ years of Experience",
      Image: user6,
    },
  ];

  return (
    <>
       <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "140px",
        marginBottom: "400px",
        justifyContent: "center",
        background: "linear-gradient(to right, #6a85b6, #bac8e0)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{
              width: "100%",
              border: "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              className="card-img-top"
              src={item.Image}
              alt={`${item.name} avatar`}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">Name: {item.name}</h5>
              <p className="card-text">Skills: {item.skills.join(", ")}</p>
              <p className="card-text">Experience: {item.experince}</p>
              <a href="#" className="btn btn-primary">
                Hire
              </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default DeveloperProfile;
