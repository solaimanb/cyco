import { createSlice } from '@reduxjs/toolkit';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { saveCommentToDB } from '../../../pages/dashBoard/user/forum/actions/queryActions';

const queriesSlice = createSlice({
  name: 'queries',
  initialState: [],
  reducers: {
    addQuery: (state, action) => {
      state.push(action.payload);
    },
    addCommentToQuery: (state, action) => {
      const { queryId, comment } = action.payload;

      const queryToUpdate = state.find((query) => query._id === queryId);

      if (queryToUpdate) {
        if (!queryToUpdate.comments) {
          queryToUpdate.comments = [];
        }
        queryToUpdate.comments.push(comment);
      }
    },
    incrementQueryView: (state, action) => {
      const { queryId } = action.payload;
      const queryToUpdate = state.find((query) => query._id === queryId);
      if (queryToUpdate) {
        queryToUpdate.views += 1;
      }
    },
    updateQueryViewsInDB: (state, action) => {
      const { queryId, updatedViews } = action.payload;
      const [axiosSecure] = useAxiosSecure();

      axiosSecure
        .put(`/forumQueries/${queryId}`, { views: updatedViews })
        .then((response) => {
          if (response.data.success) {
            //
          } else {
            //
          }
        })
        .catch((error) => {
          console.error('Error updating query views in the database:', error);
        });
    },
    updateViewCount: (state, action) => {
      const { queryId, updatedViews } = action.payload;

      const queryToUpdate = state.find((query) => query._id === queryId);

      if (queryToUpdate) {
        queryToUpdate.views === updatedViews;
      }
    },
    updateVoteCount: (state, action) => {
      const { queryId, updatedVoteCount } = action.payload;
      const queryToUpdate = state.find((query) => query._id === queryId);

      if (queryToUpdate) {
        queryToUpdate.voteCount = updatedVoteCount;
      }
    },
    removeQueryObject: (state, action) => {
      return state.filter((object) => object._id !== action.payload);
    },
  },
});

export const {
  addQuery,
  addCommentToQuery,
  incrementQueryView,
  updateQueryViewsInDB,
  updateViewCount,
  updateVoteCount,
  removeQueryObject,
} = queriesSlice.actions;

export const addCommentToQueryAsync =
  (queryId, comment) => async (dispatch) => {
    try {
      console.log('Adding comment to query...');
      dispatch(addCommentToQuery({ queryId, comment }));

      const response = await saveCommentToDB(queryId, comment);
      console.log(response);

      if (!response.success) {
        console.log('Failed to save comment to the database.');
      }
    } catch (error) {
      console.log('Error adding comment:', error);
    }
  };

export default queriesSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const [axiosSecure] = useAxiosSecure();

// const queriesSlice = createSlice({
//   name: 'queries',
//   initialState: [],
//   reducers: {
//     addQuery: (state, action) => {
//       state.push(action.payload);
//     },
//     updateQueryViews: (state, action) => {
//       const { queryId, viewCount } = action.payload;
//       const queryToUpdate = state.find((query) => query?._id === queryId);

//       if (queryToUpdate) {
//         queryToUpdate.views = viewCount;
//       }
//     },
//     // incrementQueryView: (state, action) => {
//     //   const { queryId } = action.payload;
//     //   const queryToUpdate = state.find((query) => query._id === queryId);
//     //   if (queryToUpdate) {
//     //     queryToUpdate.views += 1;
//     //   }
//     // },
//     updateVoteCount: (state, action) => {
//       const { queryId, voteCount } = action.payload;
//       const queryToUpdate = state.find((query) => query._id === queryId);
//       if (queryToUpdate) {
//         queryToUpdate.voteCount = voteCount;
//       }
//     },
//     updateQueryViewsInDB: (state, action) => {
//       const { queryId, updatedViews } = action.payload;

//       axiosSecure
//         .put(`/forumQueries/${queryId}`, { views: updatedViews })
//         .then((response) => {
//           if (response.data.success) {
//             //
//           } else {
//             //
//           }
//         })
//         .catch((error) => {
//           console.error('Error updating query views in the database:', error);
//         });
//     },
//   },
// });

// export const {
//   addQuery,
//   updateQueryViews,
//   incrementQueryView,
//   updateVoteCount,
//   updateQueryViewsInDB,
// } = queriesSlice.actions;
// export default queriesSlice.reducer;

// ---------------------------

// updateQueryViews: (state, action) => {
//   const { queryId, viewCount } = action.payload;
//   const queryToUpdate = state.find((query) => query?._id === queryId);

//   if (queryToUpdate) {
//     queryToUpdate.views = viewCount;
//   }
// },
// incrementQueryView: (state, action) => {
//   const { queryId } = action.payload;
//   const queryToUpdate = state.find((query) => query._id === queryId);
//   if (queryToUpdate) {
//     queryToUpdate.views += 1;
//   }
// },
// updateVoteCount: (state, action) => {
//   const { queryId, voteCount } = action.payload;
//   const queryToUpdate = state.find((query) => query._id === queryId);
//   if (queryToUpdate) {
//     queryToUpdate.voteCount = voteCount;
//   }
// },
