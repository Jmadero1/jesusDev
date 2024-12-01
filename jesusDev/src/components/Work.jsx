/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/MicaelaPache.jpeg',
    title: 'Micaela Interiorismo',
    tags: ['Development'],
    projectLink: 'https://jmadero1.github.io/MicaWeb/'
  },
  {
    imgSrc: '/images/Cvinter.jpeg',
    title: 'Cv Inter',
    tags: ['API', 'SPA'],
    projectLink: 'https://i002-cvinter-front-phi.vercel.app/'
  },
  {
    imgSrc: '/images/Moviebillboard.jpg',
    title: 'Movie Billboard',
    tags: ['Development', 'API', 'SPA'],
    projectLink: 'https://movie-billboard-two.vercel.app/'
  },
  {
    imgSrc: '/images/weather.jpg',
    title: 'Weather App',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '',
    title: 'eCommerce RayaStore',
    tags: ['eCommerce', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/images/JesusDev.jpeg',
    title: 'Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work