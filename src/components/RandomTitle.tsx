import "../styles/global.css"
import { getRandomTitle } from "./generateRandomTitle";

export function RandTitle() {
    return (<h1 className="changing-title font-rubik color-primary">{getRandomTitle()}</h1>);
}
