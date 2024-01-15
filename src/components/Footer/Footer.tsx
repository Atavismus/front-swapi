import { Footer as FooterDSFR } from "@codegouvfr/react-dsfr/Footer";

const Footer = () => {
  return (
    <FooterDSFR
      contentDescription="Viewer de SWAPI, l'API Star Wars (Closed Alpha). Test non destiné au public du design système des sites de l'état français."
      accessibility="non compliant"
      license="Copyleft 2024 - Betathomas - DUNE > SW ; )"
    />
  );
};

export { Footer };
