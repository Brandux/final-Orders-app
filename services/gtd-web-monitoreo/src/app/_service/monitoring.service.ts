import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(
    private http: HttpClient,
  ) { }

  inicial () {
    return this.http.get<any>(`${environment.endpoint}/customers`)
    .pipe(map(datos => {
      console.log('a');
        return datos;
      })
    );
  }
}
