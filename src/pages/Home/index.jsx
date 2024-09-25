import { Header } from "../../components/Header";
import { Banner, Container, Title } from "./styles";
import imgBanner from "../../assets/imgBanner.svg";
import { Slide } from "../../components/Slide";
import { Footer } from "../../components/Footer";
import { useFilterProducts } from "../../hooks/filterProducts";
import { useFavorites } from "../../hooks/auth";

export function Home() {
  const { filteredProducts, searchTerm, setSearchTerm } = useFilterProducts();
  const { favorites } = useFavorites();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header onChange={handleSearchChange} value={searchTerm} />
      <Container>
        <Banner>
          <div className="svg">
            <img src={imgBanner} alt="Banner" />
          </div>
          <div className="titleBanner">
            <h2>Sabores inigualáveis</h2>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </Banner>
        {filteredProducts.length > 0 ? (
          <>
            <Title> Refeição</Title>
            <Slide
              products={filteredProducts.filter(
                (products) => products.category === "Refeição"
              )}
            />
          </>
        ) : (
          <span>{""}</span>
        )}
        {filteredProducts.length > 0 ? (
          <>
            <Title>Bebidas</Title>
            <Slide
              products={filteredProducts.filter(
                (products) => products.category === "Bebidas"
              )}
            />
          </>
        ) : (
          <span>{""}</span>
        )}
        {favorites.length > 0 ? (
          <>
            <Title>Favoritos</Title>

            <Slide products={favorites} />
          </>
        ) : (
          <span>{""}</span>
        )}
      </Container>
      <Footer />
    </>
  );
}
