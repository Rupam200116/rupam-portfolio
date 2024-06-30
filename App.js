import React from 'react';
import profilePic from './assets/Rupam_photo.jpg';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">Rupam's Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About Me</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#education" className="hover:underline">Education</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#certifications" className="hover:underline">Certifications</a></li>
              <li><a href="#awards" className="hover:underline">Awards</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="showcase" className="bg-blue-500 text-white text-center p-10">
        <div className="container mx-auto">
          <h1 className="text-4xl mb-4">Welcome to My Portfolio</h1>
          <p>DevOps Engineer specializing in cloud platforms and CI/CD practices.</p>
        </div>
      </section>

      <section id="about" className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <img src={profilePic} alt="Rupam Rakshit" className="w-32 h-32 rounded-full mx-auto mb-4"/>
        <p className="mb-4">Hello! I'm Rupam Rakshit, a passionate professional with a keen interest in the intersection of cloud computing and software development. I am presently contributing my skills and expertise as a System Engineer at Wipro.</p>
        <p className="mb-4">With 2 years of industry experience, I have established a robust foundation in troubleshooting complex hardware and software issues, servers, network-related issues, configuring systems, and managing operating systems, including Windows and macOS.</p>
        <p className="mb-4">My proficiency extends to the realm of Cloud Computing, where I hold multiple certifications from Microsoft Azure, Google Cloud, and Informatica. These certifications reflect my comprehensive understanding of cloud technologies and my dedication to staying abreast of the latest advancements in the field.</p>
        <p>I am enthusiastic about leveraging my skills and knowledge to contribute effectively to the dynamic world of Cloud and DevOps engineering.</p>
      </section>

      <section id="projects" className="container mx-auto p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-2xl font-semibold"><a href="https://github.com/Rupam200116/-Serverless-API-using---AWS" className="text-blue-500 hover:underline">Serverless API using AWS</a></h3>
            <p>Developed a scalable API using AWS services. Created and tested an AWS Lambda function, integrated it with Amazon API Gateway, and validated the API using Postman.</p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold"><a href="https://github.com/Rupam200116/-Virtualisation-on-AWS-EC2" className="text-blue-500 hover:underline">Virtualisation on AWS EC2</a></h3>
            <p>Deployed a three-tier web application on AWS EC2 for global access. Dockerized the application for containerized deployment and created a CI/CD pipeline using Jenkins for automated deployment.</p>
          </li>
        </ul>
      </section>

      <section id="experience" className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <p><strong>System Engineer at Wipro</strong></p>
        <p>November 2022 - Present, Mumbai, Maharashtra, India</p>
        <p>Contributing my skills and expertise in system engineering and cloud computing.</p>

        <p><strong>Trainee at Wipro</strong></p>
        <p>July 2022 - October 2022, Mysore, Karnataka, India</p>
        <p>Completed my training for PRP (Project Readiness Program).</p>
      </section>

      <section id="education" className="container mx-auto p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <p><strong>Birla Institute of Technology and Science, Pilani</strong></p>
        <p>Bachelor of Technology - BTech, Information Systems (July 2023 - July 2026)</p>

        <p><strong>Ramakrishna Mission Shilpamandira Belurmath</strong></p>
        <p>Diploma in Engineering, Electronics and Telecommunication Engineering (June 2019 - June 2022)</p>

        <p><strong>Bantra M.S.P.C. High School</strong></p>
        <p>Higher Secondary, Science (June 2017 - April 2019)</p>

        <p><strong>Santragachi Kedarnath Institution</strong></p>
        <p>Secondary (June 2015 - April 2017)</p>
      </section>

      <section id="skills" className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap space-x-4">
          <li className="flex items-center space-x-2"><i className="fab fa-aws"></i> <span>Amazon Web Services (AWS)</span></li>
          <li className="flex items-center space-x-2"><i className="fas fa-lambda"></i> <span>AWS Lambda</span></li>
          <li className="flex items-center space-x-2"><i className="fas fa-cloud"></i> <span>Amazon API Gateway</span></li>
          <li className="flex items-center space-x-2"><i className="fab fa-docker"></i> <span>Docker</span></li>
          <li className="flex items-center space-x-2"><i className="fab fa-kubernetes"></i> <span>Kubernetes</span></li>
          <li className="flex items-center space-x-2"><i className="fas fa-code-branch"></i> <span>CI/CD</span></li>
          <li className="flex items-center space-x-2"><i className="fab fa-linux"></i> <span>Linux Administration</span></li>
        </ul>
      </section>

      <section id="certifications" className="container mx-auto p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
        <ul className="space-y-4">
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> Cloud Lakehouse Data Management</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> Quantum Computing Essentials For Senior Leaders (LFQ102)</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> Ethical Hacking for Beginners</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> Cloud Digital Leader</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> Informatica Cloud Integration and Application Modernization</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> 3x Google Cloud Certifications</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> 3x Microsoft Certifications</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> 4x Informatica Certifications</li>
          <li><img src="certification_photo.jpg" alt="Certification Photo" className="inline-block w-8 h-8 mr-2"> 1x Atlassian Certification</li>
        </ul>
      </section>

      <section id="awards" className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Awards</h2>
        <p><strong>Supertech Award - You are the best engineer</strong></p>
        <p>Issued by Wipro · June 2024</p>
        <p>Received Supertech Award for excellent contribution in FY'23-24 performance year.</p>
      </section>

      <section id="contact" className="container mx-auto p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:rupameakshit112@gmail.com" className="text-blue-500 hover:underline"><i className="fas fa-envelope"></i></a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/rupamrakshit/" className="text-blue-500 hover:underline"><i className="fab fa-linkedin"></i></a></p>
        <p>GitHub: <a href="https://github.com/Rupam200116" className="text-blue-500 hover:underline"><i className="fab fa-github"></i></a></p>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>Rupam Rakshit &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
