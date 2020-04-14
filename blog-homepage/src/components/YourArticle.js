import React from 'react';
import Author from '../components/Author';
import { PropTypes } from 'prop-types';
import '../App.scss';

class YourArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { title, description, image, link, hasAudioAvailable, memberPreview } = this.props.data;

        return (
            <div className="article">
                <img className="image" src={image} alt={title} />
                <div className="sideContainer">
                    <div className="content">
                        <a target="_blank" href={link}>
                            <div className="extra">
                                {hasAudioAvailable ? <p className="audio"><i className="fas fa-volume-up"></i>Audio Available</p> : <div></div>}
                                {memberPreview ? <i className="fas fa-star"></i> : ''}
                            </div>
                            <h2>{this.props.data.title}</h2>
                            <p>{description}</p>
                        </a>
                    </div>
                    <Author data={this.props.data} />
                </div>
            </div>
        )
    }
}

YourArticle.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    hasAudioAvailable: PropTypes.bool,
    memberPreview: PropTypes.bool,
}



export default YourArticle;