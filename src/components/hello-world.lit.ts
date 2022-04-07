import {LitElement, html, css, customElement, property, state, adoptStyles, PropertyValueMap, PropertyDeclaration} from 'lit-element';

@customElement('hello-world')
export default class HelloWorld extends LitElement {
  static get styles() {
    return css`
      .title {
        color: red;
      }
    `;
  }

  constructor() {
    super();
    console.log('constructor!');
  }
  
  @property({type: String})
  name: string = '';

  @state()
  private _value: string = this.name;

  render() {
    return html`
      <div class="title">Hello, ${this.name}</div>
      <div>${this._value}</div>
      <button @click=${this.clickHandler}>click me</button>
      <hr />
      <slot></slot>
    `;
  }

  clickHandler() {
    this._value = this._value + ', ' + this.name;
  }

  // life cycle

  connectedCallback(): void {
    console.log('connected!');
    super.connectedCallback();
    this._value = this.name;
  }

  // requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown>): void {
  //   console.log('requestUpdate!');
  // }

  // protected performUpdate(): void | Promise<unknown> {
  //   console.log('performUpdate!')
  // }

  // protected shouldUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): boolean {
  //   console.log('shouldUpdate!');  
  //   return true;
  // }

  // protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
  //   console.log('willUpdate!');  
  // }

  // update -> render

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    console.log('firstUpdated!');
  }

  // protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
  //   console.log('updated!');
  // }
  
  disconnectedCallback(): void {
    console.log('disconnectedCallback!');
  }
}