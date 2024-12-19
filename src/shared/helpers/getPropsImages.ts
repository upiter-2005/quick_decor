interface IImageObj {
    image: string,
    name: string
}

export const getPropsImages = async(params: IImageObj[]) => {
    console.log(params)
    const images: IImageObj[] = []
   
        for(const el of params) {
            await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/media/${el.image}`)
            .then(a => a.json())
            .then(a =>  images.push({
                    image: a.source_url,
                    name: el.name
                }
            ))
        }
    
        
    return  images 
}