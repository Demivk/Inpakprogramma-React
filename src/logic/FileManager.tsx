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
    if (labelToSave.refNr !== 0) {
      let newLabels: ILabelData[] = [];
      this.labels.forEach((label: ILabelData) => {
        if (label.refNr !== labelToSave.refNr) {
          newLabels.push(label);
        }
      });

      newLabels.push(labelToSave);

      await this.writeLabelsToFile(newLabels);
      this.labels = newLabels;
    }
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

  isJsonValid(str: any) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  private writeLabelsToFile(labelsToSave: ILabelData[]) {
    const dataToStringify = JSON.stringify({labels: labelsToSave});

    if (!fs.existsSync(dataPath)) {
      return Promise.reject('Save is called before load.');
    }

    if (!this.isJsonValid(dataToStringify)) {
      console.log('INVALIDDDD'); // remove later
      return Promise.reject('Invalid JSON.');
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
