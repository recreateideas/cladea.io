import { ReactElement } from "react";
import { Container } from "./styledComponents";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

interface IProps {}
export const WorldMap = (props: IProps): ReactElement => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  return (
    <Container className="world-map">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </Container>
  );
};

WorldMap.displayName = "WorldMap";

WorldMap.defaultProps = {};
