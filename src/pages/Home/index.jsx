import { useItensMenu } from "../../hooks/itensMenu";
import { Header } from "../../components/Header";
import { Banner, Container, Title } from "./styles";
import imgBanner from "../../assets/imgBanner.svg";
// import imgMeals from "../../assets/imageMeals.svg";
import { Slide } from "../../components/Slide";
import { Footer } from "../../components/Footer";

export function Home() {
  const { itensMenu } = useItensMenu();

  // const mainDishs = [
  //   {
  //     id: 1,
  //     image: imgMeals,
  //     name: "Produto 1",
  //     price: 10.0,
  //   },
  //   { id: 2, image: imgMeals, name: "Produto 2", price: 20.0 },
  //   { id: 3, image: imgMeals, name: "Produto 3", price: 30.0 },
  //   { id: 4, image: "url-to-image4", name: "Produto 4", price: 40.0 },
  //   { id: 5, image: "url-to-image5", name: "Produto 5", price: 50.0 },
  //   { id: 6, image: "url-to-image6", name: "Produto 6", price: 60.0 },
  // ];
  return (
    <>
      <Header />
      <Container>
        <Banner>
          <img src={imgBanner} alt="Banner" />
          <div className="titleBanner">
            <h2>Sabores inigualáveis</h2>
            <span>Sinta o cuidado do preparo com ingredientes</span>
          </div>
        </Banner>
        <Title>Refeições</Title>
        <Slide products={itensMenu} />
        <Title>Pratos Principais</Title>
        {/* <Slide products={mainDishs} /> */}
      </Container>
      <Footer />
    </>
  );
}
