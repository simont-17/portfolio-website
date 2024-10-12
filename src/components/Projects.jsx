import Carousel from "./EmblaCarousel"
import projectSlides from '../data/projectSlides'

const OPTIONS = { loop: true };

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h1>Projects</h1>
      <Carousel slides={projectSlides} options={OPTIONS} />
    </section>
  );
}