
function About() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.subtitle}>
          Hi there! I am <strong>Abhilash Manoj</strong>, a passionate web developer who thrives on creating elegant and efficient solutions.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Background</h2>
        <p style={styles.text}>
          My journey in web development began with mastering HTML and CSS, which soon grew into a deep love for JavaScript and frameworks like React and Node.js. Over the years, I have contributed to diverse projects, from portfolio sites to robust full-stack applications.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Interests</h2>
        <p style={styles.text}>
          Outside of coding, I enjoy staying updated on tech trends, exploring graphic design, and collaborating on innovative ideas. I believe in lifelong learning and find joy in discovering new possibilities.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    lineHeight: "1.6",
    margin: "40px auto",
    maxWidth: "800px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#ffffff",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#8d8c8c",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#ffffff",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    color: "#8d8c8c",
  },
};

export default About;
