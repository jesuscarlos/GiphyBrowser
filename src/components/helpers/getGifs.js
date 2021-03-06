
export const getGif = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3GIkxkX9gKCGAPpcdEsfP2T9zT7RcMC2&q=${ encodeURI( categoria ) }&limit=20`;

    const resp = await fetch( url );

    const {data} = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })

    return(gifs);

}