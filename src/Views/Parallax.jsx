import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader, Grid } from "@chakra-ui/react";

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const movementText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const movement = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="Parallax flex flex-col justify-center" ref={ref}>
      {/* <motion.h1
        style={{ y: movementText }}
        className="z-2 absolute text-7xl text-white font-extrabold top-[50%] left-[38%]"
      >
        My Projects
      </motion.h1> */}
      {/* <motion.div className="mountains"></motion.div> */}
      <motion.div style={{ y: movement }} className="planets"></motion.div>
      <motion.div style={{ x: movement }} className="stars"></motion.div>
      <Grid
        className="container mx-auto"
        zIndex={4}
        gridTemplateColumns="repeat(3, 1fr)"
        gap={5}
      >
        <Card bg="primary.500">
          <CardHeader>Heading 1</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            perferendis, voluptas similique quod cumque adipisci a sapiente nisi
            ad earum ratione, numquam possimus quidem dolor in nemo soluta
            ducimus expedita.
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card bg="primary.500">
          <CardHeader>Heading 1</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            perferendis, voluptas similique quod cumque adipisci a sapiente nisi
            ad earum ratione, numquam possimus quidem dolor in nemo soluta
            ducimus expedita.
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card bg="primary.500">
          <CardHeader>Heading 1</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            perferendis, voluptas similique quod cumque adipisci a sapiente nisi
            ad earum ratione, numquam possimus quidem dolor in nemo soluta
            ducimus expedita.
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Grid>
    </div>
  );
};

export default Parallax;
