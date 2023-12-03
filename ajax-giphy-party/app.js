const sbmForm = document.querySelector('#form-container')
const apiKey = '1y6UtAaJOOdbeagVZgBgSwkZM28VqHsF'
const GIFSection = document.querySelector('#gif-container');
const removeBtn = document.getElementById('remove-button');

//add event listener to submit button
sbmForm.addEventListener('click', (e) =>{
    e.preventDefault();
    const searchText = document.querySelector('#search-text')
    if(e.target.id === "submit-button"){
        console.dir(e)
        const gifInput = searchText.value;
        searchGIF(gifInput);
        searchText.value = '';
    }
})


// - Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
async function searchGIF(text){
   const res =  await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${text}`);
   console.log(res)
   let resLink = res.data.data.images.original.url;
   appendGIF(resLink);
}


// - Once the Giphy API has responded with data, append the GIF to the page
function appendGIF(url){
    const newGIF = document.createElement('img');
    console.log(url);
    newGIF.src = url;
    GIFSection.append(newGIF);
}

// - Allow the user to remove all of the GIFs by clicking a buttonbitly_gif_url
removeBtn.addEventListener('click', (e) =>{
    GIFSection.replaceChildren('');
})
