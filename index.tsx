import { useLayoutEffect } from "react";
import Image from "next/image";

import { useManageBrowserTab } from "portfolio/hooks/ManageBrowserTab";

import background_1 from "./img/background_1.jpg";
import background_2 from "./img/background_2.jpg";
import background_3 from "./img/background_3.jpg";

import Services_4 from "./img/Services_4.png";
import Services_4_webp from "./img/Services_4.webp";

import about_us_image from "./img/about_us_image.png";
import about_us_image_webp from "./img/about_us_image.webp";

import ic_round_location from "./img/ic_round-location-on.svg";
import ic_round_call from "./img/ic_round-call.svg";
import ic_round_mail from "./img/ic_round-mail.svg";

import MainLogo from "./img/logo.svg";
import simpleLogoIcon from "./img/simple_logo.ico";
import CompanyNameIcon from "./img/company_name.svg";

import classes from "./RoundRockBicyckeRepair.module.scss";
import cn from "classnames";

export const RoundRockBicycleRepair = () => {
  const { updateTabIcon } = useManageBrowserTab();

  useLayoutEffect(() => {
    console.log("simpleLogoIcon", simpleLogoIcon);
    updateTabIcon(simpleLogoIcon);
  }, [updateTabIcon]);

  return (
    <>
      <main>
        <div
          className={classes.mainSection}
          style={{
            background: `url("${background_1.src}") center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <header className={classes.header}>
            <div className={classes.container}>
              <div className={classes.logo}>
                <MainLogo />
              </div>
            </div>
          </header>

          <div className={classes.container}>
            <div className={classes.mainSection__content}>
              <div className={classes.mainSection__content_title}>
                <h3 className={classes.title}>What is Lorem Ipsum</h3>
              </div>
              <p
                className={cn(
                  classes.mainSection__content_description,
                  classes.text
                )}
              >
                Welcome to our bicycle repair site, where we`re dedicated to
                keeping your bike in top shape. We understand how important your
                bike is to you, whether you`re a serious cyclist, a commuter, or
                a weekend warrior. That`s why we offer a range of repair
                services to keep your bike running smoothly and safely.
              </p>
              <button
                className={cn(
                  classes.mainSection__content_helpBtn,
                  classes.btn
                )}
              >
                Help Me
              </button>
            </div>
          </div>
        </div>

        <div className={classes.services}>
          <div className={classes.container}>
            <div className={classes.services__block}>
              <div className={cn(classes.services__block_title, classes.title)}>
                Services for you
              </div>
              <div className={cn(classes.services__block_text, classes.text)}>
                Repair and maintenance
              </div>
            </div>
            <div className={classes.services__container}>
              <ul className={classes.services__list}>
                <li className={classes.services__list_item}>
                  <div className={classes.service}>
                    <div className={classes.service_img}>
                      <picture>
                        <source
                          srcSet={`${Services_1_webp}`}
                          type="image/webp"
                        />
                        <Image src={Services_1} alt="" />
                      </picture>
                    </div>
                    <h5 className={classes.service_name}>Tune-up</h5>
                    <p className={classes.service_description}>
                      A tune-up is a comprehensive service that includes
                      adjustments to your bike`s brakes, gears, and other
                      components, as well as cleaning and lubrication. This
                      service is recommended at least once a year to keep your
                      bike running smoothly and prevent future issues.
                    </p>
                  </div>
                </li>
                <li className={classes.services__list_item}>
                  <div className={classes.service}>
                    <div className={classes.service_img}>
                      <picture>
                        <source
                          srcSet={`${Services_2_webp}`}
                          type="image/webp"
                        />
                        <Image src={Services_2} alt="" />
                      </picture>
                    </div>
                    <h5 className={classes.service_name}>Flat tire repair</h5>
                    <p className={classes.service_description}>
                      Getting a flat tire is a common problem for cyclists, but
                      it doesn`t have to be a major setback. We can repair your
                      tire quickly and get you back on the road in no time. If
                      your tire is beyond repair, we can also replace it with a
                      new one.
                    </p>
                  </div>
                </li>
                <li className={classes.services__list_item}>
                  <div className={classes.service}>
                    <div className={classes.service_img}>
                      <picture>
                        <source
                          srcSet={`${Services_3_webp}`}
                          type="image/webp"
                        />
                        <Image src={Services_3} alt="" />
                      </picture>
                    </div>
                    <h5 className={classes.service_name}>Brake adjustment</h5>
                    <p className={classes.service_description}>
                      Properly functioning brakes are essential for your safety
                      while cycling. Our technicians can adjust your brakes to
                      ensure that they`re working effectively and provide a
                      smooth, responsive braking experience.
                    </p>
                  </div>
                </li>
                <li className={classes.services__list_item}>
                  <div className={classes.service}>
                    <div className={classes.service_img}>
                      <picture>
                        <source
                          srcSet={`${Services_4_webp}`}
                          type="image/webp"
                        />
                        <Image src={Services_4} alt="" />
                      </picture>
                    </div>
                    <h5 className={classes.service_name}>Chain replacement</h5>
                    <p className={classes.service_description}>
                      A worn or damaged chain can cause shifting problems and
                      reduce the efficiency of your pedaling. We can replace
                      your chain with a new one, ensuring that your bike is
                      performing at its best. We can also check and adjust your
                      chain`s tension and lubrication to prolong its lifespan.
                    </p>
                  </div>
                </li>
              </ul>

              <div className={classes.services__container_button}>
                <button className={cn(classes.btn, classes.btnShadow)}>
                  Get discount 10%
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={classes.aboutUs}
          style={{
            background: `url("${background_2.src}") center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className={classes.container}>
            <div className={classes.aboutUs__head}>
              <div className={cn(classes.aboutUs__head_title, classes.title)}>
                About US
              </div>
              <div className={cn(classes.aboutUs__head_text, classes.text)}>
                We are a big family
              </div>
            </div>
            <div className={classes.aboutUs__content}>
              <div className={classes.aboutUs__content_img}>
                <picture>
                  <source srcSet={`${about_us_image_webp}`} type="image/webp" />
                  <Image src={about_us_image} alt="" />
                </picture>
              </div>
              <div className={classes.aboutUs__content__info}>
                <div className={classes.aboutUs__content__info_title}>
                  <CompanyNameIcon />
                </div>
                <div className={classes.aboutUs__content__info_description}>
                  <p className={classes.text}>
                    Round Rock Bicycle Repair is your go-to source for expert
                    bike repairs and maintenance in the Round Rock area. Our
                    skilled technicians are passionate about bikes and dedicated
                    to keeping your ride in top condition. From minor
                    adjustments to major repairs, we have the tools and
                    expertise to get your bike back on the road quickly and
                    safely. We pride ourselves on providing high-quality service
                    at affordable prices, so you can enjoy your ride with peace
                    of mind. Contact us today to schedule an appointment and
                    experience the Round Rock Bicycle Repair difference!
                  </p>
                </div>
                <div className={classes.aboutUs__content__info_btn}>
                  <button className={cn(classes.btn, classes.btnShadow)}>
                    Get discount 10%
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={classes.contactUs}
          style={{
            background: `url("${background_3.src}") center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className={classes.container}>
            <div className={classes.contactUs__container}>
              <div className={classes.contactUs__head}>
                <div className={classes.contactUs__head}>
                  <div className={classes.contactUs__head_title}>
                    <h5 className={classes.title}>Contact Us</h5>
                  </div>
                  <div className={classes.contactUs__head_text}>
                    <p className={classes.text}>Leave a request</p>
                  </div>
                </div>
              </div>
              <div className={classes.contactUs__main}>
                <div className={classes.contactUs__main_form}>
                  <form onSubmit={() => false} className={classes.form}>
                    <label htmlFor="name">
                      <div className={classes.text}>Name</div>
                      <input type="text" name="name" />
                    </label>
                    <label htmlFor="email">
                      <div className={classes.text}>Email</div>
                      <input type="email" name="email" />
                    </label>
                    <div className={classes.messageContainer}>
                      <label htmlFor="message">
                        <div className={classes.text}>Message</div>
                      </label>
                      <textarea name="message"></textarea>
                    </div>
                    <button className={classes.btn}>Send</button>
                  </form>
                </div>
                <div className={classes.contactUs__main_contactList}>
                  <ul>
                    <li>
                      <Image src={ic_round_mail} alt="" />
                      <span className={classes.text}>test@gmail.com</span>
                    </li>
                    <li>
                      <Image src={ic_round_call} alt="" />
                      <span className={classes.text}>(303) 555-0105</span>
                    </li>
                    <li>
                      <Image src={ic_round_location} alt="" />
                      <span className={classes.text}>
                        2715 Ash Dr. San Jose, South Dakota 83475
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={classes.footerContainer}>
          <div className={classes.container}>
            <div
              className={classes.footer}
              dangerouslySetInnerHTML={{
                __html: `
									<a href="https://hva.gg" target={'_blank'}>
										Created by hva.gg
									</a>
									<span>©2023 </span>`,
              }}
            />
          </div>
        </footer>
      </main>
    </>
  );
};

export default RoundRockBicycleRepair;
