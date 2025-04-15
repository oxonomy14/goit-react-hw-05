import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "30px auto",
};

const Loader = () => {
  return (
    <>
      <BarLoader
        color="#5f99c9"
        height={4}
        loading={true}
        speedMultiplier={0.5}
        width={465}
        cssOverride={override}
      />
    </>
  );
};

export default Loader;
