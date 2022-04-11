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

interface IProps {}
export const Globe = (props: IProps): ReactElement => {
  const globeEl = useRef();
  const theme = useTheme() as TypeAndUserAgent;
  const [containerWidth, setContainerWidth] = useState(0);
  const polygonsMaterial = new THREE.MeshLambertMaterial({
    color: theme.dsl.palette.primary.purple[600],
    side: THREE.DoubleSide,
  });
  const landPolygons: any = (
    topojson.feature(
      land110m as unknown as Topology,
      land110m.objects.land as GeometryObject
    ) as FeatureCollection<Geometry, {}>
  ).features;

  useEffect(() => {
    const curr = globeEl.current as any;
    const altitude = theme.userAgent?.isMobile ? 4 : 3;
    if (curr) {
      curr.controls().autoRotate = true;
      curr.controls().autoRotateSpeed = 0.7;
      curr.pointOfView({ altitude }, 5000);
    }
  }, [globeEl, theme.userAgent?.isMobile]);

  return (
    <Container
      ref={(refEl) => {
        if (refEl) {
          setContainerWidth(Math.min(refEl.offsetWidth, refEl.offsetHeight));
        }
      }}
    >
      {/* <GlobeComp
        {...{
          globeImageUrl:
            "https://unpkg.com/three-globe@2.24.4/example/img/earth-blue-marble.jpg",
          bumpImageUrl:
            "https://unpkg.com/three-globe@2.24.4/example/img/earth-topology.png",
          //   backgroundImageUrl:
          //     "//unpkg.com/three-globe/example/img/night-sky.png",
        }}
      /> */}
      <GlobeComp
        ref={globeEl}
        width={containerWidth}
        globeImageUrl={images.plainDeepBlue}
        backgroundColor="rgba(0,0,0,0)"
        showGlobe={true}
        showAtmosphere={false}
        polygonsData={landPolygons}
        polygonAltitude={() => 0.05}
        polygonStrokeColor={() =>
          theme.dsl.hexToRgba(theme.dsl.palette.secondary.neon[500], 30)
        }
        polygonCapMaterial={polygonsMaterial}
        polygonSideColor={() => "rgba(0,0,0,0)"}
      />
    </Container>
  );
};

Globe.displayName = "Globe";

Globe.defaultProps = {};
