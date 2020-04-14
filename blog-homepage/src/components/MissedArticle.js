import React from 'react';
import Author from '../components/Author';
import { PropTypes } from 'prop-types';
import '../App.scss';

class MissedArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { image, title, description, memberPreview, link } = this.props.data;
        return (
            <div className="article">
                <img className="image" src={image} alt={title} />
                <div className="content">
                    <a href={link} target="_blank">
                        {memberPreview ? <p className="preview"><i className="fas fa-star"></i>Member preview</p> : <div></div>}
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </a>
                    <Author data={this.props.data} />
                </div>
            </div>
        )
    }
}

MissedArticle.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    memberPreview: PropTypes.bool,
    link: PropTypes.string
}

export default MissedArticle;