import PersonImage from "../public/images/person1.png";
import Image from "next/image";
import { useState } from "react";
import Form from "./form";

const Banner = () => {
  const [click, setClick] = useState(false);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="banner">
        <h5>
          <span>Dovranbek Turdievdan</span> 3 kunlik marafon
        </h5>
        <h2>
          Qanday qilib miyaning <br /> <b>defolt tizimini</b> ishlatib <br />{" "}
          maqsadga tezroq erishish mumkin
        </h2>
        <p>Marafonda siz:</p>
        <ul>
          <li>
            Maqsad qo'yishdan oldin <br /> qilishingiz kerak <br /> bo'lgan 3
            asosiy qadam!
          </li>
          <li>
            To'g'ri maqsad <br /> qo'yishning yangi usuli.
          </li>
          <li>
            Qanday qilib miyaning <br /> defolt tizimini ishlatish
          </li>
        </ul>
        <div
          style={{
            zIndex: "2",
          }}
          className="buttons"
        >
          <h1>BEPUL</h1>
          <div className="btns">
            <button onClick={() => setClick(!click)}>ПРИНЯТЬ УЧАСТИЕ</button>
            <h3>
              Места заканчиваются,
              <br /> регистрируйся скорее
            </h3>
          </div>
          {click ? <Form setClick={setClick} click={click} /> : null}
        </div>
      </div>
      <div className="person-image">
        <Image
          src={PersonImage}
          width={"600px"}
          height={"900px"}
          objectFit={"contain"}
          alt={"image"}
        />
      </div>
    </div>
  );
};
export default Banner;
