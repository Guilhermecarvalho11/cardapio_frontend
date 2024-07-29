import { AdminPower } from "../../components/AdminPower";

export function NewDishs() {
  const handleSave = () => {
    // Lógica para salvar o novo prato
  };

  return (
    <AdminPower
      title="Novo Prato"
      namePlaceholder="Ex: Salada Ceasar"
      categoryOptions={[
        { value: "Refeição", label: "Refeição" },
        { value: "pratos Principais", label: "pratos Principais" },
      ]}
      ingredientsPlaceholder=""
      pricePlaceholder="R$ 00,00"
      descriptionPlaceholder="Fale brevemente sobre o prato, seus ingredientes e composição"
      showDeleteButton={false}
      titleButton="Salvar alterações"
      onSave={handleSave}
    />
  );
}
