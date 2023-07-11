import { motion } from 'framer-motion';
import './skills.scss';

const skills = [
  {
    language: 'js',
    img: './skills/javascript.png',
  },
  {
    language: 'react',
    img: './skills/react_logo.png',
  },
  {
    language: 'node',
    img: './skills/nodejs.png',
  },
  {
    language: 'mongodb',
    img: './skills/mongodb.png',
  },
  {
    language: 'ts',
    img: './skills/typescript.png',
  },
  {
    language: 'aws',
    img: './skills/aws.png',
  },
  {
    language: 'nginx',
    img: './skills/nginx.png',
  },
  {
    language: 'docker',
    img: './skills/docker.png',
  },
  {
    language: 'figma',
    img: './skills/figma.png',
  },
  {
    language: 'firebase',
    img: './skills/firebase.png',
  },
  {
    language: 'postman',
    img: './skills/postman.png',
  },
  {
    language: 'git',
    img: './skills/git.png',
  },
  {
    language: 'github',
    img: './skills/github.png',
  },
  {
    language: 'tailwind',
    img: './skills/tailwindcss.png',
  },
  {
    language: 'materialui',
    img: './skills/materialui.png',
  },
  {
    language: 'html',
    img: './skills/html.png',
  },
  {
    language: 'css',
    img: './skills/css.png',
  },
  {
    language: 'sass',
    img: './skills/sass.png',
  },
];

function skils() {
  return (
    <div className="skils-container">
      <div className="about">
        <div className="chip">
          <div className="chip">My Skills</div>
        </div>
        <p className="about-me">What My Programming Skills Includes?</p>
        <p className="content">
          I am a self-taught MERN stack developer, driven by a passion for coding and building web applications and
          skilled in all aspects of the development and deployment process, from designing and implementing
          features to testing and troubleshooting.
        </p>
        <div className="button">Hire Me</div>
      </div>
      <div className="skils">
        {skills.map((data) => {
          return (
            <motion.div
              className="skills-icon"
              key={data.language}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img src={data.img} alt={data.language} className="logo-image" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default skils;
