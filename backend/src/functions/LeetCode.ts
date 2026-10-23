import axios from "axios";

type acSub = {
    difficulty:string,
    count:number
}
type ResponseType = {
  profileRank:number,
  acSubmissionNum:acSub[];
  contestRanking:number;
  contestRating:number,
  contestPercent:number
}

export default async function retrieveLeetcodeData(username: string): Promise<ResponseType | null> {
  const query = `
  query userProblemsSolved($username: String!) {
    userContestRanking(username: $username) {
      rating
      globalRanking
      topPercentage
    }
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

  try {
    const response = await axios.post(
      "https://leetcode.com/graphql",
      { query, variables: { username } },
      { headers: { "Content-Type": "application/json" } }
    );
    const data = response.data.data;
    if (!data || !data.matchedUser) {
      return null
    }
    const finalRes = {
        profileRank: data.matchedUser.profile.ranking,
        acSubmissionNum: data.matchedUser.submitStatsGlobal.acSubmissionNum,
        contestRanking:data.userContestRanking === null ? null: data.userContestRanking.globalRanking,
        contestRating:data.userContestRanking === null ? null: data.userContestRanking.rating,
        contestPercent:data.userContestRanking === null ? null: data.userContestRanking.topPercentage
    }
    return finalRes

  } catch (err) {
    return null
  }

}