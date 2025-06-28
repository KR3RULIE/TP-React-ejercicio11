import ListaNoticias from "./ListaNoticias";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  return (
    <>
      <section className="container bg-info my-4 p-3 rounded">
        <Form>
          <Form.Group className="d-flex justify-content-between">
            <Form.Label className="fw-bold me-3 w-50">
              Buscar por categoria:
            </Form.Label>
            <Form.Select>
              <option value="">-- Elige una opción --</option>
              <option value="top">Top</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="science">Science</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="world">World</option>
              <option value="politics">Politics</option>
              <option value="environment">Environment</option>
              <option value="tourism">Tourism</option>
              <option value="education">Education</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </section>
      <ListaNoticias></ListaNoticias>
    </>
  );
};

export default Formulario;
