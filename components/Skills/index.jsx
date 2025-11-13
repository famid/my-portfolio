import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"]
    },
    {
      title: "Backend Frameworks",
      skills: ["NestJS", "Express.js", "FastAPI", "Django", "Laravel", "Node.js"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
      title: "Message Queues & Async",
      skills: ["RabbitMQ", "BullMQ (Redis)", "Event-Driven Architecture"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Lambda, S3, EC2, SQS, CloudWatch)", "Docker", "Nginx", "GitHub Actions (CI/CD)"]
    },
    {
      title: "Architecture & Design",
      skills: ["Microservices", "Serverless", "RESTful APIs", "API Gateway", "Design Patterns"]
    }
  ];

  return (
    <div className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20" id="skills">
      <h1 className="text-4xl text-sky-500 font-bold sm:text-5xl">#Technical Skills</h1>
      <p className="text-sm text-sky-500 font-semibold mt-4 mb-8 leading-6">
        Polyglot developer with expertise across multiple languages, frameworks, and modern cloud technologies.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-sky-900 rounded-lg p-6 transition ease-in-out duration-150 hover:bg-sky-800"
          >
            <h3 className="text-xl text-white font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-sky-500 text-white text-sm px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
