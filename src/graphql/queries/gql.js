import gql from 'graphql-tag'

export const reservationsQuery = gql`
  query reservations($arrivalDate: String!) {
    reservations(where: { arrivalDate: $arrivalDate }) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const upvoteMutation = gql`
  mutation upvotePost($postId: Int!, $inVote: Int) {
    upvotePost(postId: $postId, inVote: $inVote) {
      id
      title
      votes
      author {
        lastName
      }
    }
  }
`

export const upvotedMutation = gql`
  mutation setUpvotedPost(
    $upvotePost_id: Int
    $upvotePost_title: String
    $upvotePost_votes: Int
    $upvotePost___typename: String
    $upvotePost_author_lastName: String
    $upvotePost_author__typename: String
  ) {
    setUpvotedPost(id: $id, title: $title, votes: $votes, author: $author, __typename: $__typename)
      @client
  }
`

export const getUpvotedPost = gql`
  {
    upvotedPost @client {
      id
      title
      votes
      author {
        lastName
      }
    }
  }
`
