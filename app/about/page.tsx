import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>CRUD Operations</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2>What is CRUD?</h2>
          <p>
            CRUD stands for Create, Read, Update, and Delete. These are the four
            basic operations of persistent storage.
          </p>
        </section>
        <section style={styles.section}>
          <h2>Create</h2>
          <p>The Create operation adds new data to the database.</p>
        </section>
        <section style={styles.section}>
          <h2>Read</h2>
          <p>The Read operation retrieves data from the database.</p>
        </section>
        <section style={styles.section}>
          <h2>Update</h2>
          <p>The Update operation modifies existing data in the database.</p>
        </section>
        <section style={styles.section}>
          <h2>Delete</h2>
          <p>The Delete operation removes data from the database.</p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2023 CRUD Operations Info</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  section: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
  },
};

export default AboutPage;
