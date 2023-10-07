import EarthBg from "../../../assets/EarthBg.mp4";
export const RightSection = () => {
  return (
    <div className="section">
      <video src={EarthBg} autoPlay loop />
    </div>
  );
};
