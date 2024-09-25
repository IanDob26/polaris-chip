import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

//exports everything
export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

 static get styles() {
    return css` 
    :host{
     display: inline-flex; 
    }
    q {
        background-color: red;
        color: black;
        font-size: 24px;
        padding: 20px;
        margin: 10px;
        text-decoration: none;
      }
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
  max-width: 200px;
}
.details{
  background-color: red;
  color: white;
  padding:16px;
  width:100px;
  font-size: 25px;
  display: inline
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
  //constructor
  constructor() {
    super();
    this.title = "";
    this.image ="#";
    this.text = "";
    this.details = "";
    this.link = "#";
  }

 
//returns the stuff 
  render() {
    return html`
    <!-- <q>${this.title} < image class = "images" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/707/henry.jpg"/>
     ${ this.text}</q> -->
     <div id="cardlist">
        <div class="card">
          <img
            class="image"
            src= ${this.image} 
          />
          <h1 class="title">${this.title}</h1>
          <p class="text">${this.text}</p>
          <a class="link" href=${this.link}>
            <button class="details">${this.details}</button>
          </a>
        </div>
      </div>  
  
  
    `;
  

  }
  static get properties() {
    return {
      title: { type: String },
      link:{ type: String},
      text: { type: String },
      image:{ type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
