import { gql } from "@apollo/client";

const AUTHENTICATE_USER = gql`
mutation($email: String!, $password: String!) {
    authenticateUserWithPassword(
        email: $email,
        password: $password
        ) {
        token, item { id, name }
    }
}`;

export default AUTHENTICATE_USER;