import { createSelector } from 'reselect';

const selectForumTopic = (state) => state.forumTopic;
const selectQueries = (state) => state.queries;

export const selectFilteredQueries = createSelector(
  [selectForumTopic, selectQueries],
  (forumTopic, queries) => {
    console.log(queries);
    if (!forumTopic || forumTopic === ' ') {
      return queries;
    } else {
      return queries?.filter((query) => query?.forumTopic === forumTopic);
    }
  }
);
