import { App } from "electron";
import { WindowManager } from "./WindowManager";

export class MainApplication {
    private readonly windowManager: WindowManager;

    constructor(private readonly app: App) {
        this.windowManager = new WindowManager();

        this.registerAppEvents();
    }

    private registerAppEvents() {
        this.app.on("ready", () => this.start());
        this.app.on("window-all-closed", () => this.quit());
    }

    private start() {
        this.windowManager.createWindow();
    }

    private quit() {
        this.windowManager.closeAndDestroyWindow();
        this.app.quit();
    }
}
