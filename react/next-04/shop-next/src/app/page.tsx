import HomeContainer from "./components/HomeContainer";
import Product from "./components/Product";

import camisa1 from './assets/t-shirt/1.png'
import camisa2 from './assets/t-shirt/2.png'
import camisa3 from './assets/t-shirt/3.png'
import camisa4 from './assets/t-shirt/4.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product camisa={camisa1}/>
      <Product camisa={camisa1}/>
    </HomeContainer>
  );
}
