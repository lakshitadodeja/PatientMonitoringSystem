 var index = 11;
 var rootRef = firebase.database().ref();
 var storesRef = rootRef.child('patient_details/'+index);
  storesRef.set({
    "patient_id": "109",
    "patient_name": "Lakshita",
    "patient_age": "9654944485",
	"background_history": ""
	"doctor_id":"lakshita.dodeja@gmail.com"
  });

/*101,Lakshita,9654944485,lakshita.dodeja@gmail.com
102,Deepika,7404382334,deepika.juneja00@gmail.com
103,Toshi,7206304084,toshi.varshney1@gmail.com
105,Lakshita,9654944485,lakshita.dodeja@gmail.com
106,Deepika,7404382334,deepika.juneja00@gmail.com
108,Toshi,7206304084,toshi.varshney1@gmail.com
109,Lakshita,9654944485,lakshita.dodeja@gmail.com*/