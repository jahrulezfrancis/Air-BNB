import UserContext from "./ContextProvider";
import { useContext } from "react";

export function ContextConsumer() {
    const { name } = useContext(UserContext)
    const { setName } = useContext(UserContext)
    console.log(name);
    return (
        <div>
            <h1>Consumers out here</h1>
            <h2>{name}</h2>
            <button onClick={() => setName('Jhonzphag')}>Change</button>
        </div>
    )
}