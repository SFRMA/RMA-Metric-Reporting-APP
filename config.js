/* ==================================================================
   RMA Metrics — project settings
   ------------------------------------------------------------------
   You set this file up ONCE. Future updates to the app (index.html)
   drop in next to it and pick these up automatically — your config
   never gets wiped again.

   Deploy BOTH files together in your repo root:
     index.html   (the app)
     config.js    (this file)
   ================================================================== */


/* (1) Firebase config — paste the object Firebase gave you.
   Firebase console → Project settings → General → Your apps → Config.
   Replace every "PASTE_ME" below with the real value.               */
window.RMA_FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDTqqNi3uXVvFQPTQF2l1Fi7IkBIk7YtM4",
  authDomain:        "rma-metrics.firebaseapp.com",
  projectId:         "rma-metrics",
  storageBucket:     "rma-metrics.firebasestorage.app",
  messagingSenderId: "213454294818",
  appId:             "1:213454294818:web:fe6c80b81103f269a61f7b",
};


/* (2) Team roster — the sign-in email for each person, mapped to
   their role. These emails must match the accounts you created in
   Firebase (Authentication → Users) AND the emails in firestore.rules.

     logRole : which entry form they get — 'repair' | 'receiving' | 'dispatch'
     manager : true grants the read-all dashboard. A manager can also log
               their own metrics (Mike is a bench tech AND the manager).

   To add another bench tech: copy a repair line, give them a new email,
   create the matching Firebase user, and add the email to firestore.rules. */
window.RMA_ACCOUNTS = {
  "matt@starforge.local":   { repId:"matt",   name:"Matt",   logRole:"dispatch",  manager:false },
  "gabe@starforge.local":   { repId:"gabe",   name:"Gabe",   logRole:"receiving", manager:false },
  "luke@starforge.local":   { repId:"luke",   name:"Luke",   logRole:"repair",    manager:false },
  "keagon@starforge.local": { repId:"keagon", name:"Keagon", logRole:"repair",    manager:false },
  "mike@starforge.local":   { repId:"mike",   name:"Mike",   logRole:"repair",    manager:true  },
};
