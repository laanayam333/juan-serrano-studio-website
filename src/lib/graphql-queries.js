import { gql } from 'graphql-request';

export const projectQuery = gql`
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			title
			slug
			year
			images {
				alt
				url(transformation: { document: { output: { format: webp } } })
			}
			description
			materials
			year
			price
			stock
		}
	}
`;

export const projectsQuery = gql`
	query GetProjects {
		projects(orderBy: priority_ASC) {
			id
			title
			slug
			year
			images {
				alt
				url(transformation: { document: { output: { format: webp } } })
			}
		}
	}
`;

export const aboutQuery = gql`
	query GetAbout {
		abouts {
			id
			name
			bio {
				html
			}
			profilePicture {
				alt
				url(transformation: { document: { output: { format: webp } } })
			}
		}
	}
`;

export const contactQuery = gql`
	query GetContact {
		contacts {
			email
			phone
			instagram
		}
	}
`;

export const siteMetadataQuery = gql`
	query GetProjectMetadatas {
		projectMetadatas {
			name
			siteUrl
			description
			openGraphDefaultImage {
				url(transformation: { image: { resize: { width: 1200, height: 630, fit: clip } } })
			}
		}
	}
`;

// // const PROJECT_FRAGMENT = gql`
// // 	fragment ProjectDetails on Project {
// // 		name
// // 		slug
// // 		description
// // 		tags
// // 		demo
// // 		sourceCode
// // 		image {
// // 			url
// // 		}
// // 	}
// // `;

// // export const projectsQuery = gql`
// // 	${PROJECT_FRAGMENT}
// // 	query GetProjects {
// // 		projects {
// // 			...ProjectDetails
// // 		}
// // 	}
// // `;

// // export const projectQuery = gql`
// // 	${PROJECT_FRAGMENT}
// // 	query GetProject($slug: String!) {
// // 		project(where: { slug: $slug }) {
// // 			...ProjectDetails
// // 		}
// // 	}
// // `;

// // const POST_FRAGMENT = gql`
// // 	fragment PostDetails on Post {
// // 		title
// // 		slug
// // 		date
// // 		content
// // 		tags
// // 		coverImage {
// // 			url
// // 		}
// // 		authors {
// // 			name
// // 		}
// // 	}
// // `;

// // export const postsQuery = gql`
// // 	${POST_FRAGMENT}
// // 	query GetPosts {
// // 		posts {
// // 			...PostDetails
// // 		}
// // 	}
// // `;

// // export const postQuery = gql`
// // 	${POST_FRAGMENT}
// // 	query GetPost($slug: String!) {
// // 		post(where: { slug: $slug }) {
// // 			...PostDetails
// // 		}
// // 	}
// // `;

// // export const socialsQuery = gql`
// // 	query GetSocials {
// // 		socials {
// // 			twitterUrl
// // 			youTubeUrl
// // 			facebookUrl
// // 		}
// // 	}
// // `;

// // export const siteMetadataQuery = gql`
// // 	query GetProjectMetadatas {
// // 		projectMetadatas {
// // 			name
// // 			siteUrl
// // 			description
// // 			openGraphDefaultImage {
// // 				url(transformation: { image: { resize: { width: 1200, height: 630, fit: clip } } })
// // 			}
// // 		}
// // 	}
// // `;
