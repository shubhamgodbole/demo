import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
 /* subscribeLeadGen(plan: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {

        const apiUrl = `${ environment.BASE_API }v1/user/${ plan.endpoint }`;

        this.httpClient.post(apiUrl, plan.postParam, {headers: headers})
          .toPromise()
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            (error.status === 201) ? resolve('Subscribed successfully') : reject(error)
          })
      }
    })
  }*/
  getUserType(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/userType/';
      this.http.get(apiUrl)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          (error.status === 201) ? resolve('Subscribed successfully') : reject(error)
        });
    });
  }
  registration(userData): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/user/';
      this.http.post(apiUrl, userData)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          (error.status === 201) ? resolve('Subscribed successfully') : reject(error)
        });
      });
  }
  login(userData): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/auth/';
      this.http.post(apiUrl, userData)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
           reject(error)
        });
    });
  }
  getAllUser(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/employee/';
      this.http.get(apiUrl)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          (error.status === 201) ? resolve('Subscribed successfully') : reject(error)
        });
    });
  }
}
