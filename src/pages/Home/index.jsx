import { Header } from "../../components/Header";
import { Banner, Container, Title } from "./styles";
import imgBanner from "../../assets/imgBanner.svg";
import { Slide } from "../../components/Slide";

export function Home() {
  const products = [
    { id: 1, image: "url-to-image1", name: "Produto 1", price: 10.0 },
    { id: 2, image: "url-to-image2", name: "Produto 2", price: 20.0 },
    { id: 3, image: "url-to-image3", name: "Produto 3", price: 30.0 },
    { id: 4, image: "url-to-image4", name: "Produto 3", price: 40.0 },
    { id: 5, image: "url-to-image5", name: "Produto 3", price: 50.0 },
    { id: 6, image: "url-to-image6", name: "Produto 3", price: 60.0 },
  ];

  const mainDishs = [
    {
      id: 1,
      image: "../../assets/imageMeals.svg",
      name: "Produto 1",
      price: 10.0,
    },
    { id: 2, image: "url-to-image2", name: "Produto 2", price: 20.0 },
    { id: 3, image: "url-to-image3", name: "Produto 3", price: 30.0 },
    { id: 4, image: "url-to-image4", name: "Produto 3", price: 40.0 },
    { id: 5, image: "url-to-image5", name: "Produto 3", price: 50.0 },
    { id: 6, image: "url-to-image6", name: "Produto 3", price: 60.0 },
  ];
  return (
    <>
      <Header />
      <Container>
        <Banner>
          <img src={imgBanner} />
          <div className="titleBanner">
            <h2>Sabores inigualáveis</h2>
            <span>Sinta o cuidado do preparo com igredientes</span>
          </div>
        </Banner>
        <Title>Refeições</Title>
        <Slide products={products} />
        <Title>Pratos Principais</Title>
        <Slide products={mainDishs} />
      </Container>
    </>
  );
}
