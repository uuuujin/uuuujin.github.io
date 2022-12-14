import React from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Container = styled.div`
  width: 100%;
  max-width: 720px;
  
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function MainPage(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <MainTitleText>uuuujin 미니 블로그~~~~</MainTitleText>
            <Container>

                <Button
                    title="글 작성"
                    onClick={() => {
                        navigate("/blog/post-write");
                    }}
                />

                <PostList
                    post={data}
                    onClickItem={(item) => {
                        navigate(`/blog/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
