import React from 'react'
import TopicsBoardItem from "../TopicsBoardItem/TopicsBoardItem";
import Header from '../Header/Header'

const TopicsBoard = () => {
    return (
        <div>
            <h4>Topics</h4>
                <TopicsBoardItem/>
            <h4>Other topics</h4>
        </div>
    )
}

export default TopicsBoard;
