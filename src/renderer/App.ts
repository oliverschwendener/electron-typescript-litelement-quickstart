import { html, LitElement, css, internalProperty } from "lit-element";

export class App extends LitElement {
    @internalProperty() private counter = 0;

    static get styles() {
        return css`
            :host {
                --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
                    "Segoe UI Emoji", "Segoe UI Symbol";

                --black: #2f3640;
                --white: #f5f6fa;
                --grey: #7f8fa6;
                --grey-dark: #718093;

                --transition-all: all 150ms ease-in-out;

                display: block;

                font-family: var(--font-family);
                background-color: var(--black);
                color: var(--white);
            }

            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                width: 100%;
            }

            .counter-container {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .counter,
            .button {
                padding: 0 8px;
            }
        `;
    }

    public render() {
        return html`<div class="container">
            <c-hello-world class="hello-world"></c-hello-world>
            <div class="counter-container">
                <c-counter
                    class="counter"
                    counter="${this.counter}"
                ></c-counter>
                <c-button
                    class="button"
                    @click="${this.onButtonClick}"
                    label="Click me!"
                ></c-button>
            </div>
        </div>`;
    }

    private onButtonClick() {
        this.counter++;
    }
}
