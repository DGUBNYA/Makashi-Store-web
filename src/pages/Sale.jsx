import React, { Fragment, useState, useEffect } from "react";
import "../csss/Sale.css";
import Clock from "../components/timer/Clock";
import Sale1 from "../IMAGE/SALE-IMAGE/sale.jpg";
import Sale2 from "../IMAGE/SALE-IMAGE/Sneakers_sale.jpg";
import Sale3 from "../IMAGE/SALE-IMAGE/share.jpg";

const Sale = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("January 30,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <Fragment>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <div className="sales">
        <div className="new_collection">
          <img
            src={Sale1}
            alt="Girl with a green hoodie from the new collection"
          />
          <div>
            <h3>New Collection</h3>
            <p>
              A collection of new unisex swatches are waiting for you in the
              store in a variety of colors that will warm you up this winter.
            </p>
          </div>
        </div>
        <div className="shoes-sale">
          <p>
            <span>20% off</span>
            <br /> on all shoes in the store
          </p>

          <img src={Sale2} alt="New colorful sneaker models" />
        </div>
        <div className="new_collection">
          <img src={Sale3} alt="Post_with_a_picture of the store" />
          <div>
            <h3>share and earn</h3>
            <p>
              Share our store on social networks, send us a screenshot and you
              can participate in the lottery. And whoever wins gets the product
              they choose for free with a courier delivered to their home
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sale;
