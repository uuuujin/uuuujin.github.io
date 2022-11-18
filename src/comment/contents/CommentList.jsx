import React from "react";
import Comment from './Comment';

const comments = [
    {
        name: '아프리카 청춘이다',
        comment : '1등',
    },
    {
        name: '닮은살걀',
        comment : '2등',
    },
    {
        name: '티끌모아파산',
        comment : '댓글',
    },
    {
        name: '카드값줘체리',
        comment : '4등',
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}

        </div>
    )
}

export default CommentList;