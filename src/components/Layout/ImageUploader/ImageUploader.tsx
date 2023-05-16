import React from "react";
import ImageUploading from "react-images-uploading";
import { TbCameraPlus } from "react-icons/tb";
import { useEffect } from "react";
import Confetti from "react-confetti";
type Props = {};

const ImageUploader = (props: Props) => {
  const [images, setImages] = React.useState([]);
  const [receivedData, setReceivedData] = React.useState(false);
  const [isPositive, setIsPositive] = React.useState(false);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  useEffect(() => {
    if (images.length === 0) return;
    const fetchData = async () => {
      try {
        // console.log(images[0].data_url);
        // make fetch request
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_API_ROUTE, {
          method: "POST",
          body: JSON.stringify({
            image: images[0].data_url,
          }),
        });

        const data = await response.json();

        setReceivedData(true);
        if (data.result === true) {
          setIsPositive(true);
          setTimeout(() => {
          setReceivedData(false);
            setIsPositive(false);
          }, 3000);
        }

        else {
          setIsPositive(false);
          setTimeout(() => {
            setReceivedData(false);
            setIsPositive(false);
          }, 3000);
        }

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [images]);

  return (
    <>
      <div className='flex flex-col justify-center h-40 '>
        <ImageUploading
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey='data_url'
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className='upload__image move-up rounded-full mt-52 '>
              <p className='text-white text-2xl font-bold text-center'>
                Upload Image
              </p>
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className=' rounded-full  '
              >
                <TbCameraPlus size={200} color={"white"} className='' />
                Upload
              </button>
              {/* &nbsp; */}
              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              {/* {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <img src={image["data_url"]} alt='' width='100' />
                  <div className='image-item__btn-wrapper'>
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))} */}
            </div>
          )}
        </ImageUploading>
        <div className="">
      {receivedData && isPositive &&<> 
        <p 

        style={{ textShadow: "0 0 20px #FFFFFF" }}
            className='text-white bounce-in text-3xl font-bold text-center'>
           You are Positive
            </p>
      <Confetti />
      </>
      }
      {receivedData && !isPositive &&<> 
        <p
            
        style={{ textShadow: "0 0 20px #FFFFFF" }}
            className='text-white bounce-in text-3xl font-bold text-center'>
           You are Negative!!
            </p>
      <Confetti />
      </>
      }</div>
      </div>
    </>
  );
};

export default ImageUploader;
