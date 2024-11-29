export const getProductImages = async(params: number[]) => {
    const images: string[] = []
        for(const id of params) {
            await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/media/${id}`)
            .then(a => a.json())
            .then(a =>  images.push(a.source_url))
        }
    return  images 
}