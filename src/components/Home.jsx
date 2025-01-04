
function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-header">
         <h1 className="home-title">Welcome to My Portfolio</h1>
         <p className="home-intro">
          Discover my journey in programming, explore my skills, and delve into the projects I have worked on.
         </p>
        </div>
        <div className="home-details">
          <div className="home-card">
            <h3>About Me</h3>
            <p>
              I am a dedicated programmer with a passion for crafting efficient and user-friendly applications.
            </p>
          </div>
          <div className="home-card">
            <h3>Web Development</h3>
            <p>
              Building responsive, dynamic, and visually appealing web applications using React, Node.js, and Express.
            </p>
          </div>
          <div className="home-card">
            <h3>Database Management</h3>
            <p>
              Working with MySQL and MongoDB to store, retrieve, and manage data efficiently for scalable applications.
            </p>
          </div>
          <div className="home-card">
            <h3>Collaboration</h3>
            <p>
              Collaborating with teams to deliver robust solutions and contribute to successful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
