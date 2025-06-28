import { Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <section className="container bg-info my-4">
      <Form>
        <Form.Group className="d-flex">
          <Form.Label>Buscar por categoria</Form.Label>
          <Form.Select>
            <option value="">-- Elige una opción --</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Formulario;
