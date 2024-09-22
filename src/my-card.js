import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "card title";
    
    
  }

  static get styles() {
    return css`
    .buttons{
  background-color:red;
  width: 525px;
}
.list{
  display: inline-block;
}

.card{
    background-color:aqua;
   border-radius: 16px;
  font-size: 20px;
  padding:16px;
  width:300px;
  margin: 8px 8px;
}
.fancy{
    background-color: orange;
}
.image{
   height: 200px;
  width: 300px;
}
.details{

  background-color: red;
  color: white;
  font-size: 25px;
  display:none;
}
@media(max-width: 800px){
    .details{
      display: inline;
    }
@media ( max-width: 500px){
    .details{
      display: none;
    }

    `;
  }

  render() {
    return html`
    <div class="card">
    <h1 class="title">John Activision</h1>
    <img class="image"src="https://i.kym-cdn.com/entries/icons/facebook/000/027/707/henry.jpg"/>
    <p class="description"> This is John he breaks the games </p>

  <a href="https://hax.psu.edu"><button class="details"> Details</button></button></a>
  </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
