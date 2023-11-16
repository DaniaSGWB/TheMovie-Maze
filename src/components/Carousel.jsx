// import React, { useState } from 'react';
// import MovieList from './MovieList';
// import '../App.css'; 

// const Carousel = ({ children }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const imagesPerPage = 4;
//   const goToPreviousSlide = () => {
//     setCurrentIndex((prevIndex) => Math.max(0, prevIndex - imagesPerPage));
//   };

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => Math.min(React.Children.count(children)- imagesPerPage, prevIndex + imagesPerPage));
//   };

//   const showImages =  React.Children.toArray(children).slice(currentIndex, currentIndex + imagesPerPage);

//   return (
//     <div>
//       <div className='buttonCarousel'>
//       <p className="carousel-p prev" onClick={goToPreviousSlide}>
//         Back
//       </p>
//       <p className="carousel-p next" onClick={goToNextSlide}>
//         Suivant
//       </p>
//       </div>
//       <div className='imagesCarousel'>
//       {showImages.map((child, index)=>{
//         return <div key={index}> {child }</div>
//       })}
//       </div>
//         </div>
//   );
// };

// export default Carousel;
