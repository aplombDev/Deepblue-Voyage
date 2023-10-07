import { Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export const rightSection = () => {
  const viewer = new Viewer("cesiumContainer");
  return viewer();
};
