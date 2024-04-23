import React from 'react';
import { ModClubLogoPropTypes } from '../types';

export const ModClubLogo: React.FC<ModClubLogoPropTypes> = ({ 
  isLess,
}) => (
  <span className='flex items-center justify-center gap-2'>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9203 0H14.7203L15.6803 0.96V7.35302C15.6803 7.60856 15.5812 7.85078 15.4 8.03098C14.2527 9.17216 9.87908 13.5228 7.85444 15.5475C7.60451 15.7974 7.60451 16.2026 7.85444 16.4525C9.87906 18.4772 14.2527 22.8278 15.4 23.969C15.5812 24.1492 15.6803 24.3914 15.6803 24.647V31.04L14.5603 32H17.2803L16.3203 31.04V24.6454C16.3203 24.3908 16.4215 24.1466 16.6015 23.9666L23.9669 16.6012C24.1469 16.4211 24.3911 16.32 24.6457 16.32H30.7203L32.0003 17.28V14.72L30.7203 15.68H24.6457C24.3911 15.68 24.1469 15.5789 23.9669 15.3988L16.6015 8.03342C16.4215 7.85338 16.3203 7.6092 16.3203 7.35459V0.96L17.9203 0Z" fill="white"/>
      <path d="M6.4 0C2.86538 0 0 2.86538 0 6.4V25.6C0 29.1346 2.86538 32 6.4 32H14.72C15.2502 32 15.68 31.5702 15.68 31.04V24.647C15.68 24.3914 15.5809 24.1492 15.3997 23.969C14.2523 22.8278 9.87875 18.4772 7.85413 16.4525C7.6042 16.2026 7.6042 15.7974 7.85413 15.5475C9.87876 13.5228 14.2523 9.17215 15.3997 8.03098C15.5809 7.85078 15.68 7.60856 15.68 7.35302V0.96C15.68 0.429807 15.2502 0 14.72 0H6.4Z" fill="#030303"/>
      <path d="M17.28 0C16.7498 0 16.32 0.429806 16.32 0.96V7.35459C16.32 7.6092 16.4211 7.85338 16.6012 8.03342L23.9666 15.3988C24.1466 15.5789 24.3908 15.68 24.6454 15.68H31.04C31.5702 15.68 32 15.2502 32 14.72V6.4C32 2.86538 29.1346 0 25.6 0H17.28Z" fill="#030303"/>
      <path d="M32 17.28C32 16.7498 31.5702 16.32 31.04 16.32H24.6454C24.3908 16.32 24.1466 16.4211 23.9666 16.6012L16.6012 23.9666C16.4211 24.1466 16.32 24.3908 16.32 24.6454V31.04C16.32 31.5702 16.7498 32 17.28 32H25.6C29.1346 32 32 29.1346 32 25.6V17.28Z" fill="#030303"/>
    </svg>

    {!isLess && (
      <svg width="69" height="14" viewBox="0 0 69 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M66.1982 0.132812H68.3428V13H66.1982V0.132812Z" fill="#030303"/>
        <path d="M61.916 9.95898H56.6602L55.6143 13H53.4346L58.1719 0.132812H60.4219L65.1328 13H62.9619L61.916 9.95898ZM57.249 8.1748H61.3359L59.3232 2.09277H59.2881L57.249 8.1748Z" fill="#030303"/>
        <path d="M48.7393 11.7246C49.1084 11.7246 49.4424 11.6719 49.7412 11.5664C50.04 11.4609 50.2773 11.3262 50.4531 11.1621C50.6348 10.998 50.7754 10.8369 50.875 10.6787C50.9805 10.5146 51.0566 10.3535 51.1035 10.1953H52.9932C52.7471 11.1211 52.2666 11.8652 51.5518 12.4277C50.8369 12.9902 49.917 13.2715 48.792 13.2715C47.374 13.2715 46.252 12.8262 45.4258 11.9355C44.5996 11.0449 44.1865 9.87012 44.1865 8.41113C44.1865 6.91699 44.5938 5.7334 45.4082 4.86035C46.2227 3.9873 47.3213 3.55078 48.7041 3.55078C50.1572 3.55078 51.2588 4.02246 52.0088 4.96582C52.7588 5.90918 53.1338 7.21875 53.1338 8.89453H46.0762C46.0762 9.69727 46.3164 10.3711 46.7969 10.916C47.2832 11.4551 47.9307 11.7246 48.7393 11.7246ZM48.7041 5.04492C47.9365 5.04492 47.3066 5.27637 46.8145 5.73926C46.3223 6.19629 46.0762 6.7793 46.0762 7.48828H51.2441C51.2441 6.77344 51.0098 6.1875 50.541 5.73047C50.0781 5.27344 49.4658 5.04492 48.7041 5.04492Z" fill="#030303"/>
        <path d="M41.1787 0.132812H43.0684V13H41.1787V11.9365H41.1436C40.8564 12.3115 40.4785 12.6279 40.0098 12.8857C39.541 13.1436 38.9814 13.2725 38.3311 13.2725C37.1299 13.2725 36.1455 12.833 35.3779 11.9541C34.6104 11.0752 34.2266 9.89453 34.2266 8.41211C34.2266 6.92969 34.6104 5.74902 35.3779 4.87012C36.1455 3.99121 37.1299 3.55176 38.3311 3.55176C38.9932 3.55176 39.5586 3.68066 40.0273 3.93848C40.502 4.19043 40.874 4.51562 41.1436 4.91406H41.1787V0.132812ZM38.6562 11.7256C39.4297 11.7256 40.0391 11.4297 40.4844 10.8379C40.9355 10.2402 41.1611 9.43164 41.1611 8.41211C41.1611 7.38672 40.9355 6.57812 40.4844 5.98633C40.0391 5.39453 39.4297 5.09863 38.6562 5.09863C37.8594 5.09863 37.2354 5.41504 36.7842 6.04785C36.3389 6.68066 36.1162 7.46875 36.1162 8.41211C36.1162 9.35547 36.3389 10.1436 36.7842 10.7764C37.2354 11.4092 37.8594 11.7256 38.6562 11.7256Z" fill="#030303"/>
        <path d="M32.0361 2.25098C31.7549 2.25098 31.5059 2.16016 31.2891 1.97852C31.0781 1.79688 30.9727 1.55371 30.9727 1.24902C30.9727 0.944336 31.0781 0.704102 31.2891 0.52832C31.5059 0.34668 31.7549 0.255859 32.0361 0.255859C32.335 0.255859 32.5898 0.34375 32.8008 0.519531C33.0117 0.695312 33.1172 0.938477 33.1172 1.24902C33.1172 1.55957 33.0088 1.80566 32.792 1.9873C32.5811 2.16309 32.3291 2.25098 32.0361 2.25098ZM31.1045 3.79785H32.9941V13H31.1045V3.79785Z" fill="#030303"/>
        <path d="M28.0342 7.16309C28.0166 6.91113 27.9609 6.6709 27.8672 6.44238C27.7793 6.21387 27.6475 5.99707 27.4717 5.79199C27.3018 5.58105 27.0674 5.41406 26.7686 5.29102C26.4756 5.16211 26.1357 5.09766 25.749 5.09766C25.3037 5.09766 24.9053 5.18848 24.5537 5.37012C24.208 5.55176 23.9326 5.79785 23.7275 6.1084C23.5225 6.41895 23.3672 6.77051 23.2617 7.16309C23.1562 7.5498 23.1035 7.96582 23.1035 8.41113C23.1035 8.85645 23.1533 9.27539 23.2529 9.66797C23.3584 10.0547 23.5137 10.4033 23.7188 10.7139C23.9238 11.0244 24.1992 11.2705 24.5449 11.4521C24.8965 11.6338 25.2979 11.7246 25.749 11.7246C26.1357 11.7246 26.4756 11.6631 26.7686 11.54C27.0674 11.417 27.3018 11.25 27.4717 11.0391C27.6475 10.8223 27.7793 10.5938 27.8672 10.3535C27.9609 10.1133 28.0166 9.85547 28.0342 9.58008H29.9238C29.8535 10.6582 29.4346 11.543 28.667 12.2344C27.8994 12.9258 26.9268 13.2715 25.749 13.2715C24.3779 13.2715 23.2793 12.8232 22.4531 11.9268C21.627 11.0303 21.2139 9.8584 21.2139 8.41113C21.2139 6.96387 21.627 5.79199 22.4531 4.89551C23.2793 3.99902 24.3721 3.55078 25.7314 3.55078C26.9033 3.55078 27.8643 3.8877 28.6143 4.56152C29.3643 5.22949 29.8008 6.09668 29.9238 7.16309H28.0342Z" fill="#030303"/>
        <path d="M16.2109 11.7246C16.5801 11.7246 16.9141 11.6719 17.2129 11.5664C17.5117 11.4609 17.749 11.3262 17.9248 11.1621C18.1064 10.998 18.2471 10.8369 18.3467 10.6787C18.4521 10.5146 18.5283 10.3535 18.5752 10.1953H20.4648C20.2187 11.1211 19.7383 11.8652 19.0234 12.4277C18.3086 12.9902 17.3887 13.2715 16.2637 13.2715C14.8457 13.2715 13.7236 12.8262 12.8975 11.9355C12.0713 11.0449 11.6582 9.87012 11.6582 8.41113C11.6582 6.91699 12.0654 5.7334 12.8799 4.86035C13.6943 3.9873 14.793 3.55078 16.1758 3.55078C17.6289 3.55078 18.7305 4.02246 19.4805 4.96582C20.2305 5.90918 20.6055 7.21875 20.6055 8.89453H13.5479C13.5479 9.69727 13.7881 10.3711 14.2686 10.916C14.7549 11.4551 15.4023 11.7246 16.2109 11.7246ZM16.1758 5.04492C15.4082 5.04492 14.7783 5.27637 14.2861 5.73926C13.7939 6.19629 13.5479 6.7793 13.5479 7.48828H18.7158C18.7158 6.77344 18.4814 6.1875 18.0127 5.73047C17.5498 5.27344 16.9375 5.04492 16.1758 5.04492Z" fill="#030303"/>
        <path d="M0.0986328 13V0.132812H5.09961C6.88672 0.132812 8.28711 0.695312 9.30078 1.82031C10.3203 2.93945 10.8301 4.52441 10.8301 6.5752C10.8301 8.63184 10.332 10.2168 9.33594 11.3301C8.33984 12.4434 6.94531 13 5.15234 13H0.0986328ZM2.24316 1.95215V11.1807H4.99414C7.45508 11.1807 8.68555 9.64551 8.68555 6.5752C8.68555 3.49316 7.45508 1.95215 4.99414 1.95215H2.24316Z" fill="#030303"/>
      </svg>    
    )}
  </span>
);