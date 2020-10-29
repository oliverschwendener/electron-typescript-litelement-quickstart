import { App } from "./App";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { HelloWorld } from "./components/HelloWorld";

customElements.define("c-app", App);
customElements.define("c-hello-world", HelloWorld);
customElements.define("c-counter", Counter);
customElements.define("c-button", Button);
