import {ILabelData} from "./dto/ILabelData";

const remote = window.require('electron').remote;
const path = remote.app.getPath('userData') + "/LabelData";
const fs = window.require('fs');
const dataPath: string = path + "/label-data.json";

export class FileManager {
  labels: ILabelData[] = [];

  constructor() {
    this.loadLabels();
  }

  getLabels(): ILabelData[] {
    return this.labels;
  }

  getLabel(refNr: number): ILabelData | undefined {
    return this.labels.find(l => l.refNr === refNr);
  }

  async saveLabel(labelToSave: ILabelData): Promise<void> {
    let newLabels: ILabelData[] = [];
    this.labels.forEach((label: ILabelData) => {
      if (label.refNr !== labelToSave.refNr && labelToSave.refNr !== 0) {
        newLabels.push(label);
      }
    });

    newLabels.push(labelToSave);

    await this.writeLabelsToFile(newLabels);
    this.labels = newLabels;
  }

  async removeLabel(refNrToRemove: number) {
    let newLabels: ILabelData[] = [];
    this.labels.forEach((label: ILabelData) => {
      if (label.refNr !== refNrToRemove) {
        newLabels.push(label);
      }
    });
    await this.writeLabelsToFile(newLabels);
    this.labels = newLabels;
  }

  private writeLabelsToFile(labelsToSave: ILabelData[]) {
    if (!fs.existsSync(dataPath)) {
      return Promise.reject('Save is called before load.');
    }

    fs.writeFile(dataPath, JSON.stringify({labels: labelsToSave}), (err: any) => {
      if (err) return Promise.reject(err);
      return Promise.resolve();
    });
  }

  private loadLabels() {
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
}
