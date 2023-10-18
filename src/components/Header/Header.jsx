import { Menubar } from "primereact/menubar";
import pokeball from "../../assets/Pokeball.webp";
export const Header = () => {
  const items = [
    {
      label: "POKEMON",
    },
  ];

  const start = (
    <img alt="logo" src={pokeball} height="40" className="mr-2"></img>
  );
  return (
    <header className="card">
      <Menubar model={items} start={start} style={{ fontWeight: "bold" }} />
    </header>
  );
};
