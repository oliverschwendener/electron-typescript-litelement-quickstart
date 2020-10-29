import { property, LitElement, html } from "lit-element";

export class Counter extends LitElement {
    @property({ type: Number }) public counter = 0;

    public render() {
        return html`<div>${this.counter}</div>`;
    }
}
