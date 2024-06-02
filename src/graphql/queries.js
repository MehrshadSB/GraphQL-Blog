import { gql } from "@apollo/client";

const GET_POSTS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      slug
      title
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_USERS_INFO = gql`
  query {
    authors {
      name
      slug
      id
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        slug
        title
        coverPhoto {
          url
        }
      }
    }
  }
`;

const GET_POST_DATA = gql`
  query getPostData($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          avatar {
            url
          }
          name
          field
        }
      }
      slug
      title
      id
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

const GET_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_POSTS_INFO,
  GET_USERS_INFO,
  GET_AUTHOR_INFO,
  GET_POST_DATA,
  GET_COMMENTS,
};
