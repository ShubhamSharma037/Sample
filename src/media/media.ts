function importAllImages(r : __WebpackModuleApi.RequireContext){


    let images : {
        [key : string] : any
    }= {};
   
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });

    return images;
    

}



export default importAllImages;