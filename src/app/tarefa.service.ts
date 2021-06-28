import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(
    private firestore: AngularFirestore
  ) { }

/* create_NewTarefas : Cria um novo registro na coleção especificada usando o método add */
create_NewTarefas(record){
  return this.firestore.collection('tarefas').add(record);
}
/*read_Tarefas: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
read_Tarefas(){
  return this.firestore.collection('tarefas').snapshotChanges();
}
/*update_Tarefas : atualiza o registro pegando o ID e chamando o método de atualização */
update_Tarefas(recordID,record) {
  this.firestore.doc('tarefas/' + recordID).update(record);
}
/*delete_Tarefas : chama o método de exclusão  ao registrar o ID*/
delete_Tarefas(record_id) {
  this.firestore.doc('tarefas/' + record_id).delete();
  }
}