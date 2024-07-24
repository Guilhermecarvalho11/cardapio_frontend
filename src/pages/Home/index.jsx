import { Header } from "../../components/Header";
import { Banner, Container } from "./styles";
import imgBanner from "../../assets/imgBanner.svg";

export function Home() {
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
      </Container>
    </>
  );
}
