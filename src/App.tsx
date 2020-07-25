import React, {Component} from 'react';
import './App.css';
import {FileManager} from "./logic/FileManager";
import {ILabelData} from "./logic/dto/ILabelData";

export class App extends Component {
  fileManager: FileManager = new FileManager();
  labels: ILabelData[] = this.fileManager.getLabels();

  render() {
    return (
      <div>
        Dit is een test
      </div>
    );
  }
}

export default App;
