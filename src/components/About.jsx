import React from 'react';

function About() {
  return (
    <div style={{ padding: "4rem 2rem", fontFamily: "sans-serif", textAlign: "center", color: "#333", minHeight: "80vh" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#001f3f" }}>Motive Behind This Project</h1>
      
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem" }}>
        <p style={{ marginBottom: "2rem" }}>
          Mental Health Companion was developed with a singular focus: to create a safe, accessible, and supportive digital environment for individuals navigating mental health challenges. Recognizing the growing need for immediate mental wellness resources, this platform aims to bridge the gap between users and the tools they need to improve their mental well-being, manage stress, and lead fulfilling lives.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #ccc", margin: "3rem 0" }} />

        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#001f3f" }}>About The Developer</h2>
        <p style={{ marginBottom: "2rem" }}>
          I am a passionate software developer dedicated to building impactful, user-centric applications. This project represents my commitment to leveraging technology for social good. Feel free to connect with me to discuss tech, development, or future collaborations.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "2rem" }}>
          <a 
            href="https://github.com/Manan-Joshi750" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ padding: "10px 20px", backgroundColor: "#333", color: "white", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/mananj27" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ padding: "10px 20px", backgroundColor: "#0077b5", color: "white", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;