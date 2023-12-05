"use client";

import Image from "next/image";
import { useState } from "react";

import kep1 from "../../assets/kep1.jpg";
import kep2 from "../../assets/kep2.jpg";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import tulip from "../../assets/tulip.jpg";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <main className="">
      <h1>Jóéjt bogaram ❤ </h1>
      <div className="flex justify-center">
        <p
          className="p-2 rounded-xl border-2 border-purple-600 bg-purple-400"
          onClick={() => handleClick()}
        >
          Kattints a meglepiért
        </p>
      </div>

      {show ? <Image src={tulip} alt="asd" /> : ""}

      <Image src={gif2} alt="asd" />
      <Image src={gif1} alt="asd" />
      <div className="flex">
        <Image src={kep2} alt="asd" />
        <Image src={kep1} alt="asd" />
      </div>
    </main>
  );
}
