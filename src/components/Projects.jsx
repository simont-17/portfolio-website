import Carousel from "./EmblaCarousel"

const OPTIONS = {loop:true}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Projects() {
    return(
        <section className="projects-container" id="projects">
            <h1>Projects</h1>
            <Carousel slides={SLIDES} options={OPTIONS}/>
        </section>
    )
}