// Destructing the object from its original name from databse so that if we want we can give name according to us.
import { Timestamp } from "firebase/firestore";
const timeObj = new Timestamp();
export const mapPost = (newsArticles) => {
  const { title, postedOn, slug, bannerImage, category, description } = newsArticles;
  const namePost = {
    title: title ?? "",
    postedOn: postedOn?.toDate().toDateString() ?? Timestamp.now(),
    slug: slug ?? "",
    bannerImage: bannerImage ?? "",
    category: category ?? "",
    description: description ?? "",
  };
  return namePost;
};
