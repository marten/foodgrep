import { sample } from "lodash";

export const NoFood: React.FC = () => {
  return <div>Niks gevonden. {sample(MESSAGES)}</div>;
};

const MESSAGES = [
  "Dan maar meteen een monatoetje?",
  "Cheeky nandos?",
  "10 perenijsjes is ook avondeten",
  "Zullen we naar de Hasret?",
  "Tijd om dat blik soep achter uit je kast te halen.",
  "Tosti?",
  "Dat wordt pannenkoeken bakken",
];
