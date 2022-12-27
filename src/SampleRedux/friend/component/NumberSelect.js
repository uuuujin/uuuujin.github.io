import React from "react";

export default function NumberSelect( { value, options, postfix, onChange}) {
    return (
        <div>
            <select
                onChange={e => {
                    const value = Number(e.currentTarget.value);
                    onChange(value);
                }}
                value={value}
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {postfix}
        </div>
    );
}


/*
* value : 현재 선택 된 값
* options : 전체 옵션을 보여줌
* postfix : 끝에 설명하는 문구를 조금 넣어 줌.
* onChange : 옵션이 변경됐을떄 알려주는 이벤트 핸들러 
* */