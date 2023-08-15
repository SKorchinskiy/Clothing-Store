import { LoaderContainer } from "./loader.styles";

const { RotatingLines } = require("react-loader-spinner");

export default function Loader() {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderContainer>
  );
}
