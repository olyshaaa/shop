import React from 'react'

const ImagePreload =({src})=>{
    return <link rel='preload' as='image' href={src}/>
}

export default ImagePreload;