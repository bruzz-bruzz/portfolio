
type ResponseType = {
  rating: number;
  rank: string;
}

export default async function retrieveCodeforcesData(username: string): Promise<ResponseType | null> {
  try {
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
    const data = await response.json();
    if (data.status !== "OK" || !data.result?.length) {
      return null;
    }
    const user = data.result[0];
    const { rating, rank } = user;
    return {
      rating: rating || 0,
      rank: rank || "Unrated",
    };
  } catch (error) {
    return null;
  }
}