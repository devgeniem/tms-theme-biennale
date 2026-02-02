import Splide from '@splidejs/splide';

// Use jQuery as $ within this file scope.
const $ = jQuery;

export default class HeroCarousel {
    cache() {
        this.carousels = $( '.hero__carousel' );
    }

    /**
     * Init sliders
     *
     * @return {void}
     */
    init() {
        if ( ! this.carousels ) {
            return;
        }

        for ( let i = 0; i < this.carousels.length; i++ ) {
            const slides = this.carousels[ i ].querySelectorAll( '.splide__slide' );
            const hasMultipleSlides = slides.length > 1;

            new Splide( this.carousels[ i ], {
                type: 'fade',
                rewind: true,
                arrows: hasMultipleSlides,
                pagination: false,
                autoplay: hasMultipleSlides,
                speed: 750,
                pauseOnHover: true,
                role: 'group',
            } ).mount();
        }
    }

    /**
     * Run when the document is ready.
     *
     * @return {void}
     */
    docReady() {
        this.cache();
        this.init();
    }
}
