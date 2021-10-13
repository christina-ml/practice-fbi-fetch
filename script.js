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
            
            let div = document.createElement("div");
            div.textContent = `eyes: ${wanted.eyes} hair: ${wanted.hair}` 
            mainSection.append(div);

            let div2 = document.createElement("div");
            div2.textContent = `` 
            mainSection.append(div2);

        }
    })
    .catch((err)=>{
        console.log(err);
    })