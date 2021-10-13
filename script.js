let mainSection = document.querySelector("#main-section");
fetch("https://api.fbi.gov/wanted/v1/list")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.items);
        let wantedList = data.items;

        for (let wanted of wantedList){
            let title = document.createElement("div");
            title.id = "title";
            mainSection.append(title);

            let personName = document.createElement("div");
            personName.id = "person-name";
            personName.textContent = `${wanted.title}`;
            title.append(personName);

            let eyeColor = document.createElement("div");
            eyeColor.id = "eye-color";
            eyeColor.textContent = `Eyes: ${wanted.eyes}` 
            title.append(eyeColor);

            let hairColor = document.createElement("div");
            hairColor.id = "hair-color";
            hairColor.textContent = `Hair: ${wanted.hair}` 
            title.append(hairColor);
        
            let race = document.createElement("div");
            race.id = "race";
            race.textContent = `Race: ${wanted.race}` 
            title.append(race);

            let imageThumb = document.createElement("img");
            imageThumb.src = wanted.images[0].large;
            imageThumb.alt = wanted.images[0].caption;
            imageThumb.id = "image-thumb";
            title.append(imageThumb);

            let emptyDiv = document.createElement("div");
            emptyDiv.id = "empty-div";
            title.append(emptyDiv);

            /* Event listener on the picture */
            imageThumb.addEventListener("click", (e)=>{
                if (wanted.warning_message === null){
                    emptyDiv.textContent = `WARNING: none`
                    emptyDiv.style.color = "black";
                } else {
                    if (wanted.reward_text === null){
                        emptyDiv.textContent = `WARNING: ${wanted.warning_message}`;
                    } else {
                        window.alert(`REWARD: ${wanted.reward_text}`);
                        emptyDiv.textContent = `WARNING: ${wanted.warning_message}`;
                    }
                }
            })
        }
    })
    .catch((err)=>{
        console.log(err);
    })