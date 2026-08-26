import classes from "./ResourcesPage.module.css";
import fertilityIcon from "../assets/images/fertility-icon.svg";
import menopauseIcon from "../assets/images/menopause-icon.svg";
import sexualHealthIcon from "../assets/images/sexualhealth-icon.svg";
import contraceptionIcon from "../assets/images/contraception-icon.svg";
import pregnancyIcon from "../assets/images/pregnancy-icon.svg";
import generalHealthIcon from "../assets/images/generalhealth-icon.svg";

const resources = [
  {
    title: "Fertility Support",
    image: fertilityIcon,
    url: "https://www.nhs.uk/conditions/infertility/",
  },
  {
    title: "Menopause Support",
    image: menopauseIcon,
    url: "https://www.nhs.uk/womens-health/menopause/",
  },
  {
    title: "Sexual Health",
    image: sexualHealthIcon,
    url: "https://www.nhs.uk/womens-health/sexual-health/",
  },
  {
    title: "Contraception",
    image: contraceptionIcon,
    url: "https://www.nhs.uk/contraception/",
  },
  {
    title: "Pregnancy & Maternity",
    image: pregnancyIcon,
    url: "https://www.nhs.uk/pregnancy/",
  },
  {
    title: "Women’s General Health",
    image: generalHealthIcon,
    url: "https://www.nhs.uk/womens-health/",
  },
];

export default function ResourcesPage() {
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <h1>Women’s Health Resources</h1>
        <p className={classes.subtitle}>
          Explore trusted NHS guidance on common women’s health topics and support options.
        </p>
      </header>

      <div className={classes.grid}>
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className={classes.card}
            aria-label={`Open NHS information about ${resource.title}`}
          >
            <div className={classes.imageWrap}>
              <img
                src={resource.image}
                alt=""
                className={classes.icon}
              />
            </div>
            <span className={classes.banner}>{resource.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
