let mainSection = document.querySelector("#main-section");
fetch("https://api.fbi.gov/wanted/v1/list")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.items);
        let wantedList = data.items;

        for (let wanted of wantedList){
            let title = document.createElement("div");
            title.id = "title";
            title.textContent = `${wanted.title}`;
            mainSection.append(title);
            
            let eyeColor = document.createElement("div");
            eyeColor.textContent = `Eyes: ${wanted.eyes}` 
            mainSection.append(eyeColor);

            let hairColor = document.createElement("div");
            hairColor.textContent = `Hair: ${wanted.hair}` 
            mainSection.append(hairColor);
        
            let race = document.createElement("div");
            race.textContent = `Race: ${wanted.race}` 
            mainSection.append(race);

        }
    })
    .catch((err)=>{
        console.log(err);
    })