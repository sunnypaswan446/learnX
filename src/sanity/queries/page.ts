// import { groq } from "next-sanity";

// import footerDocumentFields from "@/sanity/queries/fields/documents/footer";
// import headerDocumentFields from "@/sanity/queries/fields/documents/header";
// import pageDocumentFields from "@/sanity/queries/fields/documents/page";


// const pageQuery = groq`
//   {
//     "header": *[_type == "header"][0] {
//       ${headerDocumentFields},
//     },
     
//     "page": *[_type == "page" && slug.current == $slug][0] {
//       ${pageDocumentFields},
//     },
//     "footer": *[_type == "footer"][0] {
//       ${footerDocumentFields},
//     },
    
//   }
// `;
// export default pageQuery;
