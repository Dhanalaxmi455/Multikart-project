import { NEXT_SLIDE, PREV_SLIDE } from './actions';

const initialState = {
  currentSlide: 0,
  slides: [
    {
      image: 'slide1.jpg',
      caption: 'Slide 1'
    },
    {
      image: 'slide2.jpg',
      caption: 'Slide 2'
    },
    {
      image: 'slide3.jpg',
      caption: 'Slide 3'
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_SLIDE:
      return {
        ...state,
        currentSlide: (state.currentSlide + 1) % state.slides.length
      };
    case PREV_SLIDE:
      return {
        ...state,
        currentSlide: (state.currentSlide - 1 + state.slides.length) % state.slides.length
      };
    default:
      return state;
  }
}