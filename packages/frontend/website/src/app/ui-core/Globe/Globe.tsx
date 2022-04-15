import { ReactElement, useEffect, useRef, useState } from "react";
import GlobeComp from "react-globe.gl";
import { images, TypeAndUserAgent } from "src/app/ui-core";
import { useTheme } from "styled-components";
import * as THREE from "three";
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
  const { common: commonSelectors } = selectors;
  const { current } = useSelector(commonSelectors.usageData) || {
    current: {},
    global: {},
  };

  const [containerSize, setContainerSize] = useState<ContainerSize>(
    {} as ContainerSize
  );
  const polygonsMaterial = new THREE.MeshLambertMaterial({
    color: theme.dsl.palette.primary.purple[400],
    side: THREE.DoubleSide,
  });
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
    const altitude = theme.userAgent?.isMobile ? 4 : 3;
    if (curr) {
      const coord = curr.getCoords(current.latitude, current.longitude);
      curr.controls().enablePan = false;
      curr.controls().touches = { ONE: 2, TWO: 2 };
      curr.controls().enableZoom = false;
      curr.controls().autoRotate = true;
      curr.controls().autoRotateSpeed = 0.7;
      curr.controls().object.position.x = coord.x;
      curr.controls().object.position.y = coord.y;
      curr.controls().object.position.z = coord.z;
      console.log(curr.controls().object.position);
      curr.pointOfView({ altitude }, 5000);
    }
  }, [globeEl, theme.userAgent?.isMobile, current.latitude, current.longitude]);

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
      <GlobeComp
        ref={globeEl}
        height={containerSize.height}
        width={containerSize.width}
        globeImageUrl={images.plainDeepBlue}
        backgroundColor="rgba(0,0,0,0)"
        showGlobe={true}
        showAtmosphere={false}
        polygonsData={landPolygons}
        polygonCapMaterial={polygonsMaterial}
        polygonSideColor={() =>
          theme.dsl.hexToRgba(theme.dsl.palette.secondary.neon[500], 5)
        }
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
    </Container>
  );
};

Globe.displayName = "Globe";

Globe.defaultProps = {};
