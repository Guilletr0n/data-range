import { LitElement } from "lit";
export declare class DateRange extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    getDaysInMonth(m: number, y: number): number;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'date-range': DateRange;
    }
}
//# sourceMappingURL=date-range.d.ts.map