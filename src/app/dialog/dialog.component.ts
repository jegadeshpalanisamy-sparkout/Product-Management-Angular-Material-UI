import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule  
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  freshnessList=['Brand New','second Hand','Refurbished'];

  productForm!:FormGroup;
  
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName : ['' ,Validators.required],
      category : ['' , Validators.required],
      freshness : ['' ,Validators.required],
      price : ['' ,Validators.required],
      comment : ['' ,Validators.required],
      date :['' ,Validators.required]
    })
    
  }
}
