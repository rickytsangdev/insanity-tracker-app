import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// connexion http
import { provideHttpClient } from '@angular/common/http';

// route mis en place dans le router
import { routes } from './app.routes';

// firebase configuration
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

// firebase configuration de la database
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// environment
// import { environment } from '../environments/environment';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'insanity-tracker-1f241',
        appId: '1:220367140617:web:8fc8092dfde48e1e3685d8',
        storageBucket: 'insanity-tracker-1f241.firebasestorage.app',
        apiKey: 'AIzaSyDtuUSQ5T3Ihu1cyDrrFEC-gSOqr8UFGMo',
        authDomain: 'insanity-tracker-1f241.firebaseapp.com',
        messagingSenderId: '220367140617',
        measurementId: 'G-EBYNFEEL20',
      })
    ),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
};
