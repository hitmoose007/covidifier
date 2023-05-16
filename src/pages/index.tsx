import Description from "../components/Description";
import ImageUploader from "../components/Layout/ImageUploader/ImageUploader";
import Layout from "../components/Layout/Layout";
import Particles from "../components/Particles";
export default function Home() {
  return (
    <>
      <Particles />
      <Layout>
        {/* <Particles/> */}
        <div className='flex  justify-between '>
          <Description
            header='How to Use it'
            topDescription='Just Click on the Image Icon and select your Image. Our Servers deployed on the FAST api will deliviver results to you in no time.'
            bottomDescription='We will display the results telling you if you have COVID or not.'
          />
          <ImageUploader />
          <Description
            header='How do we do it?'
            topDescription=' It involves data collection, preprocessing, and the implementation of four classifiers: Random Forests, Support Vector Machines (SVMs), Neural Networks, and K-Nearest Neighbors (KNN). The classification system will be accessible through a front-end built with Next.js, allowing users to upload lung images and receive a diagnosis. '
            bottomDescription='The expected accuracy is high, with the models trained on a large dataset and evaluated using appropriate metrics.'
          />
        </div>
        {/* <ImageUploader
        /> */}
      </Layout>
    </>
  );
}
