/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('my-element')
export class MyElement extends LitElement {

  static override styles = css`
    .container {
      border-style: solid;
      border-radius: 5px;
      border-width: 1px;
      text-align: center;
      font-size: 2em;
    }
    .green {
      background-color: green;
    }
    .red {
      background-color: red;
    }
    .button {
      background-color: blue; 
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1em;
      margin-bottom: 1em;
    }
    input[type=number] {
      font-size: inherit;
      margin: 0.2em;
    }
    p {
      margin: 0;
    }
    table {
      margin-left: auto;
      margin-right: auto;
      text-align: left;
    }
    h1 {
      margin: 0.2em;
    }
  `;

  intervalId: number = 0;
  workoutCounter: number = 0;
  setCounter = 0;
  intervalState: string = 'start';
  intervalRunning: boolean = false;
  backgroundColor: string = 'green';
  beepAudio: HTMLAudioElement;

  @property()
  secondsPassed: number = 3;

  @property()
  message: string = '';

  @property()
  buttonText: string = 'Start';

  @property()
  workoutSec: number;

  @property()
  breakSec: number;

  @property()
  intervals: number;

  @property()
  setBreakSec: number;

  @property()
  sets: number;

  override render() {
    return html`
      <div class="container ${this.backgroundColor}">
        <h1>${this.secondsPassed}</h1>
        <p>${this.message}</p>
        <p>workouts: ${this.workoutCounter} / ${this.intervals}</p>
        <p>sets: ${this.setCounter} / ${this.sets}</p>
        <table class="table">
          <thead>
            <tr></tr>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <label for="workoutSec">workout:</label>
                </td>
                <td>
                  <input id="workoutSec" type="number" size="2" value=${this.workoutSec} @change=${this.onChangeWorkoutSec}>
                  <label for="">sec</label>
                </td>
            </tr>
            <tr>
                <td>
                  <label for="breakSec">break:</label>
                </td>
                <td>
                  <input id="breakSec" type="number" size="2" value=${this.breakSec} @change=${this.onChangeBreakSec}>
                  <label for="">sec</label>
                </td>
            </tr>
            <tr>
              <td>
                <label for="intervals">intervals:</label>
              </td>
              <td>
                <input id="intervals" type="number" size="2" value=${this.intervals} @change=${this.onChangeIntervals}>
              </td>
            </tr>
            <tr>
              <td>
                <label for="setBreakSec">set-break:</label>
              </td>
              <td>
                <input id="setBreakSec" type="number" size="3" value=${this.setBreakSec} @change=${this.onChangeSetBreakSec}>
                <label for="">sec</label>
              </td>
            </tr>
            <tr>
              <td>
                <label for="sets">sets:</label>
              </td>
              <td>
                <input id="sets" type="number" size="2" value=${this.sets} @change=${this.onChangeSets}>
              </td>
            </tr>
          </tbody>
        </table>
        
        
        
        <br>
        <button @click="${this._startInterval}" class="button">${this.buttonText}</button>
        <button @click="${this._resetInterval}" class="button">reset</button>
      </div>
      `;
  }

  constructor() {
    super();
    this.workoutSec = 7;
    this.breakSec = 3;
    this.intervals = 6;
    this.setBreakSec = 120;
    this.sets = 10;
    this.beepAudio = new Audio('./beep.mp3');
  }

  private onChangeWorkoutSec(e: any) {
    this.workoutSec = parseInt(e.target.value);
  }

  private onChangeBreakSec(e: any) {
    this.breakSec = parseInt(e.target.value);
  }

  private onChangeSets(e: any) {
    this.sets = parseInt(e.target.value);
  }

  private onChangeIntervals(e: any) {
    this.intervals = parseInt(e.target.value);
  }

  private onChangeSetBreakSec(e: any) {
    this.setBreakSec = parseInt(e.target.value);
  }

  override connectedCallback(): void {
    super.connectedCallback();
  }

  override disconnectedCallback(): void {
    window.clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  private _startInterval(): void {
    if (this.intervalRunning) {
      this.intervalRunning = false;
      this.buttonText = 'Start';
    } else {
      this.intervalRunning = true;
      this.buttonText = 'Pause';
      if (this.intervalId === 0) {
        this.intervalId = window.setInterval(() => this.intervalController(), 1000);
      }
    }
  }

  private _resetInterval(): void {
    window.clearInterval(this.intervalId);
    this.intervalId = 0;
    this.workoutCounter = 0;
    this.setCounter = 0;
    this.secondsPassed = 3;
    this.buttonText = 'Start'
    this.intervalRunning = false;
    this.backgroundColor = 'green';
    this.intervalState = 'start';
  }

  private beep(): void {
    this.beepAudio.play();
  }

  private intervalController(): void {
    if (this.intervalRunning) {
      this.secondsPassed--;
      console.log(this.secondsPassed.toString());
      if (this.intervalState === 'start' && this.secondsPassed === 0) {
        this.secondsPassed = this.workoutSec;
        this.intervalState = 'workout';
        this.backgroundColor = 'red';
        console.log('workout starts');
        this.message = 'workout';
        this.beep();
      } else if (this.intervalState === 'workout') {
        if (this.secondsPassed === 0) {
          this.secondsPassed = this.breakSec;
          this.intervalState = 'workoutBreak';
          this.backgroundColor = 'green';
          console.log("workout break starts");
          this.beep();
          this.message = 'break';
        }
      } else if (this.intervalState === 'workoutBreak') {
        if (this.secondsPassed === 0) {
          this.workoutCounter++;
          if (this.workoutCounter === this.intervals) {
            this.secondsPassed = this.setBreakSec;
            this.workoutCounter = 0;
            this.intervalState = 'setBreak';
            this.backgroundColor = 'green';
            console.log("set break starts");
            this.message = 'set break';
            this.beep();
          } else {
            this.secondsPassed = this.workoutSec;
            this.intervalState = 'workout';
            this.backgroundColor = 'red';
            console.log("workout starts");
            this.message = 'workout';
            this.beep();
          }
        }
      } else if (this.intervalState === 'setBreak') {
        if (this.secondsPassed === 0) {
          this.setCounter++;
          if (this.setCounter === this.sets) {
            console.log('finished');
            window.clearInterval(this.intervalId);
            this.intervalId = 0;
            this.message = 'finished';
            this.backgroundColor = 'green';
          } else {
            this.secondsPassed = this.workoutSec;
            this.intervalState = 'workout';
            this.backgroundColor = 'red';
            console.log('set break finished');
            this.beep();
            this.message = 'workout';
          }
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
