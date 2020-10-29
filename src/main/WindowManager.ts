import { BrowserWindow } from "electron";
import { join } from "path";

export class WindowManager {
    private window: BrowserWindow | null;

    constructor() {
        this.window = null;
    }

    public createWindow() {
        this.window = new BrowserWindow();
        this.window.loadFile(join(__dirname, "..", "views", "main.html"));
    }

    public closeAndDestroyWindow() {
        if (this.window && !this.window.isDestroyed()) {
            this.window.close();
            this.window.destroy();
            this.window = null;
        }
    }
}
