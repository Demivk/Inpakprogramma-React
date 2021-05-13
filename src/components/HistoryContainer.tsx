import React from 'react';
import '../App.css';
import {FileManager} from "../logic/FileManager";
import {ILabelData} from "../logic/dto/ILabelData";
import FormContainer from "./FormContainer";

interface IProps {
    fileManager: FileManager;
}

export class HistoryContainer extends React.Component <IProps, any> {
    private readonly _fileManager: FileManager = this.props.fileManager;

    constructor(props: any) {
        super(props);

        this.state = {
            labels: this._fileManager.getLabels(),
            selectedLabel: 0
        }

        this.handleSelectedChange = this.handleSelectedChange.bind(this);
    }

    handleSelectedChange(event: any) {
        this.setState({ selectedLabel: event.target.value});
    }

    reloadLabels = async (result: string) => {
        if (result === 'success') {
            this.setState({labels: this._fileManager.getLabels()});
        }
    }

    removeLabel = async () => {
        await this._fileManager.removeLabel(this.state.selectedLabel);
        this.setState({labels: this._fileManager.getLabels(), selectedLabel: 0});
    };

    render() {
        return (
            <div className="grid left-container">
                <FormContainer fileManager={this._fileManager} onChange={this.reloadLabels}/>
                <div className="grid history-container">
                    <select multiple={true} onChange={this.handleSelectedChange}>
                        { this.state.labels.map((label: ILabelData) => <option key={label.refNr} value={label.refNr}>{label.refNr}</option>) }
                    </select>
                    <button onClick={this.removeLabel}>Verwijder</button>
                    <button type="button">Bon ophalen</button>
                </div>
            </div>
        );
    }
}

export default HistoryContainer;