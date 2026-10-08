import classes from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <h1>Women's Healthcare Finder</h1>
        <h2 className={classes.header2}>An app built for women, by women</h2>
      </header>
      <p className={classes.paragraph}> The Women's Healthcare Finder App was originally created during my Code First Girls Degree, which I completed in July 2026. During the course, I was tasked with building a full-stack app within a team of six over the course of a few weeks.
        <br />
        This included coming up with the idea, designing wireframes, building the front end and back end, creating a database, implementing an API, and designing tests for the app. </p>

      <p className={classes.paragraph}> The original idea we came up with was to build an app that would help women find healthcare services and resources in their local area. We wanted to create a platform that would make it easier for women to access the care they need, while also providing them with useful information and support along the way. </p>

      <p className={classes.paragraph}> We particularly wanted to help women who may face barriers to accessing healthcare, such as those living in rural areas or those with limited financial resources. As we started developing the idea, we faced a few challenges. One of the biggest was collecting enough data in rural areas. We found that there often wasn't enough information available, which meant that searches could end up returning very few or even no results. </p>

      <p className={classes.paragraph}> After discussing this further, we decided to expand our focus and cover more of the UK, with a particular focus on larger towns and cities where more data was available. This allowed us to create a more useful search experience while still working towards our original goal of making healthcare services easier to find and access. </p>
      
      <p className={classes.paragraph}> Since then, I have continued to develop the app independently. I've added many new features and pages, and I've also migrated the original database to PostgreSQL with PostGIS to improve location-based searching. The app continues to evolve, and I am committed to ongoing development and improvements. I look forward to continuing to build on the original idea and finding new ways to make the app more useful and accessible! </p>
    </div>
  );
}
