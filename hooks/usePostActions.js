import {useState} from 'react';
import {ActionSheetIOS, Platform} from 'react-native';

export default function usePostActions() {
  const [isSelecting, setIsSelecting] = useState(false);

  const edit = () => {
    console.log('TODO: edit');
  };
  const remove = () => {
    console.log('TODO: remove');
  };

  const onPressMore = () => {
    if (Platform.OS === 'android' || true) {
      setIsSelecting(true);
    } else {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['설명 수정', '게시물 삭제', '취소'],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 2,
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            edit();
          } else if (buttonIndex === 1) {
            remove();
          }
        },
      );
    }
  };

  const actions = [
    {
      icon: 'edit',
      text: '설명 수정',
      onPress: edit,
    },
    {
      icon: 'delete',
      text: '게시물 삭제',
      onPress: remove,
    },
  ];

  const onClose = () => {
    setIsSelecting(false);
  };

  return {
    isSelecting,
    onPressMore,
    onClose,
    actions,
  };
}
