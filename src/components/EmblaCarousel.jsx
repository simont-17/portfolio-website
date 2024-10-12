import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import projectSlides from '../data/projectSlides';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((project, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__content">
                {/* Display the project image */}
                <img
                  className="embla__slide__image"
                  src={project.image}
                  alt={`Project ${project.title}`}
                />
                
                {/* Project title */}
                <div className="embla__slide__title">{project.title}</div>

                {/* Project description */}
                <div className="embla__slide__description">
                  {project.description}
                </div>

                {/* Skills Used Section */}
                <div className="embla__slide__skills">
                  <strong>Skills Used:</strong> {project.skillsUsed.join(', ')}
                </div>

                {/* Display GitHub repo link */}
                <div className="embla__slide__link">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;
