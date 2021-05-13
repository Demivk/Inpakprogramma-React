import React from 'react';
import './App.css';
import {FileManager} from "./logic/FileManager";
import HistoryContainer from "./components/HistoryContainer";

export class App extends React.Component {
  private readonly _fileManager: FileManager = new FileManager();

  render() {
    return (
        <div className="grid container">
            <HistoryContainer fileManager={this._fileManager}/>

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
