/**
 * Created by sjin on 2017/4/22.
 */
import React, { PropTypes } from 'react';
import './iconfont';

const Emoji = ({type}) => {
    const useTag = `<use xlink:href=${'#icon-' + type} />`;
    return (
        <i className="emoji">
            <svg className="emoji" dangerouslySetInnerHTML={{__html: useTag }} />
            <style>{`
            .emoji {
                display: inline-block;
                overflow: hidden;
            }
            .emoji svg {
                width: 3em;
                height: 3em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }
        `}</style>
        </i>

    );
};

Emoji.propTypes = {
    type: PropTypes.string.isRequired
};

export default Emoji;