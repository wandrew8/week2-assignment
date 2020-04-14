import React from 'react';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import '../App.scss';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarked: true,
        }
        this.addBookmark = this.addBookmark.bind(this)
    }
    
    addBookmark() {
        this.setState({ bookmarked: !this.state.bookmarked })
    }

    render() {
        const { name, image, isMediumMember } = this.props.data.author;
        const { postedDate, minutesToRead } = this.props.data;

        return (
            <div className="author">
                <img className={ isMediumMember ? 'member' : '' }src={image} alt={name} />
                <div className="container">
                    <div className="name">
                        <p>{name}</p>
                        <div className="date">{moment(new Date(postedDate)).format("MMM Do")}<span className="dot"></span> {minutesToRead} min read</div>
                    </div>
                    <div onClick={this.addBookmark}> 
                        {this.state.bookmarked ? <i className="far fa-bookmark"></i> : <i className="fas fa-bookmark bookMarked" ></i>}
                    </div>
                </div>
            </div>
        )
    }
};

Author.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    isMediumMember: PropTypes.bool,
    postedDate: PropTypes.instanceOf(Date),
    minutesToRead: PropTypes.number
}

export default Author;