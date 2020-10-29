import { css, html, LitElement, property } from "lit-element";

export class Button extends LitElement {
    @property({ type: String }) label = "";

    static get styles() {
        return css`
            .button {
                background-color: var(--grey-dark);
                color: var(--white);
                border: 2px solid var(--grey-dark);
                padding: 8px 16px;
                transition: var(--transition-all);
                border-radius: 2px;
                cursor: pointer;
            }

            .button:focus,
            .button:active {
                outline: none;
            }

            .button:hover {
                background-color: var(--grey);
                border: 2px solid var(--grey);
            }

            .button:active {
                border: 2px solid var(--grey-dark);
            }
        `;
    }

    public render() {
        return html`<button class="button">${this.label}</button>`;
    }
}
