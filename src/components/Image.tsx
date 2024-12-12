import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return (
        <Image ref={ref} {...props} />
      )
    }
  );
  
  const MotionComponent = motion(ExoticImage)