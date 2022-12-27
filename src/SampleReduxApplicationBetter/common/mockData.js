const friends = [
    {
        name : 'Cillian Murphy', age : 47
    },
    {
        name : 'Tom Hardy', age : 42
    },
    {
        name : 'Tom Cruise', age : 50
    },
    {
        name : 'Tom Jeffrey Hanks', age : 60
    },
];

const timelines = [
    {
        desc : '나는 리액트를 잘하고 싶다', likes : 0 
    },
    {
        desc : '나는 리액트 네이티브도 해보고 싶다', likes : 10 
    },
    {
        desc : '나는 프로그래밍을 잘 하고 싶다', likes : 100 
    },
    {
        desc : '나는 일단 열심히 하자', likes : 20
    },
];

function makeDataGenerator(items) {
    let itemIndex = 0;
    return function getNextData() {
        const item = items[itemIndex % items.length];
        itemIndex += 1;
        return {...item, id : itemIndex};
    }
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);