let myResume={
    "basics": {
      "name": "praveenganth v",
      "email": "vpraveenganth666@gmail.com",
      "phone": 1234556780,
      "degree": "B.Sc",
      "location": {
        "address": "dharmapuri",
        "postalCode": 636807,
        "city": "dharmapuri",
        "state": "Tamilnadu",
        "country": "India"
      },
     
    
    "education": [
      {
        "institution": "don bosco college",
        "department": "chemistry",
        "studyType": "fulltime",
        "batch start year": 2017,
        "batch end year": 2020,
        "gpa": 8.0,
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginer",
       
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "software developer",
      }
    ]
  }
}
console.log(myResume);

let resumeJSON = JSON.stringify(myResume);
 //object data type
console.log(resumeJSON);

let resumeObj =JSON.parse(resumeJSON)
console.log(resumeObj);
