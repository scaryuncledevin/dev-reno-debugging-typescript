import axios from "axios";

export async function getTwitterUsernameLength(username: string, authorization: string): Promise<number> {
  // Request data from the Github API
  const results = await axios.get(`https://api.github.com/users/${username}`, {
    headers:{
      Authorization: authorization
    }
  });

  // Get the data fromt he request results
  const user = results.data;

  // Get the twitter_username field and return the length
  return user.twitter_username.length;
}
