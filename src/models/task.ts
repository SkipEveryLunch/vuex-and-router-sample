import axios from "axios";
import * as uuid from "uuid";

export class Task{
  id:string
  isDone:boolean
  constructor(
    public name:string = ""
  ){
    this.id = uuid.v1();
    this.isDone = false;
  }
}