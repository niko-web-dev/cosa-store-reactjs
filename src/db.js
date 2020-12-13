import bgImg from './assets/images/img2.jpg'
import bgImgHover from './assets/images/img3.jpg'
import bgImg1 from './assets/images/img31.jpg'
import bgImgHover1 from './assets/images/img32.jpg'
import bgImg2 from './assets/images/img33.jpg'
import bgImgHover2 from './assets/images/imgg2.jpg'
import bgImg3 from './assets/images/imggg3.jpg'
import bgImgHover4 from './assets/images/imggg4.jpg'


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

const data =
  {
    items: [
      {
        id: '1',
        name: 'Заколка',
        price: '1233',
        bg: `${bg[0]}`,
        hover: `${bg[1]}`,
        bg3: `${bg[7]}`,
        bg4: `${bg[3]}`,
        text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"
      },
      {
        id: '2',
        name: 'Бант',
        price: '22141',
        bg: `${bg[2]}`,
        hover: `${bg[3]}`,
        bg3: `${bg[7]}`,
        bg4: `${bg[3]}`,
        text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"
      },
      {
        id: '3',
        name: 'Сарпнчь',
        price: '2131',
        bg: `${bg[4]}`,
        hover: `${bg[5]}`,
        bg3: `${bg[7]}`,
        bg4: `${bg[3]}`,
        text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"
      },
      {
        id: '4',
        name: 'Еще заколка',
        price: '1111',
        bg: `${bg[6]}`,
        hover: `${bg[7]}`,
        bg3: `${bg[7]}`,
        bg4: `${bg[3]}`,
        text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"
      },
    ],
    itemsShopPage: [
      {id: '1',  name: 'Заколка', datafilter: "scranch", price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '2', name: 'Бант', datafilter: "bants", price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '3', name: 'Обод', datafilter: "obod", price: '2131', bg: `${bg[4]}`, hover: `${bg[5]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '4', name: 'Заколка', datafilter: "zakol", price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '5', name: 'Бант', datafilter: "bants", price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '6', name: 'Саканчь',datafilter: "scranch", price: '2131', bg: `${bg[4]}`, hover: `${bg[5]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '7', name: 'Заколка', datafilter: "zakol", price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '8', name: 'Набор', datafilter: "nabor",  price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
      {id: '9', name: 'Обод', datafilter: "obod", price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
    ],
    categories: [
      {
        id: 1,
        name: "Скранчи",
        datafilter: "scranch"
      },
      {
        id: 2,
        name: "Банты",
        datafilter: "bants"
      },
      {
        id: 3,
        name: "Заколки",
        datafilter: "zakol"
      },
      {
        id: 4,
        name: "Ободки",
        datafilter: "obod",
      },
      {
        id: 5,
        name: "Наборы",
        datafilter: "nabor"
      },

    ],
    cart:[1,2,3]
  }
export default data
// export const items = [
//   {id: '1', name: 'Заколка', price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '2', name: 'Бант', price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '3', name: 'Сарпнчь', price: '2131', bg: `${bg[4]}`, hover: `${bg[5]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '4', name: 'Еще заколка', price: '1111', bg: `${bg[6]}`, hover: `${bg[7]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
// ]
//
// export  const itemsShopPage = [
//   {id: '1',  name: 'Заколка', datafilter: "scranch", price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '2', name: 'Бант', datafilter: "bants", price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '3', name: 'Обод', datafilter: "obod", price: '2131', bg: `${bg[4]}`, hover: `${bg[5]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '4', name: 'Заколка', datafilter: "zakol", price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '5', name: 'Бант', datafilter: "bants", price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '6', name: 'Саканчь',datafilter: "scranch", price: '2131', bg: `${bg[4]}`, hover: `${bg[5]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '7', name: 'Заколка', datafilter: "zakol", price: '1233', bg: `${bg[0]}`, hover: `${bg[1]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`, text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '8', name: 'Набор', datafilter: "nabor",  price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
//   {id: '9', name: 'Обод', datafilter: "obod", price: '22141', bg: `${bg[2]}`, hover: `${bg[3]}`, bg3:`${bg[7]}`, bg4:`${bg[3]}`,text: "fsflkajlksjfal fjlk ajsfjslf poawiofpas fsjflksajlkf fkjslakjflkajs jflksajflkasjfljfaslkfj"},
// ]
//
// export const categories = [
//   {
//     id: 1,
//     name: "Скранчи",
//     datafilter: "scranch"
//   },
//   {
//     id: 2,
//     name: "Банты",
//     datafilter: "bants"
//   },
//   {
//     id: 3,
//     name: "Заколки",
//     datafilter: "zakol"
//   },
//   {
//     id: 4,
//     name: "Ободки",
//     datafilter: "obod",
//   },
//   {
//     id: 5,
//     name: "Наборы",
//     datafilter: "nabor"
//   },
//
// ]

