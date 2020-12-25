import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};







/** 'CafeEntry' input values */
export type CafeEntryInput = {
  name: Scalars['String'];
  location: Scalars['String'];
};


/** 'GuestbookEntry' input values */
export type GuestbookEntryInput = {
  twitter_handle: Scalars['String'];
  story: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Update an existing document in the collection of 'GuestbookEntry' */
  updateGuestbookEntry?: Maybe<GuestbookEntry>;
  /** Delete an existing document in the collection of 'GuestbookEntry' */
  deleteGuestbookEntry?: Maybe<GuestbookEntry>;
  /** Delete an existing document in the collection of 'CafeEntry' */
  deleteCafeEntry?: Maybe<CafeEntry>;
  /** Update an existing document in the collection of 'CafeEntry' */
  updateCafeEntry?: Maybe<CafeEntry>;
  /** Create a new document in the collection of 'CafeEntry' */
  createCafeEntry: CafeEntry;
  /** Create a new document in the collection of 'GuestbookEntry' */
  createGuestbookEntry: GuestbookEntry;
};


export type MutationUpdateGuestbookEntryArgs = {
  id: Scalars['ID'];
  data: GuestbookEntryInput;
};


export type MutationDeleteGuestbookEntryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCafeEntryArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCafeEntryArgs = {
  id: Scalars['ID'];
  data: CafeEntryInput;
};


export type MutationCreateCafeEntryArgs = {
  data: CafeEntryInput;
};


export type MutationCreateGuestbookEntryArgs = {
  data: GuestbookEntryInput;
};


export type CafeEntry = {
  __typename?: 'CafeEntry';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
  location: Scalars['String'];
};

/** The pagination object for elements of type 'CafeEntry'. */
export type CafeEntryPage = {
  __typename?: 'CafeEntryPage';
  /** The elements of type 'CafeEntry' in this page. */
  data: Array<Maybe<CafeEntry>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type GuestbookEntry = {
  __typename?: 'GuestbookEntry';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  twitter_handle: Scalars['String'];
  story: Scalars['String'];
};

/** The pagination object for elements of type 'GuestbookEntry'. */
export type GuestbookEntryPage = {
  __typename?: 'GuestbookEntryPage';
  /** The elements of type 'GuestbookEntry' in this page. */
  data: Array<Maybe<GuestbookEntry>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'CafeEntry' by its id. */
  findCafeEntryByID?: Maybe<CafeEntry>;
  /** Find a document from the collection of 'GuestbookEntry' by its id. */
  findGuestbookEntryByID?: Maybe<GuestbookEntry>;
  cafes: CafeEntryPage;
  entries: GuestbookEntryPage;
};


export type QueryFindCafeEntryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindGuestbookEntryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCafesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryEntriesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type SelectCafesQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectCafesQuery = (
  { __typename?: 'Query' }
  & { cafes: (
    { __typename?: 'CafeEntryPage' }
    & { data: Array<Maybe<(
      { __typename?: 'CafeEntry' }
      & Pick<CafeEntry, 'name'>
    )>> }
  ) }
);

export type FindCafeEntryByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindCafeEntryByIdQuery = (
  { __typename?: 'Query' }
  & { findCafeEntryByID?: Maybe<(
    { __typename?: 'CafeEntry' }
    & Pick<CafeEntry, '_id' | '_ts' | 'name' | 'location'>
  )> }
);


export const SelectCafesDocument = gql`
    query selectCafes {
  cafes {
    data {
      name
    }
  }
}
    `;

/**
 * __useSelectCafesQuery__
 *
 * To run a query within a React component, call `useSelectCafesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectCafesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectCafesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectCafesQuery(baseOptions?: Apollo.QueryHookOptions<SelectCafesQuery, SelectCafesQueryVariables>) {
        return Apollo.useQuery<SelectCafesQuery, SelectCafesQueryVariables>(SelectCafesDocument, baseOptions);
      }
export function useSelectCafesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectCafesQuery, SelectCafesQueryVariables>) {
          return Apollo.useLazyQuery<SelectCafesQuery, SelectCafesQueryVariables>(SelectCafesDocument, baseOptions);
        }
export type SelectCafesQueryHookResult = ReturnType<typeof useSelectCafesQuery>;
export type SelectCafesLazyQueryHookResult = ReturnType<typeof useSelectCafesLazyQuery>;
export type SelectCafesQueryResult = Apollo.QueryResult<SelectCafesQuery, SelectCafesQueryVariables>;
export const FindCafeEntryByIdDocument = gql`
    query findCafeEntryByID($id: ID!) {
  findCafeEntryByID(id: $id) {
    _id
    _ts
    name
    location
  }
}
    `;

/**
 * __useFindCafeEntryByIdQuery__
 *
 * To run a query within a React component, call `useFindCafeEntryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCafeEntryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCafeEntryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindCafeEntryByIdQuery(baseOptions: Apollo.QueryHookOptions<FindCafeEntryByIdQuery, FindCafeEntryByIdQueryVariables>) {
        return Apollo.useQuery<FindCafeEntryByIdQuery, FindCafeEntryByIdQueryVariables>(FindCafeEntryByIdDocument, baseOptions);
      }
export function useFindCafeEntryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCafeEntryByIdQuery, FindCafeEntryByIdQueryVariables>) {
          return Apollo.useLazyQuery<FindCafeEntryByIdQuery, FindCafeEntryByIdQueryVariables>(FindCafeEntryByIdDocument, baseOptions);
        }
export type FindCafeEntryByIdQueryHookResult = ReturnType<typeof useFindCafeEntryByIdQuery>;
export type FindCafeEntryByIdLazyQueryHookResult = ReturnType<typeof useFindCafeEntryByIdLazyQuery>;
export type FindCafeEntryByIdQueryResult = Apollo.QueryResult<FindCafeEntryByIdQuery, FindCafeEntryByIdQueryVariables>;