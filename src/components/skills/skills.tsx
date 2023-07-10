import { motion } from 'framer-motion';
import './skills.scss';

const skills = [
  {
    language: 'js',
    img: './javascript.png',
  },
  {
    language: 'react',
    img: './react_logo.png',
  },
  {
    language: 'node',
    img: './nodejs.png',
  },
  {
    language: 'mongodb',
    img: './mongodb.png',
  },
  {
    language: 'ts',
    img: './typescript.png',
  },
  {
    language: 'aws',
    img: './aws.png',
  },
  {
    language: 'nginx',
    img: './nginx.png',
  },
  {
    language: 'docker',
    img: './docker.png',
  },
  {
    language: 'figma',
    img: './figma.png',
  },
  {
    language: 'firebase',
    img: './firebase.png',
  },
  {
    language: 'postman',
    img: './postman.png',
  },
  {
    language: 'git',
    img: './git.png',
  },
  {
    language: 'github',
    img: './github.png',
  },
  {
    language: 'tailwind',
    img: './tailwindcss.png',
  },
  {
    language: 'materialui',
    img: './materialui.png',
  },
  {
    language: 'html',
    img: './html.png',
  },
  {
    language: 'css',
    img: './css.png',
  },
  {
    language: 'sass',
    img: './sass.png',
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
