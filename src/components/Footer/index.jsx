import { Container } from "./styled";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <Container>
      <div className="ctt">
        <span>
          Desenvolvido por:{" "}
          <a
            href="https://www.linkedin.com/in/guilhermeecarvalho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guilherme Carvalho
          </a>
        </span>
        <span>
          <a
            href="https://github.com/Guilhermecarvalho11"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
        <span>© 2023 - Todos os direitos reservados.</span>
      </div>
      <Logo fontSize={"15px"} showImage={true} location={"footer"} />
    </Container>
  );
}
