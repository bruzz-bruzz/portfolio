import axios from "axios";
import * as cheerio from "cheerio";

type ResponseType = {
  rating: number;
  rank: string;
}

export default async function retrieveAtcoderData(username: string): Promise<ResponseType | null> {

  try {
    const { data } = await axios.get(`http://atcoder.jp/users/${username}`);
    const $ = cheerio.load(data);
    const dlTable = $(".dl-table");
    const ratingCell = dlTable.find("th:contains('Rating')").next("td").text();
    const ratingMatch = ratingCell.match(/[\n\r]\s*(\d+)/);
    let rating:any = ratingMatch ? ratingMatch['input']?.match(/\d+/g) : ['NaN'];
    rating = rating[0]
    const rank = dlTable.find("th:contains('Rank')").next("td").text().trim();
    return (
      {
        rating: parseInt(rating, 10) || 0,
        rank: rank || "Unrated",
      } as ResponseType
    )

  } catch (error) {
    return null;
  }
}