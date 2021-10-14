let nav = document.querySelector("#nav");
let header = document.querySelector("h3");

let logo = document.createElement("img");
logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/1200px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png";
logo.alt = "FBI Logo";
logo.id = "fbi-logo";

nav.prepend(logo)

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

            let bdayUsed = document.createElement("div");
            bdayUsed.id = "bday-used";
            bdayUsed.textContent = `Dates of Birth Used: ${wanted.dates_of_birth_used}`;
            personName.append(bdayUsed);

            let description = document.createElement("div");
            description.id = "description";
            description.textContent = `Description: ${wanted.description}` 
            title.append(description);

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

            let weight = document.createElement("div");
            weight.id = "weight";
            weight.textContent = `Weight: ${wanted.weight}` 
            title.append(weight);

            let imageThumb = document.createElement("img");
            imageThumb.src = wanted.images[0].large;
            imageThumb.alt = wanted.images[0].caption;
            imageThumb.id = "image-thumb";
            title.append(imageThumb);

            let emptyDiv = document.createElement("div");
            emptyDiv.id = "empty-div";
            title.append(emptyDiv);

            /* Event listener on the picture. For Warnings and Rewards. */
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