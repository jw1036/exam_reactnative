import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {RootStackParamList} from './types';
import {useQuery, useQueryClient, useMutation} from 'react-query';
import {getArticle} from '../api/articles';
import {deleteComment, getComments} from '../api/comments';
import ArticleView from '../components/ArticleView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommentItem from '../components/CommentItem';
import {useUserState} from '../contexts/UserContext';
import CommentInput from '../components/CommentInput';
import AskDialog from '../components/AskDialog';
import {Comment} from '../api/types';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
    null,
  );
  const [askRemoveComment, setAskRemoveComment] = useState(false);
  const queryClient = useQueryClient();
  const {mutate: remove} = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.setQueryData<Comment[]>(['comments', id], comments =>
        comments ? comments.filter(c => c.id !== selectedCommentId) : [],
      );
    },
  });
  const onRemove = (commentId: number) => {
    setSelectedCommentId(commentId);
    setAskRemoveComment(true);
  };
  const onConfirmRemove = () => {
    setAskRemoveComment(false);
    remove({id: selectedCommentId!, articleId: id});
  };
  const onCancelRemove = () => {
    setAskRemoveComment(false);
  };

  const onModify = (commentId: number) => {
    // TODO: 구현 예정
    console.log(commentId);
  };

  const {params} = useRoute<ArticleScreenRouteProp>();
  const {id} = params;
  const [currentUser] = useUserState();

  const articleQuery = useQuery(['article', id], () => getArticle(id));
  const commentsQuery = useQuery(['comments', id], () => getComments(id));

  const {bottom} = useSafeAreaInsets();

  if (!articleQuery.data || !commentsQuery.data) {
    return (
      <ActivityIndicator size="large" style={styles.spinner} color="black" />
    );
  }

  const {title, body, published_at, user} = articleQuery.data;
  const isMyArticle = currentUser?.id === user.id;

  return (
    <>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={[
          styles.flatListContent,
          {paddingBottom: bottom},
        ]}
        data={commentsQuery.data}
        renderItem={({item}) => (
          <CommentItem
            id={item.id}
            message={item.message}
            publishedAt={item.published_at}
            username={item.user.username}
            onRemove={onRemove}
            onModify={onModify}
            isMyComment={item.user.id === currentUser?.id}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <>
            <ArticleView
              title={title}
              body={body}
              publishedAt={published_at}
              username={user.username}
              id={id}
              isMyArticle={isMyArticle}
            />
            <CommentInput articleId={id} />
          </>
        }
      />
      <AskDialog
        visible={askRemoveComment}
        title="댓글 삭제"
        message="댓글을 삭제하시겠습니까?"
        isDestructive
        confirmText="삭제"
        onConfirm={onConfirmRemove}
        onClose={onCancelRemove}
      />
    </>
  );
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
});

export default ArticleScreen;
