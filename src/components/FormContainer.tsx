import React from "react";
import {FileManager} from "../logic/FileManager";
import {ILabelData} from "../logic/dto/ILabelData";

interface IProps {
    fileManager: FileManager;
    onChange: any;
}

export class FormContainer extends React.Component<IProps, any> {
    private readonly _fileManager: FileManager = this.props.fileManager;

    constructor(props: any) {
        super(props);

        this.state = {
            refNr: 0,
            inpakker: '',
            naam: '',
            plaats: '',
            ref: '',
            totaalM2: 0,
            product: 'none',
            soort: 'none',
            soortDiversen: 'none',
            vasteBreedte: false,
            breedte: 0,
            vellingkant: false,
            getrommeld: false,
            olie: 'none',
            geborsteld: false,
            lak: false,
            gerookt: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitLabel = this.submitLabel.bind(this);
    }

    handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;

        this.setState({
            [id]: value
        });

        event.persist();
    }

    submitLabel = async () => {
        await this._fileManager.saveLabel(this.state as ILabelData).then(() => {
            this.props.onChange("success");
            this.resetForm();
        });
    }

    resetForm() {
        this.setState({
            refNr: 0,
            inpakker: '',
            naam: '',
            plaats: '',
            ref: '',
            totaalM2: 0,
            product: 'none',
            soort: 'none',
            soortDiversen: 'none',
            vasteBreedte: false,
            breedte: 0,
            vellingkant: false,
            getrommeld: false,
            olie: 'none',
            geborsteld: false,
            lak: false,
            gerookt: 0
        });
    }

    // value setten op this.state.[prop]? -> YES WANT VOOR UPDATEN IS HET WSS STATE = LABEL TO UPDATE (GETLABELBYREF)
    // required toevoegen
    // form omheen?
    render() {
        return (
            <div>
                <div className="grid top-container">
                    <div className="grid top-input-container">
                        <label htmlFor="inpakker">Inpakker</label>
                        <input type="text" id="inpakker" name="Inpakker" value={this.state.inpakker} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="refNr">Referentienummer</label>
                        <input type="number" step="1" min="0" id="refNr" name="Referentienummer" value={this.state.refNr} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="naam">Naam</label>
                        <input type="text" id="naam" name="Naam" value={this.state.naam} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="plaats">Plaats</label>
                        <input type="text" id="plaats" name="Plaats" value={this.state.plaats} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="ref">Referentie</label>
                        <input type="text" id="ref" name="Referentie" value={this.state.ref} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="totaalM2">Totaal m²</label>
                        <input type="text" id="totaalM2" name="TotaalM2" value={this.state.totaalM2} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="product">Product</label>
                        <select id="product" value={this.state.product} onChange={this.handleInputChange}>
                            <option value="none" disabled>Selecteer product...</option>
                        </select>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="soort">Soort</label>
                        <select id="soort" value={this.state.soort} onChange={this.handleInputChange}>
                            <option value="none" disabled>Selecteer soort...</option>
                        </select>
                    </div>
                    <div className="grid top-input-container">
                        <label htmlFor="soortDiversen">Soort diversen</label>
                        <select id="soortDiversen" value={this.state.soortDiversen} onChange={this.handleInputChange}>
                            <option value="none" disabled>Selecteer soort diversen...</option>
                        </select>
                    </div>
                </div>
                <div className="grid bottom-container">
                    <div className="grid bottom-input-container">
                        <label htmlFor="vasteBreedte">Vaste breedte</label>
                        <input type="checkbox" id="vasteBreedte" name="VasteBreedte" value={this.state.vasteBreedte} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid bottom-input-container">
                        <label htmlFor="breedte">Breedte (cm)</label>
                        <input type="number" step="0.01" min="0" id="breedte" name="BreedteCm" value={this.state.breedte} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid bottom-input-container">
                        <label htmlFor="vellingkant">Vellingkant</label>
                        <input type="checkbox" id="vellingkant" name="Vellingkant" value={this.state.vellingkant} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid bottom-input-container">
                        <label htmlFor="getrommeld">Getrommeld</label>
                        <input type="checkbox" id="getrommeld" name="Getrommeld" value={this.state.getrommeld} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid bottom-input-container">
                        <label htmlFor="olie">Olie</label>
                        <select id="olie" value={this.state.olie} onChange={this.handleInputChange}>
                            <option value="none">Geen</option>
                        </select>
                    </div>
                    <div className="grid bottom-input-container">
                        <label htmlFor="geborsteld">Geborsteld</label>
                        <input type="checkbox" id="geborsteld" name="Geborsteld" value={this.state.geborsteld} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid bottom-input-container">
                        <label htmlFor="lak">Lak</label>
                        <input type="checkbox" id="lak" name="Lak" value={this.state.lak} onChange={this.handleInputChange}/>
                    </div>
                    <div className="grid bottom-input-container">
                        <label htmlFor="gerookt">Gerookt</label>
                        <select id="gerookt" value={this.state.gerookt} onChange={this.handleInputChange}>
                            <option value="0">Nee</option>
                            <option value="1">1x</option>
                            <option value="2">2x</option>
                        </select>
                    </div>
                </div>

                <button type="submit" onClick={this.submitLabel}>Opslaan</button>
            </div>
        );
    }
}

export default FormContainer;