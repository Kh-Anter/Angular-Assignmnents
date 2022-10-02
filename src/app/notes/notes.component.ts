import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../custom validators/name.validitors';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  myProducts=["product 1","product 2","product 3","product 4"]
  discountValue:boolean=false;
  constructor(private fp:FormBuilder) { }

  ngOnInit(): void {
  }
notesForm=this.fp.group({
  name:['',[Validators.required,ForbiddenNameValidator(/admin/),ForbiddenNameValidator(/adminstrator/)]],
  product:[''],
  alternativeComment:this.fp.array([]),
  discount:['',[Validators.required,Validators.pattern('(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)')]]
})

get name(){
  return this.notesForm.get('name');
}
get product(){
  return this.notesForm.get('product');
}
get discount(){
  return this.notesForm.get('discount');
}
get alternativeComment()
  {
    return this.notesForm.get('alternativeComment') as FormArray;
  }

changeCheckBox(){
  this.discountValue= !this.discountValue;
}

addComment(){
  this.alternativeComment.push(this.fp.control(''))
}
deleteComment(i:number){
  this.alternativeComment.removeAt(i);
}
}
