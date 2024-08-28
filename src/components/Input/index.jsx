/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Container, IconWrapper } from "./style";

export function Input({
  id,
  name,
  type,
  value,
  placeholder,
  icon: Icon,
  onChange,
}) {
  const fileInputRef = useRef(null);
  return (
    <Container>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        icon={Icon}
        onChange={onChange}
        ref={type === "file" ? fileInputRef : null}
      />
    </Container>
  );
}
