export default function loading() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.3)",
        position: "relative",
        width: "100%",
        height: "50vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          padding: "10px",
        }}
      >
        Loading......
      </div>
    </div>
  );
}
