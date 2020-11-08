import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {tab1} from './tab1.model';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  private contactos: tab1[] = [
    {
      id: '1',
      title: 'Han Solo',
      imagenURL: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/08/han-solo-star-wars.jpg?itok=s3mpfYVR',
      comments: ['Cazarrecompensas']
    },
    {
      id: '2',
      title: 'Leia',
      imagenURL: 'https://diariodeavisos.elespanol.com/wp-content/uploads/2018/02/princess-leia-carrie-770x513.jpg',
      comments: ['Princesa']
    },
    {
      id: '3',
      title: 'Rey',
      imagenURL: 'https://www.cinemascomics.com/wp-content/uploads/2020/09/rey-star-wars-origen-960x720.jpg.webp',
      comments: ['Recolectora']
    },
    {
      id: '4',
      title: 'Finn',
      imagenURL: 'https://www.latercera.com/resizer/p8OoAxoy-4z3DfSqiFYGeU8wt28=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/2NDTAGFHWRENXBGQNG3VXTBCYE.jpeg',
      comments: ['Piloto']
    }
  ]
  constructor() { }

  getContactos() {
    return [...this.contactos]
  }

  getContacto(contactoId: string){
    return{
      ...this.contactos.find(contacto => {
        return contacto.id === contactoId
      })
    }
  }

}
