import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {AppInformation} from 'app/core/app-information/app-information';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppInformationService {

    private _httpClient = inject(HttpClient);

    /**
     * Get the Application Information
     */
    getAppInformation(): Observable<AppInformation> {
        return this._httpClient.get<AppInformation>('api/v1/app');
    }
}
