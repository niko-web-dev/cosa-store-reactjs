import bgImg from './image/img2.jpg'
import bgImgHover from './image/img3.jpg'
import bgImg1 from './image/img31.jpg'
import bgImgHover1 from './image/img32.jpg'
import bgImg2 from './image/img33.jpg'
import bgImgHover2 from './image/imgg2.jpg'
import bgImg3 from './image/imggg3.jpg'
import bgImgHover4 from './image/imggg4.jpg'


const bg = [
  bgImg,
  bgImgHover,
  bgImg1,
  bgImgHover1,
  bgImg2,
  bgImgHover2,
  bgImg3,
  bgImgHover4
]
const items = [
  {id: '1', name: 'Заколка', price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`},
  {id: '2', name: 'Бант', price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`},
  {id: '3', name: 'Другой бант', price: '2131', bg: `${bg[4]}`, hover: `${bg[5]}`},
  {id: '4', name: 'Еще заколка', price: '1111', bg: `${bg[6]}`, hover: `${bg[7]}`},
]

export default items 