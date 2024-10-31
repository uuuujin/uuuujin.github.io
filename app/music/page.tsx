import {Metadata} from "next";
import Link from "next/link";

export const metadata:Metadata = {
  title: '🎶🎵🎤🎧🎶🎵',
}

const IdentityAuthiFrame = () => {
  return (
    <div>
      <iframe id="ytplayer" width="640" height="360"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              src={'https://www.youtube.com/embed/NbKH4iZqq1Y/version=3?autoplay=1&amp;loop=1&amp;playlist=NbKH4iZqq1Y'}>

      </iframe>
    </div>
  );
};

export default IdentityAuthiFrame;