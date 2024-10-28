import chalk from "chalk";
import ghpages from "gh-pages";

const EXIT_SUCCESS = 0;
const EXIT_FAILURE = 1;

ghpages
  .publish("out", {
    message: "Deployed to GitHub Pages",
    nojekyll: true,
    dotfiles: false,
  })
  .then(() => {
    console.log(` ${chalk.green("✓")} Successfully deployed to GitHub Pages`);
    process.exit(EXIT_SUCCESS);
  })
  .catch((error) => {
    console.error(` ${chalk.red("✗")} Error deploying to GitHub Pages:`, error);
    process.exit(EXIT_FAILURE);
  });
