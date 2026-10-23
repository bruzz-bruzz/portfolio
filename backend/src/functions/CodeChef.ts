import axios from "axios";
import * as cheerio from "cheerio"


type ResponseType = {
  normalRating:number;
  normalStars:string;
  normalRankCountry:number;
  normalRankGlobal:number;
  dsaRating:number;
  dsaRankCountry:number;
  dsaRankGlobal:number
}
export default async function retrieveCodechefData(username: string): Promise<ResponseType | null> {
  try {
    const { data } = await axios.get(
      `https://www.codechef.com/users/${username}`
    );
    const $ = cheerio.load(data);
    const rating = $(".rating-number").first().text().trim();
    const stars = $(".rating-star").first().text().trim();
    const dsaRating = $(".rating-number").eq(1).text().trim();
    const normalRanks = $(".rating-ranks").first().text().trim()?.match(/\d+/g)
    const dsaRanks = $(".rating-ranks").eq(1).text().trim()?.match(/\d+/g);
    const normalRank = normalRanks === null ? ['NaN','NaN'] : [normalRanks[0],normalRanks[1]]
    const dsaRank = dsaRanks === null ? ['NaN','NaN'] : [dsaRanks[0],dsaRanks[1]]
    return {
      normalRating: parseInt(rating, 10) || 0,
      normalStars: stars,
      normalRankGlobal:parseInt(normalRank[0],10) || 0,
      normalRankCountry:parseInt(normalRank[1],10) || 0,
      dsaRating:parseInt(dsaRating,10) || 0,
      dsaRankGlobal:parseInt(dsaRank[0],10) || 10,
      dsaRankCountry:parseInt(dsaRank[1],10) || 10,
    }; 

  } catch (error) {
    return null;
  }
}