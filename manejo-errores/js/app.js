'use strict';

const paintSelect = (cohorts)=>{
    let select = document.querySelector('#cohort');
    cohorts.forEach(cohort => {
        let cohOption = document.createElement("option");
        let cohortName = document.createTextNode(cohort.id);
        cohOption.appendChild(cohortName);
        cohOption.setAttribute('value',cohort.id);
        select.appendChild(cohOption);
    });
}    
window.onload = ()=>{
    var promise = new Promise((resolve,reject)=>{
        // Haz algo posiblemente asincrono
        const apiRequest = fetch('https://laboratoria-la-staging.firebaseapp.com/cohorts/')
        .then((response)=>{
            if(response){
                resolve("Stuff worked!");
                return response.json();
            }else{
                reject('something goes wrong');
            }
        }).then((myJson)=>{
            paintSelect(myJson);
        }).then(()=>{
            document.querySelector('#cohort').style.display = "block";
            document.getElementById('preloader').style.display = "none";
            document.querySelector('#main-content').style.visibility = "visible";
            document.querySelector('#loader-container').style.display = "none";
        })
    
        
    });
    try {
        promise
    } catch (error) {
        console.log(error);
    }
}
