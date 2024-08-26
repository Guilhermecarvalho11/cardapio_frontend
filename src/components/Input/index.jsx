/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Input({
  id,
  name,
  type,
  value,
  placeholder,
  icon: Icon,
  onChange,
}) {
  return (
    <Container>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        icon={Icon}
        onChange={onChange}
      />
    </Container>
  );
}
