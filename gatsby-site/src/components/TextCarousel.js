import React, {useState, useEffect} from 'react'
import CSS from '../css/TextCarousel.css'

export default function TextCarousel(props) {
    const slideArray = [
        <p>
            Our giclees are all printed in house using state of the art plotters.
            With high resolution printers, richness of color and depth make reproductions virtually indistinguishable from original artwork.
            Giclee images have all the tonality and hues of the original work of art and the museum-quality archival images are color stable for one-hundred years.
            Archival inks are designed to resist fading, and their chemical composition allows the ink to hold fast to the printed surface,
            creating a beautiful picture that will be enjoyed for years. 
        </p>,
        <p>
            Slide 2
            Our giclees are all printed in house using state of the art plotters.
            With high resolution printers, richness of color and depth make reproductions virtually indistinguishable from original artwork.
            Giclee images have all the tonality and hues of the original work of art and the museum-quality archival images are color stable for one-hundred years.
            Archival inks are designed to resist fading, and their chemical composition allows the ink to hold fast to the printed surface,
            creating a beautiful picture that will be enjoyed for years.
        </p>,
        <p>
            Slide 3
            Our giclees are all printed in house using state of the art plotters.
            With high resolution printers, richness of color and depth make reproductions virtually indistinguishable from original artwork.
            Giclee images have all the tonality and hues of the original work of art and the museum-quality archival images are color stable for one-hundred years.
            Archival inks are designed to resist fading, and their chemical composition allows the ink to hold fast to the printed surface,
            creating a beautiful picture that will be enjoyed for years.
        </p>,
    ] 

    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (currentSlide === 2) {
                setCurrentSlide(0)
            } else {
                setCurrentSlide(currentSlide + 1)
            }
        }, props.timer)
    })

    return (
        <div className={props.className}>
            {slideArray[currentSlide]}
        </div>
    )
}
