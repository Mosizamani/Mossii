import React from 'react';

function EducationExperience() {
  return (
    <>  
      <h1>Education & Experience</h1>

      <h2>Education</h2>
      <p>This page provides an overview of my educational path and professional journey across engineering, technology, and software development. Currently, 
        I'm honing my full-stack development skills at the University of British Columbia, following my foundational studies in computer science and artificial 
        intelligence from Harvard. My academic background includes a Master’s in Engineering and Project Management, as well as a Bachelor’s in Civil Engineering. 
        Professionally, I’ve contributed in technology engineering roles, leveraging both technical expertise and practical problem-solving skills to drive innovation and optimize systems.</p>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <h3>University of British Columbia, Software Development Program - Bootcamp</h3>
          <p>April 2024 – Present</p>
          <p>Focus: Software Development Foundations, Full-Stack Development, Algorithm and Data Structures, DevOps, Mobile Development, Authentication, and Validation</p>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <h3>Harvard University, CS50</h3>
          <p>May 2023 – April 2023</p>
          <p>Courses: Introduction to Computer Science, Programming with Python, Web Programming with Python, Artificial Intelligence with Python</p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3>Independent Course Work</h3>
          <p>Sep 2018 - Sep 2019</p>
          <p>Courses: Fundamentals of Machine Learning (Coursera), Machine Learning with Python</p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3>Azad University, Tehran, Iran</h3>
          <p>Master of Science in Engineering and Project Management</p>
          <p>Sep 2015 - Jan 2019</p>
        </div>

        <div>
          <h3>University of Kerman, Kerman, Iran</h3>
          <p>Bachelor of Science in Civil Engineering</p>
          <p>Feb 2007 - July 2012</p>
        </div>
      </div>

      <h2>Professional Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '10px' }}>
          <h3>Technology Engineer, Arani Construction</h3>
          <p>Feb 2022 – May 2024</p>
          <p>Role: Structural Health Monitoring Optimizer, Web Development and Maintenance</p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3>Technical and Technology Engineer, Owj Sazeh Co.</h3>
          <p>Sep 2016 – Dec 2021</p>
          <p>Role: Bitcoin Mining Setup and Maintenance, System Optimization, Troubleshooting</p>
        </div>

        <div>
          <h3>Technical Engineer, Fara Tarh Co.</h3>
          <p>Aug 2012 – Sep 2016</p>
          <p>Role: Project Management, Scope and Schedule Management, Financial Oversight</p>
        </div>
      </div>
    </>
  );
}

export default EducationExperience;
