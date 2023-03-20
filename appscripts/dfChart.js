    
    const labelYear = ["2018","2019","2020","2021","2022"]
    const labelRace = ["Chinese","Malay","Indian","Other"]
    const labelAge = ["Chinese","Malay","Indian","Other"]
    const populationNewBorn = ["32413 ","32844","31816","31713","35724"]
    const populationRace = ["3018951","554110","366405","133773"]
    const populationAge = ["3018951","554110","366405","133773"]
    const populationSize= ["3994283","4026209","4044210","3986842","4073239"]
    const populationCon = ["2018","2019","2020","2021","2022"]
    
   
    
    const dataObj = {
        labels: labelYear,
        datasets: [
            {
                label: "Population Size",
                data: populationSize,
                borderWidth: 2,
                backgroundColor: "rgb(20,150,150)",
                borderColor: "rgb(50,150,150)"
            }
        ]
    };
    
    
    new Chart("PopSize-bar-chart",
            {
                type: "bar",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['Singapore Population Size','in Recent Five Years','(will change into 20 years in final version)'],
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(20,20,20)',
                    }
                }
            });

            const dataRace = {
                labels: labelRace,
                datasets: [
                    {
                        label: "Population Race",
                        data: populationRace,
                        borderWidth: 2,
                        backgroundColor: "rgb(20,150,150)",
                        borderColor: "rgb(50,150,150)"
                    }
                ]
            };
            
            const NewBorn = {
                labels: labelYear,
                datasets: [
                    {
                        label: "New Born Population",
                        data: populationNewBorn,
                        borderWidth: 2,
                        backgroundColor: "rgb(20,150,150)",
                        borderColor: "rgb(50,150,150)"
                    }
                ]
            };
            
            
            new Chart("PopNewBorn-bar-chart",
                    {
                        type: "bar",
                        data: NewBorn,
                        options: { 
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: ['Singapore Newly Born Population Size','in Recent Five Years','(will change into 20 years in final version)'],
                                fontFamily: "TrebuchetMS",
                                fontSize: 24,
                                fontColor: 'rgb(20,20,20)',
                            }
                        }
                    });
        
                
            
            //new Chart("PopRace-bar-chart",
                    //{
                        //type: "pie",
                        //data: dataRace,
                       // options: { 
                            //maintainAspectRatio: false,
                            //legend: {
                                //display: false
                            //},
                            //title: {
                                //display: true,
                                //text: ['Singapore Population Race Composition','in Recent Five Years'],
                                //fontFamily: "TrebuchetMS",
                                //fontSize: 24,
                                //fontColor: 'rgb(20,20,20)',
                            //}
                        //}
                    //});
                    let changeSlider = function (){
      
                        document.getElementById("myRange").addEventListener("click", function (){
                  
                        let rgbValue = Math.floor (255*document.getElementById("myRange").value);
                  
                        console.log(rgbValue);
                        
                        let newRgbString = "rgb("+rgbValue+"," +rgbValue+"," +rgbValue+")";
                  
                        let Header = document.getElementById("headerID");
                  
                        Header.style.backgroundColor = newRgbString;
                  
                        });
                        
                      }        