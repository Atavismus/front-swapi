import { Header } from "@codegouvfr/react-dsfr/Header";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { routes } from '../../config/routes';
import { RESOURCES_FR } from '../../config/constants';

interface Link {
  linkProps: {
    to: string,
    target: string
  },
  text: string,
  isActive: boolean
}

const Topbar = () => {
  const links: Link[] = [];
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
        text: RESOURCES_FR[path.slice(1)],
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
