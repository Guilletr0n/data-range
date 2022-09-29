var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
let DateRange = class DateRange extends LitElement {
    render() {
        return html `
      <div id="datePicker"></div>
      <input id="startDate" type="date" @click=${this._onClick}/>
      <input id="endDate" type="date"/>
    `;
    }
    getDaysInMonth(m, y) {
        return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
    }
    _onClick() {
        var _a;
        this.dispatchEvent(new CustomEvent('count-changed'));
        console.log('date range');
        console.log(this.getDaysInMonth(9, 22));
        const days = this.getDaysInMonth(9, 22);
        const container = ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#datePicker')) || null;
        for (let i = 0; i < days; i++) {
            const day = document.createElement('span');
            const textNode = document.createTextNode(i);
            day.appendChild(textNode);
            container.appendChild(day);
        }
    }
};
DateRange.styles = css `
    :host {
      border: 3px solid black;
    }
    #startDate {
      border: 3px solid red;
    }
    input::-webkit-calendar-picker-indicator {
      display: none;
    }
    #datePicker {
      width: 400px;
      height: 400px;
      border:1px solid;
      position: absolute;
      bottom: 0;
    }
  `;
DateRange = __decorate([
    customElement('date-range')
], DateRange);
export { DateRange };
//# sourceMappingURL=date-range.js.map