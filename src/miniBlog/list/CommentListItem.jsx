import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding : 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 8px;
  border : 1px solid grey;
  cursor : pointer;
  background: white;
  :hover {
    background: lightgray;
  }
`;

const ContentText = styled.p`
  font-size: 14px;
`;

function CommentListItem(props) {
    const {comment} = props;

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}


export default CommentListItem;