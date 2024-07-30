import PropTypes from "prop-types";
import { MdOutlineFileUpload } from "react-icons/md";
import { Header } from "../../components/Header";
import { Footer } from "../Footer";
import { LinkButton } from "../../components/LinkButton";
import { Input } from "../../components/Input";
import { MdNavigateBefore } from "react-icons/md";
import { Container } from "./styled";
import { Button } from "../../components/Button";
import { ButtonIMG } from "../ButtonIMG";

export function AdminPower({
  title,
  namePlaceholder,
  categoryOptions,
  ingredientsPlaceholder,
  pricePlaceholder,
  descriptionPlaceholder,
  showDeleteButton,
  titleButton,
  onSave,
}) {
  return (
    <>
      <Header />
      <Container>
        <LinkButton icons={MdNavigateBefore} title="Voltar" to="/" />
        <h1>{title}</h1>
        <form>
          <>
            <ButtonIMG icons={MdOutlineFileUpload} />
          </>
          <>
            <label htmlFor="name">Name</label>
            <Input id="name" type="text" placeholder={namePlaceholder} />
          </>
          <>
            <label htmlFor="category">Categoria</label>
            <select id="category" name="Categoria">
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </>
          <>
            <label htmlFor="ingredients">Ingredientes</label>
            <Input
              id="ingredients"
              type="text"
              placeholder={ingredientsPlaceholder}
            />
          </>
          <>
            <label htmlFor="price">Preço</label>
            <Input id="price" type="number" placeholder={pricePlaceholder} />
          </>
          <>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder={descriptionPlaceholder}
            ></textarea>
          </>
          <div className="buttons">
            {showDeleteButton && <button>Exluir Prato</button>}
            <Button title={titleButton} onClick={onSave} />
          </div>
        </form>
      </Container>
      <Footer />
    </>
  );
}

AdminPower.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  namePlaceholder: PropTypes.string.isRequired,
  categoryOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  ingredientsPlaceholder: PropTypes.string.isRequired,
  pricePlaceholder: PropTypes.string.isRequired,
  descriptionPlaceholder: PropTypes.string.isRequired,
  showDeleteButton: PropTypes.bool,
  titleButton: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};
