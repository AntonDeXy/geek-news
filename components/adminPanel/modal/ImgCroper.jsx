import React, {useRef, useState} from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/lib/ReactCrop.scss'
import {image64toCanvasRef,
  extractImageFileExtensionFromBase64,
  base64StringtoFile,
  downloadBase64File} from '../../common/ResuableUtils'

function CropDemo({ src }) {
  const [crop, setCrop] = useState({ aspect: 16 / 9 })
  const imagePreviewCanvasRef = useRef(null)
  const handleImageLoaded = (image) => {
    // console.log(image)
  }
  const handleOnCropComplete = (crop, pixelCrop) => {
    // console.log(crop, pixelCrop)
    const canvasRef = imagePreviewCanvasRef.current
    const {imgSrc} = src
    image64toCanvasRef(canvasRef, imgSrc, pixelCrop)
  }
  const handleDownloadClick = (event) => {
    event.preventDefault()
    const canvasRef = imagePreviewCanvasRef.current
    const {imgSrc} = src
    const fileExtension = extractImageFileExtensionFromBase64(imgSrc)
    const imageData64 = canvasRef.toDataURL('image/' + fileExtension)

    const myFileName = "previewFile." + fileExtension
    const myNewCroppedFile = base64StringtoFile(imageData64, myFileName)
    console.log(myNewCroppedFile)
    downloadBase64File(imageData64, myFileName)
  }
  return (
    <>
      <ReactCrop src={src}
      crop={crop}
      onImageLoaded={handleImageLoaded}
      onComplete={handleOnCropComplete}
      onChange={newCrop => setCrop(newCrop)} />
      <br/>
      <p>Prewie Canvas Crop</p>
      <canvas ref={imagePreviewCanvasRef}> </canvas>
      <br/> 
      <button onClick={handleDownloadClick}>Download</button>
    </>
  )
}

export default CropDemo