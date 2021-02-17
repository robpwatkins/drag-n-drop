import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;

export default function Column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <TaskList>Tasks go here</TaskList>
    </Container>
  );
}