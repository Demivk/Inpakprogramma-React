import React, {Component} from 'react';
import './App.css';

export class App extends Component {
  labels: [] = [];

  render() {
    return (
      <div className="grid container">
        <div>
          <div className="grid top-container">
            <div className="grid top-input-container">
              <label htmlFor="inpakker">Inpakker</label>
              <input type="text" id="inpakker" name="Inpakker"/>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="refNr">Referentienummer</label>
              <input type="text" id="refNr" name="Referentienummer"/>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="naam">Naam</label>
              <input type="text" id="naam" name="Naam"/>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="plaats">Plaats</label>
              <input type="text" id="plaats" name="Plaats"/>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="ref">Referentie</label>
              <input type="text" id="ref" name="Referentie"/>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="totaalM2">Totaal m²</label>
              <input type="text" id="totaalM2" name="TotaalM2"/>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="product">Product</label>
              <select id="product">
                <option value=""></option>
              </select>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="soort">Soort</label>
              <select id="soort">
                <option value=""></option>
              </select>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="soortDiversen">Soort diversen</label>
              <select id="soortDiversen">
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="grid bottom-container">
            <div className="grid bottom-input-container">
              <label htmlFor="vasteBreedte">Vaste breedte</label>
              <input type="checkbox" id="vasteBreedte" name="VasteBreedte"/>
            </div>
            <div className="grid bottom-input-container">
              <label htmlFor="breedte">Breedte (cm)</label>
              <input type="number" step="0.01" min="0" id="breedte" name="BreedteCm"/>
            </div>
            <div className="grid bottom-input-container">
              <label htmlFor="vellingkant">Vellingkant</label>
              <input type="checkbox" id="vellingkant" name="Vellingkant"/>
            </div>
            <div className="grid bottom-input-container">
              <label htmlFor="getrommeld">Getrommeld</label>
              <input type="checkbox" id="getrommeld" name="Getrommeld"/>
            </div>
            <div className="grid bottom-input-container">
              <label htmlFor="olie">Olie</label>
              <select id="olie">
                <option value="none">Geen</option>
                <option value=""></option>
              </select>
            </div>
            <div className="grid bottom-input-container">
              <label htmlFor="geborsteld">Geborsteld</label>
              <input type="checkbox" id="geborsteld" name="Geborsteld"/>
            </div>
            <div className="grid bottom-input-container">
              <label htmlFor="lak">Lak</label>
              <input type="checkbox" id="lak" name="Lak"/>
            </div>
            <div className="grid bottom-input-container">
              <label htmlFor="gerookt">Gerookt</label>
              <select id="gerookt">
                <option value="0">Nee</option>
                <option value="1">1x</option>
                <option value="2">2x</option>
              </select>
            </div>
          </div>

          <select multiple={true}>
            <option value=""></option>
          </select>
          <button>Verwijder</button>
        </div>

        <div>
          <p><strong>Table component</strong></p>
          <p><strong>That one component with no name</strong></p>
          <p><strong>Button component</strong></p>
        </div>
      </div>
    );
  }
}

export default App;
