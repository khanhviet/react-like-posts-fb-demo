import "./App.scss";
import img1 from "./acc/1.jpeg";
import img2 from "./acc/number1.jpeg";
import ReactLikePostsFB from "./ReactLikePostsFB";
const images1 = [
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
];
const images2 = [
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
  img2,
];
const images3 = [
  img1,
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
];
const images4 = [
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
  img1,
  img2,
  img2,
];
const images5 = [
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
  img1,
  img2,
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
  img2,
];
const images6 = [
  "https://castdj-comingsoon.s3.amazonaws.com/khanhviet12121/posts/Sample_Video_1280x720_1mb_ffa3a53275.mp4",
  img1,
  img2,
  img1,
  img2,
  img2,
  img1,
  img2,
  img2,
  img2,
  img1,
  img2,
  img2,
];

function App() {
  return (
    <div className="App">
      <div className="container-photo-video">
        <h1>1</h1>
        <ReactLikePostsFB imagesOrVideos={images1} />
      </div>
      <br />

      <div className="container-photo-video">
        <h1>2</h1>

        <ReactLikePostsFB imagesOrVideos={images2} />
      </div>
      <br />

      <div className="container-photo-video">
        <h1>3</h1>

        <ReactLikePostsFB imagesOrVideos={images3} />
      </div>
      <br />

      <div className="container-photo-video">
        <h1>4</h1>

        <ReactLikePostsFB imagesOrVideos={images4} />
      </div>
      <br />
      <div className="container-photo-video">
        <h1>5</h1>

        <ReactLikePostsFB imagesOrVideos={images5} />
      </div>
      <br />

      <div className="container-photo-video">
        <h1>bigger 5</h1>

        <ReactLikePostsFB imagesOrVideos={images6} />
      </div>
      <br />
    </div>
  );
}

export default App;
