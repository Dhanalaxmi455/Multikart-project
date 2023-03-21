
import { NEXT_SLIDE, PREV_SLIDE } from '../slice/actions';

const initialState = {
  currentSlide: 0,
  slides: [
    {
      image: 'https://multikart-react.vercel.app/assets/images/home-banner/46.jpg',
      caption: 'Slide 1'
    },
    {
      image: 'https://multikart-react.vercel.app/assets/images/home-banner/45.jpg',
      caption: 'Slide 2'
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