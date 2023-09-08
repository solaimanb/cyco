import { createSelector } from 'reselect';

const selectForum = (state) => state.forumTopic;
const selectQueries = (state) => state.queries;

export const selectFilteredQueries = createSelector(
  [selectForum, selectQueries],
  (forumTopic, queries) => {
    if (!forumTopic || forumTopic === ' ') {
      return queries;
    } else {
      return queries.filter((query) => query.forumTopic === forumTopic);
    }
  }
);
