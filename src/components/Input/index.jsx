/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Input({ id, type, value, placeholder, icon: Icon, onChange }) {
  return (
    <Container>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        icon={Icon}
        onChange={onChange}
      />
    </Container>
  );
}
