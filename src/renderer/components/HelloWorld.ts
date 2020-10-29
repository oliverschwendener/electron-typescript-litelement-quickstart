import { html, LitElement, internalProperty, css } from "lit-element";

export class HelloWorld extends LitElement {
    @internalProperty() private message = "Hello World!";

    static get styles() {
        return css`
            :host {
                font-size: 24px;
            }
        `;
    }

    render() {
        return html`<p>${this.message}</p>`;
    }
}
