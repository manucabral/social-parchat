import { ThreeBounce } from "better-react-spinkit"

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "90vh" }}>
      <ThreeBounce color="violet" size={50} />
    </center>
  )
}

export default Loading
