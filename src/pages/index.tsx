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
          <Description />
          <ImageUploader />
          <Description />
        </div>
        {/* <ImageUploader
        /> */}
      </Layout>
    </>
  );
}
