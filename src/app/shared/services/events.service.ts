import { Injectable, inject } from '@angular/core';
import { Models, RealtimeResponseEvent } from 'appwrite';
import { AppwriteApi, AppwriteEnvironment } from './appwrite';
import { BehaviorSubject, Subscriber, Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { RTPayload } from 'src/app/client/models/rtpayload.model';

export type Message = Models.Document & {
  user: string;
  message: string;
};


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private appwriteAPI = inject(AppwriteApi);

  private _messages$ = new BehaviorSubject<any>({});
  readonly messages$ = this._messages$.asObservable();

  listenEvents(): any {
    return this.appwriteAPI.database.client.subscribe(
      [
        "databases.wphostingdb.collections.instanceData.documents"
      ],
      (res: RealtimeResponseEvent<any>) => {
        const messages: any[] = [res.payload];
        this._messages$.next(messages);
      }
    );
  }
}
