/**
 * @jest-environment jsdom
 */
import { TestScheduler } from "@jest/core";
import { pushToHistory } from "../scripts/router.js"

describe("test pushToHistor", () => {

    test("seetings", () => {
        pushToHistory("settings",0);
        expect(history.state.page).toBe("settings");
        expect(history.length).toBe(2);
    });

    test("entry", () => {
        pushToHistory("entry",2);
        expect(history.state.page).toBe("entry2");
        expect(history.length).toBe(3);
    });

    test("default state", () => {
        pushToHistory("",0);
        expect(history.state.page).toBe(undefined);
        expect(history.length).toBe(4);
    });

});