import {ILabelData} from "./dto/ILabelData";

const remote = window.require('electron').remote;
const path = remote.app.getPath('userData');
const fs = window.require('fs');
const dataPath: string = path + "/data.json";

export class FileManager {
  labels: ILabelData[] = [];

  constructor() {
    this.loadLabels();
  }

  async saveLabel(labelToSave: ILabelData): Promise<void> {
    let newLabels: ILabelData[] = [];
    this.labels.forEach((lbl: ILabelData) => {
      if (lbl.id !== labelToSave.id) {
        newLabels.push(lbl);
      }
    });
    newLabels.push(labelToSave);
    await this.writeLabelsToFile(newLabels);
    this.labels = newLabels;
  }

  async removeLabel(labelToRemove: ILabelData): Promise<void> {
    let newLabel: ILabelData[] = [];
    this.labels.forEach((lbl: ILabelData) => {
      if (lbl.id !== labelToRemove.id) {
        newLabel.push(lbl);
      }
    });
    await this.writeLabelsToFile(newLabel);
    this.labels = newLabel;
  }

  private writeLabelsToFile(labelsToSave: ILabelData[]): Promise<void> {
    return new Promise(((resolve, reject) => {
      if (!fs.existsSync(dataPath)) {
        return reject('Save is called before load.');
      }

      fs.writeFile(dataPath, JSON.stringify({labels: labelsToSave}), (err: any) => {
        if (err) return reject(err);
        return resolve();
      });
    }));
  }

  private loadLabels(): void {
    if (fs.existsSync(dataPath)) {
      try {
        this.labels = JSON.parse(fs.readFileSync(dataPath, 'utf8')).labels;
      } catch (e) {
        setTimeout(() => {
          this.loadLabels();
        }, 10)
      }
    } else {
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
      }
      fs.writeFile(dataPath, JSON.stringify({labels: []}), (err: any) => {
        if (err) console.log(err);
      });
    }
  }

  getLabel(id: number): ILabelData {
    let foundLabel: ILabelData = {} as ILabelData;
    this.labels.forEach((lbl: ILabelData) => {
      if (lbl.id === id) {
        foundLabel = lbl;
      }
    });
    return foundLabel;
  }

  getLabels(): ILabelData[] {
    return this.labels;
  }
}
