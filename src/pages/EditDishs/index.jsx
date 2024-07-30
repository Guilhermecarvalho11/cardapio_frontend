import { AdminPower } from "../../components/AdminPower";

export function EditDish() {
  const handleSave = () => {
    console.log("fui clicado");
  };

  return (
    <AdminPower
      title="Editar Prato"
      namePlaceholder="Ex: Salada de Frutas"
      categoryOptions={[
        { value: "Sobremesa", label: "Sobremesa" },
        { value: "Bebidas", label: "Bebidas" },
      ]}
      ingredientsPlaceholder=""
      pricePlaceholder="R$ 40,00"
      descriptionPlaceholder="Atualize a descrição do prato, ingredientes e composição"
      showDeleteButton={true}
      titleButton="Salvar alterações"
      onSave={handleSave}
    />
  );
}
