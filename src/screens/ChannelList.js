import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.listBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const ItemDescription = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.listDescription};
`;

const ItemTime = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.listTime};
`;

const channels = [];
for (let index = 0; index < 1000; index++) {
  channels.push({
    id: index,
    title: `title ${index}`,
    description: `description ${index}`,
    createAt: index,
  });
}

const Item = ({ item: { id, title, description, createAt }, onPress }) => {
  const { theme } = useContext(ThemeContext);
  console.log(`Item: ${id}`);

  return (
    <ItemContainer onPress={() => onPress({ id, title })}>
      <ItemTextContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemTextContainer>
      <ItemTime>{createAt}</ItemTime>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color={theme?.listIcon}
      />
    </ItemContainer>
  );
};

const ChannelList = ({ navigation }) => {
  const handleItemPress = params => {
    console.log(params);
  };

  return (
    <Container>
      <FlatList
        keyExtractor={item => item['id'].toString()}
        data={channels}
        renderItem={({ item }) => (
          <Item item={item} onPress={handleItemPress} />
        )}
        windowSize={3}
      />
    </Container>
  );
};

export default ChannelList;
