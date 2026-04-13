import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaPython, FaGitAlt, FaFigma, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql, SiTailwindcss, 
  SiRedux, SiPostman 
} from 'react-icons/si';

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, level: 88, color: '#F7DF1E' },
      { name: 'React.js', icon: FaReact, level: 85, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: '#7952B3' },
      { name: 'Redux', icon: SiRedux, level: 75, color: '#764ABC' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, level: 82, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, level: 78, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' },
      { name: 'Python', icon: FaPython, level: 70, color: '#3776AB' }
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
      { name: 'Figma', icon: FaFigma, level: 80, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, level: 82, color: '#FF6C37' }
    ]
  }
];