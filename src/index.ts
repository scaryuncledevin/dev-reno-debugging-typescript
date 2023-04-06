import { getTwitterUsernameLength } from "./github";
import { average } from "./utils";

// Define the list of users to query data for
const githubUsernames = ['google', 'apple', 'scaryuncledevin'];

(async () => {
  // Use arr.map() to make an array of query promises
  const twitterUsernameLengthPromises = githubUsernames.map(githubUsernames => getTwitterUsernameLength(githubUsernames, 'token TOKEN_GOES_HERE'));

  // Wait for all the promises to return
  const twitterUsernameLengths = await Promise.all(twitterUsernameLengthPromises);

  // Average the total length of the usernames
  const averageTwitterUsernameLength = average(twitterUsernameLengths);

  console.log(averageTwitterUsernameLength);
})();