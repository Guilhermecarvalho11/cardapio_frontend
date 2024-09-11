import { useAuth } from "../../hooks/auth";
import { useFilterProducts } from "../../hooks/filterProducts";
import { Swiper, SwiperSlide } from "swiper/react";

import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react";

import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { SingOut } from "../../components/ButtonSignOut";
import { Footer } from "../../components/Footer";
import { CustomNavigation } from "../../components/CustomNavigation";
import { Card } from "../../components/Cards";

import { Container, Content, Div, List, Slid } from "./styles";

export function Menu() {
  const { signOut } = useAuth();
  const { user } = useAuth();
  const role = user.role.includes("admin");
  const { searchTerm, setSearchTerm, filteredProducts } = useFilterProducts();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Container>
        <Content>
          <LinkButton title="Menu" to="/" icons={X} />
        </Content>
        <Div>
          <Input
            primary
            icon={MagnifyingGlassPlus}
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Busque por pratos ou ingredientes"
          />
          <List>
            {role && (
              <li>
                <LinkButton title="Novo Prato" to="/newdishes" />
              </li>
            )}
            <li>
              <SingOut title="Sair" onClick={signOut} />
            </li>
          </List>
          <Slid>
            {searchTerm && (
              <Swiper
                spaceBetween={250}
                slidesPerView={2}
                pagination={{ clickable: true }}
                navigation={CustomNavigation}
                style={{ width: "100%", height: "auto" }}
                loop={false}
              >
                {filteredProducts.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <Card
                        icon={product.icon}
                        image_url={product.image_url}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </Slid>
        </Div>
      </Container>
      <Footer />
    </>
  );
}
