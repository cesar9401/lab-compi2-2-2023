import { Component, OnInit } from '@angular/core';
import { CodeModel } from "@ngstack/code-editor";
import { Parser } from "src/app/parser/parser";

declare var parser: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit{
  theme = 'vs-dark';
  result = '';

  codeModel: CodeModel = {
    language: 'java',
    uri: 'Main.java',
    value: ''
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    },
    fontSize: 24
  };

  onCompile() {
    const parser = new Parser(this.codeModel.value);
    const out = parser.parse();
    const model = this.codeModel;
    model.value = out;

    this.codeModel = JSON.parse(JSON.stringify(model));
  }

  ngOnInit(): void {
  }
}
