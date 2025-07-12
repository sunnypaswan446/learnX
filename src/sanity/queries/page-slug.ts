// import { groq } from "next-sanity";

// const pageSlugsQuery = groq`
//   *[_type == "page" && !(slug.current in ["index", "not-found"]) && !(_id in path('drafts.**'))] {
//     "slug": slug.current,
//     "updatedAt": _updatedAt,
//   }
// `;
// export default pageSlugsQuery;
