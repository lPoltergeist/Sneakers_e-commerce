import { v4 as uuidv4 } from "uuid";
import Sneaker from '../images/image-product-1.jpg'
import Sneaker2 from '../images/image-product-2.jpg'
import Sneaker3 from '../images/image-product-3.jpg'
import Sneaker4 from '../images/image-product-4.jpg'

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: Sneaker
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: Sneaker2
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: Sneaker3
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    image: Sneaker4
  },
];

export default dataSlider;