import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  text: string;

  constructor(private demoSvc: DemoService) {
    this.text = this.demoSvc.getText();
  }

  ngOnInit(): void {
  }

}
