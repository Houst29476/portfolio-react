import React, { useEffect, useState } from "react";

function About() {
  const githubEndpoint = "https://api.github.com/users/Houst29476";
  const [githubData, setGithubData] = useState("");

  useEffect(() => {
    getGithubData();
  }, []);

  const getGithubData = async () => {
    try {
      const res = await fetch(githubEndpoint);
      const data = await res.json();
      setGithubData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <h2 className="heading">Hello! I'm Brad.</h2>
      <h3 className="sub-heading">MERN Full-Stack Developer</h3>
      <div className="bio-container">
        <img
          className="my-pic"
          src={githubData.avatar_url}
          alt="Bradley Boyd bio pic."
        />

        <article className="bio">
          I'm a MERN Full-Stack Developer specializing in the MERN stack
          and skilled in creating responsive web applications. I've earned a
          Full Stack Development Certificate from University of Texas Austin
          Coding Bootcamp.
          <br />
          <br />
          I have created multiple projects using front-end technology such as
          JavaScript, React, HTML, and CSS as well as back-end tools like
          Node.js, Express.js, MongoDB, GraphQL and MySQL while following to
          development methods such as Agile development, RESTful APIs, MVC
          structure and Single Page Applications (SPAs).
          <br />
          <br />
          I am also the CEO of Set For Marriage. A global dating platform for
          singles who are beyond casual online dating and ready to settle down
          and looking for Marriage. I took this idea from concept all the way 
          to market with Apps on the app stores. Today, we have thousands of
          people signing up every day!                    
        </article>
      </div>
    </section>
  );
}

export default About;
