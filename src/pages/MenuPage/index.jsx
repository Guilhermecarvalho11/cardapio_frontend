import { X } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { SingOut } from "../../components/ButtonSignOut";

import { Container, Content, Div, List } from "./styles";
import { Footer } from "../../components/Footer";

import { useFilterProducts } from "../../hooks/filterProducts";
import { Card } from "../../components/Cards";

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
          <div>
            {filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <Card
                    icon={product.icon}
                    image_url={product.image_url}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                  />
                </div>
              );
            })}
          </div>
        </Div>
      </Container>
      <Footer />
    </>
  );
}
