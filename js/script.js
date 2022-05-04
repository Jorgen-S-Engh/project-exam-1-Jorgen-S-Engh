const container = document.querySelector(".container");



async function getApi() {
    try {
        const response = await fetch ("https://jorgeneksamen2022.online/wp-json/wp/v2/posts/");

        const json = await response.json();
        console.log(json)
        

        for (let i = 0; i < json.length; i++){
            console.log(json[i])
            const headline = (json[i].title.rendered)


            container.innerHTML += `
                                     <h2>${headline}</h2>`
        }
        
        console.log(json[0])
        const title = (json[0].title)
        console.log(json[0].content.rendered)



        
        
    }

    catch(err){
        console.log(err);
    }

}

getApi();


