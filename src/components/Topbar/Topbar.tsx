// import styles from './Topbar.module.scss';
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { routes } from '../../config/routes';

const Topbar = () => {
  const links = [];
  routes
    .filter(
      (element) => !element.path.includes(':id') && element.path !== '/'
    )
    .forEach(route => {
      const path = route.path;
      links.push({
        linkProps: {
          to: path,
          target: '_self'
        },
        text: path.slice(1).toUpperCase(),
        isActive: location.pathname === path
      });
    });
  return (
    <Header
      brandTop={<>TEST<br />NON OFFICIEL</>}
      homeLinkProps={{
        to: "/",
        title: "Accueil - Ceci n'est qu'un test non destiné au public du design système des sites de l'état français"
      }}
      id="fr-header-simple-header-with-service-title-and-tagline"
      serviceTagline="Test non destiné au public du design système des sites de l'état français"
      serviceTitle={<>Viewer de SWAPI, l'API Star Wars{' '}<Badge as="span" noIcon severity="warning">Closed Alpha</Badge></>}
      navigation={
        links
      }
    />
  );
};

export { Topbar };
