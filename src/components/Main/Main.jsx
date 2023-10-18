import { Cards } from "./Cards.jsx";
export const Main = ({ data }) => {
  return (
    <>
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "95%",
          margin: "20px auto",
          gap: "10px",
        }}
      >
        {data.map((data, i) => {
          return <Cards key={i} data={data} />;
        })}
      </main>
    </>
  );
};
