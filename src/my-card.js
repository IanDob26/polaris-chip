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
  //constructor
  constructor() {
    super();
    this.title = "John Activision";
    this.text = "This is John he breaks the game";
    this.image = "https://i.kym-cdn.com/entries/icons/facebook/000/027/707/henry.jpg";
  }

 
//returns the stuff
  render() {
    return html`
    <q>
    <div>${this.title}</div>
  <p>  ${this.text} </p>
    <b>${this.card}</b>


   <!-- <div class="card">
    <h1> ${this.title} </h1>
    <img class ="image"src="https://i.kym-cdn.com/entries/icons/facebook/000/027/707/henry.jpg"/>
    <p>  ${this.text} </p>
  <a href="https://hax.psu.edu"><button class="details"> Details</button></button></a>
  </div> -->
    `;
  
    /* If it doesn;t work just put this in between the ``^
    class="title">John Activision
    class="description"> This is John he breaks the games
  */
  }

  static get properties() {
    return {
      title: { type: String },
      text: { type: String },
      image:{ type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
