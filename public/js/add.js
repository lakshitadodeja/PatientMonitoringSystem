 var index = 7;
 var rootRef = firebase.database().ref();
 var storesRef = rootRef.child('doctor_details/'+index);
  storesRef.set({
    "doctor_id": "109",
    "doctor_name": "Lakshita",
    "phone_number": "9654944485",
	"email_id":"lakshita.dodeja@gmail.com"
  });

/*101,Lakshita,9654944485,lakshita.dodeja@gmail.com
102,Deepika,7404382334,deepika.juneja00@gmail.com
103,Toshi,7206304084,toshi.varshney1@gmail.com
105,Lakshita,9654944485,lakshita.dodeja@gmail.com
106,Deepika,7404382334,deepika.juneja00@gmail.com
108,Toshi,7206304084,toshi.varshney1@gmail.com
109,Lakshita,9654944485,lakshita.dodeja@gmail.com*/