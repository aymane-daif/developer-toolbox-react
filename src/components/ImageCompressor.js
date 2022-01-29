import React, { useRef, useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import imageCompression from 'browser-image-compression';

function ImageCompressor() {
  const [compressedImage, setCompressedImage] = useState(false);
  const link = useRef(null);

  async function handleImageUpload(event) {
    let file = event.target.files[0];
    console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
    const options = {
      maxSizeMB: 3,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      );
      console.log(compressedFile);

      setCompressedImage(compressedFile);
    } catch (error) {
      console.log(error);
    }
  }

  const downloadImage = () => {
    const url = window.URL.createObjectURL(compressedImage);
    link.current.href = url;
    link.current.setAttribute('download', compressedImage.name);
    link.current.click();
    link.current.href = '';
  };

  return (
    <Box>
      <Input
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        border='none'
      />
      <Button mt={4} onClick={downloadImage}>
        Download compressed image
      </Button>
      <a ref={link}></a>
    </Box>
  );
}

export default ImageCompressor;
