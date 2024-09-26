import { Header } from "../../components/Header";
import { Banner, Container, Title } from "./styles";
import { Slide } from "../../components/Slide";
import { Footer } from "../../components/Footer";
import { useFilterProducts } from "../../hooks/filterProducts";
import { useFavorites } from "../../hooks/auth";
import { Logo } from "../../components/Logo";

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
          <Logo showImage={true} location={"banner"} />
          <div className="titleBanner">
            <h2>Simpsons Snack</h2>
            <span>
              Hambúrgueres, Cachorro-Quente e Coxinhas. O sabor de Springfield !
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
