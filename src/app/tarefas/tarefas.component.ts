import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../tarefa.service';
import{AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

 


export class TarefasComponent implements OnInit {
  
  tarefa: any;
  tarefasName: string;
  tarefasDescription: string;
  tarefasType: boolean;

 

 



  constructor(private tarefasService : TarefasService, private afStorage: AngularFireStorage) { }

  ngOnInit(){
    this.tarefasService.read_Tarefas().subscribe(data => {
    this.tarefa = data.map(e => {
    return{
      id: e.payload.doc.id,
      isEdit: false,
      Name: e.payload.doc.data()['Name'],
      Description: e.payload.doc.data()['Description'],
      Type: e.payload.doc.data()['Type'],
    };
    })
    console.log(this.tarefa);
    });
    }
    CreateRecord(){
      let record = {};
      record['Name'] = this.tarefasName;
      record['Description'] = this.tarefasDescription;
      record['Type'] = this.tarefasType;
      this.tarefasService.create_NewTarefas(record).then(resp => {
        this.tarefasName="";
        this.tarefasDescription = "";
        this.tarefasType = undefined;
       
        console.log(resp);

      })
      .catch(error => {
        console.log(error);

      });
    }
    RemoveRecord(rowID) {
        this.tarefasService.delete_Tarefas(rowID);
    }
    EditRecord(record){
      record.isEdit = true;
      record.EditName = record.Name;
      record.EditDescription = record.Description;
      record.EditType = record.Type;

    }
    UpdateRecord(recordRow){
      let record = {};
      record['Name']=recordRow.EditName;
      record['Description']= recordRow.EditDescription;
      record['Type']= recordRow.EditType;
      this.tarefasService.update_Tarefas(recordRow.id, record);
      recordRow.isEdit = false;
    }


    
    
    
    
    


}

