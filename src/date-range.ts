import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('date-range')
export class DateRange extends LitElement {
  static override styles = css`
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
  override render() {
    return html `
      <div id="datePicker"></div>
      <input id="startDate" type="date" @click=${this._onClick}/>
      <input id="endDate" type="date"/>
    `
  }

  getDaysInMonth(m:number, y:number):number {
    return m===2 ? y & 3 || !(y%25) && y & 15 ? 28 : 29 : 30 + (m+(m>>3)&1);
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('count-changed'));
    console.log('date range')
    console.log(this.getDaysInMonth(9,22))
    const days:number = this.getDaysInMonth(9,22);
    const container:HTMLDivElement  = this.shadowRoot?.querySelector('#datePicker') as HTMLDivElement || null;
    
    for (let i:number = 0; i < days; i ++) {
      const day:HTMLSpanElement = document.createElement('span');
      const textNode:Text = document.createTextNode(i);
      day.appendChild(textNode);
      container.appendChild(day)
    }

  }

}

declare global {
  interface HTMLElementTagNameMap {
    'date-range': DateRange;
  }
}