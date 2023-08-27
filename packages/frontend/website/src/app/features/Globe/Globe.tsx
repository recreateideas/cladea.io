import { ReactElement, memo, useEffect, useRef, useState } from "react";
import GlobeCore from "react-globe.gl";
import { images, ThemeAndUserAgent } from "src/app/ui-core";
import { useTheme } from "styled-components";
import * as topojson from "topojson-client";
import { land110m } from "src/data";
import { Container, RingsContainer } from "./styledComponents";
import { GeometryObject, Topology } from "topojson-specification";
import { FeatureCollection, Geometry } from "geojson";
import { selectors, useSelector } from "src/redux";
// import { Rings } from "react-loader-spinner";
// import _ from "lodash";

// const places = [
//   { name: "france", lat: 46.227638, lng: 2.213749, hits: 12, color: "white" },
//   {
//     name: "spain",
//     lat: 40.463667,
//     lng: -3.7492199999999998,
//     hits: 200,
//   },
//   {
//     name: "saudi arabia",
//     lat: 23.885942,
//     lng: 45.079162,
//     hits: 1,
//   },
//   {
//     name: "kazakhstan",
//     lat: 48.019573,
//     lng: 66.923684,
//     hits: 100,
//   },
// ];

interface ContainerSize {
  width: number;
  height: number;
}
interface IProps {}
export const Globe = memo((props: IProps): ReactElement => {
  const globeEl = useRef();
  const theme = useTheme() as ThemeAndUserAgent;
  const { isMobile } = theme.userAgent || {};
  const { common: commonSelectors } = selectors;
  const { current, global } = useSelector(commonSelectors.usageData);
  // console.log(global);
  const labels: any[] = [];
  global.points?.forEach((p: any) => {
    const samePlacePointIdx = labels.findIndex(
      (a: any) => a.city === p.city && a.country_name === p.country_name
    );
    if (samePlacePointIdx !== -1) {
      labels[samePlacePointIdx].hits = labels[samePlacePointIdx].hits + p.hits;
    } else {
      labels.push(p);
    }
  }, []);
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
  console.log({ current, global });

  useEffect(() => {
    const curr = globeEl.current as any;
    const altitude = isMobile ? 2 : 3;
    if (curr && current.latitude) {
      curr.controls().enableZoom = false;
      curr.controls().autoRotate = true;
      curr.controls().autoRotateSpeed = 0.9;
      curr.pointOfView(
        { altitude, lng: current.longitude, lat: current.latitude },
        3000
      );
    }
  }, [globeEl, isMobile, current.latitude, current.longitude]);
  const heightRatio = Math.max(0.1, 1 / global.max?.hits);
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
      <RingsContainer>
        <div className="rings-wrapper">
          {/* <Rings
            height="300"
            width="300"
            color={theme.dsl.palette.primary.purple[800]}
            radius="30"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          /> */}
          <div className="rings-label">Loading Visits...</div>
        </div>
      </RingsContainer>
      {!!current.city ? (
        <GlobeCore
          ref={globeEl}
          height={isMobile ? containerSize.width : containerSize.height}
          width={containerSize.width}
          globeImageUrl={images.plainDarkBlue}
          backgroundColor="rgba(0,0,0,0)"
          showGlobe={true}
          showAtmosphere={true}
          showGraticules={false}
          atmosphereAltitude={0.15}
          atmosphereColor={theme.dsl.palette.tertiary.blue[500]}
          polygonsData={landPolygons}
          polygonCapColor={() => theme.dsl.palette.primary.purple[800]}
          polygonSideColor={() =>
            theme.dsl.hexToRgba(theme.dsl.palette.secondary.neon[500], 5)
          }
          onGlobeReady={() => {
            // console.log("Globe ready");
          }}
          // label
          labelsData={[originRing, ...labels]}
          labelText={(hitPoint: any) => {
            return hitPoint.city
              ? `${hitPoint.city || "c"}, ${hitPoint.country_name}: ${
                  hitPoint.hits
                }`
              : "You";
          }}
          labelAltitude={(hitPoint: any) =>
            hitPoint.city ? Math.random() : 0.02
          }
          labelSize={isMobile ? 2 : 2}
          labelDotRadius={(hitPoint: any) => (hitPoint.city ? 0 : 1)} // "Only you has a dot"
          labelColor={(hitPoint: any) =>
            !hitPoint.city ||
            (hitPoint.city === current.city &&
              hitPoint.country_name === current.country_name)
              ? theme.dsl.palette.secondary.yellow[500]
              : theme.dsl.palette.tertiary.pink[900]
          }
          // rings
          ringAltitude={0.02}
          ringsData={[originRing]}
          ringResolution={256}
          ringMaxRadius={10}
          ringPropagationSpeed={7}
          ringColor={() => theme.dsl.palette.secondary.yellow[500]}
          ringRepeatPeriod={700}
          // bars
          // hexBinPointsData={[...global.points, ...places]}
          hexBinPointsData={global.points}
          // hexLabel={() => "label"}
          hexBinPointWeight="hits"
          hexBinResolution={3}
          hexTopColor={() =>
            theme.dsl.hexToRgba(theme.dsl.palette.tertiary.pink[500], 100)
          }
          hexSideColor={(d) =>
            theme.dsl.hexToRgba(theme.dsl.palette.secondary.neon[500], 80)
          }
          hexAltitude={(d) => {
            const curr = (d.sumWeight * heightRatio) / 2;
            const min = Math.max(0.2, curr);
            const max = Math.min(curr, 1);
            return Math.min(min, max);
          }}
          enablePointerInteraction={false}
        />
      ) : (
        <div />
      )}
    </Container>
  );
});
