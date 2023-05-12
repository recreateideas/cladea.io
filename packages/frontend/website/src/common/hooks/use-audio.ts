import { useState, useEffect } from "react";

interface Props {
  sound: string;
  loop?: boolean;
}
export const useAudio = (props: Props) => {
  const { sound, loop } = props;
  const [audio] = useState(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = (is?: boolean) => {
    setIsPlaying(is !== undefined ? is : !isPlaying);
  };

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(!!loop));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(!!loop));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [toggle];
};
