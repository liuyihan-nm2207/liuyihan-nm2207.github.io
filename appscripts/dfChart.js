     
    const labelYear = ["1970","1975","1980","1985","1990","1995","2000","2005","2010","2015","2020"]
    const populationSize= ["2070000","2410000","3050000","4030000","5080000", "5690000"]
    const populationGrowth= ["1.6","1.5","1.3","0.1","3.9","3.0","1.7","2.4","1.8", "1.2","-4.2"]
    const labelRace = ["Chinese","Malay","Indian","Other"] 
    const raceRatio = ["3018950","554110","366410","133770"]
    const labelSex = ["Male","Female"]
    const sexRatio = ["3090000","2810000"]
    const labelResidents = ["Citizen","Permanent Residents","Other"] 
    const residentsRatio = ["3500000","500000","1450000"]
    const labelAge = ["Aged 19 & Below","Aged Between 20 - 64","Aged 65 & Above"] 
    const ageRatio = ["1139280","3468600","1037760"]
    const labelFertility = ["Sngapore","Malaysia","Australia","Worldwide"]
    const fertilityRate = ["1.10","1.82","1.96","2.30"]
    
   
    
    const dataObj = {
        labels: labelYear,
        datasets: [
            {
                    label: "Population Growth",
                data: populationGrowth,
                borderWidth: 2,
                backgroundColor: "rgb(55,255,255)",
                borderColor: "rgb(50,150,150)"
            }
        ]
    };
    
    
    new Chart("PopSize-bar-chart",
            {
                type: "line",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['Singapore Population Growth Rate','in Recent 50 Years'],
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
                        data: raceRatio,
                        borderWidth: 2,
                        backgroundColor: ["rgb(20,255,255)","rgb(255,20,255)","rgb(255,255,20)","rgb(0,0,0)"],
                        borderColor: "rgb(50,150,150)"
                    }
                ]
            };
            

            
            
            new Chart("raceRatio_pie_chart",
                    {
                        type: "pie",
                        data: dataRace,
                        options: { 
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: ['Population by race in Singapore'],
                                fontFamily: "TrebuchetMS",
                                fontSize: 24,
                                fontColor: 'rgb(20,20,20)',
                            }
                        }
                    });

                    const dataSex = {
                        labels: labelSex,
                        datasets: [
                            {
                                label: "Population Sex",
                                data: sexRatio,
                                borderWidth: 2,
                                backgroundColor: ["rgb(20,255,255)","rgb(255,255,20)"],
                                borderColor: "rgb(50,150,150)"
                            }
                        ]
                    };
                    
        
                    
                    
                    new Chart("sexRatio_pie_chart",
                            {
                                type: "pie",
                                data: dataSex,
                                options: { 
                                    maintainAspectRatio: false,
                                    legend: {
                                        display: false
                                    },
                                    title: {
                                        display: true,
                                        text: ['Population by sex in Singapore'],
                                        fontFamily: "TrebuchetMS",
                                        fontSize: 24,
                                        fontColor: 'rgb(20,20,20)',
                                    }
                                }
                            });

                            const dataResidents = {
                                labels: labelResidents,
                                datasets: [
                                    {
                                        label: "Population Residents",
                                        data: residentsRatio,
                                        borderWidth: 2,
                                        backgroundColor: ["rgb(20,255,255)","rgb(255,20,255)","rgb(255,255,20)"],
                                        borderColor: "rgb(50,150,150)"
                                    }
                                ]
                            };
                            
                
                            
                            
                            new Chart("residentsRatio_pie_chart",
                                    {
                                        type: "pie",
                                        data: dataResidents,
                                        options: { 
                                            maintainAspectRatio: false,
                                            legend: {
                                                display: false
                                            },
                                            title: {
                                                display: true,
                                                text: ['Population by citizenship in Singapore'],
                                                fontFamily: "TrebuchetMS",
                                                fontSize: 24,
                                                fontColor: 'rgb(20,20,20)',
                                            }
                                        }
                                    });
            
                                    const dataAge = {
                                        labels: labelAge,
                                        datasets: [
                                            {
                                                label: "Population Age",
                                                data: ageRatio,
                                                borderWidth: 2,
                                                backgroundColor: ["rgb(20,255,255)","rgb(255,20,255)","rgb(255,255,20)"],
                                                borderColor: "rgb(50,150,150)"
                                            }
                                        ]
                                    };
                                    
                        
                                    
                                    
                                    new Chart("ageRatio_pie_chart",
                                            {
                                                type: "pie",
                                                data: dataAge,
                                                options: { 
                                                    maintainAspectRatio: false,
                                                    legend: {
                                                        display: false
                                                    },
                                                    title: {
                                                        display: true,
                                                        text: ['Population by age in Singapore'],
                                                        fontFamily: "TrebuchetMS",
                                                        fontSize: 24,
                                                        fontColor: 'rgb(20,20,20)',
                                                    }
                                                }
                                            });
                                            const dataFertility = {
                                                labels: labelFertility,
                                                datasets: [
                                                    {
                                                        label: "Population Fertility",
                                                        data: fertilityRate,
                                                        borderWidth: 2,
                                                        backgroundColor: ["rgb(20,255,255)","rgb(255,20,255)","rgb(255,255,20)","rgb(0,0,0)"],
                                                        borderColor: "rgb(50,150,150)"
                                                    }
                                                ]
                                            };
                                            
                                
                                            
                                            
                                            new Chart("fertilityRate_bar_chart",
                                                    {
                                                        type: "bar",
                                                        data: dataFertility,
                                                        options: { 
                                                            maintainAspectRatio: false,
                                                            legend: {
                                                                display: false
                                                            },
                                                            title: {
                                                                display: true,
                                                                text: ['The Comparison of Total Fertility Rate'],
                                                                fontFamily: "TrebuchetMS",
                                                                fontSize: 24,
                                                                fontColor: 'rgb(20,20,20)',
                                                            }
                                                        }
                                                    });
            
        
                

                    number = 0;
                    var animations = ['https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',
                      'https://imgur.com/6dxvnhr.gif',

                    ];
                    
                    
                     var refreshIntervalId = setInterval(function() {
                      image = document.getElementById('hiddenimageid');
                      image.src = animations[number];
                    },1)
                    
                    
                    function character() {
                    clearInterval(refreshIntervalId);
                      image = document.getElementById('hiddenimageid');
                      image.src = animations[number];
                    
                      console.log(number);
                      number++;
                    
                    
                    }