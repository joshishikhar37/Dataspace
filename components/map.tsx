import { GoogleMapsEmbed } from "@next/third-parties/google";

function Map() {
  return (
    <GoogleMapsEmbed
      apiKey="AIzaSyCbBnz_FHCJyL6Y6WwJ2m1CDj9K24Ij9Wc"
      width={900}
      height={300}
      mode="place"
      q=" Sastra+Network+Solution+Inc ,Putalisadak, Kathmandu, NP"
    />
  );
}
export default Map;