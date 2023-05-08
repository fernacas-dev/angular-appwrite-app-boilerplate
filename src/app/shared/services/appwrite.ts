import { inject, InjectionToken } from '@angular/core';
import {
  Account,
  Client as Appwrite,
  Databases,
  Functions,
} from 'appwrite';
import { environment } from 'src/environments/environment';

interface AppwriteConfig {
  endpoint: string;
  projectId: string;
  databaseId: string;
  chatCollectionId: string;
}

export const AppwriteEnvironment = new InjectionToken<AppwriteConfig>(
  'Appwrite Config',
  {
    providedIn: 'root',
    factory() {
      const { endpoint, projectId, databaseId, chatCollectionId } = environment;
      return {
        endpoint,
        databaseId,
        projectId,
        chatCollectionId,
      };
    },
  }
);

export const AppwriteApi = new InjectionToken<{
    database: Databases;
    account: Account;
    functions: Functions;
  }>('Appwrite SDK', {
    providedIn: 'root',
    factory() {
      const env = inject(AppwriteEnvironment);
      const appwrite = new Appwrite();
      appwrite.setEndpoint(env.endpoint);
      appwrite.setProject(env.projectId);

      const database = new Databases(appwrite);
      const account = new Account(appwrite);
      const functions = new Functions(appwrite);

      return { database, account, functions };
    },
  });
