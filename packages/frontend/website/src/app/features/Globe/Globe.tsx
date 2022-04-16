import { ReactElement, useEffect, useRef, useState } from "react";
import GlobeComp from "react-globe.gl";
import { images, TypeAndUserAgent } from "src/app/ui-core";
import { useTheme } from "styled-components";
import * as topojson from "topojson-client";
import { land110m } from "src/data";
import { Container } from "./styledComponents";
import { GeometryObject, Topology } from "topojson-specification";
import { FeatureCollection, Geometry } from "geojson";
import { selectors, useSelector } from "src/redux";

const places = [
  { name: "france", lat: 46.227638, lng: 2.213749, size: 120, color: "white" },
  {
    name: "spain",
    lat: 40.463667,
    lng: -3.7492199999999998,
    size: 200,
    color: "white",
  },
  {
    name: "saudi arabia",
    lat: 23.885942,
    lng: 45.079162,
    size: 1000,
    color: "white",
  },
  {
    name: "kazakhstan",
    lat: 48.019573,
    lng: 66.923684,
    size: 334,
    color: "white",
  },
];

interface ContainerSize {
  width: number;
  height: number;
}
interface IProps {}
export const Globe = (props: IProps): ReactElement => {
  const globeEl = useRef();
  const theme = useTheme() as TypeAndUserAgent;
  const { isMobile } = theme.userAgent || {};
  const { common: commonSelectors } = selectors;
  const { current } = useSelector(commonSelectors.usageData) || {
    current: {},
    global: {},
  };

  const [containerSize, setContainerSize] = useState<ContainerSize>(
    {} as ContainerSize
  );

  const landPolygons: any = (
    topojson.feature(
      land110m as unknown as Topology,
      land110m.objects.land as GeometryObject
    ) as FeatureCollection<Geometry, {}>
  ).features;

  const originRing = {
    lat: current.latitude,
    lng: current.longitude,
  };

  useEffect(() => {
    const curr = globeEl.current as any;
    const altitude = isMobile ? 2 : 3;
    if (curr && current.latitude) {
      curr.controls().enableZoom = false;
      curr.controls().autoRotate = true;
      curr.controls().autoRotateSpeed = 0.9;
      curr.pointOfView(
        { altitude, lng: current.longitude, lat: current.latitude },
        5000
      );
    }
  }, [globeEl, isMobile, current.latitude, current.longitude]);
  console.log(current);
  return (
    <Container
      className="globe-container"
      ref={(refEl) => {
        if (
          refEl &&
          (containerSize.width !== refEl.offsetWidth ||
            containerSize.height !== refEl.offsetHeight)
        ) {
          setContainerSize({
            width: refEl.offsetWidth,
            height: refEl.offsetHeight,
          });
        }
      }}
    >
      {!!current.city ? (
        <GlobeComp
          ref={globeEl}
          height={isMobile ? containerSize.width : containerSize.height}
          width={containerSize.width}
          globeImageUrl={images.plainDeepBlue}
          backgroundColor="rgba(0,0,0,0)"
          showGlobe={true}
          showAtmosphere={true}
          showGraticules={false}
          atmosphereAltitude={0.15}
          atmosphereColor={theme.dsl.palette.tertiary.blue[500]}
          polygonsData={landPolygons}
          polygonCapColor={() => theme.dsl.palette.primary.purple[400]}
          polygonSideColor={() =>
            theme.dsl.hexToRgba(theme.dsl.palette.secondary.neon[500], 5)
          }
          // label
          labelsData={[originRing]}
          labelLabel={() => "You"}
          labelText={() => "You"}
          labelAltitude={0.02}
          labelSize={isMobile ? 3 : 2}
          labelDotRadius={1}
          labelColor={() => theme.dsl.palette.tertiary.pink[900]}
          // rings
          ringAltitude={0.02}
          ringsData={[originRing]}
          ringResolution={256}
          ringMaxRadius={10}
          ringPropagationSpeed={7}
          ringColor={() => theme.dsl.palette.tertiary.pink[900]}
          ringRepeatPeriod={700}
          // bars
          hexBinPointsData={places}
          hexBinPointWeight="size"
          hexBinResolution={3}
          hexTopColor={() =>
            theme.dsl.hexToRgba(theme.dsl.palette.tertiary.pink[500], 100)
          }
          hexSideColor={(d) =>
            theme.dsl.hexToRgba(theme.dsl.palette.secondary.neon[500], 100)
          }
          hexAltitude={(d) => d.sumWeight / 2000}
          enablePointerInteraction={false}
        />
      ) : (
        <div />
      )}
    </Container>
  );
};

Globe.displayName = "Globe";

Globe.defaultProps = {};