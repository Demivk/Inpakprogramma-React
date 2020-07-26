import React, {Component} from 'react';
import './App.css';
import {FileManager} from "./logic/FileManager";
import {ILabelData} from "./logic/dto/ILabelData";

export class App extends Component {
  fileManager: FileManager = new FileManager();
  labels: ILabelData[] = this.fileManager.getLabels();

  constructor(props: any) {
    super(props);
    this.state = {
      refNr: 0,
      inpakker: '',
      naam: '',
      plaats: '',
      ref: '',
      totaalM2: 0,
      product: '',
      soort: '',
      soortDiversen: '',
      vasteBreedte: false,
      breedte: 0,
      vellingkant: false,
      getrommeld: false,
      olie: '',
      geborsteld: false,
      lak: false,
      gerookt: 0
    };
  }

  render() {
    return (
      <div className="grid container">
        <div className="grid left-container">
          <div className="grid top-container">
            <div className="grid top-input-container">
              <label htmlFor="inpakker">Inpakker</label>
              <input type="text" id="inpakker" name="Inpakker"/>
            </div>
            <div className="grid top-input-container">
              <label htmlFor="refNr">Referentienummer</label>
              <input type="number" step="1" min="0" id="refNr" name="Referentienummer"/>
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

          <div className="grid history-container">
            <select multiple={true}>
              { this.labels.map(label => <option value={label.refNr}>{label.refNr}</option>) }
            </select>
            <button>Verwijder</button>
            <button type="button">Bon ophalen</button>
          </div>
        </div>

        <div className="grid right-container">
          <div className="grid table-container">
            <p><strong>Table component</strong></p>
          </div>
          <div className="grid label-container">
            <p><strong>Label component</strong></p>
          </div>
          <div className="grid button-container">
            <p><strong>Button component</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
